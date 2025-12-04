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
		id: 31,
		title: 'VonkProgramming services 🚀',
		description: `
			Self-hosting services has been a passion of mine for a while now. Recently, I took that passion a step further by building a custom Raspberry Pi cluster, utilizing orchestration tools to manage and distribute services across it. But why go down the rabbit hole of self-hosting? In this blog post, I discuss the various self-hosted services I have built and how they can provide value to others.
		`,
		keywords: ['monitoring', 'backup', 'services', 'vonkprogramming'],
		tags: [BlogTags.Innovation, BlogTags.Product, BlogTags.Development],
		date: '2025-12-04',
		link: '/blogs/vonkprogramming-services',
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
	{
		id: 29,
		title: 'My views on AI and the future 🤖',
		description: `
			Artificial Intelligence, you've probably heard this term over a thousand times already. But what is the current state of the technology? Where is it going? What are the good and the bad things about it? In my latest blog I talk about my views on this topic and dive into what I think the technology can do now, and what it will be able to do in the near future.
		`,
		keywords: ['ai', 'future', 'technology', 'chatgpt'],
		tags: [BlogTags.Innovation, BlogTags.Development],
		date: '2025-10-18',
		link: '/blogs/ai-thoughts',
	},
	{
		id: 28,
		title: 'Taking back control 💪',
		description: `
			Reliance on big companies has become more and more of a concern as of recently, for me as well. So the last couple of months I have been looking into how to host some of the most important services for me myself. In this blog post I describe my journey into starting.
		`,
		keywords: ['raspberry pi', 'self-hosting', 'independency', 'python'],
		tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Lifestyle],
		date: '2025-08-08',
		link: '/blogs/taking-control',
	},
];

export default blogs;
