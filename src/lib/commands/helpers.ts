import { error, muted } from '@/lib/ansi';
import type { CommandResult } from '@/lib/commands/types';

export function ok(lines: string[], scrollTo: 'top' | 'bottom' = 'top'): CommandResult {
	return { action: 'print', lines, scrollTo };
}

export function fail(message: string, hint?: string): CommandResult {
	const lines = [error(message)];

	if (hint) {
		lines.push(muted(hint));
	}

	return {
		action: 'print',
		lines,
		scrollTo: 'top',
	};
}

export function getSubcommand(
	args: string[],
	fallback: string,
): { sub: string; rest: string[] } {
	if (args.length === 0) {
		return {
			sub: fallback,
			rest: [],
		};
	}

	return {
		sub: args[0].toLowerCase(),
		rest: args.slice(1),
	};
}
