import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import {
    collectFindings,
    findingsFromAuditOutput,
    repositoryContext,
    severitiesForHour,
    skippedPackages,
    writeFindings,
} from './audit-dependencies.mjs';

const report = {
    vulnerabilities: {
        lodash: {
            name: 'lodash',
            severity: 'high',
            isDirect: false,
            range: '<4.17.21',
            nodes: ['node_modules/lodash'],
            via: [
                {
                    source: 111,
                    name: 'lodash',
                    title: 'Prototype Pollution',
                    url: 'https://github.com/advisories/GHSA-111',
                    severity: 'high',
                    range: '<4.17.21',
                },
                {
                    source: 111,
                    name: 'lodash',
                    title: 'Prototype Pollution',
                    url: 'https://github.com/advisories/GHSA-111',
                    severity: 'high',
                    range: '<4.17.21',
                },
            ],
            fixAvailable: { name: 'widget', version: '2.0.0', isSemVerMajor: true },
        },
        widget: {
            name: 'widget',
            severity: 'high',
            isDirect: true,
            range: '<2.0.0',
            via: ['lodash'],
            fixAvailable: true,
        },
        'left-pad': {
            name: 'left-pad',
            severity: 'low',
            isDirect: true,
            range: '<1.3.0',
            via: [{
                source: 2,
                title: 'ReDoS',
                url: 'https://github.com/advisories/GHSA-222',
                severity: 'low',
            }],
            fixAvailable: true,
        },
    },
};

test('stores critical and high findings before 18:00 UTC', () => {
    assert.deepEqual(severitiesForHour(10), ['critical', 'high']);
    const findings = collectFindings(report, 10);
    assert.deepEqual(findings.map((finding) => finding.name), ['lodash']);
    assert.deepEqual(findings[0].advisories, [{
        id: 'https://github.com/advisories/GHSA-111',
        title: 'Prototype Pollution',
        url: 'https://github.com/advisories/GHSA-111',
        range: '<4.17.21',
    }]);
    assert.equal(findings[0].fixAvailable.version, '2.0.0');
});

test('stores moderate and low findings on the 18:00 UTC run', () => {
    assert.deepEqual(severitiesForHour('18'), ['critical', 'high', 'moderate', 'low']);
    assert.deepEqual(collectFindings(report, 18).map((finding) => finding.name), ['lodash', 'left-pad']);
});

const actionsEnv = {
    GITHUB_SERVER_URL: 'https://github.com',
    GITHUB_REPOSITORY: 'thebetar/VonkProgrammingSolid',
    GITHUB_REF_NAME: 'master',
    GITHUB_SHA: 'abc123def456abc123def456abc123def456abcd',
    GITHUB_RUN_ID: '42',
};

test('reads the repository, branch, commit, and run link from GitHub Actions', () => {
    const context = repositoryContext(actionsEnv);
    assert.deepEqual(context, {
        repository: 'thebetar/VonkProgrammingSolid',
        url: 'https://github.com/thebetar/VonkProgrammingSolid',
        ref: 'master',
        sha: 'abc123def456abc123def456abc123def456abcd',
        runUrl: 'https://github.com/thebetar/VonkProgrammingSolid/actions/runs/42',
    });

    const enterprise = repositoryContext({
        GITHUB_SERVER_URL: 'https://github.example.com',
        GITHUB_REPOSITORY: 'acme/app',
        GITHUB_REF_NAME: 'release',
    });
    assert.equal(enterprise.url, 'https://github.example.com/acme/app');
    assert.equal(enterprise.ref, 'release');
    assert.equal(enterprise.sha, undefined);
    assert.equal(enterprise.runUrl, undefined);

    const missing = repositoryContext({ GITHUB_REPOSITORY: 'thebetar/VonkProgrammingSolid' });
    assert.match(missing.error, /GITHUB_REF_NAME/);
});

test('writes the findings file the sender reads', () => {
    const dir = mkdtempSync(join(tmpdir(), 'audit-'));
    const path = join(dir, 'findings.json');
    const repository = repositoryContext(actionsEnv);
    writeFindings(path, { repository, findings: collectFindings(report, 18) });
    const stored = JSON.parse(readFileSync(path, 'utf8'));
    assert.equal(stored.repository.url, 'https://github.com/thebetar/VonkProgrammingSolid');
    assert.equal(stored.repository.ref, 'master');
    assert.equal(stored.findings.length, 2);
    assert.equal(stored.findings[1].name, 'left-pad');
});

test('explains packages that are not stored', () => {
    const skipped = skippedPackages(report, 10);
    assert.deepEqual(skipped, [
        { name: 'left-pad', severity: 'low', reason: 'outside this run' },
        { name: 'widget', severity: 'high', reason: 'dependency effect' },
    ]);
    assert.deepEqual(findingsFromAuditOutput(JSON.stringify(report), 1, 10).skipped, skipped);
});

test('keeps an audit execution failure out of the stored results', () => {
    const failed = findingsFromAuditOutput('not json', 2, 10);
    assert.equal(failed.status, 2);
    assert.equal(failed.findings, undefined);

    const invalid = findingsFromAuditOutput('not json', 1, 10);
    assert.equal(invalid.status, 1);
    assert.match(invalid.error, /JSON/);

    const found = findingsFromAuditOutput(JSON.stringify(report), 1, 10);
    assert.equal(found.status, 0);
    assert.deepEqual(found.findings.map((finding) => finding.name), ['lodash']);
});
