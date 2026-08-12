import { accent, color, heading, label, muted, wrapText } from '@/lib/ansi';

const aboutParagraphs = [
	'With nearly a decade of professional experience, I am a developer specializing in PHP, JavaScript, and Python, with a passion for C++ and Go. As a freelancer, I am dedicated to delivering high-quality software and continuously expanding my skills.',
	"Currently, I am deepening my expertise with a Master's degree in Computer Systems and Networks at the Warsaw University of Technology. In my free time, I enjoy building C++ tools to understand how software is made and developing IoT solutions to automate my home.",
	'I am actively seeking new freelance opportunities in web development, AI, data science, and IoT. Let’s build something great together!',
];

export function showAbout(): string[] {
	const lines: string[] = [
		heading('About'),
		'',
		`${label('Name:')}  ${color.brightWhite('Lars Vonk')}`,
		`${label('Role:')}  ${accent('Full-Stack Engineer')} | ${accent('Custom Software Solutions')}`,
		'',
	];

	for (const paragraph of aboutParagraphs) {
		lines.push(...wrapText(paragraph).map((line) => color.white(line)));
		lines.push('');
	}

	lines.push(muted('See also: experience list | projects list | skills list | contact'));
	return lines;
}
