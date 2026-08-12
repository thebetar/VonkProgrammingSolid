const ESC = '\x1b[';

export const color = {
	reset: (text: string) => `${ESC}0m${text}`,
	bold: (text: string) => `${ESC}1m${text}${ESC}0m`,
	dim: (text: string) => `${ESC}2m${text}${ESC}0m`,
	red: (text: string) => `${ESC}31m${text}${ESC}0m`,
	green: (text: string) => `${ESC}32m${text}${ESC}0m`,
	yellow: (text: string) => `${ESC}33m${text}${ESC}0m`,
	blue: (text: string) => `${ESC}34m${text}${ESC}0m`,
	magenta: (text: string) => `${ESC}35m${text}${ESC}0m`,
	cyan: (text: string) => `${ESC}36m${text}${ESC}0m`,
	white: (text: string) => `${ESC}37m${text}${ESC}0m`,
	gray: (text: string) => `${ESC}90m${text}${ESC}0m`,
	brightRed: (text: string) => `${ESC}91m${text}${ESC}0m`,
	brightGreen: (text: string) => `${ESC}92m${text}${ESC}0m`,
	brightYellow: (text: string) => `${ESC}93m${text}${ESC}0m`,
	brightBlue: (text: string) => `${ESC}94m${text}${ESC}0m`,
	brightMagenta: (text: string) => `${ESC}95m${text}${ESC}0m`,
	brightCyan: (text: string) => `${ESC}96m${text}${ESC}0m`,
	brightWhite: (text: string) => `${ESC}97m${text}${ESC}0m`,
} as const;

export function heading(text: string): string {
	return color.bold(color.brightGreen(text));
}

export function label(text: string): string {
	return color.cyan(text);
}

export function muted(text: string): string {
	return color.gray(text);
}

export function accent(text: string): string {
	return color.brightCyan(text);
}

export function error(text: string): string {
	return color.brightRed(text);
}

export function success(text: string): string {
	return color.brightGreen(text);
}

/** OSC 8 hyperlink (clickable in xterm when linkHandler is set). */
export function link(uri: string, labelText: string): string {
	return `\x1b]8;;${uri}\x07${color.blue(labelText)}\x1b]8;;\x07`;
}

export function wrapText(text: string, width = 78): string[] {
	const normalized = text.replace(/\s+/g, ' ').trim();

	if (!normalized) {
		return [''];
	}

	const words = normalized.split(' ');
	const lines: string[] = [];
	let current = '';

	for (const word of words) {
		let next = word;
		if (current) {
			next = `${current} ${word}`;
		}

		if (next.length > width) {
			if (current) {
				lines.push(current);
				current = word;
				continue;
			}
		}

		current = next;
	}

	if (current) {
		lines.push(current);
	}

	return lines;
}
