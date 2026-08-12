import { accent, color, heading, label, muted, wrapText } from '@/lib/ansi';
import { paginate, paginationFooter } from '@/lib/paginate';

export interface EducationEntry {
	id: string;
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	summary: string;
	description: string[];
	sortDate: string;
}

export const education: EducationEntry[] = [
	{
		id: 'masters-csn',
		name: "Master's degree, Computer systems and networks",
		location: 'Warsaw, Mazowieckie, Poland',
		startDate: '2023',
		endDate: '2025',
		sortDate: '2023-01',
		summary: 'Warsaw University of Technology — thesis on Spectrum Sensing using Cognitive Radio (GPA 4.55/5).',
		description: [
			'After working for 3 years, I decided to return to university to gain international experience and deeper insight into Computer Science.',
			"My thesis focused on 'Spectrum Sensing using Cognitive Radio,' which allowed me to combine Radio Signal Processing with Machine Learning.",
			'I received a 5/5 for my thesis and finished my studies with a 4.55/5 GPA.',
		],
	},
	{
		id: 'hbo-ict',
		name: 'HBO-ICT, Windesheim Flevoland',
		location: 'Almere, Flevoland, Nederland',
		startDate: '2016',
		endDate: '2020',
		sortDate: '2016-01',
		summary: "Bachelor's in Software Engineering, plus a minor in entrepreneurship.",
		description: [
			"Bachelor's degree, Software Engineering",
			'After high school I studied software engineering at Windesheim Flevoland, worked on various projects, and completed a minor in entrepreneurship.',
		],
	},
	{
		id: 'cambridge-c1',
		name: 'Cambridge English: C1',
		location: 'Online',
		startDate: 'Aug 2016',
		endDate: 'Aug 2016',
		sortDate: '2016-08',
		summary: 'Cambridge English C1 proficiency certificate.',
		description: [
			'A certificate proving English proficiency at C1 level.',
			'Issued by Cambridge English Language Assessment.',
		],
	},
	{
		id: 'aws-cloud',
		name: 'AWS cloud practitioner',
		location: 'Online',
		startDate: 'Feb 2021',
		endDate: 'Feb 2021',
		sortDate: '2021-02',
		summary: 'AWS Cloud Practitioner certification.',
		description: ['AWS cloud practitioner certification', 'Issued by Amazon Web Services.'],
	},
	{
		id: 'scrum-master',
		name: 'Certified scrum master',
		location: 'Online',
		startDate: 'Dec 2022',
		endDate: 'Dec 2022',
		sortDate: '2022-12',
		summary: 'ScrumFoundation Certified Scrum Master.',
		description: [
			'Basic understanding of the scrum framework and how to work and/or lead in a scrum team.',
			'Issued by ScrumFoundation.',
		],
	},
	{
		id: 'graph-developer',
		name: 'Graph Developer - Associate',
		location: 'Online',
		startDate: 'Apr 2022',
		endDate: 'Apr 2022',
		sortDate: '2022-04',
		summary: 'Apollo Graph Developer Associate course.',
		description: ['Basic online course learning GraphQL from the Apollo team.', 'Issued by Apollo.'],
	},
	{
		id: 'udemy',
		name: 'Various Udemy courses',
		location: 'Online',
		startDate: 'Jul 2020',
		endDate: 'Present',
		sortDate: '2020-07',
		summary: 'Ongoing courses across Vue, React, Node, MongoDB, Express and more.',
		description: [
			'I keep skills up to date with courses on Vue.js, React, Node.js, MongoDB, Express.js, and more.',
			'Issued by Udemy.',
		],
	},
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

function findEducation(query: string): EducationEntry | undefined {
	const q = query.trim().toLowerCase();

	for (const entry of education) {
		if (entry.id === q) {
			return entry;
		}

		if (entry.name.toLowerCase() === q) {
			return entry;
		}

		if (entry.name.toLowerCase().includes(q)) {
			return entry;
		}
	}

	return undefined;
}

export function listEducation(page: number): { lines: string[]; page: number } {
	const slice = paginate(education, page);
	const idWidth = Math.max(...slice.items.map((entry) => entry.id.length));
	const lines: string[] = [
		heading('Education'),
		muted('Newest first. Use: education get <id>  |  education list page <n|next|prev>'),
		'',
	];

	for (const entry of slice.items) {
		lines.push(
			`${color.yellow(entry.id.padEnd(idWidth))}  ${color.bold(color.brightWhite(entry.name))}`,
		);
		lines.push(`  ${color.dim(`${entry.startDate} — ${entry.endDate}`)}  ${muted(entry.location)}`);
		lines.push(...wrapText(entry.summary, 74).map((line) => `  ${color.white(line)}`));
		lines.push('');
	}

	lines.push(...paginationFooter(slice, 'education list'));
	return { lines, page: slice.page };
}

export function showEducation(id: string): string[] | null {
	const entry = findEducation(id);
	if (!entry) return null;

	const lines = [
		heading(`Education · ${entry.name}`),
		'',
		`${label('ID:')}    ${accent(entry.id)}`,
		`${label('When:')}  ${color.yellow(`${entry.startDate} — ${entry.endDate}`)}`,
		`${label('Where:')} ${muted(entry.location)}`,
		'',
	];

	for (const paragraph of entry.description) {
		lines.push(...wrapText(paragraph).map((line) => color.white(line)));
		lines.push('');
	}

	return lines;
}
