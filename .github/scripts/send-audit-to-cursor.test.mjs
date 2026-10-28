import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { collectFindings, writeFindings } from './audit-dependencies.mjs';
import {
    agentIdFor,
    agentName,
    buildPrompt,
    cursorRequest,
    dispatchFinding,
    exitCodeFor,
    findingKey,
    loadFindings,
    sendFindings,
} from './send-audit-to-cursor.mjs';

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

function storedFindings(hour) {
    const dir = mkdtempSync(join(tmpdir(), 'audit-'));
    const path = join(dir, 'findings.json');
    writeFindings(path, collectFindings(report, hour));
    return loadFindings(path);
}

test('uses one stable Cursor agent id per stored advisory set', () => {
    const [lodash] = storedFindings(10);
    const key = findingKey(lodash, env.GITHUB_REPOSITORY);
    assert.equal(agentIdFor(key), agentIdFor(findingKey(lodash, env.GITHUB_REPOSITORY)));
    assert.match(agentIdFor(key), /^bc-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);

    const changed = { ...lodash, advisories: [...lodash.advisories, { id: 'GHSA-333', title: 'Another' }] };
    assert.notEqual(findingKey(changed, env.GITHUB_REPOSITORY), key);
});

test('asks Cursor to open a pull request for a stored finding', () => {
    const [lodash] = storedFindings(10);
    const request = cursorRequest(lodash, env);
    const body = JSON.parse(request.init.body);

    assert.equal(request.url, 'https://api.cursor.com/v1/agents');
    assert.equal(body.autoCreatePR, true);
    assert.equal(body.agentId, agentIdFor(findingKey(lodash, env.GITHUB_REPOSITORY)));
    assert.equal(body.name, agentName(lodash));
    assert.deepEqual(body.repos, [{
        url: 'https://github.com/thebetar/VonkProgrammingSolid',
        startingRef: 'master',
    }]);
    assert.match(body.prompt.text, /GHSA-111/);
    assert.match(body.prompt.text, /widget to 2\.0\.0/);
    assert.match(body.prompt.text, /node_modules\/lodash/);
    assert.equal(request.init.headers.authorization, `Basic ${Buffer.from('test-key:').toString('base64')}`);
    assert.equal(request.init.body.includes('test-key'), false);
});

test('sends each stored finding once', async () => {
    const findings = storedFindings(18);
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

    const first = await sendFindings(findings, env, fetchImpl, log);
    const second = await sendFindings(findings, env, fetchImpl, log);

    assert.deepEqual(first, { created: 2, duplicate: 0, failed: 0 });
    assert.deepEqual(second, { created: 0, duplicate: 2, failed: 0 });
    assert.equal(exitCodeFor(first), 1);
    assert.equal(exitCodeFor(second), 0);
    assert.equal(seen.size, 2);
});

test('treats an existing agent id as already sent', async () => {
    const [lodash] = storedFindings(10);
    const result = await dispatchFinding(lodash, env, async () => ({
        status: 409,
        ok: false,
        text: async () => JSON.stringify({
            error: { code: 'agent_id_conflict', message: 'An agent with this agentId already exists' },
        }),
    }));
    assert.equal(result.status, 'duplicate');
    assert.equal(result.agentId, agentIdFor(findingKey(lodash, env.GITHUB_REPOSITORY)));
});

test('keeps a failed send retryable', async () => {
    const [lodash] = storedFindings(10);
    const conflict = await dispatchFinding(lodash, env, async () => ({
        status: 409,
        ok: false,
        text: async () => JSON.stringify({ error: { code: 'agent_busy', message: 'busy' } }),
    }));
    assert.equal(conflict.status, 'failed');

    const unavailable = await dispatchFinding(lodash, env, async () => ({
        status: 500,
        ok: false,
        text: async () => 'unavailable',
    }));
    assert.match(unavailable.detail, /Cursor API 500/);
});

test('does not call Cursor without an API key or without findings', async () => {
    const [lodash] = storedFindings(10);
    let called = false;
    const missingKey = await dispatchFinding(lodash, {}, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.deepEqual(missingKey, { status: 'failed', detail: 'Set CURSOR_API_KEY.' });

    const empty = await sendFindings([], env, async () => {
        called = true;
    }, { log() {}, error() {} });
    assert.equal(called, false);
    assert.deepEqual(empty, { created: 0, duplicate: 0, failed: 0 });
    assert.equal(exitCodeFor(empty), 0);
});

test('truncates long agent names and names the repository in the prompt', () => {
    const name = agentName({ severity: 'moderate', name: 'x'.repeat(200) });
    assert.equal(name.length, 100);
    const prompt = buildPrompt(storedFindings(10)[0], 'https://github.com/thebetar/VonkProgrammingSolid');
    assert.match(prompt, /https:\/\/github.com\/thebetar\/VonkProgrammingSolid/);
    assert.match(prompt, /Do not open a pull request yourself/);
});
