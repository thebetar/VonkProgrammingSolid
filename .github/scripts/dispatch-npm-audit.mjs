/* global AbortSignal, Buffer, console, fetch, process */
import { createHash } from 'node:crypto';
import { readFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const AGENT_ID_PATTERN = /^bc-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const CURSOR_AGENTS_URL = 'https://api.cursor.com/v1/agents';

function readSeverity() {
    const severity = process.argv[2];
    const allowed = ['critical', 'high', 'moderate', 'low'];
    if (!allowed.includes(severity)) {
        console.error('Usage: dispatch-npm-audit.mjs <critical|high|moderate|low>');
        process.exitCode = 1;
        return '';
    }
    return severity;
}

function loadReport() {
    return JSON.parse(readFileSync(process.env.AUDIT_REPORT, 'utf8'));
}

export function advisories(pkg) {
    return (pkg.via ?? []).filter((via) => via && typeof via === 'object');
}

export function advisoryId(via) {
    if (via.url) return String(via.url);
    if (via.source != null) return String(via.source);
    if (via.title) return String(via.title);
    return 'unknown';
}

export function selectPackages(report, severity) {
    return Object.values(report.vulnerabilities ?? {})
        .filter((pkg) => pkg.severity === severity && advisories(pkg).length > 0)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export function findingKey(pkg, repository) {
    const ids = [...new Set(advisories(pkg).map(advisoryId))].sort();
    return [repository, pkg.name, ...ids].join('\n');
}

export function agentIdFor(key) {
    const bytes = Uint8Array.from(createHash('sha256').update(key).digest().subarray(0, 16));
    bytes[6] = (bytes[6] & 0x0f) | 0x50;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Buffer.from(bytes).toString('hex');
    const agentId = `bc-${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    if (!AGENT_ID_PATTERN.test(agentId)) {
        throw new Error('Generated agent id is not a Cursor agent id.');
    }
    return agentId;
}

export function agentName(pkg) {
    return `Fix ${pkg.severity} npm audit: ${pkg.name}`.slice(0, 100);
}

function describeFix(pkg) {
    const fix = pkg.fixAvailable;
    if (fix && typeof fix === 'object' && fix.name && fix.version) {
        const major = fix.isSemVerMajor ? ' This is a semver major update.' : '';
        return `npm audit reports a fix by updating ${fix.name} to ${fix.version}.${major}`;
    }
    if (fix === true) {
        return 'npm audit reports a non-major fix is available.';
    }
    return 'npm audit does not report an automatic fix. Use the smallest package.json override or upgrade that clears the advisories. This repository already uses the overrides field for transitive fixes.';
}

export function buildPrompt(pkg, repoUrl) {
    const lines = [
        `Update ${repoUrl} so this npm audit finding is resolved. Commit only that dependency update.`,
        'Cursor opens the pull request when the run finishes. Do not open a pull request yourself.',
        '',
        `Package: ${pkg.name}`,
        `Severity: ${pkg.severity}`,
        `Vulnerable range: ${pkg.range ?? 'unknown'}`,
        `Direct dependency: ${pkg.isDirect ? 'yes' : 'no'}`,
        describeFix(pkg),
        '',
        'Advisories:',
    ];

    for (const via of advisories(pkg)) {
        const title = via.title ?? via.name ?? pkg.name;
        lines.push(via.url ? `- ${title} (${via.url})` : `- ${title}`);
        if (via.range) lines.push(`  range ${via.range}`);
    }

    const nodes = pkg.nodes ?? [];
    if (nodes.length > 0) {
        lines.push('', 'Installed at:');
        for (const node of nodes) lines.push(`- ${node}`);
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

export function cursorRequest(pkg, env) {
    if (!env.CURSOR_API_KEY) return { error: 'Set CURSOR_API_KEY.' };
    if (!env.GITHUB_REPOSITORY) return { error: 'Set GITHUB_REPOSITORY.' };

    const server = env.GITHUB_SERVER_URL ?? 'https://github.com';
    const repoUrl = `${server}/${env.GITHUB_REPOSITORY}`;
    const agentId = agentIdFor(findingKey(pkg, env.GITHUB_REPOSITORY));
    const body = {
        prompt: { text: buildPrompt(pkg, repoUrl) },
        name: agentName(pkg),
        agentId,
        repos: [{ url: repoUrl, startingRef: env.GITHUB_REF_NAME || 'master' }],
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

export async function dispatchFinding(pkg, env, fetchImpl) {
    const request = cursorRequest(pkg, env);
    if (request.error) return { status: 'failed', detail: request.error };

    let response;
    try {
        response = await fetchImpl(request.url, request.init);
    } catch {
        return { status: 'failed', agentId: request.agentId, detail: 'Cursor request failed.' };
    }

    if (response.status === 409) {
        const error = await readError(response);
        if (error.code === 'agent_id_conflict') {
            return { status: 'duplicate', agentId: request.agentId };
        }
        return { status: 'failed', agentId: request.agentId, detail: `Cursor API 409: ${error.text}` };
    }

    if (!response.ok) {
        const error = await readError(response);
        return {
            status: 'failed',
            agentId: request.agentId,
            detail: `Cursor API ${response.status}: ${error.text}`,
        };
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

export async function dispatchReport(report, severity, env, fetchImpl, log = console) {
    const packages = selectPackages(report, severity);
    if (packages.length === 0) {
        log.log(`No ${severity} vulnerabilities.`);
        return { created: 0, duplicate: 0, failed: 0 };
    }

    let created = 0;
    let duplicate = 0;
    let failed = 0;
    for (const pkg of packages) {
        const result = await dispatchFinding(pkg, env, fetchImpl);
        if (result.status === 'created') {
            created += 1;
            log.log(`Sent ${pkg.name} to Cursor: ${result.url ?? result.agentId}`);
        } else if (result.status === 'duplicate') {
            duplicate += 1;
            log.log(`Already sent ${pkg.name} (${result.agentId}).`);
        } else {
            failed += 1;
            log.error(`Failed to send ${pkg.name}: ${result.detail}`);
        }
    }

    log.log(`Cursor dispatch: ${created} sent, ${duplicate} already sent, ${failed} failed.`);
    return { created, duplicate, failed };
}

export function exitCodeFor(result) {
    return result.created > 0 || result.failed > 0 ? 1 : 0;
}

async function main() {
    const severity = readSeverity();
    if (!severity) return;

    const result = await dispatchReport(loadReport(), severity, process.env, fetch);
    process.exitCode = exitCodeFor(result);
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
