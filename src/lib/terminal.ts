import { Terminal as XtermTerminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { ImageAddon } from '@xterm/addon-image';
import '@xterm/xterm/css/xterm.css';

import { getPrompt, getWelcomeText, os } from '@/data/os';
import { runCommand, type CommandResult } from '@/lib/commands';
import { commandToPath, pathToCommand } from '@/lib/routes';
import { color, muted } from '@/lib/ansi';
import {
	buildInlineImageSequence,
	imageSrcFromLine,
	imageUrlToPngBase64,
	isImageLine,
} from '@/lib/terminal-image';

const terminalTheme = {
	background: '#0b0f14',
	foreground: '#d6e3f0',
	cursor: '#7ee787',
	cursorAccent: '#0b0f14',
	selectionBackground: '#264f7844',
	black: '#0b0f14',
	red: '#ff7b72',
	green: '#7ee787',
	yellow: '#e3b341',
	blue: '#79c0ff',
	magenta: '#d2a8ff',
	cyan: '#56d4dd',
	white: '#d6e3f0',
	brightBlack: '#8b949e',
	brightRed: '#ffa198',
	brightGreen: '#56d364',
	brightYellow: '#e3b341',
	brightBlue: '#79c0ff',
	brightMagenta: '#d2a8ff',
	brightCyan: '#56d4dd',
	brightWhite: '#ffffff',
};

export interface TerminalMount {
	screen: HTMLElement;
	input: HTMLInputElement;
	sticky: HTMLElement;
}

type PromptMode = 'inline' | 'sticky';

async function writeImage(term: XtermTerminal, src: string): Promise<void> {
	try {
		const { base64, size } = await imageUrlToPngBase64(src);
		term.write(buildInlineImageSequence(base64, size));
		term.writeln('');
	} catch {
		term.writeln(muted(`[image unavailable] ${src}`));
	}
}

async function writeLines(term: XtermTerminal, lines: string[]): Promise<void> {
	for (const line of lines) {
		if (isImageLine(line)) {
			await writeImage(term, imageSrcFromLine(line));
			continue;
		}

		term.writeln(line);
	}
}

function resetView(term: XtermTerminal): void {
	term.write('\x1b[2J\x1b[3J\x1b[H');
}

function applyScroll(term: XtermTerminal, scrollTo: 'top' | 'bottom' = 'bottom'): void {
	if (scrollTo === 'top') {
		term.scrollToTop();
		return;
	}

	term.scrollToBottom();
}

function contentOverflowsViewport(term: XtermTerminal): boolean {
	// baseY > 0 means there is scrollback above the visible rows.
	return term.buffer.active.baseY > 0;
}

function syncUrlForCommand(command: string): void {
	const path = commandToPath(command);

	if (!path) {
		return;
	}

	const current = `${window.location.pathname}${window.location.search}`;
	if (current === path) {
		return;
	}

	window.history.replaceState(null, '', path);
}

function triggerDownload(url: string, filename: string): void {
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.download = filename;
	anchor.rel = 'noopener';
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
}

interface PromptController {
	mode: PromptMode;
	inputBuffer: string;
	setMode: (mode: PromptMode, options?: { writeInlinePrompt?: boolean }) => void;
	syncAfterContent: (scrollTo?: 'top' | 'bottom') => void;
	focus: () => void;
	setBusy: (busy: boolean) => void;
}

function createPromptController(
	term: XtermTerminal,
	input: HTMLInputElement,
	sticky: HTMLElement,
	fitAddon: FitAddon,
): PromptController {
	const controller: PromptController = {
		mode: 'inline',
		inputBuffer: '',
		setMode(mode, options = {}) {
			const writeInlinePrompt = options.writeInlinePrompt ?? true;
			const prev = controller.mode;
			controller.mode = mode;
			sticky.hidden = mode !== 'sticky';
			sticky.classList.toggle('is-active', mode === 'sticky');
			term.options.disableStdin = mode === 'sticky';
			term.options.cursorBlink = mode === 'inline';

			if (prev !== mode) {
				fitAddon.fit();
			}

			if (mode === 'sticky') {
				input.disabled = false;
				input.focus();
				return;
			}

			if (writeInlinePrompt) {
				term.write(getPrompt());
				term.focus();
			}
		},
		syncAfterContent(scrollTo = 'bottom') {
			// Measure overflow with the sticky bar hidden so height isn't biased.
			if (controller.mode === 'sticky') {
				sticky.hidden = true;
				sticky.classList.remove('is-active');
				controller.mode = 'inline';
				term.options.disableStdin = false;
				term.options.cursorBlink = true;
				fitAddon.fit();
			}

			applyScroll(term, scrollTo === 'top' ? 'top' : 'bottom');

			if (contentOverflowsViewport(term)) {
				controller.setMode('sticky', { writeInlinePrompt: false });
				applyScroll(term, scrollTo);
				return;
			}

			controller.setMode('inline');
			applyScroll(term, 'bottom');
		},
		focus() {
			if (controller.mode === 'sticky') {
				input.focus();
				return;
			}

			term.focus();
		},
		setBusy(busy) {
			input.disabled = busy;
			if (!busy) {
				controller.focus();
			}
		},
	};

	return controller;
}

async function applyCommandResult(
	term: XtermTerminal,
	result: CommandResult,
	prompt: PromptController,
): Promise<void> {
	if (result.download) {
		triggerDownload(result.download.url, result.download.filename);
	}

	if (result.action === 'clear') {
		resetView(term);
		prompt.inputBuffer = '';
		prompt.syncAfterContent('bottom');
		return;
	}

	if (result.action === 'print') {
		if (result.lines && result.lines.length > 0) {
			resetView(term);
			prompt.inputBuffer = '';
			await writeLines(term, result.lines);
			prompt.syncAfterContent(result.scrollTo ?? 'bottom');
			return;
		}
	}

	prompt.syncAfterContent('bottom');
}

async function bootTerminal(term: XtermTerminal, prompt: PromptController): Promise<void> {
	const initialCommand = pathToCommand(window.location.pathname, window.location.search);

	if (!initialCommand) {
		await writeLines(term, getWelcomeText());
		prompt.syncAfterContent('bottom');
		document.title = `${os.osName} — Portfolio`;
		return;
	}

	await writeLines(term, [
		color.bold(color.brightGreen(`Welcome to ${os.osName}`)),
		muted(`Opening shared link → running: ${initialCommand}`),
		'',
	]);
	term.write(getPrompt());
	term.writeln(initialCommand);

	const result = runCommand(initialCommand);

	if (result.download) {
		triggerDownload(result.download.url, result.download.filename);
	}

	if (result.action === 'print') {
		if (result.lines && result.lines.length > 0) {
			resetView(term);
			await writeLines(term, result.lines);
			prompt.syncAfterContent(result.scrollTo ?? 'bottom');
		} else {
			prompt.syncAfterContent('bottom');
		}
	} else if (result.action === 'clear') {
		resetView(term);
		prompt.syncAfterContent('bottom');
	} else {
		prompt.syncAfterContent('bottom');
	}

	document.title = `${os.osName} — ${initialCommand}`;
}

async function runSubmittedCommand(
	term: XtermTerminal,
	command: string,
	prompt: PromptController,
	busyRef: { value: boolean },
): Promise<void> {
	if (busyRef.value) {
		return;
	}

	const result = runCommand(command);
	const trimmed = command.trim();
	if (trimmed) {
		syncUrlForCommand(trimmed);
	}

	busyRef.value = true;
	prompt.setBusy(true);

	try {
		await applyCommandResult(term, result, prompt);
	} finally {
		busyRef.value = false;
		prompt.setBusy(false);
	}
}

function handleInlineInput(
	term: XtermTerminal,
	data: string,
	prompt: PromptController,
	busyRef: { value: boolean },
): void {
	if (busyRef.value || prompt.mode !== 'inline') {
		return;
	}

	const code = data.charCodeAt(0);

	if (data === '\r') {
		term.writeln('');
		const command = prompt.inputBuffer;
		prompt.inputBuffer = '';
		void runSubmittedCommand(term, command, prompt, busyRef);
		return;
	}

	if (data === '\u007f' || data === '\b') {
		if (prompt.inputBuffer.length > 0) {
			prompt.inputBuffer = prompt.inputBuffer.slice(0, -1);
			term.write('\b \b');
		}
		return;
	}

	if (code === 3) {
		term.writeln('^C');
		prompt.inputBuffer = '';
		prompt.syncAfterContent('bottom');
		return;
	}

	if (code === 12) {
		resetView(term);
		prompt.inputBuffer = '';
		prompt.syncAfterContent('bottom');
		return;
	}

	if (code < 32) {
		return;
	}

	prompt.inputBuffer += data;
	term.write(data);
}

/** Create and wire an interactive xterm instance + conditional sticky input. */
export function initTerminal(mount: TerminalMount): () => void {
	const { screen, input, sticky } = mount;

	const term = new XtermTerminal({
		cursorBlink: true,
		disableStdin: false,
		fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
		fontSize: 15,
		lineHeight: 1.2,
		theme: terminalTheme,
		allowProposedApi: true,
		scrollback: 5000,
	});

	const fitAddon = new FitAddon();
	const imageAddon = new ImageAddon({
		enableSizeReports: true,
		sixelSupport: false,
		iipSupport: true,
		showPlaceholder: true,
	});

	term.loadAddon(fitAddon);
	term.loadAddon(imageAddon);
	term.open(screen);
	fitAddon.fit();

	const prompt = createPromptController(term, input, sticky, fitAddon);
	sticky.hidden = true;

	const busyRef = { value: true };

	void bootTerminal(term, prompt).finally(() => {
		busyRef.value = false;
		prompt.setBusy(false);
	});

	const onData = term.onData((data) => {
		handleInlineInput(term, data, prompt, busyRef);
	});

	const onSubmit = (event: Event) => {
		event.preventDefault();
		if (busyRef.value || prompt.mode !== 'sticky') {
			return;
		}

		const command = input.value;
		input.value = '';
		term.writeln(`${getPrompt()}${command}`);
		void runSubmittedCommand(term, command, prompt, busyRef);
	};

	const onStickyKeyDown = (event: KeyboardEvent) => {
		if (busyRef.value || prompt.mode !== 'sticky') {
			return;
		}

		if (event.key === 'l' && event.ctrlKey) {
			event.preventDefault();
			input.value = '';
			resetView(term);
			prompt.syncAfterContent('bottom');
			return;
		}

		if (event.key === 'c' && event.ctrlKey) {
			event.preventDefault();
			input.value = '';
			term.writeln('^C');
			prompt.syncAfterContent('bottom');
		}
	};

	const onScreenClick = () => {
		prompt.focus();
	};

	const form = input.closest('form');
	form?.addEventListener('submit', onSubmit);
	input.addEventListener('keydown', onStickyKeyDown);
	screen.addEventListener('mousedown', onScreenClick);

	const onResize = () => {
		fitAddon.fit();
		// Re-evaluate sticky vs inline after viewport size changes.
		if (contentOverflowsViewport(term)) {
			prompt.setMode('sticky', { writeInlinePrompt: false });
		} else if (prompt.mode === 'sticky') {
			prompt.setMode('inline');
		}
	};
	window.addEventListener('resize', onResize);

	return () => {
		onData.dispose();
		form?.removeEventListener('submit', onSubmit);
		input.removeEventListener('keydown', onStickyKeyDown);
		screen.removeEventListener('mousedown', onScreenClick);
		window.removeEventListener('resize', onResize);
		term.dispose();
	};
}
