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
	[SkillType.LANGUAGE]: 'Languages',
	[SkillType.PROGRAMMING_LANGUAGE]: 'Programming Languages',
	[SkillType.DATABASE]: 'Databases',
	[SkillType.FRAMEWORK]: 'Frameworks',
	[SkillType.TOOL]: 'Tools',
	[SkillType.INFRASTRUCTURE]: 'Infrastructure',
	[SkillType.ECOMMERCE]: 'E-commerce',
	[SkillType.OTHER]: 'Other',
};

export const skillTypeAliases: Record<string, SkillType> = {
	language: SkillType.LANGUAGE,
	languages: SkillType.LANGUAGE,
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
	ecommerce: SkillType.ECOMMERCE,
	'e-commerce': SkillType.ECOMMERCE,
	other: SkillType.OTHER,
};
