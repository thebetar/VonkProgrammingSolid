/* global console, process */
import { spawnSync } from 'node:child_process';
import { writeFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

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

export function severitiesForHour(hour) {
    const selected = ['critical', 'high'];
    if (Number(hour) === 18) selected.push('moderate', 'low');
    return selected;
}

export function toFinding(pkg) {
    const byId = new Map();
    for (const via of advisories(pkg)) {
        const id = advisoryId(via);
        if (byId.has(id)) continue;
        const advisory = { id, title: via.title ?? via.name ?? pkg.name };
        if (via.url) advisory.url = String(via.url);
        if (via.range) advisory.range = via.range;
        byId.set(id, advisory);
    }

    return {
        name: pkg.name,
        severity: pkg.severity,
        range: pkg.range ?? null,
        isDirect: Boolean(pkg.isDirect),
        nodes: pkg.nodes ?? [],
        advisories: [...byId.values()].sort((a, b) => a.id.localeCompare(b.id)),
        fixAvailable: pkg.fixAvailable ?? false,
    };
}

export function collectFindings(report, hour) {
    return severitiesForHour(hour).flatMap((severity) => selectPackages(report, severity).map(toFinding));
}

export function findingsFromAuditOutput(stdout, status, hour) {
    if (status > 1) return { error: `npm audit failed with status ${status}.`, status };
    let report;
    try {
        report = JSON.parse(stdout);
    } catch {
        return { error: 'npm audit did not return JSON.', status: 1 };
    }
    return { findings: collectFindings(report, hour), status: 0 };
}

export function writeFindings(path, findings) {
    writeFileSync(path, `${JSON.stringify({ findings }, null, 2)}\n`);
}

function runNpmAudit() {
    const result = spawnSync('npm', ['audit', '--json'], {
        encoding: 'utf8',
        maxBuffer: 32 * 1024 * 1024,
    });
    if (result.error) return { status: 1, stdout: '', stderr: result.error.message };
    return {
        status: result.status ?? 1,
        stdout: result.stdout ?? '',
        stderr: result.stderr ?? '',
    };
}

function main() {
    const outPath = process.argv[2];
    if (!outPath) {
        console.error('Usage: audit-dependencies.mjs <output.json>');
        process.exitCode = 1;
        return;
    }

    const audit = runNpmAudit();
    const stored = findingsFromAuditOutput(audit.stdout, audit.status, new Date().getUTCHours());
    if (stored.error) {
        if (audit.stderr) process.stderr.write(audit.stderr);
        console.error(stored.error);
        process.exitCode = stored.status;
        return;
    }

    writeFindings(outPath, stored.findings);
    console.log(`Stored ${stored.findings.length} audit findings.`);
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

if (isDirectRun()) main();
