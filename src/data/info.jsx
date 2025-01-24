import blogs from './blogs';

export const SkillType = {
	LANGUAGE: 'Programming Language',
	DATABASE: 'Database',
	FRAMEWORK: 'Framework',
	TOOL: 'Tool',
	INFRASTRUCTURE: 'Infrastructure',
	OTHER: 'Other',
};

export const info = {
	baseUrl: 'https://vonkprogramming.nl',
	name: 'Lars Vonk',
	jobDescription1: 'Software enthusiast',
	jobDescription2: 'Code quality advocate',
	description: `
		I am an experienced developer skilled in C++, Go, JavaScript and Python. I value code quality and continuous learning, as shared in my blogs. Check out my GitHub for exciting projects and insights.
	`,
	about: `
		I am an experienced developer with a strong background in JavaScript and Python, and hobby experience with C++ and Go. I value code quality and continuous learning, which I often share through my blogs. In my free time, I work on side projects, explore new technologies, and focus on exciting AI projects through my freelance work. I am also in the process of getting a master's degree in computer systems and networks at the Warsaw University of Technology, where I continue to deepen my knowledge and skills.
	`,
	keywords: 'developer, javascript, python, code quality, blogs',
	blogs,
	skills: [
		{
			title: 'Javascript',
			years: 9,
			level: 5,
			logo: '/assets/svg/javascript.svg',
			link: 'https://www.javascript.com/',
			featured: true,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Python',
			years: 6,
			level: 5,
			logo: '/assets/svg/python.svg',
			link: 'https://www.python.org/',
			featured: true,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Typescript',
			years: 5,
			level: 5,
			logo: '/assets/svg/typescript.svg',
			link: 'https://www.typescriptlang.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'HTML',
			years: 9,
			level: 5,
			logo: '/assets/svg/html.svg',
			link: 'https://html.spec.whatwg.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'CSS',
			years: 9,
			level: 5,
			logo: '/assets/svg/css.svg',
			link: 'https://www.w3.org/Style/CSS/Overview.en.html',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'php',
			years: 5,
			level: 4,
			logo: '/assets/svg/php.svg',
			link: 'https://www.php.net/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Go',
			years: 1,
			level: 4,
			logo: '/assets/svg/go.svg',
			link: 'https://golang.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'C++',
			years: 1,
			level: 3,
			logo: '/assets/svg/c++.svg',
			link: 'https://isocpp.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'C',
			years: 3,
			level: 3,
			logo: '/assets/svg/c.svg',
			link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Matlab',
			years: 2,
			level: 3,
			logo: '/assets/svg/matlab.svg',
			link: 'https://www.mathworks.com/products/matlab.html',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Java',
			years: 2,
			level: 2,
			logo: '/assets/svg/java.svg',
			link: 'https://www.java.com/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'MongoDB',
			years: 5,
			level: 5,
			logo: '/assets/svg/mongodb.svg',
			link: 'https://www.mongodb.com/',
			featured: true,
			type: SkillType.DATABASE,
		},
		{
			title: 'MySQL',
			years: 5,
			level: 4,
			logo: '/assets/svg/mysql.svg',
			link: 'https://www.mysql.com/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Redis',
			years: 2,
			level: 4,
			logo: '/assets/svg/redis.svg',
			link: 'https://redis.io/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'SQLite',
			years: 2,
			level: 4,
			logo: '/assets/svg/sqlite.svg',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Postgres',
			years: 2,
			level: 3,
			logo: '/assets/svg/postgres.svg',
			link: 'https://www.postgresql.org/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Vue',
			years: 7,
			level: 5,
			logo: '/assets/svg/vue.svg',
			link: 'https://vuejs.org/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Express.js',
			years: 6,
			level: 5,
			logo: '/assets/svg/express.svg',
			link: 'https://expressjs.com/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'React',
			years: 6,
			level: 5,
			logo: '/assets/svg/react.svg',
			link: 'https://reactjs.org/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Lit',
			years: 2,
			level: 5,
			logo: '/assets/svg/lit.svg',
			link: 'https://lit.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Flask',
			years: 3,
			level: 4,
			logo: '/assets/svg/flask.svg',
			link: 'https://flask.palletsprojects.com/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Angular',
			years: 4,
			level: 4,
			logo: '/assets/svg/angular.svg',
			link: 'https://angular.io/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Ionic',
			years: 3,
			level: 4,
			logo: '/assets/svg/ionic.svg',
			link: 'https://ionicframework.com/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Django',
			years: 3,
			level: 3,
			logo: '/assets/svg/django.svg',
			link: 'https://www.djangoproject.com/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'React Native',
			years: 3,
			level: 3,
			logo: '/assets/svg/react-native.svg',
			link: 'https://reactnative.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Electron',
			years: 1,
			level: 3,
			logo: '/assets/svg/electron.svg',
			link: 'https://www.electronjs.org/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Astro',
			years: 2,
			level: 3,
			logo: '/assets/svg/astro.svg',
			link: 'https://astro.build/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Svelte',
			years: 2,
			level: 3,
			logo: '/assets/svg/svelte.svg',
			link: 'https://svelte.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Nest.js',
			years: 1,
			level: 2,
			logo: '/assets/svg/nestjs.svg',
			link: 'https://nestjs.com/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Strapi',
			years: 1,
			level: 2,
			logo: '/assets/svg/strapi.svg',
			link: 'https://www.strapi.io/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Git',
			years: 7,
			level: 5,
			logo: '/assets/svg/git.svg',
			link: 'https://git-scm.com/',
			featured: true,
			type: SkillType.TOOL,
		},
		{
			title: 'Sass',
			years: 2,
			level: 5,
			logo: '/assets/svg/sass.svg',
			link: 'https://sass-lang.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Jest',
			years: 4,
			level: 5,
			logo: '/assets/svg/jest.svg',
			link: 'https://jestjs.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'ESLint',
			years: 2,
			level: 5,
			logo: '/assets/svg/eslint.svg',
			link: 'https://eslint.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'npm',
			years: 5,
			level: 5,
			logo: '/assets/svg/npm.svg',
			link: 'https://www.npmjs.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Chart.js',
			years: 6,
			level: 4,
			logo: '/assets/svg/chartjs.svg',
			link: 'https://www.chartjs.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Cypress',
			years: 3,
			level: 4,
			logo: '/assets/svg/cypress.svg',
			link: 'https://www.cypress.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Pandas',
			years: 1,
			level: 4,
			logo: '/assets/svg/pandas.svg',
			link: 'https://pandas.pydata.org/',
			featured: true,
			type: SkillType.TOOL,
		},
		{
			title: 'Puppeteer',
			years: 4,
			level: 4,
			logo: '/assets/svg/puppeteer.svg',
			link: 'https://pptr.dev/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'PyTorch',
			years: 1,
			level: 3,
			logo: '/assets/svg/pytorch.svg',
			link: 'https://pytorch.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'PySpark',
			years: 1,
			level: 3,
			logo: '/assets/svg/pyspark.svg',
			link: 'https://spark.apache.org/docs/latest/api/python/index.html',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Prisma',
			years: 2,
			level: 3,
			logo: '/assets/svg/prisma.svg',
			link: 'https://www.prisma.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Redux',
			years: 3,
			level: 3,
			logo: '/assets/svg/redux.svg',
			link: 'https://redux.js.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'i18next',
			years: 2,
			level: 3,
			logo: '/assets/svg/i18next.svg',
			link: 'https://www.i18next.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Stripe',
			years: 2,
			level: 3,
			logo: '/assets/svg/stripe.svg',
			link: 'https://stripe.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Payload',
			years: 2,
			level: 3,
			logo: '/assets/svg/payload.svg',
			link: 'https://payloadcms.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Vim',
			years: 2,
			level: 3,
			logo: '/assets/svg/vim.svg',
			link: 'https://www.vim.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Langchain',
			years: 1,
			level: 3,
			logo: '/assets/svg/langchain.svg',
			link: 'https://langchain.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Docker',
			years: 6,
			level: 5,
			logo: '/assets/svg/docker.svg',
			link: 'https://www.docker.com/',
			featured: true,
			type: SkillType.INFRASTRUCTURE,
		},

		{
			title: 'Nginx',
			years: 3,
			level: 5,
			logo: '/assets/svg/nginx.svg',
			link: 'https://www.nginx.com/',
			featured: true,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Github',
			years: 7,
			level: 5,
			logo: '/assets/svg/github.svg',
			link: 'https://github.com/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Github Actions',
			years: 2,
			level: 4,
			logo: '/assets/svg/github-actions.svg',
			link: 'https://github.com/features/actions',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Apache',
			years: 3,
			level: 3,
			logo: '/assets/svg/apache.svg',
			link: 'https://httpd.apache.org/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Azure DevOps',
			years: 4,
			level: 3,
			logo: '/assets/svg/azure-devops.svg',
			link: 'https://azure.microsoft.com/en-us/services/devops/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Jenkins',
			years: 1,
			level: 2,
			logo: '/assets/svg/jenkins.svg',
			link: 'https://www.jenkins.io/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'node.js',
			years: 5,
			level: 5,
			logo: '/assets/svg/nodejs.svg',
			link: 'https://nodejs.org/',
			featured: true,
			type: SkillType.OTHER,
		},
		{
			title: 'Linux',
			years: 4,
			level: 4,
			logo: '/assets/svg/linux.svg',
			link: 'https://www.linux.org/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Ubuntu',
			years: 4,
			level: 4,
			logo: '/assets/svg/ubuntu.svg',
			link: 'https://ubuntu.com/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Debian',
			years: 4,
			level: 4,
			logo: '/assets/svg/debian.svg',
			link: 'https://www.debian.org/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Windows',
			years: 12,
			level: 4,
			logo: '/assets/svg/windows.svg',
			link: 'https://www.microsoft.com/en-us/windows/',
			featured: false,
			type: SkillType.OTHER,
		},
	],

	experience: [
		{
			name: 'Wisepim',
			location: 'Remote - Enschede, Overijssel, Nederland',
			startDate: 'Sep 2024',
			endDate: 'Now',
			description: [
				'At Wisepim, I am currently working as a full-stack developer, filling any role they need. My current responsiblities lie mostly in the connecting of different APIs together so that they can be used in the Wisepim platform, which is a PIM system that integrates AI to improve data. I am also working on the front-end of the platform, using NiceGUI to create a user-friendly interface for the users of the platform.',
			],
			link: 'https://www.wisepim.com/',
			featured: true,
		},
		{
			name: 'WebshopImporter',
			location: 'Remote - Enschede, Overijssel, Nederland',
			startDate: 'Sep 2024',
			endDate: 'Now',
			description: [
				'At WebshopImporter, I am currently working as a full-stack developer, filling any role they need. My current responsiblities lie mostly in the connecting of different APIs together so that they can be used in the WebshopImporter platform. I am also working on the front-end of the platform, using NiceGUI to create a user-friendly interface for the users of the platform.',
			],
			link: 'https://www.webshopimporter.com/',
			featured: true,
		},
		{
			name: 'Chary Solutions',
			location: 'Amsterdam, Noord-Holland, Nederland',
			startDate: 'Jul 2024',
			endDate: 'Now',
			description: [
				"At Chary Solutions, I served as the Senior Developer, leading the technical development for integrating marketing software, Klaviyo, with various content management systems that were not supported by default integrations. Additionally, I developed automations to enhance the company's operational efficiency.",
			],
			link: 'https://www.spar.nl/',
			featured: true,
		},
		{
			name: 'SPAR',
			location: 'Remote - Waalwijk, Noord-Brabant, Nederland',
			startDate: 'Jun 2024',
			endDate: 'Dec 2024',
			description: [
				'At SPAR Nederland I work as a data engineer solving data related questions and problems. I am mostly using my SQL, Azure and python skills to solve complex problems related to big data. Within this role I have gotten the opportunity to try a different stack than I did in my previous roles. I hope this experience will help me broaden my skillset and become a more flexible developer.',
			],
			link: 'https://www.spar.nl/',
			featured: true,
		},
		{
			name: 'ING',
			location: 'Amsterdam, Noord-Holland, Nederland',
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
			description: [
				"The role at 'ING', in Amsterdam, North Holland, Netherlands, began in April 2022 and ended in September 2023. It primarily involved serving as a full-stack developer, working on various interfaces that are utilized by ING, employing the Lit element framework. In addition to these duties, for a certain period, the role also encompassed serving as a product owner. This required overseeing project timelines, prioritizing features, collaborating with stakeholders, and making key decisions about product direction. This multi-faceted role demonstrates a blend of technical acumen and leadership ability.",
			],
			link: 'https://www.ing.nl/',
			featured: true,
		},
		{
			name: 'Quintor',
			location: 'Amersfoort, Utrecht, Nederland',
			startDate: 'Oct 2020',
			endDate: 'Oct 2023',
			description: [
				"At 'Quintor' in Amersfoort, Utrecht, Netherlands, from October 2020 to October 2023, the role mainly involved working on various software development projects for large clients like ING and different government entities. As part of the experience at Quintor, a traineeship was also completed. This program emphasized learning and implementing best practices for code quality through testing and linting methodologies, which played a significant role in the coding projects.",
			],
			link: 'https://www.quintor.nl/',
			featured: true,
		},

		{
			name: 'SVB',
			location: 'Amstelveen, Noord-Holland, Nederland',
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			description: [
				"At 'SVB', based in Amstelveen, North Holland, Netherlands, the role took place from April 2021 to April 2022. The primary responsibility involved programming in JavaScript, utilizing the Angular framework. An important part of the job was managing a significant transition, migrating an existing system from AngularJS to Angular. This migration required deep understanding of both frameworks, and extensive planning to ensure a seamless transition with minimal disruption. In addition to development work, the role also entailed working on pipelines, which required careful oversight and management to ensure a smooth, efficient workflow and continuous delivery.",
			],
			link: 'https://www.svb.nl/',
			featured: true,
		},
		{
			name: 'J-Tax Automotive',
			location: 'Almere, Flevoland, Nederland',
			startDate: 'Jun 2021',
			endDate: 'Present',
			description: [
				"Joining 'J-Tax Automotive' situated in Almere, Flevoland, Netherlands, from June 2021, I undertook the significant responsibility of crafting bespoke software tailored for valuation reports. This marked a pivotal milestone as my first major independent project as a freelancer. The project harnessed the power of Vue.js, ExpressJS, and MongoDB to seamlessly develop a comprehensive solution. The outcome of this endeavor was transformative, as the client now reaps the benefit of generating up to four times the number of reports, highlighting the substantial impact of streamlined and efficient software implementation.",
			],
			link: 'https://www.j-taxautomotive.nl/',
			featured: false,
		},
		{
			name: 'MedWeb',
			location: 'Hilversum, Noord-Holland, Nederland',
			startDate: 'Sep 2019',
			endDate: 'Aug 2020',
			description: [
				"At 'MedWeb' in Hilversum, North Holland, Netherlands, where I was engaged from September 2019 to August 2020, I played a key role in developing a roster application for medical professionals and updating the 'Medspace' application using VueJS/JavaScript, IBM Notes, IBM Domino Designer, CSS, and HTML. During this time, I also focused on enhancing data visualization capabilities by incorporating Chart.js, enabling clients to derive valuable insights from their data. Working closely with LotusScript, I contributed to the application's functionality, translating intricate data into meaningful charts that empowered medical specialists and doctors to make informed decisions based on clear, visualized information.",
			],
			link: 'https://www.medweb.nl/',
			featured: false,
		},
		{
			name: 'Floriade',
			location: 'Almere, Flevoland, Nederland',
			startDate: 'Sep 2018',
			endDate: 'Jun 2019',
			description: [
				"At 'Floriade', based in Almere, Flevoland, Netherlands, the role was from September 2018 to January 2019. The responsibilities included contributing to a specific segment of the Floriade project, utilizing skills in PHP, CSS, MySQL, and HTML to enhance its digital presence. The Floriade exposition, held in Almere, is a renowned international horticultural exhibition that showcases innovative landscaping and sustainable gardening practices. It serves as a platform for sharing ideas, technologies, and designs related to urban development, horticulture, and environmental sustainability. The exposition attracts visitors from around the world and offers a unique opportunity to explore cutting-edge concepts in urban greening and ecological urban planning",
			],
			link: 'https://www.floriade.com/',
			featured: false,
		},
		{
			name: 'Sanoma',
			location: 'Hoofddorp, Noord-Holland, Nederland',
			startDate: 'Sep 2017',
			endDate: 'Jun 2018',
			description: [
				"At 'Sanoma', based in Hoofddorp, North Holland, Netherlands, the role was performed from September 2017 to June 2018. The responsibilities included developing software for advertising in PHP, CSS, MySQL, and HTML. The primary focus of the project revolved around utilizing Chart.js to visualize and present data in a variety of advanced chart formats. These advanced charts added a dynamic dimension to the advertising platform, enabling the effective representation of complex data in an easily understandable manner.",
			],
			link: 'https://www.sanoma.com/',
			featured: false,
		},
		{
			name: 'Student Aan Huis',
			location: 'Bussum, Noord-Holland, Nederland',
			startDate: 'Jun 2017',
			endDate: 'Mar 2018',
			description: [
				"At 'Student Aan Huis', based in Utrecht, North Holland, Netherlands, the role involved assisting individuals that were customer's of 'Student Aan Huis' with their computer issues, from printer setups to restoring entire Windows systems.",
			],
			link: 'https://www.studentaanhuis.nl/',
			featured: false,
		},
	],

	education: [
		{
			name: "Master's degree, Computer systems and networks",
			location: 'Warsaw, Mazowieckie, Poland',
			startDate: '2023',
			endDate: 'Now',
			description: [
				"Master's degree, Computer systems and networks",
				'After working for 3 years I have decided to get back to studying to get more insight into computer science and get international experience. I am currently studying at the Warsaw University of Technology.',
			],
			featured: true,
		},
		{
			name: 'HBO-ICT, Windesheim Flevoland',
			location: 'Almere, Flevoland, Nederland',
			startDate: '2016',
			endDate: '2020',
			description: [
				"Bachelor's degree, Software Engineering",
				'After my highschool I decided to study software engineering at Windesheim Flevoland. I have learned a lot about software engineering and have worked on various projects. I have also done a minor in entrepreneurship.',
			],
			featured: true,
		},
		{
			name: 'Cambridge English: C1',
			location: 'Online',
			startDate: 'Aug 2016',
			endDate: 'Aug 2016',
			description: [
				'A certificate proving my English proficiency at the highest level. I have taken the test to prove my English proficiency and to be able to study in English.',
				'Issued by Cambridge English Language Assessment.',
			],
			featured: true,
		},
		{
			name: 'AWS cloud practitioner',
			location: 'Online',
			startDate: 'Feb 2021',
			endDate: 'Feb 2021',
			description: ['AWS cloud practitioner certification', 'Issued by Amazon Web Services.'],
			featured: false,
		},
		{
			name: 'Certified scrum master',
			location: 'Online',
			startDate: 'Dec 2022',
			endDate: 'Dec 2022',
			description: [
				'Basic understanding of the scrum framework and how to work and/or lead in a scrum team.',
				'Issued by ScrumFoundation.',
			],
			featured: true,
		},
		{
			name: 'Graph Developer - Associate',
			location: 'Online',
			startDate: 'Apr 2022',
			endDate: 'Apr 2022',
			description: ['Basic online course learning GraphQL from the Apollo team.', 'Issued by Apollo.'],
			featured: false,
		},
		{
			name: 'Various Udemy courses',
			location: 'Online',
			startDate: 'Jul 2020',
			endDate: 'Present',
			description: [
				'I like to keep my skills up to date by taking various courses on Udemy. I have completed courses on Vue.js, React, Node.js, MongoDB, Express.js, and many more.',
				'Issued by Udemy.',
			],
			featured: false,
		},
	],

	socialMedia: {
		stackoverflow: 'https://stackoverflow.com/users/10104786/lars-vonk',
		github: 'https://github.com/thebetar',
		email: 'mailto:info@vonkprogramming.nl',
		linkedin: 'https://www.linkedin.com/in/lars-v-82455612a/',
	},

	projects: [
		{
			title: 'VonkEcrypt',
			featured: false,
			thumbnail: '/assets/images/vonk-hash.webp',
			githubUrl: 'https://github.com/thebetar/VonkEncrypt',
			language: 'C++',
		},
		{
			title: 'VonkListTree',
			featured: false,
			thumbnail: '/assets/images/vonk-list-tree.webp',
			githubUrl: 'https://github.com/thebetar/VonkListTree',
			language: 'C++',
		},
		{
			title: 'VonkDB',
			featured: false,
			thumbnail: '/assets/images/vonk-db.webp',
			githubUrl: 'https://github.com/thebetar/VonkDB',
			language: 'C++',
		},
		{
			title: 'VonkHash',
			featured: false,
			thumbnail: '/assets/images/vonk-hash.webp',
			githubUrl: 'https://github.com/thebetar/VonkHash',
			language: 'C',
		},
		{
			title: 'ArduinoChristmas',
			featured: false,
			thumbnail: '/assets/images/arduino-christmas.webp',
			githubUrl: 'https://github.com/thebetar/ArduinoChristmas',
			language: 'C',
		},
		{
			title: 'AssistAI',
			featured: true,
			thumbnail: '/assets/images/assistai.png',
			githubUrl: 'https://github.com/thebetar/AssistAI',
			language: 'python',
		},
		{
			title: 'Portfolio website (Solid)',
			featured: false,
			thumbnail: '/assets/images/vonkprogramming-solid.webp',
			githubUrl: 'https://github.com/thebetar/VonkProgrammingSolid',
			language: 'javascript',
		},
		{
			title: 'Portfolio website (Astro)',
			featured: false,
			thumbnail: '/assets/images/vonkprogramming-astro.webp',
			githubUrl: 'https://github.com/thebetar/VonkProgrammingAstro',
			language: 'javascript',
		},
		{
			title: 'Encrypted replicated messaging',
			featured: true,
			thumbnail: '/assets/images/encrypted-message-exchange.webp',
			githubUrl: 'https://github.com/thebetar/EncryptedMessageExchange',
			language: 'javascript',
		},
		{
			title: 'x86 assembly',
			featured: true,
			thumbnail: '/assets/images/x86-assembly.png',
			githubUrl: 'https://github.com/thebetar/x86-assembly',
			language: 'assembly',
		},
		{
			title: 'Risc-V assembly',
			featured: false,
			thumbnail: '/assets/images/risc-v-assembly.webp',
			githubUrl: 'https://github.com/thebetar/RISC-V-assembly',
			language: 'assembly',
		},
		// {
		// 	title: 'AssistAI',
		// 	featured: true,
		// 	thumbnail: '/assets/images/assistai.png',
		// 	githubUrl: 'https://github.com/thebetar/AssistAI',
		// },
		{
			title: 'Voice calculator',
			featured: false,
			thumbnail: '/assets/images/speechcalculator.png',
			githubUrl: 'https://github.com/thebetar/IASRProject',
			language: 'javascript',
		},
		{
			title: 'Resilient hosting',
			featured: false,
			thumbnail: '/assets/images/resilienthosting.webp',
			githubUrl: 'https://github.com/thebetar/ResillientHosting',
			language: 'docker',
		},
		{
			title: 'Advent of code',
			featured: true,
			thumbnail: '/assets/images/adventofcode.webp',
			githubUrl: 'https://github.com/thebetar/AdventOfCode',
			liveUrl: 'https://adventofcode.com/',
			language: 'go',
		},
		{
			title: 'Voice calculator',
			featured: false,
			thumbnail: '/assets/images/voicecalculator.webp',
			githubUrl: 'https://github.com/thebetar/IASRProject',
			language: 'python',
		},
		{
			title: 'ESlint custom rules',
			featured: false,
			thumbnail: '/assets/images/eslint.webp',
			githubUrl: 'https://github.com/thebetar/EslintCustomRules',
			language: 'javascript',
		},
		{
			title: 'Bun vs Node',
			featured: false,
			thumbnail: '/assets/images/bunvsnode.webp',
			githubUrl: 'https://github.com/thebetar/BunVsNode',
			language: 'javascript',
		},
		{
			title: 'FietsTracker',
			featured: false,
			thumbnail: '/assets/images/fietstrekker.webp',
			githubUrl: 'https://github.com/thebetar/fietsTracker',
			language: 'javascript',
		},
		{
			title: 'Klets',
			featured: false,
			thumbnail: '/assets/images/klets.webp',
			liveUrl: 'https://vonkprogramming.nl',
			language: 'javascript',
		},
		{
			title: 'Deet',
			featured: false,
			thumbnail: '/assets/images/deet.webp',
			liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.deetcalendar',
			language: 'javascript',
		},
		{
			title: 'Fyndyr',
			featured: false,
			thumbnail: '/assets/images/fyndyr.webp',
			githubUrl: 'https://github.com/thebetar/Fyndyr',
			liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr',
			language: 'javascript',
		},
	],
};
