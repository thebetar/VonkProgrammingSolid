import { color, getWrapWidth, heading, muted, wrapText } from '@/lib/ansi';
import {
	SkillType,
	skillTypeAliases,
	skillTypeLabels,
	skillTypeOrder,
	type Skill,
} from './skills.type';

export const skills: Skill[] = [
	{
		title: "Dutch",
		years: 27,
		level: 5,
		type: SkillType.LANGUAGE,
		featured: false
	},
	{
		title: "English",
		years: 21,
		level: 5,
		type: SkillType.LANGUAGE,
		featured: false
	},
	{
		title: "Polish",
		years: 3,
		level: 2,
		type: SkillType.LANGUAGE,
		featured: false
	},
	{
		title: "Javascript",
		years: 9,
		level: 5,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: true
	},
	{
		title: "Python",
		years: 6,
		level: 5,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: true
	},
	{
		title: "Typescript",
		years: 5,
		level: 5,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "HTML",
		years: 9,
		level: 5,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "CSS",
		years: 9,
		level: 5,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "Bash",
		years: 5,
		level: 4,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "SQL",
		years: 9,
		level: 4,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "PHP",
		years: 5,
		level: 4,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "Go",
		years: 1,
		level: 3,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "C++",
		years: 1,
		level: 3,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "C",
		years: 3,
		level: 3,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "Matlab",
		years: 2,
		level: 3,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "Java",
		years: 2,
		level: 2,
		type: SkillType.PROGRAMMING_LANGUAGE,
		featured: false
	},
	{
		title: "MongoDB",
		years: 5,
		level: 5,
		type: SkillType.DATABASE,
		featured: true
	},
	{
		title: "SQLite",
		years: 3,
		level: 5,
		type: SkillType.DATABASE,
		featured: false
	},
	{
		title: "MySQL",
		years: 5,
		level: 4,
		type: SkillType.DATABASE,
		featured: false
	},
	{
		title: "Redis",
		years: 2,
		level: 4,
		type: SkillType.DATABASE,
		featured: false
	},
	{
		title: "Postgres",
		years: 2,
		level: 3,
		type: SkillType.DATABASE,
		featured: false
	},
	{
		title: "Vue.js",
		years: 7,
		level: 5,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "Express.js",
		years: 6,
		level: 5,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "React",
		years: 6,
		level: 5,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "Lit",
		years: 2,
		level: 5,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Solid.js",
		years: 4,
		level: 5,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "Flask",
		years: 3,
		level: 4,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Angular",
		years: 4,
		level: 4,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Ionic",
		years: 3,
		level: 4,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "Laravel",
		years: 2,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: true
	},
	{
		title: "Django",
		years: 3,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "NiceGUI",
		years: 1,
		level: 4,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "React Native",
		years: 3,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Electron",
		years: 1,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Astro",
		years: 2,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Svelte",
		years: 2,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Nuxt.js",
		years: 2,
		level: 3,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Nest.js",
		years: 1,
		level: 2,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Strapi",
		years: 1,
		level: 2,
		type: SkillType.FRAMEWORK,
		featured: false
	},
	{
		title: "Git",
		years: 7,
		level: 5,
		type: SkillType.TOOL,
		featured: true
	},
	{
		title: "Gemini",
		years: 3,
		level: 5,
		type: SkillType.TOOL,
		featured: true
	},
	{
		title: "Sass",
		years: 2,
		level: 5,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Klaviyo",
		years: 2,
		level: 5,
		type: SkillType.TOOL,
		featured: true
	},
	{
		title: "Jest",
		years: 4,
		level: 5,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "ESLint",
		years: 2,
		level: 5,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "npm",
		years: 5,
		level: 5,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "PyTest",
		years: 2,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Chart.js",
		years: 6,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Cypress",
		years: 3,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Pandas",
		years: 3,
		level: 5,
		type: SkillType.TOOL,
		featured: true
	},
	{
		title: "Puppeteer",
		years: 4,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Playwright",
		years: 2,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Stripe",
		years: 2,
		level: 4,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "PyTorch",
		years: 1,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "PySpark",
		years: 1,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Prisma",
		years: 2,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Redux",
		years: 3,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "i18next",
		years: 2,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Payload",
		years: 2,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Vim",
		years: 2,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Langchain",
		years: 1,
		level: 3,
		type: SkillType.TOOL,
		featured: false
	},
	{
		title: "Docker",
		years: 6,
		level: 5,
		type: SkillType.INFRASTRUCTURE,
		featured: true
	},
	{
		title: "Nginx",
		years: 3,
		level: 5,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Github",
		years: 7,
		level: 5,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Github Actions",
		years: 2,
		level: 4,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Apache",
		years: 3,
		level: 3,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Azure DevOps",
		years: 4,
		level: 3,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "AWS",
		years: 2,
		level: 3,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Jenkins",
		years: 1,
		level: 2,
		type: SkillType.INFRASTRUCTURE,
		featured: false
	},
	{
		title: "Lightspeed",
		years: 1,
		level: 3,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "CCVShop",
		years: 1,
		level: 2,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "Magento",
		years: 1,
		level: 2,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "WooCommerce",
		years: 1,
		level: 2,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "Shopify",
		years: 1,
		level: 2,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "Wordpress",
		years: 2,
		level: 3,
		type: SkillType.ECOMMERCE,
		featured: false
	},
	{
		title: "node.js",
		years: 5,
		level: 5,
		type: SkillType.OTHER,
		featured: true
	},
	{
		title: "Linux",
		years: 4,
		level: 4,
		type: SkillType.OTHER,
		featured: false
	},
	{
		title: "Ubuntu",
		years: 4,
		level: 4,
		type: SkillType.OTHER,
		featured: false
	},
	{
		title: "Debian",
		years: 4,
		level: 4,
		type: SkillType.OTHER,
		featured: false
	},
	{
		title: "Windows",
		years: 12,
		level: 4,
		type: SkillType.OTHER,
		featured: false
	},
	{
		title: "Mikrotik RouterOS",
		years: 1,
		level: 3,
		type: SkillType.OTHER,
		featured: false
	}
];

function stars(level: number): string {
	// ASCII keeps column width stable across fonts/terminals (esp. mobile).
	return color.yellow('*'.repeat(level)) + color.dim('.'.repeat(5 - level));
}

function renderSkillRows(group: Skill[]): string[] {
	if (group.length === 0) {
		return [muted('  (no skills in this list)')];
	}

	const width = getWrapWidth();
	const yearsWidth = Math.max(
		...group.map((skill) => `${skill.years}y`.length),
		2,
	);

	// Narrow: compact "Name  9y  *****" rows without a padded table.
	if (width < 48) {
		const titleWidth = Math.min(
			Math.max(...group.map((skill) => skill.title.length)),
			Math.max(10, width - yearsWidth - 11),
		);

		return group.map((skill) => {
			const title =
				skill.title.length > titleWidth
					? `${skill.title.slice(0, Math.max(1, titleWidth - 1))}.`
					: skill.title.padEnd(titleWidth);
			const years = `${skill.years}y`.padStart(yearsWidth);
			return `  ${color.brightWhite(title)}  ${color.dim(years)}  ${stars(skill.level)}`;
		});
	}

	const titleWidth = Math.max(
		...group.map((skill) => skill.title.length),
		'Name'.length,
	);
	const headerYearsWidth = Math.max(yearsWidth, 'Years'.length);

	const header =
		`  ${color.dim('Name'.padEnd(titleWidth))}  ${color.dim('Years'.padStart(headerYearsWidth))}  ${color.dim('Level')}`;
	const divider =
		`  ${color.dim('-'.repeat(titleWidth))}  ${color.dim('-'.repeat(headerYearsWidth))}  ${color.dim('-'.repeat(5))}`;

	const rows = group.map((skill) => {
		const years = `${skill.years}y`.padStart(headerYearsWidth);
		return `  ${color.brightWhite(skill.title.padEnd(titleWidth))}  ${color.dim(years)}  ${stars(skill.level)}`;
	});

	return [header, divider, ...rows];
}

function categoryCommandToken(type: SkillType): string {
	return type.toLowerCase().replaceAll('_', '-');
}

function renderCategoryEntries(prefix: 'command' | 'token'): string[] {
	const width = getWrapWidth();
	const lines: string[] = [];

	for (const type of skillTypeOrder) {
		const token = categoryCommandToken(type);
		const count = skills.filter((skill) => skill.type === type).length;
		const label = `${skillTypeLabels[type]} (${count})`;
		const left = prefix === 'command' ? `skills get ${token}` : token;

		// Stack on narrow screens so long tokens don't overflow.
		if (width < 56 || left.length + 4 + label.length > width) {
			lines.push(`  ${color.yellow(left)}`);
			lines.push(muted(`    ${label}`));
			continue;
		}

		const padTo = prefix === 'command' ? 36 : 24;
		const pad = ' '.repeat(Math.max(2, padTo - left.length));
		lines.push(
			`  ${color.yellow(left)}${pad}${color.brightWhite(skillTypeLabels[type])}  ${color.dim(`(${count})`)}`,
		);
	}

	return lines;
}

function listTopSkills(): string[] {
	const top = skills
		.filter((skill) => skill.featured)
		.sort(compareSkills);

	return [
		heading('Skills'),
		...wrapText(
			'Featured skills below. Full lists are per category.',
		).map((line) => muted(line)),
		'',
		color.brightCyan('Top skills'),
		...renderSkillRows(top),
		'',
		color.brightCyan('Categories'),
		...wrapText('Run: skills get <category>').map((line) => muted(line)),
		'',
		...renderCategoryEntries('command'),
		'',
		muted('Also: skills get categories'),
	];
}

function listSkillCategories(): string[] {
	return [
		heading('Skill categories'),
		...wrapText('Use any of these with: skills get <category>').map(
			(line) => muted(line),
		),
		'',
		...renderCategoryEntries('token'),
		'',
		muted('Example: skills get frameworks'),
	];
}

function listCategory(type: SkillType): string[] {
	const group = skills
		.filter((skill) => skill.type === type)
		.sort(compareSkills);

	return [
		heading(`Skills · ${skillTypeLabels[type]}`),
		'',
		...renderSkillRows(group),
		'',
		...wrapText('Back: skills list  |  skills get categories').map(
			(line) => muted(line),
		),
	];
}

function resolveCategory(query: string): SkillType | undefined {
	const q = query.trim().toLowerCase().replaceAll(' ', '-');

	if (skillTypeAliases[q]) {
		return skillTypeAliases[q];
	}

	const normalizedQuery = query.trim().toLowerCase();

	for (const [key, labelText] of Object.entries(skillTypeLabels)) {
		if (labelText.toLowerCase() === normalizedQuery) {
			return key as SkillType;
		}
	}

	return undefined;
}

function compareSkills(a: { level: number; years: number }, b: { level: number; years: number }): number {
	if (b.level !== a.level) {
		return b.level - a.level;
	}

	return b.years - a.years;
}

export { listTopSkills, listSkillCategories };

export function showSkillCategory(query: string): string[] | null {
	const type = resolveCategory(query);
	if (!type) return null;
	return listCategory(type);
}
