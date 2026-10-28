/* global console, process */
import { spawnSync } from 'node:child_process';
import { writeFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function advisories(pkg) {
    return (pkg.via ?? []).filter((via) => via && typeof via === 'object');
}

export function advisoryId(via) {
    if (via.url) {
        return String(via.url);
    }
    if (via.source != null) {
        return String(via.source);
    }
    if (via.title) {
        return String(via.title);
    }
    return 'unknown';
}

export function selectPackages(report, severity) {
    return Object.values(report.vulnerabilities ?? {})
        .filter((pkg) => pkg.severity === severity && advisories(pkg).length > 0)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export function severitiesForHour(hour) {
    const selected = ['critical', 'high'];
    if (Number(hour) === 18) {
        selected.push('moderate', 'low');
    }
    return selected;
}

export function toFinding(pkg) {
    const byId = new Map();
    for (const via of advisories(pkg)) {
        const id = advisoryId(via);
        if (byId.has(id)) {
            continue;
        }
        const advisory = { id, title: via.title ?? via.name ?? pkg.name };
        if (via.url) {
            advisory.url = String(via.url);
        }
        if (via.range) {
            advisory.range = via.range;
        }
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

const ALL_SEVERITIES = ['critical', 'high', 'moderate', 'low'];

export function collectFindings(report, hour) {
    return severitiesForHour(hour).flatMap((severity) => selectPackages(report, severity).map(toFinding));
}

export function skippedPackages(report, hour) {
    const selected = new Set(severitiesForHour(hour));
    return Object.values(report.vulnerabilities ?? {})
        .filter((pkg) => !selected.has(pkg.severity) || advisories(pkg).length === 0)
        .map((pkg) => ({
            name: pkg.name,
            severity: pkg.severity,
            reason: advisories(pkg).length === 0 ? 'dependency effect' : 'outside this run',
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

export function findingsFromAuditOutput(stdout, status, hour) {
    if (status > 1) {
        return { error: `npm audit failed with status ${status}.`, status };
    }
    let report;
    try {
        report = JSON.parse(stdout);
    } catch {
        return { error: 'npm audit did not return JSON.', status: 1 };
    }
    return {
        findings: collectFindings(report, hour),
        skipped: skippedPackages(report, hour),
        status: 0,
    };
}

export function repositoryContext(env) {
    const server = env.GITHUB_SERVER_URL;
    const repository = env.GITHUB_REPOSITORY;
    const ref = env.GITHUB_REF_NAME;
    if (!server || !repository || !ref) {
        return { error: 'GitHub Actions did not provide GITHUB_SERVER_URL, GITHUB_REPOSITORY, and GITHUB_REF_NAME.' };
    }

    const url = `${server.replace(/\/$/, '')}/${repository}`;
    const context = { repository, url, ref };
    if (env.GITHUB_SHA) {
        context.sha = env.GITHUB_SHA;
    }
    if (env.GITHUB_RUN_ID) {
        context.runUrl = `${url}/actions/runs/${env.GITHUB_RUN_ID}`;
    }
    return context;
}

export function writeFindings(path, result) {
    writeFileSync(path, `${JSON.stringify({ repository: result.repository, findings: result.findings }, null, 2)}\n`);
}

function runNpmAudit() {
    const result = spawnSync('npm', ['audit', '--json'], {
        encoding: 'utf8',
        maxBuffer: 32 * 1024 * 1024,
    });
    if (result.error) {
        return { status: 1, stdout: '', stderr: result.error.message };
    }
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

    const repo = repositoryContext(process.env);
    if (repo.error) {
        console.error(repo.error);
        process.exitCode = 1;
        return;
    }

    const hour = new Date().getUTCHours();
    const severities = severitiesForHour(hour);
    const waiting = ALL_SEVERITIES.filter((severity) => !severities.includes(severity));
    console.log(`Auditing ${repo.url} at ${repo.ref}.`);
    if (repo.sha) {
        console.log(`Commit ${repo.sha}.`);
    }
    if (repo.runUrl) {
        console.log(`Workflow run ${repo.runUrl}.`);
    }
    const later = waiting.length === 0 ? '' : `. ${waiting.join(' and ')} wait until 18:00`;
    console.log(`UTC hour ${String(hour).padStart(2, '0')}: ${severities.join(', ')}${later}.`);

    const audit = runNpmAudit();
    const found = audit.status === 1 ? ' (vulnerabilities found)' : '';
    console.log(`npm audit exited ${audit.status}${found}.`);

    const stored = findingsFromAuditOutput(audit.stdout, audit.status, hour);
    if (stored.error) {
        if (audit.stderr?.trim()) {
            console.error(audit.stderr.trim().slice(0, 1000));
        }
        console.error(stored.error);
        process.exitCode = stored.status;
        return;
    }

    for (const skipped of stored.skipped) {
        console.log(`Skip ${skipped.severity} ${skipped.name}: ${skipped.reason}.`);
    }
    for (const finding of stored.findings) {
        const ids = finding.advisories.map((advisory) => advisory.id).join(', ');
        console.log(`Store ${finding.severity} ${finding.name}: ${ids}.`);
    }

    writeFindings(outPath, { repository: repo, findings: stored.findings });
    console.log(`Wrote ${stored.findings.length} finding(s) to ${outPath}.`);
}

function isDirectRun() {
    const entry = process.argv[1];
    if (!entry) {
        return false;
    }
    try {
        return import.meta.url === pathToFileURL(realpathSync(entry)).href;
    } catch {
        return false;
    }
}

if (isDirectRun()) {
    main();
}
