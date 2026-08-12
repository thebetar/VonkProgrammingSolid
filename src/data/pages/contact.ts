import { accent, color, heading, label, muted, wrapText } from '@/lib/ansi';

export const contact = {
	email: 'info@vonkprogramming.nl',
	github: 'https://github.com/thebetar',
	linkedin: 'https://www.linkedin.com/in/lars-v-82455612a/',
	stackoverflow: 'https://stackoverflow.com/users/10104786/lars-vonk',
	website: 'https://vonkprogramming.nl',
};

export function showContact(): string[] {
	return [
		heading('Contact'),
		'',
		...wrapText(
			'Open to freelance work in web development, AI, data science, and IoT. Reach out via any of the channels below.',
		).map((line) => color.white(line)),
		'',
		`${label('Email:')}          ${accent(contact.email)}`,
		`${label('GitHub:')}         ${color.blue(contact.github)}`,
		`${label('LinkedIn:')}       ${color.blue(contact.linkedin)}`,
		`${label('Stack Overflow:')} ${color.blue(contact.stackoverflow)}`,
		`${label('Website:')}        ${color.blue(contact.website)}`,
		'',
		muted('Prefer email for project inquiries.'),
	];
}
