import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { collectFindings, repositoryContext, writeFindings } from './audit-dependencies.mjs';
import {
    agentIdFor,
    agentName,
    buildPrompt,
    cursorRequest,
    dispatchFinding,
    exitCodeFor,
    findingKey,
    loadAudit,
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

const actionsEnv = {
    GITHUB_SERVER_URL: 'https://github.com',
    GITHUB_REPOSITORY: 'thebetar/VonkProgrammingSolid',
    GITHUB_REF_NAME: 'master',
    GITHUB_SHA: 'abc123def456abc123def456abc123def456abcd',
    GITHUB_RUN_ID: '42',
};
const cursorEnv = { CURSOR_API_KEY: 'test-key' };

function storedAudit(hour) {
    const dir = mkdtempSync(join(tmpdir(), 'audit-'));
    const path = join(dir, 'findings.json');
    writeFindings(path, {
        repository: repositoryContext(actionsEnv).context,
        findings: collectFindings(report, hour),
    });
    return loadAudit(path);
}

test('uses one stable Cursor agent id per stored advisory set', () => {
    const { repository, findings: [lodash] } = storedAudit(10);
    const key = findingKey(lodash, repository.repository);
    assert.equal(agentIdFor(key), agentIdFor(findingKey(lodash, repository.repository)));
    assert.match(agentIdFor(key), /^bc-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);

    const changed = { ...lodash, advisories: [...lodash.advisories, { id: 'GHSA-333', title: 'Another' }] };
    assert.notEqual(findingKey(changed, repository.repository), key);
});

test('asks Cursor to open a pull request for a stored finding', () => {
    const { repository, findings: [lodash] } = storedAudit(10);
    const request = cursorRequest(lodash, repository, cursorEnv);
    const body = JSON.parse(request.init.body);

    assert.equal(request.url, 'https://api.cursor.com/v1/agents');
    assert.equal(body.autoCreatePR, true);
    assert.equal(body.agentId, agentIdFor(findingKey(lodash, repository.repository)));
    assert.equal(body.name, agentName(lodash));
    assert.deepEqual(body.repos, [{
        url: 'https://github.com/thebetar/VonkProgrammingSolid',
        startingRef: 'master',
    }]);
    assert.match(body.prompt.text, /GHSA-111/);
    assert.match(body.prompt.text, /widget to 2\.0\.0/);
    assert.match(body.prompt.text, /node_modules\/lodash/);
    assert.match(body.prompt.text, /actions\/runs\/42/);
    assert.equal(request.init.headers.authorization, `Basic ${Buffer.from('test-key:').toString('base64')}`);
    assert.equal(request.init.body.includes('test-key'), false);
    assert.equal(JSON.stringify(body).includes('GITHUB_'), false);
});

test('sends each stored finding once', async () => {
    const audit = storedAudit(18);
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

    const first = await sendFindings(audit, cursorEnv, fetchImpl, log);
    const second = await sendFindings(audit, cursorEnv, fetchImpl, log);

    assert.deepEqual(first, { created: 2, duplicate: 0, failed: 0 });
    assert.deepEqual(second, { created: 0, duplicate: 2, failed: 0 });
    assert.equal(exitCodeFor(first), 1);
    assert.equal(exitCodeFor(second), 0);
    assert.equal(seen.size, 2);
});

test('treats an existing agent id as already sent', async () => {
    const { repository, findings: [lodash] } = storedAudit(10);
    const result = await dispatchFinding(lodash, repository, cursorEnv, async () => ({
        status: 409,
        ok: false,
        text: async () => JSON.stringify({
            error: { code: 'agent_id_conflict', message: 'An agent with this agentId already exists' },
        }),
    }));
    assert.equal(result.status, 'duplicate');
    assert.equal(result.agentId, agentIdFor(findingKey(lodash, repository.repository)));
});

test('keeps a failed send retryable', async () => {
    const { repository, findings: [lodash] } = storedAudit(10);
    const conflict = await dispatchFinding(lodash, repository, cursorEnv, async () => ({
        status: 409,
        ok: false,
        text: async () => JSON.stringify({ error: { code: 'agent_busy', message: 'busy' } }),
    }));
    assert.equal(conflict.status, 'failed');

    const unavailable = await dispatchFinding(lodash, repository, cursorEnv, async () => ({
        status: 500,
        ok: false,
        text: async () => 'unavailable',
    }));
    assert.match(unavailable.detail, /Cursor API 500/);
});

test('does not call Cursor without an API key or without findings', async () => {
    const { repository, findings: [lodash] } = storedAudit(10);
    let called = false;
    const missingKey = await dispatchFinding(lodash, repository, {}, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.deepEqual(missingKey, { status: 'failed', detail: 'Set CURSOR_API_KEY.' });

    const missingRepository = await dispatchFinding(lodash, {}, cursorEnv, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.match(missingRepository.detail, /GitHub Actions/);

    const empty = await sendFindings({ repository, findings: [] }, cursorEnv, async () => {
        called = true;
    }, { log() {}, error() {} });
    assert.equal(called, false);
    assert.deepEqual(empty, { created: 0, duplicate: 0, failed: 0 });
    assert.equal(exitCodeFor(empty), 0);
});

test('truncates long agent names and names the repository in the prompt', () => {
    const name = agentName({ severity: 'moderate', name: 'x'.repeat(200) });
    assert.equal(name.length, 100);
    const { repository, findings } = storedAudit(10);
    const prompt = buildPrompt(findings[0], repository);
    assert.match(prompt, /https:\/\/github.com\/thebetar\/VonkProgrammingSolid/);
    assert.match(prompt, /Branch: master/);
    assert.match(prompt, /Audited commit: abc123def456abc123def456abc123def456abcd/);
    assert.match(prompt, /Do not open a pull request yourself/);
});
