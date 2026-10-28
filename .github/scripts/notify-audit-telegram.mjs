/* global AbortSignal, console, fetch, process */
import { readFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const SEVERITIES = ['critical', 'high', 'moderate', 'low'];

export function loadAudit(path) {
    const stored = JSON.parse(readFileSync(path, 'utf8'));
    if (!Array.isArray(stored.findings)) throw new Error('Audit results must contain a findings array.');
    return { repository: stored.repository ?? {}, findings: stored.findings };
}

function findingsFor(audit, severity) {
    return audit.findings
        .filter((finding) => finding.severity === severity)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export function buildMessage(audit) {
    const repo = audit.repository?.repository ?? 'this repository';
    const counts = SEVERITIES
        .map((severity) => {
            const count = findingsFor(audit, severity).length;
            return count === 0 ? '' : `${count} ${severity}`;
        })
        .filter(Boolean);
    const lines = [`${counts.join(', ')} vulnerabilities in ${repo}`, ''];

    for (const severity of SEVERITIES) {
        const findings = findingsFor(audit, severity);
        if (findings.length === 0) continue;
        lines.push(severity);
        for (const finding of findings) {
            lines.push(finding.name);
            for (const advisory of finding.advisories ?? []) {
                lines.push(`- ${advisory.title ?? finding.name}`);
                if (advisory.url) lines.push(`  ${advisory.url}`);
            }
            lines.push('');
        }
    }

    if (audit.repository?.runUrl) lines.push(audit.repository.runUrl);
    return lines.join('\n').trim().slice(0, 4000);
}

export function telegramRequest(text, env) {
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
        return { error: 'Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.' };
    }

    return {
        url: `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        init: {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            redirect: 'error',
            body: JSON.stringify({
                chat_id: env.TELEGRAM_CHAT_ID,
                text,
                disable_web_page_preview: true,
            }),
            signal: AbortSignal.timeout(30_000),
        },
    };
}

export async function notifyTelegram(audit, env, fetchImpl, log = console) {
    const repo = audit.repository?.repository ?? 'this repository';
    if (audit.findings.length === 0) {
        log.log(`No findings to send for ${repo}.`);
        return { status: 'empty' };
    }

    const text = buildMessage(audit);
    log.log(text);
    const request = telegramRequest(text, env);
    if (request.error) return { status: 'failed', detail: request.error };

    let response;
    try {
        response = await fetchImpl(request.url, request.init);
    } catch {
        return { status: 'failed', detail: 'Telegram request failed.' };
    }

    if (!response.ok) {
        const body = (await response.text()).slice(0, 500);
        return { status: 'failed', detail: `Telegram API ${response.status}: ${body}` };
    }
    log.log('Telegram accepted the message.');
    return { status: 'sent' };
}

export function exitCodeFor(result) {
    return result.status === 'failed' ? 1 : 0;
}

async function main() {
    const input = process.argv[2];
    if (!input) {
        console.error('Usage: notify-audit-telegram.mjs <audit-findings.json>');
        process.exitCode = 1;
        return;
    }

    console.log(`Reading ${input}.`);
    const result = await notifyTelegram(loadAudit(input), process.env, fetch);
    if (result.detail) console.error(result.detail);
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
        console.error(error instanceof Error ? error.message : 'Audit notification failed.');
        process.exitCode = 1;
    });
}
