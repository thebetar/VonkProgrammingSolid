import { BlogTags } from '@/data/blog-tags';

export const blogs = [
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
	{
		id: 34,
		title: 'Agentic coding, a new layer of abstraction 🤖',
		description: `
				AI agents are advancing fast, while the introduction of ChatGPT was already a massive shift in how a lot of work was done, the improvements have kept coming. AI agents are doing more and more of the work and becoming impressively good at it as well. I think it is time to stop criticising using a lot of AI in your work and start thinking of ways to streamline using these agents. How to create guardrails so these agents can be used to effectively make us do more work while not generating AI slop.
			`,
		keywords: ['ai', 'agentic coding', 'development', 'productivity'],
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
		date: '2026-03-15',
		link: '/blogs/agentic-coding',
	},
];

export default blogs;
