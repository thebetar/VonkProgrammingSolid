import { BlogTags } from '@/data/blog-tags';

export const blogs = [
	{
		id: 38,
		title: 'Supercharging your AI using MCP tools 🔌',
		description: `
			Most of us already use AI every day, but we are often still the ones copying e-mails, user stories and notes into a chat window and writing long prompts to explain the situation. The Model Context Protocol (MCP) changes this by connecting your AI agent directly to the tools where your work lives. In this blog I explain what MCP is, how it connects your e-mail, task board and meetings to your agent, what work is left for us and what to be careful with.
		`,
		keywords: [
			'ai',
			'mcp',
			'model context protocol',
			'ai agents',
			'productivity',
			'automation',
		],
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
		date: '2026-11-11',
		link: '/blogs/mcp-tools',
	},
	{
		id: 37,
		title: 'Opening the Black Box',
		description: `
			Understanding concepts like TCP, messaging queues, and encryption on a conceptual level is often enough for day-to-day work. But once you try to recreate them yourself, you quickly realise how much more ingenious these tools really are. In this blog, I share what I've learned by opening the black box and building my own versions of the fundamentals we use every day.
		`,
		keywords: [
			'side projects',
			'programming',
			'learning',
			'messaging queue',
			'encryption',
			'databases',
		],
		tags: [BlogTags.Development, BlogTags.Education],
		date: '2026-07-30',
		link: '/blogs/opening-the-black-box',
	},
	{
		id: 36,
		title: 'What is a good password? 🔒',
		description: `
			Passwords are the key to your online identity and data. In this blog, I will explain what makes a good password, why using just one password is risky, and how a password manager can help you stay secure in an increasingly dangerous online world.
		`,
		keywords: ['passwords', 'security', 'hacking', 'password manager'],
		tags: [BlogTags.Education, BlogTags.Guide],
		date: '2026-05-21',
		link: '/blogs/password-policy',
	},
	{
		id: 35,
		title: 'Making Sense of the Web, a guide to basic internet terms 🌐',
		description: `
			A beginner-friendly guide demystifying everyday internet terminology. Learn how networks, IP addresses, DNS, firewalls, HTTPS, and VPNs actually work to keep you connected and secure online.
		`,
		keywords: ['networking', 'internet', 'dns', 'ssl', 'https', 'ip'],
		tags: [BlogTags.Development, BlogTags.Education],
		date: '2026-04-26',
		link: '/blogs/basic-internet-terms',
	},
];

export default blogs;
