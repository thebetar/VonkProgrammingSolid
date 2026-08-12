export type CommandAction = 'print' | 'none';

export interface CommandResult {
	action: CommandAction;
	lines?: string[];
	/** Where to leave the viewport after printing (default top for readability). */
	scrollTo?: 'top' | 'bottom';
	download?: {
		url: string;
		filename: string;
	};
}
