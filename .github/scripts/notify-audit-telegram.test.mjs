import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { collectFindings, repositoryContext, writeFindings } from './audit-dependencies.mjs';
import {
    buildMessage,
    exitCodeFor,
    loadAudit,
    notifyTelegram,
    telegramRequest,
} from './notify-audit-telegram.mjs';

const report = {
    vulnerabilities: {
        lodash: {
            name: 'lodash',
            severity: 'high',
            isDirect: false,
            range: '<4.17.21',
            via: [{
                source: 111,
                title: 'Prototype Pollution',
                url: 'https://github.com/advisories/GHSA-111',
                severity: 'high',
            }],
            fixAvailable: true,
        },
        'left-pad': {
            name: 'left-pad',
            severity: 'low',
            isDirect: true,
            via: [{
                source: 2,
                title: 'ReDoS',
                url: 'https://github.com/advisories/GHSA-222',
                severity: 'low',
            }],
            fixAvailable: false,
        },
    },
};

const actionsEnv = {
    GITHUB_SERVER_URL: 'https://github.com',
    GITHUB_REPOSITORY: 'thebetar/VonkProgrammingSolid',
    GITHUB_REF_NAME: 'master',
    GITHUB_RUN_ID: '42',
};
const telegramEnv = {
    TELEGRAM_BOT_TOKEN: '123:token',
    TELEGRAM_CHAT_ID: '456',
};

function storedAudit(hour) {
    const dir = mkdtempSync(join(tmpdir(), 'audit-'));
    const path = join(dir, 'findings.json');
    writeFindings(path, {
        repository: repositoryContext(actionsEnv),
        findings: collectFindings(report, hour),
    });
    return loadAudit(path);
}

test('describes stored findings and the Actions run', () => {
    const audit = storedAudit(18);
    const message = buildMessage(audit);
    assert.match(message, /1 high, 1 low vulnerabilities in thebetar\/VonkProgrammingSolid/);
    assert.match(message, /lodash/);
    assert.match(message, /Prototype Pollution/);
    assert.match(message, /GHSA-111/);
    assert.match(message, /left-pad/);
    assert.match(message, /actions\/runs\/42/);
    assert.equal(message.length <= 4000, true);
});

test('keeps the bot token out of the message body', () => {
    const request = telegramRequest('hello', telegramEnv);
    assert.equal(request.url, 'https://api.telegram.org/bot123:token/sendMessage');
    const body = JSON.parse(request.init.body);
    assert.equal(body.chat_id, '456');
    assert.equal(body.text, 'hello');
    assert.equal(body.disable_web_page_preview, true);
    assert.equal(request.init.body.includes('123:token'), false);
});

test('notifies Telegram when findings were stored', async () => {
    const audit = storedAudit(10);
    let called = false;
    const result = await notifyTelegram(audit, telegramEnv, async (url, init) => {
        called = true;
        assert.match(url, /sendMessage$/);
        assert.match(JSON.parse(init.body).text, /1 high vulnerabilities/);
        return { ok: true, text: async () => '' };
    });
    assert.equal(called, true);
    assert.equal(result.status, 'sent');
    assert.equal(exitCodeFor(result), 0);
});

test('does not call Telegram when there is nothing to report', async () => {
    let called = false;
    const result = await notifyTelegram({ findings: [], repository: {} }, telegramEnv, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.equal(result.status, 'empty');
    assert.equal(exitCodeFor(result), 0);
});

test('does not call Telegram without credentials and reports API failures', async () => {
    const audit = storedAudit(10);
    let called = false;
    const missing = await notifyTelegram(audit, {}, async () => {
        called = true;
    });
    assert.equal(called, false);
    assert.deepEqual(missing, { status: 'failed', detail: 'Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.' });
    assert.equal(exitCodeFor(missing), 1);

    const failed = await notifyTelegram(audit, telegramEnv, async () => ({
        ok: false,
        status: 401,
        text: async () => 'unauthorized',
    }));
    assert.equal(failed.status, 'failed');
    assert.match(failed.detail, /Telegram API 401/);
});
