import { info } from './info';

export const resumeTranslations = {
	en: {
		title: 'Resume',
		summary: 'Summary',
		experience: 'Experience',
		education: 'Education',
		certifications: 'Certifications',
		skills: 'Skills',
		languages: 'Languages',
		contact: 'Contact',
		download: 'Download PDF',
		present: 'Present',
		summaryText:
			'Full-stack engineer with nearly a decade of experience across a wide variety of organisations, projects, fields, and programming languages. Passionate about software development with a drive that extends beyond work. I regularly write blogs, research new tools, and explore emerging technologies. Currently working on my own personal assistant using OpenClaw and Ollama running a local 9B parameter model.',
	},
	nl: {
		title: 'CV',
		summary: 'Samenvatting',
		experience: 'Werkervaring',
		education: 'Opleiding',
		certifications: 'Certificeringen',
		skills: 'Vaardigheden',
		languages: 'Talen',
		contact: 'Contact',
		download: 'Download PDF',
		present: 'Heden',
		summaryText:
			'Full-stack engineer met bijna tien jaar ervaring in een breed scala aan organisaties, projecten, vakgebieden en programmeertalen. Gepassioneerd over softwareontwikkeling met een drive die verder reikt dan werk. Ik schrijf regelmatig blogs, onderzoek nieuwe tools en verken opkomende technologieën. Momenteel werk ik aan mijn eigen persoonlijke assistent met OpenClaw en Ollama die een lokaal 9B parameter model draait.',
	},
};

export const resumeExperience = {
	en: [
		{
			name: 'Mikrocloud',
			title: 'Lead Full Stack Developer',
			startDate: 'Jul 2025',
			endDate: 'Present',
			skills: ['Laravel', 'Nuxt.js', 'AWS', 'PHP', 'Docker'],
			description:
				'Lead developer for a Mikrotik RouterOS SD-WAN platform. Architecting scalable cloud infrastructure with Laravel, Nuxt.js, and AWS microservices (Lambda, API Gateway, SNS). Also writing RouterOS scripts for router configuration and building AI-powered features.',
		},
		{
			name: 'Webshopimporter',
			title: 'Lead Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Present',
			skills: ['Django', 'Python', 'REST', 'SOAP', 'CodeIgniter'],
			description:
				'Leading a full platform migration from CodeIgniter to Django for a supplier-to-webshop data mapping system. Building and maintaining integrations across REST, SOAP, JSON, XML, and FTP for major e-commerce platforms.',
		},
		{
			name: 'Wisepim',
			title: 'Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Present',
			skills: ['Django', 'RemixJS', 'Python', 'REST API'],
			description:
				'Developing e-commerce API integrations for an AI-powered PIM startup that uses AI to enrich product information. Building backend services with Django and the frontend with RemixJS to support rapid growth.',
		},
		{
			name: 'Swiftsync',
			title: 'Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Present',
			skills: ['Django', 'NiceGUI', 'React', 'Python'],
			description:
				'Built a highly configurable web scraping dashboard and e-commerce management tools for platforms like Magento, CCVShop, and WordPress using Django, NiceGUI, and React. Automated data collection and synchronisation pipelines.',
		},
		{
			name: 'Chary Solutions',
			title: 'Senior Developer',
			startDate: 'Jul 2024',
			endDate: 'Present',
			skills: ['Klaviyo', 'GTM', 'Shopify', 'WooCommerce', 'JavaScript'],
			description:
				'Leading Klaviyo e-mail marketing integrations for CMS platforms without standard connectors. Building custom event tracking via Google Tag Manager for Shopify, WooCommerce, Lightspeed, and CCVShop. Also developing internal automations.',
		},
		{
			name: 'SPAR',
			title: 'Data Engineer',
			startDate: 'Jun 2024',
			endDate: 'Dec 2024',
			skills: ['SQL', 'Azure', 'Python', 'Pandas', 'NumPy'],
			description:
				'Tackled big data challenges for a major retail chain. Built data pipelines and analytical models using SQL, Azure Data Factory, Python, Pandas, and NumPy. Gained deep expertise in data manipulation and a broader tech perspective.',
		},
		{
			name: 'ING',
			title: 'Full Stack Developer / Product Owner',
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
			skills: ['Lit', 'JavaScript', 'ESLint', 'CI/CD', 'Jest'],
			description:
				'Built internal banking interfaces using Lit web components. Managed CI/CD pipelines, authored custom ESLint rules, and drove unit testing standards. Also served as product owner — managing timelines, prioritising features, and aligning with stakeholders.',
		},
		{
			name: 'Quintor',
			title: 'IT Consultant / Trainee',
			startDate: 'Oct 2020',
			endDate: 'Oct 2023',
			skills: ['Java', 'Angular', 'Agile', 'Testing'],
			description:
				'IT consultant deployed at enterprise clients including ING and government agencies. Learned rigorous testing methodologies (unit, integration, e2e) and agile practices that shaped my approach to code quality across all subsequent projects.',
		},
		{
			name: 'SVB',
			title: 'Frontend Developer',
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			skills: ['Angular', 'TypeScript', 'AngularJS', 'CI/CD'],
			description:
				'Frontend developer building government web applications with Angular. Led the AngularJS to Angular migration requiring deep knowledge of both frameworks. Set up CI/CD pipelines for continuous delivery and learned to navigate large organisational structures.',
		},
	],
	nl: [
		{
			name: 'Mikrocloud',
			title: 'Lead Full Stack Developer',
			startDate: 'Jul 2025',
			endDate: 'Heden',
			skills: ['Laravel', 'Nuxt.js', 'AWS', 'PHP', 'Docker'],
			description:
				'Lead developer voor een Mikrotik RouterOS SD-WAN-platform. Schaalbare cloudinfrastructuur ontwerpen met Laravel, Nuxt.js en AWS-microservices (Lambda, API Gateway, SNS). Ook RouterOS-scripts schrijven voor routerconfiguratie en AI-functies bouwen.',
		},
		{
			name: 'Webshopimporter',
			title: 'Lead Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Heden',
			skills: ['Django', 'Python', 'REST', 'SOAP', 'CodeIgniter'],
			description:
				'Leiding geven aan een volledige platformmigratie van CodeIgniter naar Django voor een leverancier-naar-webshop datamapping-systeem. Integraties bouwen en onderhouden via REST, SOAP, JSON, XML en FTP voor grote e-commerce platformen.',
		},
		{
			name: 'Wisepim',
			title: 'Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Heden',
			skills: ['Django', 'RemixJS', 'Python', 'REST API'],
			description:
				'E-commerce API-integraties ontwikkelen voor een AI-aangedreven PIM-startup die AI inzet om productinformatie te verrijken. Backendservices bouwen met Django en frontend met RemixJS om snelle groei te ondersteunen.',
		},
		{
			name: 'Swiftsync',
			title: 'Full Stack Developer',
			startDate: 'Sep 2024',
			endDate: 'Heden',
			skills: ['Django', 'NiceGUI', 'React', 'Python'],
			description:
				'Een configureerbaar web scraping dashboard en e-commerce beheertools gebouwd voor platformen als Magento, CCVShop en WordPress met Django, NiceGUI en React. Dataverzamelings- en synchronisatiepipelines geautomatiseerd.',
		},
		{
			name: 'Chary Solutions',
			title: 'Senior Developer',
			startDate: 'Jul 2024',
			endDate: 'Heden',
			skills: ['Klaviyo', 'GTM', 'Shopify', 'WooCommerce', 'JavaScript'],
			description:
				'Leiding geven aan Klaviyo e-mailmarketingintegraties voor CMS-platformen zonder standaard connectors. Custom event tracking bouwen via Google Tag Manager voor Shopify, WooCommerce, Lightspeed en CCVShop. Ook interne automatiseringen ontwikkelen.',
		},
		{
			name: 'SPAR',
			title: 'Data Engineer',
			startDate: 'Jun 2024',
			endDate: 'Dec 2024',
			skills: ['SQL', 'Azure', 'Python', 'Pandas', 'NumPy'],
			description:
				'Big data-vraagstukken aangepakt voor een grote retailketen. Datapipelines en analytische modellen gebouwd met SQL, Azure Data Factory, Python, Pandas en NumPy. Diepgaande expertise opgedaan in datamanipulatie en een breder technisch perspectief verkregen.',
		},
		{
			name: 'ING',
			title: 'Full Stack Developer / Product Owner',
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
			skills: ['Lit', 'JavaScript', 'ESLint', 'CI/CD', 'Jest'],
			description:
				'Interne bankinterfaces gebouwd met Lit web components. CI/CD-pipelines beheerd, custom ESLint-regels geschreven en unit testing standaarden aangestuurd. Ook product owner geweest — timelines beheerd, features geprioriteerd en afgestemd met stakeholders.',
		},
		{
			name: 'Quintor',
			title: 'IT Consultant / Trainee',
			startDate: 'Okt 2020',
			endDate: 'Okt 2023',
			skills: ['Java', 'Angular', 'Agile', 'Testing'],
			description:
				'IT-consultant ingezet bij enterprise-klanten waaronder ING en overheidsinstanties. Rigoureuze testmethodologieën geleerd (unit, integratie, e2e) en agile werkwijzen die mijn aanpak van codekwaliteit in alle volgende projecten hebben gevormd.',
		},
		{
			name: 'SVB',
			title: 'Frontend Developer',
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			skills: ['Angular', 'TypeScript', 'AngularJS', 'CI/CD'],
			description:
				'Frontend developer voor overheidswebapplicaties met Angular. De migratie van AngularJS naar Angular geleid, wat diepgaande kennis van beide frameworks vereiste. CI/CD-pipelines opgezet en geleerd te navigeren binnen grote organisatiestructuren.',
		},
	],
};

export const resumeEducation = {
	en: [
		{
			name: 'MSc — Computer Systems and Networks',
			institution: 'Warsaw University of Technology',
			startDate: '2023',
			endDate: '2025',
			description: 'Thesis on Spectrum Sensing using Cognitive Radio (5/5). GPA: 4.55/5.',
		},
		{
			name: 'BSc — Software Engineering',
			institution: 'Windesheim Flevoland',
			startDate: '2016',
			endDate: '2020',
			description: 'HBO-ICT with a minor in entrepreneurship.',
		},
	],
	nl: [
		{
			name: 'MSc — Computersystemen en Netwerken',
			institution: 'Technische Universiteit Warschau',
			startDate: '2023',
			endDate: '2025',
			description: 'Scriptie over Spectrum Sensing met Cognitive Radio (5/5). GPA: 4,55/5.',
		},
		{
			name: 'BSc — Software Engineering',
			institution: 'Windesheim Flevoland',
			startDate: '2016',
			endDate: '2020',
			description: 'HBO-ICT met een minor in ondernemerschap.',
		},
	],
};

export const resumeCertifications = {
	en: [
		{ name: 'Cambridge English: C1', year: '2016' },
		{ name: 'AWS Cloud Practitioner', year: '2021' },
		{ name: 'Certified Scrum Master', year: '2022' },
	],
	nl: [
		{ name: 'Cambridge English: C1', year: '2016' },
		{ name: 'AWS Cloud Practitioner', year: '2021' },
		{ name: 'Gecertificeerd Scrum Master', year: '2022' },
	],
};
