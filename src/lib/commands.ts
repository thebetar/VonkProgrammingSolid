import { accent, color, error, muted } from '@/lib/ansi';
import { parsePageArgs } from '@/lib/paginate';
import { showAbout } from '@/data/pages/about';
import { listBlogs, showBlog, showLatestBlog } from '@/data/pages/blogs';
import { showContact } from '@/data/pages/contact';
import { listEducation, showEducation } from '@/data/pages/education';
import { listExperience, showExperience } from '@/data/pages/experience';
import { listProjects, showProject } from '@/data/pages/projects';
import { listSkillCategories, listTopSkills, showSkillCategory } from '@/data/pages/skills';
import {
	getResumePdfFilename,
	getResumePdfPath,
	renderResume,
	resumeHelp,
	type ResumeLocale,
	type ResumeVariant,
} from '@/data/resume';
import { getWelcomeText } from '@/data/os';

export type CommandAction = 'print' | 'clear' | 'none';

export interface CommandResult {
	action: CommandAction;
	lines?: string[];
	/** Where to leave the viewport after printing (blogs → top for readability). */
	scrollTo?: 'top' | 'bottom';
	download?: {
		url: string;
		filename: string;
	};
}

function ok(lines: string[], scrollTo: 'top' | 'bottom' = 'bottom'): CommandResult {
	return { action: 'print', lines, scrollTo };
}

function fail(message: string, hint?: string): CommandResult {
	const lines = [error(message)];

	if (hint) {
		lines.push(muted(hint));
	}

	return {
		action: 'print',
		lines,
	};
}

function help(): CommandResult {
	return ok(getWelcomeText());
}

type ListFn = (page: number) => string[];
type GetFn = (id: string) => string[] | null;

function getSubcommand(args: string[], fallback: string): { sub: string; rest: string[] } {
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

function collectionCommand(
	name: string,
	args: string[],
	handlers: {
		list: ListFn;
		get: GetFn;
		getLatest?: () => string[];
		/** Scroll viewport to top after get (long articles). */
		scrollGetToTop?: boolean;
	},
): CommandResult {
	const { sub, rest } = getSubcommand(args, 'list');
	const getScroll = handlers.scrollGetToTop ? 'top' : 'bottom';

	if (sub === 'list') {
		const parsed = parsePageArgs(rest);

		if (parsed.rest.length > 0) {
			return fail(
				`Unexpected arguments: ${parsed.rest.join(' ')}`,
				`Usage: ${name} list [page <n>]`,
			);
		}

		return ok(handlers.list(parsed.page));
	}

	if (sub === 'get') {
		const id = rest.join(' ').trim();

		if (!id) {
			let hint = `Try: ${name} list`;
			if (handlers.getLatest) {
				hint = `Also: ${name} get latest`;
			}

			return fail(`Usage: ${name} get <id>`, hint);
		}

		if (handlers.getLatest) {
			if (id.toLowerCase() === 'latest') {
				return ok(handlers.getLatest(), getScroll);
			}
		}

		const lines = handlers.get(id);
		if (!lines) {
			return fail(`${name} item not found: ${id}`, `Try: ${name} list`);
		}

		return ok(lines, getScroll);
	}

	return fail(
		`Unknown ${name} command: ${sub}`,
		`Usage: ${name} list | ${name} get <id>`,
	);
}

function skillsCommand(args: string[]): CommandResult {
	const { sub, rest } = getSubcommand(args, 'list');

	if (sub === 'list') {
		if (rest.length > 0) {
			return fail(`Unexpected arguments: ${rest.join(' ')}`, 'Usage: skills list');
		}

		return ok(listTopSkills());
	}

	if (sub === 'get') {
		const query = rest.join(' ').trim();

		if (!query) {
			return fail('Usage: skills get <category>', 'Try: skills get categories');
		}

		const normalized = query.toLowerCase();
		if (normalized === 'categories' || normalized === 'category') {
			return ok(listSkillCategories());
		}

		const lines = showSkillCategory(query);
		if (!lines) {
			return fail(`Unknown skill category: ${query}`, 'Try: skills get categories');
		}

		return ok(lines);
	}

	return fail(`Unknown skills command: ${sub}`, 'Usage: skills list | skills get <category>');
}

function isResumeVariant(value: string): value is ResumeVariant {
	if (value === 'compact') {
		return true;
	}

	if (value === 'extended') {
		return true;
	}

	return false;
}

function isResumeLocale(value: string): value is ResumeLocale {
	if (value === 'en') {
		return true;
	}

	if (value === 'nl') {
		return true;
	}

	return false;
}

function resumeCommand(args: string[]): CommandResult {
	const { sub, rest } = getSubcommand(args, 'help');

	if (sub === 'help') {
		return ok(resumeHelp());
	}

	if (sub !== 'get') {
		return fail(`Unknown resume command: ${sub}`, 'Try: resume help');
	}

	const normalized = rest.map((part) => part.toLowerCase());

	if (normalized.length === 0) {
		return resumeResult('extended', 'en');
	}

	if (normalized[0] === 'default') {
		return resumeResult('extended', 'en');
	}

	const variant = normalized[0];
	const locale = normalized[1];

	if (!isResumeVariant(variant)) {
		return fail(`Unknown resume variant: ${variant}`, 'Use: resume get default  or  resume get <compact|extended> <en|nl>');
	}

	if (!locale) {
		return fail(`Usage: resume get ${variant} <en|nl>`, 'Try: resume help');
	}

	if (!isResumeLocale(locale)) {
		return fail(`Unknown locale: ${locale}`, 'Use: <en|nl>');
	}

	return resumeResult(variant, locale);
}

function resumeResult(variant: ResumeVariant, locale: ResumeLocale): CommandResult {
	return {
		action: 'print',
		lines: renderResume(variant, locale),
		download: {
			url: getResumePdfPath(variant, locale),
			filename: getResumePdfFilename(variant, locale),
		},
	};
}

export function runCommand(line: string): CommandResult {
	const trimmed = line.trim();

	if (!trimmed) {
		return { action: 'none' };
	}

	const parts = trimmed.split(/\s+/);
	const command = parts[0].toLowerCase();
	const args = parts.slice(1);

	switch (command) {
		case 'help':
			return help();
		case 'clear':
			return { action: 'clear' };
		case 'about':
			return ok(showAbout());
		case 'contact':
			return ok(showContact());
		case 'blog':
		case 'blogs':
			return collectionCommand('blog', args, {
				list: listBlogs,
				get: showBlog,
				getLatest: showLatestBlog,
				scrollGetToTop: true,
			});
		case 'experience':
			return collectionCommand('experience', args, {
				list: listExperience,
				get: showExperience,
			});
		case 'project':
		case 'projects':
			return collectionCommand('projects', args, {
				list: listProjects,
				get: showProject,
			});
		case 'education':
			return collectionCommand('education', args, {
				list: listEducation,
				get: showEducation,
			});
		case 'skill':
		case 'skills':
			return skillsCommand(args);
		case 'resume':
			return resumeCommand(args);
		default:
			return fail(`Unknown command: ${command}`, 'Type help for available commands.');
	}
}
