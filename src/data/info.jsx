import blogs from './blogs';

const iconStyle = 'md:w-5 md:h-5 w-7 h-7';

export const SkillType = {
	LANGUAGE: 'Programming Language',
	DATABASE: 'Database',
	FRAMEWORK: 'Framework',
	TOOL: 'Tool',
	INFRASTRUCTURE: 'Infrastructure',
	ECOMMERCE: 'E-commerce',
	OTHER: 'Other',
};

export const info = {
	baseUrl: 'https://vonkprogramming.nl',
	name: 'Lars Vonk',
	jobDescription1: 'Software enthusiast',
	jobDescription2: 'Code quality advocate',
	about: (
		<div>
			With nearly a decade of professional experience, I am a developer specializing in PHP, JavaScript, and
			Python, with a passion for C++ and Go. As a freelancer, I am dedicated to delivering high-quality software
			and continuously expanding my skills, a journey I often document in my{' '}
			<a
				class="underline dark:text-cyan-400 text-cyan-800 hover:opacity-80 transition-opacity"
				href="https://vonkprogramming.nl/blogs"
				aria-label="View my blogs"
			>
				blogs
			</a>
			. You can review my professional work in the{' '}
			<a
				class="underline dark:text-cyan-400 text-cyan-800 hover:opacity-80 transition-opacity"
				href="https://vonkprogramming.nl/experience"
				aria-label="View my experience"
			>
				experience
			</a>{' '}
			section.
			<br />
			<br />
			Currently, I am deepening my expertise by pursuing a Master's degree in Computer Systems and Networks at the
			Warsaw University of Technology. In my free time, I enjoy building C++ tools to understand how software is
			made and developing IoT solutions to automate my home, I also share these projects on my{' '}
			<a
				class="underline dark:text-cyan-400 text-cyan-800 hover:opacity-80 transition-opacity"
				href="https://github.com/thebetar"
				target="_blank"
				aria-label="View my projects on Github"
			>
				Github
			</a>{' '}
			or in the{' '}
			<a
				class="underline dark:text-cyan-400 text-cyan-800 hover:opacity-80 transition-opacity"
				href="https://vonkprogramming.nl/projects"
				aria-label="View my projects"
			>
				projects
			</a>{' '}
			section. I am actively seeking new freelance opportunities in web development, AI, data science, and IoT.
			Let's build something great together!
		</div>
	),
	keywords: 'developer, javascript, python, code quality, blogs',
	products: [
		{
			title: 'ZenuNet',
			description:
				'ZenuNet is an application to learn all about neural networks. It uses algorithms written in Javascript by me to train simple neural networks models. If you are experienced in AI or a complete beginner, this application is for you! Be sure to check it out!',
			link: 'https://zenunet.nl',
			logo: '/assets/images/zenunet-logo.png',
		},
		{
			title: 'Fyndyr',
			description:
				'A mobile application that helps locate your friends during a dance festival! Write simple messages, select some colors and hold up your screen and within seconds your friends can find you!',
			link: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr',
			logo: '/assets/images/fyndyr-logo.png',
		},
	],
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
			title: 'SQL',
			years: 9,
			level: 4,
			logo: '/assets/svg/php.svg',
			link: 'https://www.php.net/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'PHP',
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
			title: 'SQLite',
			years: 3,
			level: 5,
			logo: '/assets/svg/sqlite.svg',
			featured: false,
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
			title: 'Postgres',
			years: 2,
			level: 3,
			logo: '/assets/svg/postgres.svg',
			link: 'https://www.postgresql.org/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Vue.js',
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
			title: 'Solid.js',
			years: 3,
			level: 4,
			logo: '/assets/svg/solidjs.svg',
			link: 'https://solidjs.com/',
			featured: true,
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
			title: 'NiceGUI',
			years: 1,
			level: 3,
			logo: '/assets/svg/nicegui.svg',
			link: 'https://nicegui.io/',
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
			title: 'Klaviyo',
			years: 2,
			level: 4,
			logo: '/assets/svg/klaviyo.svg',
			link: 'https://klaviyo.com/',
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
			title: 'Playwright',
			years: 2,
			level: 4,
			logo: '/assets/svg/playwright.svg',
			link: 'https://playwright.dev/',
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
			featured: false,
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
			title: 'Lightspeed',
			years: 1,
			level: 3,
			logo: '/assets/svg/lightspeed.svg',
			link: 'https://www.lightspeedhq.com/',
			featured: false,
			type: SkillType.ECOMMERCE,
		},
		{
			title: 'CCVShop',
			years: 1,
			level: 2,
			logo: '/assets/svg/ccvshop.svg',
			link: 'https://www.ccvshop.nl/',
			featured: false,
			type: SkillType.ECOMMERCE,
		},
		{
			title: 'Magento',
			years: 1,
			level: 2,
			logo: '/assets/svg/magento.svg',
			link: 'https://magento.com/',
			featured: false,
			type: SkillType.ECOMMERCE,
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
			skills: ['Django', 'Python', 'React'],
			location: 'Remote - Enschede, Overijssel, Nederland',
			startDate: 'Sep 2024',
			endDate: 'Now',
			description: [
				'At Wisepim, I am currently working as a full-stack developer, filling any role they need. My current responsiblities lie mostly in the connecting of different APIs together so that they can be used in the Wisepim platform, which is a PIM system that integrates AI to improve data. I am also working on the front-end of the platform, using RemixJS to create a user-friendly interface for the users of the platform.',
			],
			link: 'https://www.wisepim.com/',
			featured: true,
		},
		{
			name: 'WebshopImporter',
			skills: ['Django', 'NiceGUI', 'Puppeteer'],
			location: 'Remote - Enschede, Overijssel, Nederland',
			startDate: 'Sep 2024',
			endDate: 'Now',
			description: [
				'At WebshopImporter, I am currently working as a full-stack developer, filling any role they need. My current responsiblities are connecting APIs, creating web scraping tools and working on frontends. I use Django, NiceGUI and React to create the tools that are needed for the platform.',
			],
			link: 'https://www.webshopimporter.com/',
			featured: true,
		},
		{
			name: 'Chary Solutions',
			skills: ['Javascript', 'Klaviyo', 'Playwright'],
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
			skills: ['Python', 'Pandas', 'SQL'],
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
			skills: ['Lit', 'Javascript', 'Azure DevOps'],
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
			skills: ['Javascript', 'Java', 'Angular', 'Lit'],
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
			skills: ['Javascript', 'Angular', 'Jenkins'],
			location: 'Amstelveen, Noord-Holland, Nederland',
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			description: [
				"At 'SVB', based in Amstelveen, North Holland, Netherlands, the role took place from April 2021 to April 2022. The primary responsibility involved programming in JavaScript, utilizing the Angular framework. An important part of the job was managing a significant transition, migrating an existing system from AngularJS to Angular. This migration required deep understanding of both frameworks, and extensive planning to ensure a seamless transition with minimal disruption. In addition to development work, the role also entailed working on pipelines, which required careful oversight and management to ensure a smooth, efficient workflow and continuous delivery.",
			],
			link: 'https://www.svb.nl/',
			featured: false,
		},
		{
			name: 'J-Tax Automotive',
			skills: ['Vue.js', 'Express.js', 'MongoDB'],
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
			skills: ['Vue.js'],
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
			title: 'VonkServer (home automation)',
			description: `
				With the VonkServer project I attempted to write my own simple web server using only C. I succeeded in this fairly quickly so I decided to find a good use case for it which became running it as the central hub for my home automation system. The web server runs on my raspberry pi while the sensors are read by an ESP32 which sends the data every 20 minutes to the web server.
			`,
			featured: true,
			thumbnail: '/assets/images/vonkserver-home-automation.webp',
			githubUrl: 'https://github.com/thebetar/Vonkserver',
			language: 'c',
		},
		{
			title: 'ZenuNet',
			description: `
				ZenuNet is a project I started to create an easy way to create and configure neural networks making it accessible to everyone. It is a web application that was written using React.js and PHP.
			`,
			featured: true,
			thumbnail: '/assets/images/zenunet.webp',
			liveUrl: 'https://zenunet.nl/',
			language: 'javascript',
		},
		// {
		// 	title: 'ContactScraper',
		// 	featured: false,
		// 	thumbnail: '/assets/images/contact-scraper.webp',
		// 	githubUrl: 'https://github.com/thebetar/ContactScraper',
		// 	language: 'Python',
		// },
		{
			title: 'VonkCountGame',
			description: `
				VonkCountGame is a simple game I made to practice my C++ skills. The game is a simple counting game where you have to count the number of objects on the screen. It is a simple game but it was a good exercise to practice my C++ skills.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-count-game.webp',
			githubUrl: 'https://github.com/thebetar/VonkCountGame',
			language: 'C++',
		},
		{
			title: 'VonkMaze',
			description: `
				VonkMaze is a simple game I made to practice my C++ skills. The game is a simple maze game where you have to find your way through the maze. It is a simple game but it was a good exercise to practice my C++ skills.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-maze.webp',
			githubUrl: 'https://github.com/thebetar/VonkMaze',
			language: 'C++',
		},
		{
			title: 'VonkEcrypt',
			description: `
				VonkEncrypt is a simple tool I created to practise both my skills in C++ and cryptography. The tool is a simple command line tool that can encrypt and decrypt files using a simple key. It is a simple tool but it was a good exercise to practice my C++ skills and learn more about cryptography.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-hash.webp',
			githubUrl: 'https://github.com/thebetar/VonkEncrypt',
			language: 'C++',
		},
		{
			title: 'VonkListTree',
			description: `
				VonkListTree is a simple tool I created to practise both my skills in C++ and data structures. The tool is a simple command line tool that can create a tree structure from the current directory, it's subdirectories and files. It is a simple tool but it was a good exercise to practice my C++ skills and learn more about data structures.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-list-tree.webp',
			githubUrl: 'https://github.com/thebetar/VonkListTree',
			language: 'C++',
		},
		{
			title: 'VonkDB',
			description: `
				VonkDB is a simple database I created to practise both my skills in C++ and databases. The database contains a simple table structure using CSV to store every table.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-db.webp',
			githubUrl: 'https://github.com/thebetar/VonkDB',
			language: 'C++',
		},
		{
			title: 'VonkHash',
			description: `
				VonkHash is a simple hash function I created to practise both my skills in C and cryptography. The hash function is a simple command line tool that can hash it's input and be used for checksums. It does not support a way to decrypt the hash.
			`,
			featured: false,
			thumbnail: '/assets/images/vonk-hash.webp',
			githubUrl: 'https://github.com/thebetar/VonkHash',
			language: 'C',
		},
		{
			title: 'ArduinoChristmas',
			description: `
				ArduinoChristmas was a project I created to practise my electrical engineering skills. I ordered a simple christmas tree that I had to solder myself and I added some extra addons like a small speaker and extra lights that would turn on based on a timer or button input.
			`,
			featured: false,
			thumbnail: '/assets/images/arduino-christmas.webp',
			githubUrl: 'https://github.com/thebetar/ArduinoChristmas',
			language: 'C',
		},
		{
			title: 'AssistAI',
			description: `
				AssistAI is a tool that I created that uses RAG to take context from the notes that exist in one's application. This will be the base of a note-taking app that I am working on that will integrate AI to quickly search your notes or create new notes based on quick scribbles from the user.
			`,
			featured: true,
			thumbnail: '/assets/images/assistai.png',
			githubUrl: 'https://github.com/thebetar/AssistAI',
			language: 'python',
		},
		{
			title: 'Portfolio website (Solid)',
			description: `
				This is my portfolio website that I created using SolidJS. It is a simple website that showcases my skills and projects. It is a simple website but it was a good exercise to practice my SolidJS skills and learn more about web development.
			`,
			featured: false,
			thumbnail: '/assets/images/vonkprogramming-solid.webp',
			githubUrl: 'https://github.com/thebetar/VonkProgrammingSolid',
			language: 'javascript',
		},
		{
			title: 'Portfolio website (Astro)',
			description: `
				This is my previous portfolio website that I created using Astro. It is a simple website that showcases my skills and projects. It is a simple website but it was a good exercise to practice my Astro skills and learn more about web development.
			`,
			featured: false,
			thumbnail: '/assets/images/vonkprogramming-astro.webp',
			githubUrl: 'https://github.com/thebetar/VonkProgrammingAstro',
			language: 'javascript',
		},
		{
			title: 'Encrypted replicated messaging',
			description: `
				Encrypted replicated messaging is a project I created to practise my skills in distributed systems and cryptography. The project is a simple command line tool that can send and receive messages between multiple nodes in a distributed system. The messages are encrypted using a simple key and can be decrypted by the recipient.
			`,
			featured: true,
			thumbnail: '/assets/images/encrypted-message-exchange.webp',
			githubUrl: 'https://github.com/thebetar/EncryptedMessageExchange',
			language: 'javascript',
		},
		{
			title: 'x86 assembly',
			description: `
				During my master's studies at Politechnika Warszawska, I had multiple exercises, a project and a test about x86 assembly. For this purpose I have grouped the exercises I made, the project and multiple exercises I made to practise my x86 assembly skills for the final test.
			`,
			featured: false,
			thumbnail: '/assets/images/x86-assembly.png',
			githubUrl: 'https://github.com/thebetar/x86-assembly',
			language: 'assembly',
		},
		{
			title: 'Risc-V assembly',
			description: `
				During my master's studies at Politechnika Warszawska, I had multiple exercises, a project and a test about Risc-V assembly. For this purpose I have grouped the exercises I made, the project and multiple exercises I made to practise my Risc-V assembly skills for the final test.
			`,
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
			title: 'Resilient hosting',
			description: `
				A simple docker compose setup which show cases the methodology to setup docker compose with replication and fail-safes for when a single container crashes.
			`,
			featured: false,
			thumbnail: '/assets/images/resilienthosting.webp',
			githubUrl: 'https://github.com/thebetar/ResillientHosting',
			language: 'docker',
		},
		{
			title: 'Advent of code',
			description: `
				Advent of code is a yearly coding challenge that I participate in. I have created a repository where I store my solutions to the challenges. The challenges are in Go and Python, but I also have some solutions in JavaScript.
			`,
			featured: false,
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

	routes: [
		{
			id: 'hero',
			url: '/',
			title: 'Home',
			mobile: false,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M11.3248,7.22461 C11.7513,6.58854 12,5.82332 12,5 C12,2.79086 10.2091,1 8,1 C5.79086,1 4,2.79086 4,5 C4,5.82332 4.24874,6.58854 4.67518,7.22461 C3.11714,7.77132 2,9.2552 2,11 L2,15 L14,15 L14,11 C14,9.2552 12.8829,7.77132 11.3248,7.22461 Z M10,5 C10,6.10457 9.10457,7 8,7 C6.89543,7 6,6.10457 6,5 C6,3.89543 6.89543,3 8,3 C9.10457,3 10,3.89543 10,5 Z M6,9 C4.89543,9 4,9.89543 4,11 L4,13 L12,13 L12,11 C12,9.89543 11.1046,9 10,9 L6,9 Z"
					/>
				</svg>
			),
		},
		{
			id: 'blogs',
			url: '/blogs',
			title: 'Blog',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3,1 L9.17157,1 C9.64307222,1 10.0973893,1.16648691 10.4559723,1.46691468 L10.5858,1.58579 L13.4142,4.41421 C13.7476222,4.74761444 13.9511481,5.18659519 13.9922598,5.65257532 L14,5.82843 L14,14 C14,14.51285 13.613973,14.9355092 13.1166239,14.9932725 L13,15 L3,15 C2.48716857,15 2.06449347,14.613973 2.0067278,14.1166239 L2,14 L2,2 C2,1.48716857 2.38604429,1.06449347 2.88337975,1.0067278 L3,1 L9.17157,1 L3,1 Z M9,3 L4,3 L4,13 L12,13 L12,6 L10,6 C9.48715929,6 9.06449214,5.61395571 9.00672766,5.11662025 L9,5 L9,3 Z M6,10 L8,10 C8.55228,10 9,10.4477 9,11 C9,11.51285 8.61395571,11.9355092 8.11662025,11.9932725 L8,12 L6,12 C5.44772,12 5,11.5523 5,11 C5,10.48715 5.38604429,10.0644908 5.88337975,10.0067275 L6,10 Z M10,7 C10.5523,7 11,7.44772 11,8 C11,8.55228 10.5523,9 10,9 L6,9 C5.44772,9 5,8.55228 5,8 C5,7.44772 5.44772,7 6,7 L10,7 Z"
					/>
				</svg>
			),
		},
		{
			id: 'skills',
			url: '/skills',
			title: 'Skills',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M10.0248,9.97521 L5.83008,14.1699 C4.72551,15.2745 2.93464,15.2745 1.83008,14.1699 C0.725505,13.0654 0.725506,11.2745 1.83008,10.1699 L6.02479,5.97521 C6.0084,5.81904 6,5.6605 6,5.5 C6,3.18096 7.7542,1.27164 10.008,1.02658 C10.1696,1.00901 10.3338,1 10.5,1 C11.1906,1 11.8448,1.15555 12.4295,1.43351 L10.2851,3.57797 C9.6993,4.16376 9.6993,5.11351 10.2851,5.69929 C10.8709,6.28508 11.8206,6.28508 12.4064,5.69929 L14.5564,3.54932 C14.8407,4.13945 15,4.80112 15,5.5 C15,5.65429 14.9922,5.80676 14.9771,5.95705 C14.748,8.22767 12.831,10 10.5,10 C10.3395,10 10.181,9.9916 10.0248,9.97521 Z M9.28499,7.88658 L4.41586,12.7557 C4.09234,13.0792 3.56781,13.0792 3.24429,12.7557 C2.92077,12.4322 2.92077,11.9077 3.24429,11.5841 L8.11342,6.715 L9.28499,7.88658 Z"
					/>
				</svg>
			),
		},
		{
			id: 'experience',
			url: '/experience',
			title: 'Experience',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M4,4 L4,3 C4,1.89543 4.89543,1 6,1 L10,1 C11.1046,1 12,1.895431 12,3 L12,4 L14,4 C15.1046,4 16,4.89543 16,6 L16,13 C16,14.1046 15.1046,15 14,15 L2,15 C0.895431,15 0,14.1046 0,13 L0,6 C0,4.89543 0.895431,4 2,4 L4,4 Z M6,3 L10,3 L10,4 L6,4 L6,3 Z M2,6 L2,8 L14,8 L14,6 L2,6 Z M2,13 L2,10 L7,10 L7,11 L9,11 L9,10 L14,10 L14,13 L2,13 Z"
					/>
				</svg>
			),
		},
		{
			id: 'education',
			url: '/education',
			title: 'Education',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						d="M8,1 C8.55228,1 9,1.44769 9,2 C9,2.05821 9.04103,2.1082 9.09783,2.12092 C9.23039,2.15062 9.36095,2.18556 9.4893,2.22556 C9.54467,2.24281 9.60497,2.22009 9.63397,2.16986 C9.91013,1.69159 10.5217,1.52771 11,1.80383 C11.4783,2.07996 11.6422,2.69159 11.366,3.16986 C11.3366,3.22077 11.3472,3.2852 11.3904,3.32507 C11.489,3.41606 11.5839,3.51096 11.6749,3.60956 C11.7148,3.65275 11.7792,3.66335 11.8301,3.63397 C12.3084,3.35785 12.92,3.52173 13.1962,4 C13.4723,4.47827 13.3084,5.0899 12.8301,5.36603 C12.7799,5.39501 12.7572,5.4553 12.7744,5.51066 C12.8144,5.63902 12.8494,5.76962 12.8791,5.9022 C12.8918,5.95898 12.9418,6 13,6 C13.5523,6 14,6.44769 14,7 C14,7.55231 13.5523,8 13,8 C12.9418,8 12.8918,8.04102 12.8791,8.0978 C12.8712,8.13326 12.8629,8.16857 12.8542,8.20374 C12.8303,8.30006 12.8037,8.3953 12.7744,8.48934 C12.7572,8.5447 12.7799,8.60499 12.8301,8.63397 C13.3084,8.9101 13.4723,9.52173 13.1962,10 C12.92,10.4783 12.3084,10.6422 11.8301,10.366 L11.7795,10.3368 C11.7581,10.3244 11.7309,10.3289 11.7144,10.3472 C11.6991,10.3641 11.6964,10.3888 11.7078,10.4085 L14.07,14.5 L12.271,14.384 L11.4719,16 L9.11587,11.9192 C9.10244,11.8959 9.0755,11.8841 9.04923,11.8897 C9.02063,11.8958 9,11.921 9,11.9502 L9,12 C9,12.5523 8.55228,13 8,13 C7.44772,13 7,12.5523 7,12 L7,11.9502 C7,11.921 6.97937,11.8958 6.95077,11.8897 C6.9245,11.8841 6.89756,11.8959 6.88413,11.9192 L4.52807,16 L3.72903,14.384 L1.92999,14.5 L4.29222,10.4085 C4.30358,10.3888 4.30085,10.3641 4.28564,10.3472 C4.26908,10.3289 4.24195,10.3244 4.22053,10.3368 L4.16989,10.366 C3.69159,10.6422 3.08002,10.4783 2.80386,10 C2.52771,9.52173 2.69159,8.9101 3.16989,8.63397 C3.2201,8.60499 3.24282,8.54472 3.22557,8.48937 C3.18557,8.361 3.1506,8.23039 3.12089,8.0978 C3.10817,8.04102 3.05819,8 3,8 C2.44772,8 2,7.55231 2,7 C2,6.44769 2.44772,6 3,6 C3.05819,6 3.10817,5.95898 3.12089,5.9022 C3.1506,5.76961 3.18557,5.639 3.22557,5.51063 C3.24282,5.45528 3.2201,5.39501 3.16989,5.36603 C2.69159,5.0899 2.52771,4.47827 2.80386,4 C3.08002,3.52173 3.69159,3.35785 4.16989,3.63397 C4.22078,3.66335 4.28519,3.65276 4.32505,3.60958 C4.41608,3.51095 4.51103,3.41599 4.60965,3.32496 C4.65282,3.28512 4.66341,3.22073 4.63403,3.16986 C4.35791,2.69159 4.52176,2.08002 5.00006,1.80383 C5.47836,1.52771 6.08994,1.69159 6.36609,2.16986 C6.39507,2.22009 6.45536,2.24282 6.51072,2.22558 C6.63906,2.1856 6.76963,2.15064 6.90217,2.12093 C6.95897,2.1082 7,2.05821 7,2 C7,1.44769 7.44772,1 8,1 Z M8,4 C6.34314,4 5,5.34314 5,7 C5,8.65686 6.34314,10 8,10 C9.65686,10 11,8.65686 11,7 C11,5.34314 9.65686,4 8,4 Z M8,6 C8.55229,6 9,6.44772 9,7 C9,7.55228 8.55229,8 8,8 C7.44772,8 7,7.55228 7,7 C7,6.44772 7.44772,6 8,6 Z"
					/>
				</svg>
			),
		},
		{
			id: 'projects',
			url: '/projects',
			title: 'Projects',
			mobile: true,
			icon: (
				<svg
					width="800px"
					height="800px"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
					class={iconStyle}
				>
					<path d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6z" fill="currentColor" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 5a1 1 0 001 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 001-1V2a1 1 0 00-1-1H1a1 1 0 00-1 1v3zm2-2v1h12V3H2zm1 10V6h10v7H3z"
						fill="currentColor"
					/>
				</svg>
			),
		},
	],
};
