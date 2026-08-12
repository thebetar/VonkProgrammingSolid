import { muted } from '@/lib/ansi';

export const DEFAULT_PAGE_SIZE = 5;

export interface PageSlice<T> {
	items: T[];
	page: number;
	totalPages: number;
	totalItems: number;
}

export function paginate<T>(items: T[], page: number, pageSize = DEFAULT_PAGE_SIZE): PageSlice<T> {
	const totalItems = items.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

	let safePage = page;
	if (safePage < 1) {
		safePage = 1;
	}
	if (safePage > totalPages) {
		safePage = totalPages;
	}

	const start = (safePage - 1) * pageSize;

	return {
		items: items.slice(start, start + pageSize),
		page: safePage,
		totalPages,
		totalItems,
	};
}

export function paginationFooter(slice: PageSlice<unknown>, commandHint: string): string[] {
	const lines = [
		'',
		muted(`Page ${slice.page}/${slice.totalPages} · ${slice.totalItems} items`),
	];

	if (slice.page < slice.totalPages) {
		lines.push(muted(`Next: ${commandHint} page ${slice.page + 1}`));
	}

	if (slice.page > 1) {
		lines.push(muted(`Prev: ${commandHint} page ${slice.page - 1}`));
	}

	return lines;
}

/** Parse `page <n>` from args. Returns remaining args and page number (default 1). */
export function parsePageArgs(args: string[]): { page: number; rest: string[] } {
	if (!args[0]) {
		return { page: 1, rest: args };
	}

	if (args[0].toLowerCase() !== 'page') {
		return { page: 1, rest: args };
	}

	const n = Number(args[1]);
	if (!Number.isFinite(n)) {
		return { page: 1, rest: args };
	}

	if (n < 1) {
		return { page: 1, rest: args };
	}

	return {
		page: Math.floor(n),
		rest: args.slice(2),
	};
}
