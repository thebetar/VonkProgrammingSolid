export enum SkillType {
	LANGUAGE = 'LANGUAGE',
	PROGRAMMING_LANGUAGE = 'PROGRAMMING_LANGUAGE',
	DATABASE = 'DATABASE',
	FRAMEWORK = 'FRAMEWORK',
	TOOL = 'TOOL',
	INFRASTRUCTURE = 'INFRASTRUCTURE',
	ECOMMERCE = 'ECOMMERCE',
	OTHER = 'OTHER',
}

export interface Skill {
	title: string;
	years: number;
	level: number;
	type: SkillType;
	featured?: boolean;
}

export const skillTypeLabels: Record<SkillType, string> = {
	[SkillType.LANGUAGE]: 'Spoken Languages',
	[SkillType.PROGRAMMING_LANGUAGE]: 'Programming Languages',
	[SkillType.DATABASE]: 'Databases',
	[SkillType.FRAMEWORK]: 'Frameworks',
	[SkillType.TOOL]: 'Tools',
	[SkillType.INFRASTRUCTURE]: 'Infrastructure',
	[SkillType.ECOMMERCE]: 'E-commerce',
	[SkillType.OTHER]: 'Other',
};

/** Category order by typical tech-sector marketability (spoken languages last). */
export const skillTypeOrder: SkillType[] = [
	SkillType.PROGRAMMING_LANGUAGE,
	SkillType.FRAMEWORK,
	SkillType.INFRASTRUCTURE,
	SkillType.DATABASE,
	SkillType.TOOL,
	SkillType.ECOMMERCE,
	SkillType.OTHER,
	SkillType.LANGUAGE,
];

export const skillTypeAliases: Record<string, SkillType> = {
	language: SkillType.LANGUAGE,
	languages: SkillType.LANGUAGE,
	spoken: SkillType.LANGUAGE,
	'spoken-language': SkillType.LANGUAGE,
	'spoken-languages': SkillType.LANGUAGE,
	programming: SkillType.PROGRAMMING_LANGUAGE,
	'programming-language': SkillType.PROGRAMMING_LANGUAGE,
	'programming-languages': SkillType.PROGRAMMING_LANGUAGE,
	database: SkillType.DATABASE,
	databases: SkillType.DATABASE,
	framework: SkillType.FRAMEWORK,
	frameworks: SkillType.FRAMEWORK,
	tool: SkillType.TOOL,
	tools: SkillType.TOOL,
	infrastructure: SkillType.INFRASTRUCTURE,
	infra: SkillType.INFRASTRUCTURE,
	ecommerce: SkillType.ECOMMERCE,
	'e-commerce': SkillType.ECOMMERCE,
	other: SkillType.OTHER,
};
