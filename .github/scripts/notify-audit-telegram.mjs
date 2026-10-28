/* global AbortSignal, console, fetch, process */
import { readFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const SEVERITIES = ['critical', 'high', 'moderate', 'low'];

export function loadAudit(path) {
    const stored = JSON.parse(readFileSync(path, 'utf8'));
    if (!Array.isArray(stored.findings)) throw new Error('Audit results must contain a findings array.');
    return { repository: stored.repository ?? {}, findings: stored.findings };
}

export function buildMessage(audit) {
    const findings = [...audit.findings].sort((a, b) => {
        const bySeverity = SEVERITIES.indexOf(a.severity) - SEVERITIES.indexOf(b.severity);
        if (bySeverity !== 0) return bySeverity;
        return a.name.localeCompare(b.name);
    });
    const counts = SEVERITIES.map((severity) => {
        const count = findings.filter((finding) => finding.severity === severity).length;
        return count === 0 ? '' : `${count} ${severity}`;
    }).filter(Boolean);
    const repo = audit.repository?.repository ?? 'this repository';
    const lines = [`${counts.join(', ')} vulnerabilities in ${repo}`, ''];

    let severity = '';
    for (const finding of findings) {
        if (finding.severity !== severity) {
            severity = finding.severity;
            lines.push(severity);
        }
        lines.push(finding.name);
        for (const advisory of finding.advisories ?? []) {
            lines.push(`- ${advisory.title ?? finding.name}`);
            if (advisory.url) lines.push(`  ${advisory.url}`);
        }
        lines.push('');
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
    log.log(`Telegram: ${audit.findings.length} finding(s) for ${repo}.`);
    if (audit.findings.length === 0) {
        log.log('Telegram: nothing to send.');
        return { status: 'empty' };
    }

    const text = buildMessage(audit);
    log.log(`Telegram message (${text.length} characters):`);
    log.log(text);
    const request = telegramRequest(text, env);
    if (request.error) {
        log.error(`Telegram: ${request.error}`);
        return { status: 'failed', detail: request.error };
    }

    log.log('Telegram: sending message.');
    let response;
    try {
        response = await fetchImpl(request.url, request.init);
    } catch {
        log.error('Telegram: request failed.');
        return { status: 'failed', detail: 'Telegram request failed.' };
    }

    if (!response.ok) {
        const body = (await response.text()).slice(0, 500);
        const detail = `Telegram API ${response.status}: ${body}`;
        log.error(`Telegram: ${detail}`);
        return { status: 'failed', detail };
    }
    log.log('Telegram: message accepted.');
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

    console.log(`Reading audit results from ${input}.`);
    const audit = loadAudit(input);
    const result = await notifyTelegram(audit, process.env, fetch);
    process.exitCode = exitCodeFor(result);
    console.log(`Telegram finished with status ${result.status}.`);
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
