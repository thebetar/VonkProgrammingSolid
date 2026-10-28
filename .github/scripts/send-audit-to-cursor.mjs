/* global AbortSignal, Buffer, console, fetch, process */
import { createHash } from 'node:crypto';
import { readFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const AGENT_ID_PATTERN = /^bc-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const CURSOR_AGENTS_URL = 'https://api.cursor.com/v1/agents';

export function loadAudit(path) {
    const stored = JSON.parse(readFileSync(path, 'utf8'));
    const repository = stored.repository;
    if (!repository?.repository || !repository?.url || !repository?.ref) {
        throw new Error('Audit results are missing the repository from GitHub Actions.');
    }
    if (!Array.isArray(stored.findings)) throw new Error('Audit results must contain a findings array.');
    return { repository, findings: stored.findings };
}

export function findingKey(finding, repository) {
    const ids = [...new Set((finding.advisories ?? []).map((advisory) => advisory.id))].sort();
    return [repository, finding.name, ...ids].join('\n');
}

export function agentIdFor(key) {
    const bytes = Uint8Array.from(createHash('sha256').update(key).digest().subarray(0, 16));
    bytes[6] = (bytes[6] & 0x0f) | 0x50;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Buffer.from(bytes).toString('hex');
    const agentId = `bc-${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    if (!AGENT_ID_PATTERN.test(agentId)) throw new Error('Generated agent id is not a Cursor agent id.');
    return agentId;
}

export function agentName(finding) {
    return `Fix ${finding.severity} npm audit: ${finding.name}`.slice(0, 100);
}

function describeFix(finding) {
    const fix = finding.fixAvailable;
    if (fix && typeof fix === 'object' && fix.name && fix.version) {
        const major = fix.isSemVerMajor ? ' This is a semver major update.' : '';
        return `npm audit reports a fix by updating ${fix.name} to ${fix.version}.${major}`;
    }
    if (fix === true) return 'npm audit reports a non-major fix is available.';
    return 'npm audit does not report an automatic fix. Use the smallest package.json override or upgrade that clears the advisories. This repository already uses the overrides field for transitive fixes.';
}

export function buildPrompt(finding, repository) {
    const lines = [
        `Update ${repository.url} so this npm audit finding is resolved. Commit only that dependency update.`,
        'Cursor opens the pull request when the run finishes. Do not open a pull request yourself.',
        '',
        `Repository: ${repository.url}`,
        `Branch: ${repository.ref}`,
    ];
    if (repository.sha) lines.push(`Audited commit: ${repository.sha}`);
    if (repository.runUrl) lines.push(`Audit run: ${repository.runUrl}`);
    lines.push(
        '',
        `Package: ${finding.name}`,
        `Severity: ${finding.severity}`,
        `Vulnerable range: ${finding.range ?? 'unknown'}`,
        `Direct dependency: ${finding.isDirect ? 'yes' : 'no'}`,
        describeFix(finding),
        '',
        'Advisories:',
    );

    for (const advisory of finding.advisories ?? []) {
        const title = advisory.title ?? finding.name;
        lines.push(advisory.url ? `- ${title} (${advisory.url})` : `- ${title}`);
        if (advisory.range) lines.push(`  range ${advisory.range}`);
    }

    if ((finding.nodes ?? []).length > 0) {
        lines.push('', 'Installed at:');
        for (const node of finding.nodes) lines.push(`- ${node}`);
    }

    lines.push(
        '',
        'Requirements:',
        '- Change only the dependency update required to clear these advisories.',
        '- Update package.json, package-lock.json, and pnpm-lock.yaml.',
        '- .npmrc sets min-release-age=7. Choose a fixed version that satisfies it when one exists.',
        '- Run npm audit and confirm this package no longer reports these advisories.',
        '- Leave unrelated files unchanged.',
        '- If no safe fix exists, make no code changes.',
    );

    return lines.join('\n');
}

export function cursorRequest(finding, repository, env) {
    if (!env.CURSOR_API_KEY) return { error: 'Set CURSOR_API_KEY.' };
    if (!repository?.repository || !repository?.url || !repository?.ref) {
        return { error: 'Audit results are missing the repository from GitHub Actions.' };
    }

    const agentId = agentIdFor(findingKey(finding, repository.repository));
    const body = {
        prompt: { text: buildPrompt(finding, repository) },
        name: agentName(finding),
        agentId,
        repos: [{ url: repository.url, startingRef: repository.ref }],
        autoCreatePR: true,
    };

    return {
        agentId,
        url: CURSOR_AGENTS_URL,
        init: {
            method: 'POST',
            headers: {
                authorization: `Basic ${Buffer.from(`${env.CURSOR_API_KEY}:`).toString('base64')}`,
                'content-type': 'application/json',
            },
            redirect: 'error',
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(30_000),
        },
    };
}

async function readError(response) {
    const raw = await response.text();
    const text = raw.slice(0, 500);
    try {
        const payload = JSON.parse(raw);
        const code = payload?.code
            ?? (typeof payload?.error === 'string' ? payload.error : payload?.error?.code)
            ?? '';
        return { code: typeof code === 'string' ? code : '', text };
    } catch {
        return { code: '', text };
    }
}

export async function dispatchFinding(finding, repository, env, fetchImpl) {
    const request = cursorRequest(finding, repository, env);
    if (request.error) return { status: 'failed', detail: request.error };

    let response;
    try {
        response = await fetchImpl(request.url, request.init);
    } catch {
        return { status: 'failed', agentId: request.agentId, detail: 'Cursor request failed.' };
    }

    if (response.status === 409) {
        const error = await readError(response);
        if (error.code === 'agent_id_conflict') return { status: 'duplicate', agentId: request.agentId };
        return { status: 'failed', agentId: request.agentId, detail: `Cursor API 409: ${error.text}` };
    }

    if (!response.ok) {
        const error = await readError(response);
        return { status: 'failed', agentId: request.agentId, detail: `Cursor API ${response.status}: ${error.text}` };
    }

    let url;
    try {
        const payload = await response.json();
        url = payload?.agent?.url;
    } catch {
        url = undefined;
    }
    return { status: 'created', agentId: request.agentId, url };
}

function findingLabel(finding) {
    const advisories = (finding.advisories ?? []).map((advisory) => advisory.url ?? advisory.id).join(', ');
    return `${finding.severity} ${finding.name}${advisories ? ` (${advisories})` : ''}`;
}

export async function sendFindings(audit, env, fetchImpl, log = console) {
    const findings = audit.findings ?? [];
    const repo = audit.repository;
    log.log(`Cursor: ${findings.length} finding(s) for ${repo?.url ?? 'unknown repository'}${repo?.ref ? `@${repo.ref}` : ''}.`);
    if (findings.length === 0) {
        log.log('Cursor: nothing to send.');
        return { created: 0, duplicate: 0, failed: 0 };
    }

    let created = 0;
    let duplicate = 0;
    let failed = 0;
    for (const finding of findings) {
        log.log(`Cursor: dispatch ${findingLabel(finding)}.`);
        const result = await dispatchFinding(finding, audit.repository, env, fetchImpl);
        if (result.status === 'created') {
            created += 1;
            log.log(`Cursor: created agent for ${finding.name}: ${result.url ?? result.agentId}.`);
        } else if (result.status === 'duplicate') {
            duplicate += 1;
            log.log(`Cursor: ${finding.name} was already sent as ${result.agentId}.`);
        } else {
            failed += 1;
            log.error(`Cursor: failed to send ${finding.name}: ${result.detail}`);
        }
    }

    log.log(`Cursor finished: ${created} sent, ${duplicate} already sent, ${failed} failed.`);
    return { created, duplicate, failed };
}

export function exitCodeFor(result) {
    return result.created > 0 || result.failed > 0 ? 1 : 0;
}

async function main() {
    const input = process.argv[2];
    if (!input) {
        console.error('Usage: send-audit-to-cursor.mjs <audit-findings.json>');
        process.exitCode = 1;
        return;
    }

    console.log(`Reading audit results from ${input}.`);
    const audit = loadAudit(input);
    const result = await sendFindings(audit, process.env, fetch);
    process.exitCode = exitCodeFor(result);
    if (result.created > 0) console.log('Cursor created a new agent, so this job fails.');
    if (result.failed > 0) console.log('A Cursor send failed, so this job fails.');
}

function isDirectRun() {
    const entry = process.argv[1];
    if (!entry) return false;
    try {
        return import.meta.url === pathToFileURL(realpathSync(entry)).href;
    } catch {
        return false;
    }
}

if (isDirectRun()) {
    main().catch((error) => {
        console.error(error instanceof Error ? error.message : 'Audit dispatch failed.');
        process.exitCode = 1;
    });
}
