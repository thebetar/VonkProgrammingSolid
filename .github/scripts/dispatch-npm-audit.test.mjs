import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
    agentIdFor,
    agentName,
    buildPrompt,
    cursorRequest,
    dispatchFinding,
    dispatchReport,
    exitCodeFor,
    findingKey,
    selectPackages,
} from './dispatch-npm-audit.mjs';

const report = {
    vulnerabilities: {
        lodash: {
            name: 'lodash',
            severity: 'high',
            isDirect: false,
            range: '<4.17.21',
            nodes: ['node_modules/lodash'],
            via: [{
                source: 111,
                name: 'lodash',
                title: 'Prototype Pollution',
                url: 'https://github.com/advisories/GHSA-111',
                severity: 'high',
                range: '<4.17.21',
            }],
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

const env = {
    CURSOR_API_KEY: 'test-key',
    GITHUB_REPOSITORY: 'thebetar/VonkProgrammingSolid',
    GITHUB_REF_NAME: 'master',
};

test('selects advisory packages and skips dependency effects', () => {
    assert.deepEqual(selectPackages(report, 'high').map((pkg) => pkg.name), ['lodash']);
    assert.deepEqual(selectPackages(report, 'low').map((pkg) => pkg.name), ['left-pad']);
    assert.deepEqual(selectPackages(report, 'critical'), []);
});

test('uses one stable Cursor agent id per advisory set', () => {
    const key = findingKey(report.vulnerabilities.lodash, env.GITHUB_REPOSITORY);
    const again = findingKey(report.vulnerabilities.lodash, env.GITHUB_REPOSITORY);
    assert.equal(key, again);
    assert.equal(agentIdFor(key), agentIdFor(again));
    assert.match(agentIdFor(key), /^bc-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);

    const extraAdvisory = {
        ...report.vulnerabilities.lodash,
        via: [
            ...report.vulnerabilities.lodash.via,
            { url: 'https://github.com/advisories/GHSA-333', title: 'Another' },
        ],
    };
    assert.notEqual(findingKey(extraAdvisory, env.GITHUB_REPOSITORY), key);
    assert.notEqual(
        findingKey(report.vulnerabilities.lodash, 'other/repo'),
        key,
    );
});

test('asks Cursor to open a pull request for the audited package', () => {
    const pkg = report.vulnerabilities.lodash;
    const request = cursorRequest(pkg, env);
    const body = JSON.parse(request.init.body);

    assert.equal(request.url, 'https://api.cursor.com/v1/agents');
    assert.equal(body.autoCreatePR, true);
    assert.equal(body.agentId, agentIdFor(findingKey(pkg, env.GITHUB_REPOSITORY)));
    assert.equal(body.name, agentName(pkg));
    assert.deepEqual(body.repos, [{
        url: 'https://github.com/thebetar/VonkProgrammingSolid',
        startingRef: 'master',
    }]);
    assert.match(body.prompt.text, /GHSA-111/);
    assert.match(body.prompt.text, /widget to 2\.0\.0/);
    assert.equal(request.init.headers.authorization, `Basic ${Buffer.from('test-key:').toString('base64')}`);
    assert.equal(request.init.body.includes('test-key'), false);
});

test('treats an existing agent id as already sent', async () => {
    const calls = [];
    const fetchImpl = async (url, init) => {
        calls.push({ url, init });
        return {
            status: 409,
            ok: false,
            text: async () => JSON.stringify({
                error: { code: 'agent_id_conflict', message: 'An agent with this agentId already exists' },
            }),
        };
    };

    const result = await dispatchFinding(report.vulnerabilities.lodash, env, fetchImpl);
    assert.equal(result.status, 'duplicate');
    assert.equal(calls.length, 1);
    assert.equal(result.agentId, JSON.parse(calls[0].init.body).agentId);
});

test('returns the agent url when Cursor accepts the finding', async () => {
    const fetchImpl = async () => ({
        status: 200,
        ok: true,
        json: async () => ({ agent: { url: 'https://cursor.com/agents/bc-created' } }),
    });

    const pkg = report.vulnerabilities['left-pad'];
    const result = await dispatchFinding(pkg, env, fetchImpl);
    assert.deepEqual(result, {
        status: 'created',
        agentId: agentIdFor(findingKey(pkg, env.GITHUB_REPOSITORY)),
        url: 'https://cursor.com/agents/bc-created',
    });
});

test('does not treat an unrelated conflict as already sent', async () => {
    const fetchImpl = async () => ({
        status: 409,
        ok: false,
        text: async () => JSON.stringify({ error: { code: 'agent_busy', message: 'busy' } }),
    });

    const result = await dispatchFinding(report.vulnerabilities.lodash, env, fetchImpl);
    assert.equal(result.status, 'failed');
    assert.match(result.detail, /agent_busy/);
});

test('keeps a failed send retryable', async () => {
    const fetchImpl = async () => ({
        status: 500,
        ok: false,
        text: async () => 'unavailable',
    });

    const result = await dispatchFinding(report.vulnerabilities.lodash, env, fetchImpl);
    assert.equal(result.status, 'failed');
    assert.match(result.detail, /Cursor API 500/);
});

test('does not call Cursor without an API key', async () => {
    let called = false;
    const result = await dispatchFinding(report.vulnerabilities.lodash, {}, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.deepEqual(result, { status: 'failed', detail: 'Set CURSOR_API_KEY.' });
});

test('sends each finding once and does not fail the job on a repeat', async () => {
    const seen = new Set();
    const fetchImpl = async (_url, init) => {
        const agentId = JSON.parse(init.body).agentId;
        if (seen.has(agentId)) {
            return {
                status: 409,
                ok: false,
                text: async () => JSON.stringify({ error: { code: 'agent_id_conflict' } }),
            };
        }
        seen.add(agentId);
        return {
            status: 200,
            ok: true,
            json: async () => ({ agent: { url: `https://cursor.com/agents/${agentId}` } }),
        };
    };
    const log = { log() {}, error() {} };

    const first = await dispatchReport(report, 'high', env, fetchImpl, log);
    const second = await dispatchReport(report, 'high', env, fetchImpl, log);

    assert.deepEqual(first, { created: 1, duplicate: 0, failed: 0 });
    assert.deepEqual(second, { created: 0, duplicate: 1, failed: 0 });
    assert.equal(exitCodeFor(first), 1);
    assert.equal(exitCodeFor(second), 0);
    assert.equal(seen.size, 1);
});

test('truncates long agent names', () => {
    const name = agentName({ severity: 'moderate', name: 'x'.repeat(200) });
    assert.equal(name.length, 100);
});

test('prompt names the repository and the installed path', () => {
    const prompt = buildPrompt(
        report.vulnerabilities.lodash,
        'https://github.com/thebetar/VonkProgrammingSolid',
    );
    assert.match(prompt, /https:\/\/github.com\/thebetar\/VonkProgrammingSolid/);
    assert.match(prompt, /node_modules\/lodash/);
    assert.match(prompt, /Do not open a pull request yourself/);
});
