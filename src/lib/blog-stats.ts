function toViewCount(value: unknown): number | null {
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}

export async function fetchBlogViewCounts(): Promise<Map<number, number>> {
	try {
		const res = await fetch('/scripts/blog.php', {
			signal: AbortSignal.timeout(4000),
		});
		if (!res.ok) {
			return new Map();
		}

		const data: unknown = await res.json();
		if (!Array.isArray(data)) {
			return new Map();
		}

		const map = new Map<number, number>();
		for (const row of data) {
			if (!row || typeof row !== 'object') {
				continue;
			}

			const record = row as { id?: unknown; views?: unknown };
			const id = Number(record.id);
			const views = toViewCount(record.views);
			if (Number.isFinite(id) && views !== null) {
				map.set(id, views);
			}
		}

		return map;
	} catch {
		return new Map();
	}
}

export async function trackBlogView(id: number): Promise<number | null> {
	try {
		const res = await fetch(`/scripts/blog.php?id=${encodeURIComponent(String(id))}`, {
			signal: AbortSignal.timeout(4000),
		});
		if (!res.ok) {
			return null;
		}

		const data: unknown = await res.json();
		if (!data || typeof data !== 'object' || !('blog' in data)) {
			return null;
		}

		const blog = (data as { blog?: { views?: unknown } }).blog;
		return toViewCount(blog?.views);
	} catch {
		return null;
	}
}

export function formatViewCount(views: number): string {
	return views === 1 ? '1 view' : `${views} views`;
}
