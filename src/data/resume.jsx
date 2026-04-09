import { experience } from '@/data/experience';

const getExperience = name => {
	const e = experience.find(x => x.name === name);
	return { name: e.name, title: e.title, skills: e.skills };
};

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
		compact: 'Compact',
		extended: 'Extended',
		summaryText: `
			Full-stack engineer with nearly a decade of experience across various domains, ranging from large enterprises like ING to startups like Mikrocloud. My core stack includes JavaScript, Python, and PHP (React, Django, Laravel), along with cloud infrastructure and data engineering. Outside of work, I build side projects and write technical blogs.
		`,
		extendedSummaryText: `
			Full-stack engineer with nearly a decade of experience across a wide variety of fields, organisations, projects, and programming languages.
			I have worked at large organisations like ING, where I was both developer and product owner, and the Dutch government agency SVB, where I worked on migrating AngularJS to Angular and built internal dashboards. I have worked at startups like Mikrocloud, where I work on an SD-WAN platform using Laravel, Nuxt.js, and AWS, and Wisepim, where I contribute to an AI-powered product information platform built with Django and React. I have also worked for e-commerce companies like Webshopimporter, where I work on mapping supplier data into platforms like Shopify, WooCommerce, and Magento, and Chary Solutions, where I build Klaviyo integrations and tracking solutions.
			My main skills cover JavaScript, TypeScript, Python, and PHP with experience in React, Vue, Angular, Django, Laravel, and Lit. I am also comfortable with cloud infrastructure on AWS and Azure, CI/CD pipelines, data engineering with SQL and Pandas, and testing with Jest and Cypress.
			Outside of work, I am passionate about software and enjoy building side projects. I am currently working on a personal assistant powered by OpenClaw and Ollama running a local 9B parameter model. I also regularly write blogs about topics like agentic coding, European cloud challenges, and software quality.
			In my free time, I play water polo and run. I recently ran the Warsaw half-marathon and plan to run the full marathon in September.
		`,
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
		compact: 'Compact',
		extended: 'Uitgebreid',
		summaryText: `
			Full-stack engineer met bijna tien jaar ervaring in diverse domeinen, van de overheid en ING tot startups als Mikrocloud. Mijn core stack omvat JavaScript, Python en PHP (React, Django, Laravel), gecombineerd met cloudinfrastructuur en data engineering. Buiten werk vind ik het leuk om zijprojecten te bouwen en schrijf ik technische blogs.
		`,
		extendedSummaryText: `
			Full-stack engineer met bijna tien jaar ervaring in diverse omgevingen, organisaties, projecten en programmeertalen.
			Ik heb gewerkt bij grote organisaties zoals ING, in de rol van developer en product owner, en de overheidsinstantie SVB, voor de migratie van AngularJS naar Angular en het bouwen van interne dashboards. Ik ben ook actief geweest bij startups zoals Mikrocloud, als developer van een SD-WAN-platform met Laravel, Nuxt.js en AWS, en Wisepim, voor de ontwikkeling van een AI-gestuurd productinformatieplatform gebouwd met Django en React. Daarnaast heb ik gewerkt voor e-commerce bedrijven zoals Webshopimporter, voor het mappen van leveranciersdata naar platformen als Shopify, WooCommerce en Magento, en Chary Solutions, voor de bouw van Klaviyo-integraties en trackingoplossingen.
			Mijn belangrijkste vaardigheden omvatten JavaScript, TypeScript, Python en PHP met ervaring in React, Vue, Angular, Django, Laravel en Lit. Ik ben ook bekend met cloudinfrastructuur op AWS en Azure, CI/CD-pipelines, data engineering met SQL en Pandas, en testen met Jest en Cypress.
			Buiten werk heb ik een passie voor software en bouw ik graag zijprojecten. Momenteel werk ik aan een persoonlijke assistent aangedreven door OpenClaw en Ollama met een lokaal 9B-parametermodel. Daarnaast schrijf ik regelmatig blogs over onderwerpen als agentic coding, Europese cloud-uitdagingen en softwarekwaliteit.
			In mijn vrije tijd speel ik waterpolo en loop ik hard. Ik heb recentelijk de halve marathon van Warschau gerend en ben van plan de hele marathon in September te rennen.
		`,
	},
};

export const resumeExperience = {
	en: [
		{
			...getExperience('Mikrocloud'),
			startDate: 'Jul 2025',
			endDate: 'Present',
			description:
				'Lead developer on an SD-WAN platform for Mikrotik RouterOS devices, using Laravel, Nuxt.js, and AWS microservices. Writes RouterOS scripts for remote device configuration and applies networking knowledge including BGP, VPNs and IP routing.',
			extendedDescription: `
				As the lead developer at Mikrocloud I am responsible for the technical decisions and overall architecture of an SD-WAN platform that allows users to manage Mikrotik RouterOS devices.
				The backend is built with Laravel on AWS Lambda using a microservices architecture with SQS for inter-service communication, and the frontend with Nuxt.js. I also write scripts in the RouterOS scripting language to configure routers remotely.
				This role requires both web application development skills and networking knowledge, including setting up BGP routes, configuring VPNs, managing IP routing tables and remote device management.
			`,
		},
		{
			...getExperience('Webshopimporter'),
			startDate: 'Sep 2024',
			endDate: 'Present',
			description:
				'Lead developer on a supplier-to-webshop data mapping platform, collaborating on a migration from CodeIgniter to Django. Maintains integrations using protocols like REST, SOAP and FTP and formats like JSON, XML and CSV, while building new features for a clearer customer interface.',
			extendedDescription: `
				As the lead developer at Webshopimporter I oversee a system that fetches supplier data and maps it into different e-commerce platforms such as Shopify, Lightspeed, WooCommerce, Magento and CCVShop.
				I collaborate on migrating the platform from the legacy CodeIgniter codebase to Django, while also building and maintaining integrations using protocols like REST, SOAP and FTP and formats like JSON, XML and CSV, even when supplier documentation is complex or incomplete.
				I also design new features that provide a clearer interface for customers to manage their data mappings and improve the overall user experience.
			`,
		},
		{
			...getExperience('Wisepim'),
			startDate: 'Sep 2024',
			endDate: 'Present',
			description:
				'Full-stack developer contributing to an AI-powered PIM platform, building e-commerce API integrations with Django and RemixJS. Builds admin interfaces enabling non-technical team members to manage integrations independently.',
			extendedDescription: `
				At Wisepim, a fast-growing startup, I contribute to an AI-powered Product Information Management platform that enriches and improves product information automatically.
				I build backend services with Django and the frontend with RemixJS, using my experience with e-commerce APIs and LLMs to connect and integrate various external systems into the platform. I also build admin interfaces that allow non-technical team members to manage integrations independently.
			`,
		},
		{
			...getExperience('Swiftsync'),
			startDate: 'Sep 2024',
			endDate: 'Present',
			description:
				'Full-stack developer building custom tools including a CCVShop management dashboard in NiceGUI, a configurable web scraping dashboard in Django with Playwright, and a Wintree product synchronisation tool.',
			extendedDescription: `
				At Swiftsync I work on various platforms and tools for the company's customers, ranging from API integrations to web scraping and frontend development.
				I built a data management dashboard in NiceGUI that provides an easier interface for managing CCVShop product data, and a web scraping dashboard using Django and Playwright that allows for highly configurable data extraction from websites. I also developed a product synchronisation tool between Wintree, a management system in the Dutch horticultural industry, and various e-commerce platforms, handling not only product data but also stock levels, customer groups and tier pricing.
			`,
		},
		{
			...getExperience('Chary Solutions'),
			startDate: 'Jul 2024',
			endDate: 'Present',
			description:
				"Senior developer integrating Klaviyo with CMS platforms using Google Tag Manager for custom event tracking. Also builds internal automations and tools integrating Gemini's API to categorise data.",
			extendedDescription: `
				As the senior developer at Chary Solutions I lead the technical development for integrating Klaviyo with various content management systems that lack standard integration connectors.
				My work focuses on building custom solutions for tracking user behaviour and sending event data to Klaviyo, providing email marketers with the data they need to optimise their campaigns. I use Google Tag Manager extensively for custom tracking cookies and event firing across platforms like Shopify, WooCommerce, Lightspeed, and CCVShop.
				Beyond integrations I also build internal automations, scripts and tools that streamline the company's operations and reduce manual work for the marketing team, including integrating Gemini's API to automatically categorise data.
			`,
		},
		{
			...getExperience('SPAR'),
			startDate: 'Jun 2024',
			endDate: 'Dec 2024',
			description:
				'Data engineer at a major Dutch retail chain, parsing and mapping big data using Azure Data Factory, Azure Databricks and PySpark to split workloads across multiple instances.',
			extendedDescription: `
				At SPAR Nederland I worked as a data engineer solving data-related problems for one of the Netherlands' largest retail chains, with a focus on parsing and mapping big data as efficiently as possible.
				I used Azure Data Factory, Azure Databricks and Azure SQL Database to manage and process large datasets. When data volumes exceeded what a single process could handle, I used PySpark to split workloads into batches across multiple instances, making heavy transformations feasible at scale.
				This role was a deliberate departure from my usual full-stack web development work. It broadened my technical perspective considerably and gave me hands-on experience with data manipulation and working with big data.
			`,
		},
		{
			...getExperience('ING'),
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
			description:
				'Full-stack developer and product owner at ING, building Lit web component interfaces while managing CI/CD pipelines and custom ESLint rules. As product owner, set realistic expectations and made every deadline by keeping team capacity and stakeholder goals aligned.',
			extendedDescription: `
				At ING in Amsterdam I worked as both a full-stack developer and product owner.
				On the development side I built banking interfaces using Lit web components, focusing on code quality by writing custom ESLint rules enforced across the team and driving unit testing standards with Jest. I managed Azure DevOps CI/CD pipelines to ensure reliable deployments.
				As product owner I focused on setting realistic expectations and preventing stakeholder misalignment. What the team said they could handle was what got allotted, not more. This approach meant we made every deadline and kept both the team and stakeholders aligned throughout the project.
			`,
		},
		{
			...getExperience('Quintor'),
			startDate: 'Oct 2020',
			endDate: 'Oct 2023',
			description:
				'IT consultant deployed at ING and SVB, learning extensive testing strategies (unit, integration, e2e) and a framework-agnostic approach that became the foundation of my engineering work.',
			extendedDescription: `
				At Quintor I started as a trainee and grew into an IT consultant deployed at ING and SVB.
				During my traineeship I learned to work in a framework-agnostic manner, adapting quickly to different technologies. I was taught extensive testing strategies, including unit tests, integration tests and end-to-end tests, and learnt the value of thorough testing firsthand. The traineeship also taught me to look beyond just the frontend, understanding the backend it communicates with and the infrastructure it runs on.
				The testing principles and cross-team collaboration skills I learned at Quintor became foundational to my work and are practices I have carried into every subsequent role.
			`,
		},
		{
			...getExperience('SVB'),
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			description:
				'Frontend developer at a Dutch government agency, working on a translation layer dashboard and the AngularJS to Angular migration. Set up testing strategies and ensured code quality, guided by a senior consultant.',
			extendedDescription: `
				At SVB (Sociale Verzekeringsbank), a major Dutch government agency, I worked as a frontend developer on a platform that translated raw data into an advanced frontend dashboard, connecting the legacy application with the new frontend.
				I also worked on the migration from AngularJS to modern Angular, which taught me how to navigate the challenges of major migrations within large organisations. Guided by a senior consultant, I quickly learned to apply the theoretical knowledge from my traineeship in a practical environment.
				I set up testing strategies and ensured code quality, using my knowledge of Angular to connect new systems to legacy applications. This was my first experience in a large government organisation.
			`,
		},
	],
	nl: [
		{
			...getExperience('Mikrocloud'),
			startDate: 'Jul 2025',
			endDate: 'Heden',
			description:
				"Lead developer van een SD-WAN-platform voor Mikrotik RouterOS-apparaten, gebouwd met Laravel, Nuxt.js en AWS-microservices. Schrijft RouterOS-scripts voor configuratie op afstand en past netwerkkennis toe waaronder BGP, VPN's en IP-routing.",
			extendedDescription: `
				Als lead developer bij Mikrocloud ben ik verantwoordelijk voor de technische beslissingen en de algehele architectuur van een SD-WAN-platform dat gebruikers in staat stelt Mikrotik RouterOS-apparaten te beheren.
				De backend is gebouwd met Laravel op AWS Lambda met een microservices-architectuur via SQS voor communicatie tussen services, en de frontend met Nuxt.js. Ik schrijf ook scripts in de RouterOS-scripttaal om routers op afstand te configureren.
				Deze rol vereist zowel webapplicatie-ontwikkelvaardigheden als netwerkkennis, waaronder het opzetten van BGP-routes, configureren van VPN's, beheren van IP-routeringstabellen en apparaatbeheer op afstand.
			`,
		},
		{
			...getExperience('Webshopimporter'),
			startDate: 'Sep 2024',
			endDate: 'Heden',
			description:
				'Lead developer op een data-integratieplatform, werkt mee aan de migratie van CodeIgniter naar Django. Bouwt en onderhoudt koppelingen via protocollen als REST, SOAP en FTP en formaten als JSON, XML en CSV, en ontwikkelt nieuwe functionaliteiten voor een overzichtelijker klantinterface.',
			extendedDescription: `
				Als lead developer bij Webshopimporter beheer ik een systeem dat leveranciersdata ophaalt en mapt naar verschillende e-commerce platformen zoals Shopify, Lightspeed, WooCommerce, Magento en CCVShop.
				Ik werk mee aan de migratie van het platform van de legacy CodeIgniter-codebase naar Django, terwijl ik ook koppelingen bouw en onderhoud via protocollen als REST, SOAP en FTP en formaten als JSON, XML en CSV, ook wanneer leveranciersdocumentatie complex of onvolledig is.
				Ik ontwerp ook nieuwe functionaliteiten die klanten een overzichtelijker interface bieden om hun datamappings te beheren en de algehele gebruikerservaring te verbeteren.
			`,
		},
		{
			...getExperience('Wisepim'),
			startDate: 'Sep 2024',
			endDate: 'Heden',
			description:
				'Full-stack developer die bijdraagt aan een AI-gestuurd PIM-platform, met e-commerce API-integraties in Django en RemixJS. Bouwt admin-interfaces om niet-technische teamleden in staat te stellen integraties zelfstandig te beheren.',
			extendedDescription: `
				Bij Wisepim, een snelgroeiende startup, draag ik bij aan een AI-gestuurd Product Information Management-platform dat productinformatie automatisch verrijkt en verbetert.
				Ik bouw backendservices met Django en de frontend met RemixJS, hierbij gebruikmakend van mijn ervaring met e-commerce API's en LLM's om diverse externe systemen aan het platform te koppelen. Ik bouw ook admin-interfaces zodat niet-technische teamleden integraties zelfstandig kunnen beheren.
			`,
		},
		{
			...getExperience('Swiftsync'),
			startDate: 'Sep 2024',
			endDate: 'Heden',
			description:
				'Full-stack developer die maatwerktooling bouwt, waaronder een CCVShop-beheerdashboard in NiceGUI, een configureerbaar web scraping dashboard in Django met Playwright en een Wintree-productsynchronisatietool.',
			extendedDescription: `
				Bij Swiftsync werk ik aan diverse platformen en tools voor de klanten van het bedrijf, van API-integraties tot web scraping en frontendwerk.
				Ik heb een databeheerdashboard gebouwd in NiceGUI dat een eenvoudiger interface biedt voor het beheren van CCVShop-productdata, en een web scraping dashboard met Django en Playwright voor uiterst configureerbare data-extractie van websites. Daarnaast heb ik een productsynchronisatietool ontwikkeld tussen Wintree, een beheersysteem in de Nederlandse sierteeltsector, en diverse e-commerce platformen, voor niet alleen productdata maar ook voorraadniveaus, klantgroepen en staffelprijzen.
			`,
		},
		{
			...getExperience('Chary Solutions'),
			startDate: 'Jul 2024',
			endDate: 'Heden',
			description:
				"Senior developer die Klaviyo integreert met diverse CMS-platformen via custom event tracking in Google Tag Manager. Bouwt ook interne automatiseringen en tools die Gemini's API integreren om data te categoriseren.",
			extendedDescription: `
				Als senior developer bij Chary Solutions leid ik de technische ontwikkeling voor het integreren van Klaviyo met diverse CMS-platformen die geen standaard integratieconnectors hebben.
				Mijn werk richt zich op het bouwen van maatwerkoplossingen voor het tracken van gebruikersgedrag en het versturen van eventdata naar Klaviyo, zodat e-mailmarketeers beschikken over de data die ze nodig hebben om hun campagnes te optimaliseren. Ik gebruik Google Tag Manager uitgebreid voor custom tracking cookies en event firing op platformen als Shopify, WooCommerce, Lightspeed en CCVShop.
				Naast integraties bouw ik ook interne automatiseringen, scripts en tools die de bedrijfsprocessen stroomlijnen en handmatig werk voor het marketingteam verminderen, waaronder het integreren van Gemini's API om data automatisch te categoriseren.
			`,
		},
		{
			...getExperience('SPAR'),
			startDate: 'Jun 2024',
			endDate: 'Dec 2024',
			description:
				'Data engineer bij een grote Nederlandse retailketen, big data parsen en mappen met Azure Data Factory, Azure Databricks en PySpark om werklasten over meerdere instanties te verdelen.',
			extendedDescription: `
				Bij SPAR Nederland werkte ik als data engineer aan datavraagstukken voor een van de grootste retailketens van Nederland, met focus op het zo efficiënt mogelijk parsen en mappen van big data.
				Ik gebruikte Azure Data Factory, Azure Databricks en Azure SQL Database om grote datasets te beheren en verwerken. Wanneer datavolumes te groot waren voor een enkel proces, gebruikte ik PySpark om werklasten in batches over meerdere instanties te verdelen, waardoor zware transformaties op schaal mogelijk werden.
				Deze rol was een bewuste stap buiten mijn gebruikelijke full-stack webontwikkeling. Het verbreedde mijn technisch perspectief aanzienlijk en gaf mij praktijkervaring met datamanipulatie en het werken met big data.
			`,
		},
		{
			...getExperience('ING'),
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
			description:
				'Full-stack developer en product owner bij ING, bankinterfaces gebouwd met Lit web components en CI/CD-pipelines en custom ESLint-regels ingevoerd. Als product owner realistische verwachtingen gesteld en elke deadline gehaald door teamcapaciteit en stakeholderdoelen op één lijn te houden.',
			extendedDescription: `
				Bij ING in Amsterdam werkte ik als full-stack developer en product owner.
				Aan de ontwikkelkant bouwde ik bankinterfaces met Lit web components, met focus op codekwaliteit door het schrijven van custom ESLint-regels die teambreed werden afgedwongen en het aansturen van unit testing standaarden met Jest. Ik beheerde Azure DevOps CI/CD-pipelines voor betrouwbare deployments.
				Als product owner richtte ik mij op het stellen van realistische verwachtingen en het voorkomen van misafstemming met stakeholders. Wat het team aangaf aan te kunnen was wat werd ingepland, niet meer. Deze aanpak zorgde ervoor dat we elke deadline haalden en zowel het team als de stakeholders gedurende het hele project op één lijn bleven.
			`,
		},
		{
			...getExperience('Quintor'),
			startDate: 'Okt 2020',
			endDate: 'Okt 2023',
			description:
				'IT-consultant ingezet bij ING en SVB. Leerde uitgebreide teststrategieën (unit, integratie, e2e) en een framework-agnostische aanpak die de basis vormen van mijn werk als ontwikkelaar.',
			extendedDescription: `
				Bij Quintor begon ik als trainee en groeide door naar IT-consultant, ingezet bij ING en SVB.
				Tijdens mijn traineeship leerde ik framework-agnostisch te werken en mij snel aan te passen aan verschillende technologieën. Ik kreeg uitgebreide teststrategieën aangeleerd, waaronder unit tests, integratietests en end-to-end tests, en leerde de waarde van grondig testen uit eerste hand. Het traineeship leerde mij ook verder te kijken dan alleen de frontend, en de backend waarmee deze communiceert en de onderliggende infrastructuur te begrijpen.
				De testprincipes en samenwerkingsvaardigheden die ik bij Quintor heb geleerd werden de basis van mijn werk en zijn praktijken die ik in elke volgende rol heb meegenomen.
			`,
		},
		{
			...getExperience('SVB'),
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			description:
				'Frontend developer bij een grote overheidsinstantie, gewerkt aan een vertaallaag-dashboard en de migratie van AngularJS naar Angular. Zette teststrategieën op en waarborgde codekwaliteit, onder begeleiding van een senior consultant.',
			extendedDescription: `
				Bij de SVB (Sociale Verzekeringsbank), een grote Nederlandse overheidsinstantie, werkte ik als frontend developer aan een platform dat ruwe data vertaalde naar een geavanceerd frontend dashboard, als vertaallaag tussen de legacy-applicatie en de nieuwe frontend.
				Ik werkte ook aan de migratie van AngularJS naar modern Angular, wat mij leerde om de uitdagingen van grote migraties binnen grote organisaties te navigeren. Onder begeleiding van een senior consultant leerde ik snel de theoretische kennis uit mijn traineeship toe te passen in een praktische omgeving.
				Ik zette teststrategieën op en waarborgde codekwaliteit, met gebruik van mijn kennis van Angular om nieuwe systemen aan legacy-applicaties te koppelen. Dit was mijn eerste ervaring in een grote overheidsorganisatie.
			`,
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
