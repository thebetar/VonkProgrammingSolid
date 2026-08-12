export interface BlogEntry {
	id: string;
	numericId: number;
	slug: string;
	title: string;
	description: string;
	date: string;
	link: string;
	/** Full article body as plain text (may include markdown-ish headings/code). */
	content: string;
}
