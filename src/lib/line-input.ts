import type { Terminal as XtermTerminal } from '@xterm/xterm';

export interface LineInputState {
	buffer: string;
	cursor: number;
}

export function createLineInput(): LineInputState {
	return { buffer: '', cursor: 0 };
}

export function resetLineInput(state: LineInputState): void {
	state.buffer = '';
	state.cursor = 0;
}

export function readLineInput(state: LineInputState): string {
	return state.buffer;
}

/** Handle a single line-editing key sequence. Returns true when Enter submits the line. */
export function handleLineInputKey(
	term: XtermTerminal,
	data: string,
	state: LineInputState,
): 'submit' | 'cancel' | 'handled' | 'ignored' {
	if (data === '\r') {
		term.writeln('');
		return 'submit';
	}

	if (data === '\u007f' || data === '\b') {
		deleteBeforeCursor(term, state);
		return 'handled';
	}

	if (data === '\x1b[D' || data === '\x1bOD') {
		moveCursorLeft(term, state);
		return 'handled';
	}

	if (data === '\x1b[C' || data === '\x1bOC') {
		moveCursorRight(term, state);
		return 'handled';
	}

	if (data === '\x1b[H' || data === '\x1bOH' || data === '\x1b[1~' || data === '\x1b[7~') {
		moveCursorHome(term, state);
		return 'handled';
	}

	if (data === '\x1b[F' || data === '\x1bOF' || data === '\x1b[4~' || data === '\x1b[8~') {
		moveCursorEnd(term, state);
		return 'handled';
	}

	if (data === '\x1b[3~') {
		deleteAtCursor(term, state);
		return 'handled';
	}

	const code = data.charCodeAt(0);
	if (code === 3) {
		term.writeln('^C');
		resetLineInput(state);
		return 'cancel';
	}

	if (code < 32) {
		return 'ignored';
	}

	insertChar(term, state, data);
	return 'handled';
}

function insertChar(term: XtermTerminal, state: LineInputState, ch: string): void {
	const before = state.buffer.slice(0, state.cursor);
	const after = state.buffer.slice(state.cursor);
	state.buffer = before + ch + after;
	state.cursor += 1;

	if (!after) {
		term.write(ch);
		return;
	}

	term.write(ch + after);
	term.write(`\x1b[${after.length}D`);
}

function deleteBeforeCursor(term: XtermTerminal, state: LineInputState): void {
	if (state.cursor === 0) {
		return;
	}

	const before = state.buffer.slice(0, state.cursor - 1);
	const after = state.buffer.slice(state.cursor);
	state.buffer = before + after;
	state.cursor -= 1;

	if (!after) {
		term.write('\b \b');
		return;
	}

	term.write(`\b${after} `);
	term.write(`\x1b[${after.length + 1}D`);
}

function deleteAtCursor(term: XtermTerminal, state: LineInputState): void {
	if (state.cursor >= state.buffer.length) {
		return;
	}

	const before = state.buffer.slice(0, state.cursor);
	const after = state.buffer.slice(state.cursor + 1);
	state.buffer = before + after;

	if (!after) {
		term.write('\x1b[P');
		return;
	}

	term.write(after + ' ');
	term.write(`\x1b[${after.length + 1}D`);
}

function moveCursorLeft(term: XtermTerminal, state: LineInputState): void {
	if (state.cursor === 0) {
		return;
	}

	state.cursor -= 1;
	term.write('\x1b[D');
}

function moveCursorRight(term: XtermTerminal, state: LineInputState): void {
	if (state.cursor >= state.buffer.length) {
		return;
	}

	state.cursor += 1;
	term.write('\x1b[C');
}

function moveCursorHome(term: XtermTerminal, state: LineInputState): void {
	if (state.cursor === 0) {
		return;
	}

	term.write(`\x1b[${state.cursor}D`);
	state.cursor = 0;
}

function moveCursorEnd(term: XtermTerminal, state: LineInputState): void {
	const remaining = state.buffer.length - state.cursor;
	if (remaining <= 0) {
		return;
	}

	term.write(`\x1b[${remaining}C`);
	state.cursor = state.buffer.length;
}
