import {
	listSkillCategories,
	listTopSkills,
	showSkillCategory,
} from '@/data/pages/skills';
import { fail, getSubcommand, ok } from '@/lib/commands/helpers';
import type { CommandResult } from '@/lib/commands/types';

export function skillsCommand(args: string[]): CommandResult {
	const { sub, rest } = getSubcommand(args, 'list');

	if (sub === 'list') {
		if (rest.length > 0) {
			return fail(
				`Unexpected arguments: ${rest.join(' ')}`,
				'Usage: skills list',
			);
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
			return fail(
				`Unknown skill category: ${query}`,
				'Try: skills get categories',
			);
		}

		return ok(lines);
	}

	return fail(
		`Unknown skills command: ${sub}`,
		'Usage: skills list | skills get <category>',
	);
}
