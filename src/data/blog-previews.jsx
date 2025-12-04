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
	{
		id: 27,
		title: 'How matrices took over the world 🌍',
		description: `
			Matrices are often considered as a pain during your studies, but they are actually used everywhere! 3D rendering, neural networks and simulations all use matrices to perform their calculations. In this blog I will explain how they work and where they are used.
		`,
		tags: [BlogTags.Innovation, BlogTags.Development],
		keywords: ['math', 'matrix', 'linear algebra'],
		date: '2025-07-11',
		link: '/blogs/matrices',
	},
	{
		id: 26,
		title: 'The wonderful world of IoT: The perfect hobby for tech enthusiasts 👨‍💻',
		description: `
			Over the last months I have been getting more and more interested in creating all kinds of IoT projects. It started with a christmas decoration last christmas but has turned into a full hobby. Home automations are already being built which will hopefully make life easier and more fun!
		`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: [
			'iot',
			'internet of things',
			'hobby',
			'home automation',
			'smart home',
			'arduino',
			'esp32',
			'raspberry pi',
		],
		date: '2025-07-05',
		link: '/blogs/iot-hobby',
	},
	{
		id: 25,
		title: 'My operating system journey: From Windows to Linux 🐧',
		description: `In this blog post, I will share my journey of switching from Windows to Linux, the challenges I faced, and the benefits I have experienced since making the switch.`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['linux', 'windows', 'operating system', 'switching', 'productivity'],
		date: '2025-06-06',
		link: '/blogs/linux-journey',
	},
	{
		id: 24,
		title: 'ZenuNet: An easy way to create your own neural network',
		description:
			'ZenuNet is an application to learn all about neural networks. It uses algorithms written in Javascript by me to train simple neural networks models. If you are experienced in AI or a complete beginner, this application is for you! Be sure to check it out!',
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Product],
		keywords: ['neural network', 'machine learning', 'deep learning', 'ai', 'artificial intelligence'],
		date: '2025-04-18',
		link: '/blogs/zenunet',
	},
	{
		id: 23,
		title: 'Neural Networks: A Beginner’s Guide 🧠',
		description:
			'Neural networks have become more and more important as of recent times. But how do they work? In this blog post I will try to explain it in a way that technical and non-technical people will understand',
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['neural networks', 'machine learning', 'deep learning', 'ai', 'artificial intelligence'],
		date: '2025-02-28',
		link: '/blogs/neural-networks',
	},
	{
		id: 22,
		title: 'How the internet works 🌐',
		description:
			'In this blog post, I will try to summarize how a packet is sent and received and highlight some interesting facts about networking.',
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['networking', 'internet', 'packet', 'routing', 'ip address'],
		date: '2025-02-11',
		link: '/blogs/how-the-internet-works',
	},
	{
		id: 21,
		title: 'Getting back into studying 📚',
		description: `I have recently returned to university to pursue my master's degree after working for a three years. In this blog post, I'll share my experience and how working as a developer between my bachelor's and master's degrees has changed my perspective on studying and has made me a very motivated student.`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['studying', 'productivity', 'learning', 'focus', 'motivation'],
		date: '2025-01-12',
		link: '/blogs/getting-back-into-studying',
	},
	{
		id: 20,
		title: 'Over-Specialization in Development 🔨',
		description: `Specialization can feel like a strength, but is it always the best choice for developers? In this blog post, I'll discuss the benefits of broadening your focus and how over-specialization can limit your growth and opportunities.`,
		tags: [BlogTags.Development, BlogTags.Career],
		keywords: ['development', 'specialization', 'framework', 'tool', 'opportunities', 'growth'],
		date: '2024-12-06',
		link: '/blogs/over-specialization',
	},
	{
		id: 19,
		title: 'Rebulding my personal website 🛠️',
		description: `
			Like every 1 to 2 years I recently decided to rebuild my website again using another framework. This time I chose to use Solid.js to replace my old Astro.js setup. In this blog post I will talk about my experience setting everything up and the reasons why I chose Solid.js.
		`,
		tags: [BlogTags.Development, BlogTags.Productivity],
		keywords: ['solid.js', 'astro.js', 'website', 'framework', 'rebuild'],
		date: '2024-11-24',
		link: '/blogs/rebuilding-website',
	},
	{
		id: 18,
		title: 'The magic of Large Language Models 🪄',
		description: `
            Large Language Models have taken the world by storm, but how do they actually work? In this blog post I will talk about the magic behind Large Language Models.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['development', 'abstraction', 'efficiency', 'cost', 'flexibility', 'performance'],
		date: '2024-11-12',
		link: '/blogs/large-language-models',
	},
	{
		id: 17,
		title: 'Google Chrome tips & tricks 🔎',
		description: `
            Are you using Google Chrome for browsing the web? In this blog post I will show you some tips and tricks that will help you get the most out of your browsing experience
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle],
		keywords: ['chrome', 'tips', 'tricks', 'browser'],
		date: '2024-11-08',
		link: '/blogs/chrome-tips',
	},
	{
		id: 16,
		title: 'Unlocking the Full Power of Version Control 🚀',
		description: `
            Version control is a powerful tool that can help you manage your codebase more effectively. In this blog post, I'll discuss some advanced version control techniques that can help you unlock the full power of version control and take your development workflow to the next level.
        `,
		tags: [BlogTags.Development, BlogTags.Productivity],
		keywords: ['development', 'version control', 'git', 'github', 'bitbucket', 'gitlab'],
		date: '2024-10-12',
		link: '/blogs/version-control',
	},
	{
		id: 15,
		title: 'The power of boredom 🤯',
		description: `
            Have you ever noticed that you come up with the best ideas when you are bored? In this blog post I will talk about the power of boredom and how you can use it to your advantage.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['boredom', 'productivity', 'creativity', 'motivation'],
		date: '2024-09-21',
		link: '/blogs/being-bored',
	},
	{
		id: 14,
		title: 'Connected world 🌐',
		description: `
            In today's interconnected world, having a strong network is as crucial as being skilled, as connections can open doors to opportunities that talent alone might not. By leveraging both local and digital networks, you can enhance your professional reach and position yourself for greater success.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['network', 'connections', 'local network', 'connections', 'value of connections'],
		date: '2024-08-31',
		link: '/blogs/connected-world',
	},
	{
		id: 13,
		title: 'Moving to Poland 🌍',
		description: `
            In this blog post I will describe my experience with moving from the Netherlands to Poland. I will describe the challenges I faced and how I tackled them and how I think someone else could tackle them just the same.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['poland', 'life', 'work', 'move', 'netherlands', 'life advice'],
		date: '2024-08-10',
		link: '/blogs/moving-to-poland',
	},
	{
		id: 12,
		title: 'The degradation of code quality 📉',
		description: `
            Have you also noticed that software seems to have more and more bugs and big crashes seem to occur more often? In this blog post I will talk about the challenges that come with guaranteeing high code quality.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['code', 'quality', 'degradation', 'agile', 'competition', 'quality assurance'],
		date: '2024-07-27',
		link: '/blogs/degradation-code-quality',
	},
	{
		id: 11,
		title: 'The abstraction spectrum 🌈',
		description: `
            Developers often prefer to solve all their problems using code, sometimes however using a paid service or a no code solution is a better way to solve your problem faster. In this blog post I will talk about the considerations I make when solving a problem and where I think using abstract solutions like no code are justified.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Business],
		keywords: ['development', 'abstraction', 'efficiency', 'cost', 'flexibility', 'performance'],
		date: '2024-07-20',
		link: '/blogs/abstraction-spectrum',
	},
	{
		id: 10,
		title: 'The viability of monoliths 🤫',
		description: `
            Is kubernetes really the greatest invention of all time? Are AWS and Azure really going to scale infinetely? Maybe there is still a place in this world for monoliths and dedicated servers. In this blog I talk about my views on this topic and how I think that monoliths are still a viable option for a lot of companies.
        `,
		tags: [BlogTags.Development],
		keywords: ['monolith', 'cloud', 'hosting', 'cloud hosting', 'controversial'],
		date: '2024-07-13',
		link: '/blogs/viability-of-monoliths',
	},
	{
		id: 9,
		title: 'Why is context important? 🤔',
		description: `
            Development teams are often too focussed on the products they work on directly and don't stop to consider who the users are and where the product fits in to the bigger system and what stacks are used that are closely related to the product. In this blog post I will talk about how I deal with understanding this context and how I am often able to communicate with team that work in completely different stacks.
        `,
		tags: [BlogTags.Development, BlogTags.Business, BlogTags.Career],
		keywords: ['development', 'career', 'stack', 'improvement'],
		date: '2024-07-05',
		link: '/blogs/connected-stacks',
	},
	{
		id: 8,
		title: 'The love of programming ❤️',
		description: `
            Do you have the feeling that programming full time as a job has reduced your appreciation of programming? Or are you just curious about the opinions of another lover of programming. In this blog I discuss why I love programming and how I will keep loving it.
        `,
		tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Innovation],
		keywords: ['development', 'innovation', 'love', 'learning'],
		date: '2024-06-28',
		link: '/blogs/love-programming',
	},
	{
		id: 7,
		title: 'The benefit of believing in yourself 🤩',
		description: `
            Why are all these motivational guru's so successful in conveying their message. I have also had a period in my life where I was susceptible to these kind of voices and what I have noticed; Is that it works very well in achieving more in life! It might sound weird because a lot of the time they also try to sell you some weird course which does not work. But the effect of believing that you will be able to achieve greatness is a very powerful 
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['motivation', 'productivity', 'hard work', 'believe in yourself'],
		date: '2024-06-15',
		link: '/blogs/believe-yourself',
	},
	{
		id: 6,
		title: 'Divide & Conquer 🪖',
		description: `
            It happens to all of us that we encounter something that seems so complex that it cannot be grasped by our brains. But often after looking at the problem for a while and breaking it up into smaller pieces it becomes manageable. In this blog post I will discuss how I use the divide and conquer principle in my coding journey.
        `,
		tags: [BlogTags.Productivity, BlogTags.Development],
		keywords: ['productivity', 'programming', 'problem solving', 'code splitting'],
		date: '2024-06-07',
		link: '/blogs/divide-conquer',
	},
	{
		id: 5,
		title: 'The right tool for the job 🔨',
		description: `
            Finding the right tool for the job can be difficult. Finding the optimal tool is even more difficult. In this blog post I go into my views on finding the right tool and what are important things to take into account.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
		keywords: ['tools', 'growth', 'efficiency', 'ubuntu', 'development', 'golang'],
		date: '2024-05-24',
		link: '/blogs/finding-tools',
	},
	{
		id: 4,
		title: 'Taking notes, a real superpower 🦸',
		description: `
            Also experience forgetfulness every now and then? There is a solution! A superpower that is available to everyone, taking notes. In this blog post I will discuss how taking notes has changed my ability to remember.
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle],
		keywords: ['notes', 'code', 'superpower', 'productivity', 'second brain'],
		date: '2024-05-17',
		link: '/blogs/taking-notes',
	},
	{
		id: 3,
		title: 'Small efficiencies add up',
		description: `
            Working fast and efficient is important. Doing more in less time while impressing your colleagues is amazing. I will dive into what small and easy improvements every developer can make to work more efficiently and save time in the long run which can be spent on other things (most likely more coding!)
        `,
		tags: [BlogTags.Productivity, BlogTags.Development, BlogTags.Career],
		keywords: ['efficiency', 'programming', 'value', 'developer', 'productivity'],
		date: '2024-05-11',
		link: '/blogs/small-efficiencies',
	},
	{
		id: 2,
		title: 'Learning sustainably',
		description: `
            Continuous learning is very important in the world of software engineering. But a pitfall a lot of people encounter is that they cannot stick to it. In this blog post I will delve into my personal journey with learning and my findings and tips.
        `,
		tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['learning', 'programming', 'projects', 'career', 'experience', 'study', 'growth'],
		date: '2024-05-07',
		link: '/blogs/learning-sustainably',
	},
	{
		id: 1,
		title: 'How to achieve code excellence',
		description: `
            What are the key principles of code excellence? What rules to adhere to and what tools to use? This blog post will delve deep into the world of writing excellent code, click read more to find out.
        `,
		tags: [BlogTags.Development, BlogTags.Productivity, BlogTags.Career],
		keywords: [
			'code quality',
			'code excellence',
			'code splitting',
			'linting',
			'testing',
			'comments',
			'never nesting',
		],
		date: '2024-04-24',
		link: '/blogs/code-excellence',
	},
];

export default blogs;
