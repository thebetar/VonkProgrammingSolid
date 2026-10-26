/* global console, fetch, process */
import { readFileSync } from 'node:fs';

function readSeverity() {
    const severity = process.argv[2];
    if (severity !== 'high' && severity !== 'critical') {
        console.error('Usage: notify-npm-audit.mjs <high|critical>');
        process.exit(1);
    }
    return severity;
}

function loadReport() {
    return JSON.parse(readFileSync(process.env.AUDIT_REPORT, 'utf8'));
}

function selectPackages(report, severity) {
    return Object.values(report.vulnerabilities ?? {})
        .filter((pkg) => pkg.severity === severity)
        .sort((a, b) => a.name.localeCompare(b.name));
}

function buildMessage(packages, severity) {
    const repo = process.env.GITHUB_REPOSITORY ?? 'this repository';
    const lines = [`${packages.length} ${severity} vulnerabilities in ${repo}`, ''];

    for (const pkg of packages) {
        lines.push(pkg.name);
        for (const via of pkg.via ?? []) {
            if (typeof via === 'string') {
                lines.push(`- via ${via}`);
            } else if (via && via.severity === severity && via.title) {
                lines.push(`- ${via.title}`);
                if (via.url) {
                    lines.push(`  ${via.url}`);
                }
            }
        }
        lines.push('');
    }

    if (process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID) {
        const server = process.env.GITHUB_SERVER_URL ?? 'https://github.com';
        lines.push(`${server}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`);
    }

    return lines.join('\n').trim().slice(0, 4000);
}

async function sendTelegram(text) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
        console.error('Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.');
        process.exit(1);
    }

    let response;
    try {
        response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            redirect: 'error',
            body: JSON.stringify({
                chat_id: chatId,
                text,
                disable_web_page_preview: true,
            }),
        });
    } catch {
        console.error('Telegram request failed.');
        process.exit(1);
    }

    if (!response.ok) {
        console.error(`Telegram API ${response.status}: ${(await response.text()).slice(0, 500)}`);
        process.exit(1);
    }
}

async function main() {
    const severity = readSeverity();
    const packages = selectPackages(loadReport(), severity);
    if (packages.length === 0) {
        console.log(`No ${severity} vulnerabilities.`);
        process.exit(0);
    }

    const text = buildMessage(packages, severity);
    console.log(text);
    await sendTelegram(text);
    process.exit(1);
}

main();
