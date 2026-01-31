export const BlogTags = {
	Productivity: 'productivity',
	Development: 'development',
	Lifestyle: 'lifestyle',
	Innovation: 'innovation',
	Business: 'business',
	Career: 'career',
	Guide: 'guide',
	Product: 'product',
};

export const blogTags = [
	{
		name: BlogTags.Productivity,
		color: 'green',
	},
	{
		name: BlogTags.Lifestyle,
		color: 'blue',
	},
	{
		name: BlogTags.Development,
		color: 'purple',
	},
	{
		name: BlogTags.Innovation,
		color: 'red',
	},
	{
		name: BlogTags.Business,
		color: 'orange',
	},
	{
		name: BlogTags.Career,
		color: 'cyan',
	},
	{
		name: BlogTags.Guide,
		color: 'yellow',
	},
	{
		name: BlogTags.Product,
		color: 'pink',
	},
];

export function getTagColor(tag) {
	const color = blogTags.find(blogTag => blogTag.name === tag)?.color;

	if (color === 'blue') {
		return 'indigo';
	}
	return color;
}

export const blogs = [
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
	{
		id: 31,
		title: 'Self-Hosting Unlocked 🚀',
		description: `
			Self-hosting services has been a passion of mine for a while now. Recently, I took that passion a step further by building a custom Raspberry Pi cluster, utilizing orchestration tools to manage and distribute services across it. But why go down the rabbit hole of self-hosting? In this blog post, I discuss the various self-hosted services I have built and how they can provide value to others.
		`,
		keywords: ['monitoring', 'backup', 'services', 'vonkprogramming'],
		tags: [BlogTags.Innovation, BlogTags.Product, BlogTags.Development],
		date: '2025-12-04',
		link: '/blogs/self-hosting-services',
	},
	{
		id: 30,
		title: 'Spectrum Sensing using Cognitive Radio 📡',
		description: `
			Radio signal congestion in Wi-Fi networks is becoming a critical issue as current channel selection methods struggle to keep up with demand. A novel solution utilizes neural networks to "listen" to the frequency spectrum and intelligently identify the best available channels for data transmission. This approach, particularly when using a Convolutional Support Vector Machine, has demonstrated over 90% accuracy in optimizing wireless connectivity and reducing interference.
		`,
		keywords: ['radio signal', 'cognitive radio', 'spectrum sensing', 'neural networks'],
		tags: [BlogTags.Development, BlogTags.Innovation],
		date: '2025-11-15',
		link: '/blogs/spectrum-sensing-cognitive-radio',
	},
];

export default blogs;
