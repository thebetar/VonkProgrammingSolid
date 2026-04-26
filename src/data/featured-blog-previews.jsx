import { BlogTags } from '@/data/blog-tags';

export const blogs = [
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
	{
		id: 33,
		title: 'The challenges of European Cloud ☁️',
		description: `
				Recently, there has been a lot of discussion about the risks of European governments hosting their digital infrastructure on American cloud providers. While I agree with the security concerns, I believe many people overlook the challenges this transition will bring. In this blog post, I explore what makes providers like AWS, Azure, and Google Cloud special, the downsides of relying on them, and the difficulties in creating a European alternative.
			`,
		keywords: ['european cloud', 'cloud hosting', 'aws', 'azure', 'google cloud'],
		tags: [BlogTags.Development, BlogTags.Innovation],
		date: '2026-01-31',
		link: '/blogs/european-cloud-challenges',
	},
	{
		id: 32,
		title: 'Vibe Coding Needs a Vibe Check ⚗️',
		description: `
				Writing unit tests for all your code is not something every developer or company has the time or resources to do. However they can ensure that your code works as expected and prevent production issues. In this blog post I will discuss how using AI you can easily generate unit tests for your codebase and increase your test coverage with minimal effort.		`,
		keywords: ['unit tests', 'testing', 'ai', 'chatgpt', 'development'],
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
		date: '2025-12-27',
		link: `/blogs/ai-unit-tests`,
	},
];

export default blogs;
