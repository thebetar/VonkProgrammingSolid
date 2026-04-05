import { info } from "./info";

export const resumeTranslations = {
  en: {
    title: "Resume",
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    languages: "Languages",
    contact: "Contact",
    download: "Download PDF",
    present: "Present",
    compact: "Compact",
    extended: "Extended",
    summaryText:
      "Full-stack engineer with nearly a decade of experience across a wide variety of organisations, projects, fields, and programming languages. Passionate about software development with a drive that extends beyond work. I regularly write blogs, research new tools, and explore emerging technologies. Currently working on my own personal assistant using OpenClaw and Ollama running a local 9B parameter model.",
    extendedSummaryText:
      "Full-stack engineer with nearly a decade of experience across a wide variety of organisations, projects, fields, and programming languages. Passionate about software development with a drive that extends beyond work. I regularly write blogs, research new tools, and explore emerging technologies to stay ahead. In my spare time I build side projects such as a personal assistant powered by OpenClaw and Ollama running a local 9B parameter model. My career spans enterprise banking at ING, government agencies like SVB, retail data engineering at SPAR, and multiple startup environments. I thrive in roles that demand both technical depth and cross-team collaboration, and I bring strong opinions on code quality, testing, and developer experience to every team I join.",
  },
  nl: {
    title: "CV",
    summary: "Samenvatting",
    experience: "Werkervaring",
    education: "Opleiding",
    certifications: "Certificeringen",
    skills: "Vaardigheden",
    languages: "Talen",
    contact: "Contact",
    download: "Download PDF",
    present: "Heden",
    compact: "Compact",
    extended: "Uitgebreid",
    summaryText:
      "Full-stack engineer met bijna tien jaar ervaring in divers aantal organisaties, projecten, vakgebieden en programmeertalen. Passie voor softwareontwikkeling dat zich uit in hobby projecten. Ik schrijf regelmatig blogs, onderzoek nieuwe tools en verken opkomende technologieën. Momenteel werk ik aan mijn eigen persoonlijke assistent met OpenClaw en Ollama die een lokaal 9B parameter model draait.",
    extendedSummaryText:
      "Full-stack engineer met bijna tien jaar ervaring in een divers aantal organisaties, projecten, vakgebieden en programmeertalen. Passie voor softwareontwikkeling die zich ook buiten werktijd uit. Ik schrijf regelmatig blogs, onderzoek nieuwe tools en verken opkomende technologieën om voorop te blijven lopen. In mijn vrije tijd bouw ik zijprojecten, zoals een persoonlijke assistent aangedreven door OpenClaw en Ollama met een lokaal 9B-parametermodel. Mijn carrière omvat enterprise banking bij ING, overheidsinstanties zoals de SVB, data engineering bij SPAR en diverse startup-omgevingen. Ik gedij in rollen die zowel technische diepgang als samenwerking tussen teams vereisen, en breng sterke overtuigingen over codekwaliteit, testen en developer experience naar elk team.",
  },
};

export const resumeExperience = {
  en: [
    {
      name: "Mikrocloud",
      title: "Lead Full Stack Developer",
      startDate: "Jul 2025",
      endDate: "Present",
      skills: ["Laravel", "Nuxt.js", "AWS", "PHP", "Docker"],
      description:
        "Lead developer architecting an SD-WAN platform for Mikrotik RouterOS devices, using Laravel, Nuxt.js, and AWS microservices. Writes RouterOS scripts for remote router configuration and builds AI-powered network diagnostics.",
      extendedDescription:
        "As the lead developer at Mikrocloud I am responsible for architecting and building a platform that allows users to manage Mikrotik RouterOS devices in a custom SD-WAN network. The backend is built with Laravel and the frontend with Nuxt.js, while our cloud infrastructure runs on AWS using a microservices architecture with Lambda, API Gateway, and SNS for inter-service communication. A unique aspect of this role is writing scripts in the RouterOS scripting language to configure routers remotely, which has given me hands-on experience with networking protocols and hardware management. I also design and implement AI-powered features that improve the platform, such as intelligent network diagnostics and automated configuration suggestions based on usage patterns.",
    },
    {
      name: "Webshopimporter",
      title: "Lead Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Present",
      skills: ["Django", "Python", "REST", "SOAP", "CodeIgniter"],
      description:
        "Lead developer on a supplier-to-webshop data mapping platform, currently migrating from CodeIgniter to Django. Maintains integrations across REST, SOAP, JSON, XML, and FTP with robust monitoring and retry mechanisms.",
      extendedDescription:
        "As the lead developer at Webshopimporter I oversee a system that fetches supplier data and maps it into different e-commerce platforms. I am currently leading a full platform migration from the legacy CodeIgniter codebase to Django, redesigning the data layer and API integrations in the process. The work involves building and maintaining connections across a wide range of formats and protocols — REST, SOAP, JSON, XML, and FTP — regardless of how complex or poorly documented the supplier APIs are. I have introduced improved error handling, retry mechanisms, and monitoring to ensure reliable data synchronisation for dozens of active supplier feeds running daily.",
    },
    {
      name: "Wisepim",
      title: "Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Present",
      skills: ["Django", "RemixJS", "Python", "REST API"],
      description:
        "Full-stack developer at an AI-powered PIM startup, building e-commerce API integrations with Django and RemixJS. Designed scalable webhook pipelines and admin interfaces enabling non-technical team members to manage integrations independently.",
      extendedDescription:
        "At Wisepim, a fast-growing startup at the forefront of AI technology, I develop e-commerce API integrations that connect various external systems to their Product Information Management platform. The platform uses AI to enrich and improve product information automatically. I build backend services with Django and the frontend with RemixJS, focusing on creating scalable integration pipelines that can keep up with the company's rapid growth. My work includes designing RESTful APIs, implementing webhook receivers, and building admin interfaces that allow non-technical team members to manage integrations independently.",
    },
    {
      name: "Swiftsync",
      title: "Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Present",
      skills: ["Django", "NiceGUI", "React", "Python"],
      description:
        "Full-stack developer building custom tools including a configurable web scraping dashboard and e-commerce management platforms using Django, NiceGUI, and React. Automated synchronisation pipelines for Magento, CCVShop, and WordPress.",
      extendedDescription:
        "At Swiftsync I handle a wide variety of projects ranging from API integrations to web scraping and frontend development. I created an advanced web scraping dashboard using Django and NiceGUI that allows for highly configurable data extraction — users can define selectors, scheduling, and transformation rules without writing code. I also developed a management dashboard for CCVShop that makes it significantly easier to view, filter, and bulk-edit product data. On top of that I built automated data collection and synchronisation pipelines for platforms like Magento, CCVShop, and WordPress, using React for the frontend where rich interactivity is needed.",
    },
    {
      name: "Chary Solutions",
      title: "Senior Developer",
      startDate: "Jul 2024",
      endDate: "Present",
      skills: ["Klaviyo", "GTM", "Shopify", "WooCommerce", "JavaScript"],
      description:
        "Senior developer integrating Klaviyo with CMS platforms lacking standard connectors, using Google Tag Manager for custom event tracking across Shopify, WooCommerce, Lightspeed, and CCVShop. Also builds internal automations to reduce manual effort.",
      extendedDescription:
        "As the senior developer at Chary Solutions I lead the technical development for integrating Klaviyo with various content management systems that lack standard integration connectors. My work focuses on building custom solutions for tracking user behaviour and sending event data to Klaviyo, providing email marketers with the granular data they need to optimise their campaigns. I use Google Tag Manager extensively for custom tracking cookies and event firing across platforms like Shopify, WooCommerce, Lightspeed, and CCVShop. Beyond integrations I also build internal automations — scripts and tools that streamline the company's operations and reduce manual work for the marketing team.",
    },
    {
      name: "SPAR",
      title: "Data Engineer",
      startDate: "Jun 2024",
      endDate: "Dec 2024",
      skills: ["SQL", "Azure", "Python", "Pandas", "NumPy"],
      description:
        "Data engineer at a major Dutch retail chain, building ETL pipelines with Azure Data Factory and analytical models in Python to process large-scale sales and supply chain data.",
      extendedDescription:
        "At SPAR Nederland I worked as a data engineer solving complex data-related questions for one of the Netherlands' largest retail chains. I built ETL data pipelines using Azure Data Factory and wrote analytical models in Python with Pandas and NumPy to process large volumes of sales, inventory, and supply chain data. I used advanced SQL queries on Azure SQL databases to extract insights that informed business decisions. This role was a deliberate departure from my usual full-stack web development work — it broadened my technical perspective considerably and gave me deep expertise in data manipulation, statistical analysis, and working with big data at scale.",
    },
    {
      name: "ING",
      title: "Full Stack Developer / Product Owner",
      startDate: "Apr 2022",
      endDate: "Sep 2023",
      skills: ["Lit", "JavaScript", "ESLint", "CI/CD", "Jest"],
      description:
        "Full-stack developer and product owner at ING, building Lit web component interfaces while managing CI/CD pipelines and custom ESLint rules. Also led sprint planning, feature prioritisation, and stakeholder alignment.",
      extendedDescription:
        "At ING in Amsterdam I worked as both a full-stack developer and product owner. On the development side I built banking interfaces using Lit web components, focusing heavily on code quality by writing custom ESLint rules enforced across the team and driving unit testing standards with Jest to achieve high coverage. I managed Azure DevOps CI/CD pipelines to ensure reliable deployments. During my tenure as product owner I managed project timelines, prioritised the feature backlog, and worked closely with business stakeholders to align technical delivery with strategic goals. This dual role gave me a unique appreciation for the intersection of engineering excellence and product thinking in a regulated enterprise environment.",
    },
    {
      name: "Quintor",
      title: "IT Consultant / Trainee",
      startDate: "Oct 2020",
      endDate: "Oct 2023",
      skills: ["Java", "Angular", "Agile", "Testing"],
      description:
        "IT consultant deployed at enterprise clients like ING and government agencies, learning rigorous testing strategies (unit, integration, e2e) and agile practices that became the foundation of my engineering approach.",
      extendedDescription:
        "At Quintor I started as a trainee and grew into an IT consultant deployed at major enterprise clients including ING and various Dutch government organisations. During my traineeship I learned the importance of rigorous code quality through extensive testing — unit tests, integration tests, end-to-end tests, and more specialised testing strategies for different use cases. I worked in agile teams following Scrum and SAFe methodologies, which taught me how to deliver incrementally and collaborate effectively in large organisations. The testing and quality principles I internalised at Quintor became foundational to my work and are practices I have carried into every subsequent role.",
    },
    {
      name: "SVB",
      title: "Frontend Developer",
      startDate: "Apr 2021",
      endDate: "Apr 2022",
      skills: ["Angular", "TypeScript", "AngularJS", "CI/CD"],
      description:
        "Frontend developer at a Dutch government agency, leading the AngularJS to Angular migration for services relied on by millions of citizens. Set up Jenkins CI/CD pipelines and Cypress e2e tests to ensure reliable continuous delivery.",
      extendedDescription:
        "At SVB (Sociale Verzekeringsbank), a major Dutch government agency, I worked as a frontend developer building web applications with Angular and TypeScript. A major part of my role was leading the migration from AngularJS to modern Angular, which required careful planning, deep knowledge of both frameworks, and a phased approach to avoid disrupting services relied upon by millions of citizens. I set up Jenkins CI/CD pipelines to ensure continuous delivery and wrote Cypress end-to-end tests to catch regressions early. This was my first experience in a large government organisation, and it taught me how to navigate complex organisational structures, follow strict compliance requirements, and deliver reliable software in a high-stakes environment.",
    },
  ],
  nl: [
    {
      name: "Mikrocloud",
      title: "Lead Full Stack Developer",
      startDate: "Jul 2025",
      endDate: "Heden",
      skills: ["Laravel", "Nuxt.js", "AWS", "PHP", "Docker"],
      description:
        "Lead developer van een SD-WAN-platform voor Mikrotik RouterOS-apparaten, gebouwd met Laravel, Nuxt.js en AWS-microservices. Schrijft RouterOS-scripts voor configuratie op afstand en implementeert AI-functies voor netlwerkdiagnostiek.",
      extendedDescription:
        "Als lead developer bij Mikrocloud ben ik verantwoordelijk voor het ontwerpen en bouwen van een platform waarmee gebruikers Mikrotik RouterOS-apparaten in een SD-WAN-netwerk kunnen beheren. De backend is gebouwd met Laravel en de frontend met Nuxt.js, terwijl onze cloudinfrastructuur draait op AWS met een microservices-architectuur via Lambda, API Gateway en SNS. Een uniek aspect van deze rol is het schrijven van scripts in de RouterOS-scripttaal om routers op afstand te configureren, wat mij praktijkervaring heeft gegeven met netwerkprotocollen en hardwarebeheer. Ik ontwerp en implementeer ook AI-functies die het platform verbeteren, zoals intelligente netwerkdiagnostiek en geautomatiseerde configuratiesuggesties.",
    },
    {
      name: "Webshopimporter",
      title: "Lead Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Heden",
      skills: ["Django", "Python", "REST", "SOAP", "CodeIgniter"],
      description:
        "Lead developer op een data-integratieplatform dat migreert van CodeIgniter naar Django. Bouwt en onderhoudt koppelingen via REST, SOAP, JSON, XML en FTP met robuuste monitoring en retry-mechanismen.",
      extendedDescription:
        "Als lead developer bij Webshopimporter beheer ik een systeem dat leveranciersdata ophaalt en mapt naar verschillende e-commerce platformen. Ik leid momenteel een volledige platformmigratie van de legacy CodeIgniter-codebase naar Django, waarbij de datalaag en API-integraties opnieuw worden ontworpen. Het werk omvat het bouwen en onderhouden van koppelingen via REST, SOAP, JSON, XML en FTP — ongeacht hoe complex of slecht gedocumenteerd de leveranciers-API's zijn. Ik heb verbeterde foutafhandeling, retry-mechanismen en monitoring geïntroduceerd om betrouwbare datasynchronisatie te garanderen voor tientallen actieve leveranciersfeeds die dagelijks draaien.",
    },
    {
      name: "Wisepim",
      title: "Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Heden",
      skills: ["Django", "RemixJS", "Python", "REST API"],
      description:
        "Full-stack developer bij een AI-gestuurde PIM-startup, met focus op e-commerce API-integraties in Django en RemixJS. Ontwerpt schaalbare webhook-pipelines en admin-interfaces voor niet-technische teamleden.",
      extendedDescription:
        "Bij Wisepim, een snelgroeiende startup aan de voorhoede van AI-technologie, ontwikkel ik e-commerce API-integraties die externe systemen koppelen aan hun Product Information Management-platform. Het platform gebruikt AI om productinformatie automatisch te verrijken en verbeteren. Ik bouw backendservices met Django en de frontend met RemixJS, met focus op schaalbare integratiepipelines die de snelle groei van het bedrijf kunnen bijhouden. Mijn werk omvat het ontwerpen van RESTful API's, het implementeren van webhook-ontvangers en het bouwen van admin-interfaces waarmee niet-technische teamleden integraties zelfstandig kunnen beheren.",
    },
    {
      name: "Swiftsync",
      title: "Full Stack Developer",
      startDate: "Sep 2024",
      endDate: "Heden",
      skills: ["Django", "NiceGUI", "React", "Python"],
      description:
        "Full-stack developer die maatwerktooling bouwt, waaronder een configureerbaar web scraping dashboard en e-commerce beheerplatformen met Django, NiceGUI en React. Automatiseerde synchronisatiepipelines voor Magento, CCVShop en WordPress.",
      extendedDescription:
        "Bij Swiftsync werk ik aan uiteenlopende projecten, van API-integraties tot web scraping en frontendwerk. Ik heb een geavanceerd web scraping dashboard gebouwd met Django en NiceGUI waarmee gebruikers selectors, planning en transformatieregels kunnen definiëren zonder code te schrijven. Daarnaast heb ik een beheerdashboard ontwikkeld voor CCVShop waarmee productdata veel eenvoudiger bekeken, gefilterd en in bulk bewerkt kan worden. Ook heb ik geautomatiseerde dataverzamelings- en synchronisatiepipelines gebouwd voor platformen als Magento, CCVShop en WordPress, met React voor de frontend waar rijke interactiviteit nodig is.",
    },
    {
      name: "Chary Solutions",
      title: "Senior Developer",
      startDate: "Jul 2024",
      endDate: "Heden",
      skills: ["Klaviyo", "GTM", "Shopify", "WooCommerce", "JavaScript"],
      description:
        "Senior developer die Klaviyo integreert met CMS-platformen zonder standaard connectors, via custom event tracking in Google Tag Manager voor Shopify, WooCommerce, Lightspeed en CCVShop. Bouwt ook interne automatiseringen.",
      extendedDescription:
        "Als senior developer bij Chary Solutions leid ik de technische ontwikkeling voor het integreren van Klaviyo met diverse CMS-platformen die geen standaard integratieconnectors hebben. Mijn werk richt zich op het bouwen van maatwerkoplossingen voor het tracken van gebruikersgedrag en het versturen van eventdata naar Klaviyo, zodat e-mailmarketeers beschikken over de gedetailleerde data die ze nodig hebben om hun campagnes te optimaliseren. Ik gebruik Google Tag Manager uitgebreid voor custom tracking cookies en event firing op platformen als Shopify, WooCommerce, Lightspeed en CCVShop. Naast integraties bouw ik ook interne automatiseringen — scripts en tools die de bedrijfsprocessen stroomlijnen en handmatig werk voor het marketingteam verminderen.",
    },
    {
      name: "SPAR",
      title: "Data Engineer",
      startDate: "Jun 2024",
      endDate: "Dec 2024",
      skills: ["SQL", "Azure", "Python", "Pandas", "NumPy"],
      description:
        "Data engineer bij een grote Nederlandse retailketen, verantwoordelijk voor ETL-pipelines via Azure Data Factory en analytische modellen in Python voor grootschalige verkoop- en supply chain-data.",
      extendedDescription:
        "Bij SPAR Nederland werkte ik als data engineer aan complexe datavraagstukken voor een van de grootste retailketens van Nederland. Ik bouwde ETL-datapipelines met Azure Data Factory en schreef analytische modellen in Python met Pandas en NumPy om grote volumes aan verkoop-, voorraad- en supply chain-data te verwerken. Ik gebruikte geavanceerde SQL-queries op Azure SQL-databases om inzichten te genereren die zakelijke beslissingen onderbouwden. Deze rol was een bewuste stap buiten mijn gebruikelijke full-stack webontwikkeling — het verbreedde mijn technisch perspectief aanzienlijk en gaf mij diepgaande expertise in datamanipulatie, statistische analyse en het werken met big data op grote schaal.",
    },
    {
      name: "ING",
      title: "Full Stack Developer / Product Owner",
      startDate: "Apr 2022",
      endDate: "Sep 2023",
      skills: ["Lit", "JavaScript", "ESLint", "CI/CD", "Jest"],
      description:
        "Full-stack developer en product owner bij ING, bankinterfaces gebouwd met Lit web components en CI/CD-pipelines en custom ESLint-regels ingevoerd. Leidde ook sprintplanning, feature-prioritering en stakeholdercommunicatie.",
      extendedDescription:
        "Bij ING in Amsterdam werkte ik als full-stack developer en product owner. Aan de ontwikkelkant bouwde ik bankinterfaces met Lit web components, met sterke focus op codekwaliteit door het schrijven van custom ESLint-regels die teambreed werden afgedwongen en het aansturen van unit testing standaarden met Jest voor hoge coverage. Ik beheerde Azure DevOps CI/CD-pipelines voor betrouwbare deployments. Tijdens mijn periode als product owner beheerde ik projecttimelines, prioriteerde ik de feature-backlog en werkte ik nauw samen met business stakeholders om technische oplevering af te stemmen op strategische doelen. Deze dubbele rol gaf mij een unieke waardering voor het snijvlak van engineering excellence en productdenken in een gereguleerde enterprise-omgeving.",
    },
    {
      name: "Quintor",
      title: "IT Consultant / Trainee",
      startDate: "Okt 2020",
      endDate: "Okt 2023",
      skills: ["Java", "Angular", "Agile", "Testing"],
      description:
        "IT-consultant ingezet bij enterprise-klanten als ING en overheidsinstanties. Leerde rigoureuze teststrategieën (unit, integratie, e2e) en agile methodologieën die de basis vormen van mijn aanpak als ontwikkelaar.",
      extendedDescription:
        "Bij Quintor begon ik als trainee en groeide door naar IT-consultant, ingezet bij grote enterprise-klanten waaronder ING en diverse Nederlandse overheidsorganisaties. Tijdens mijn traineeship leerde ik het belang van rigoureuze codekwaliteit door uitgebreid testen — unit tests, integratietests, end-to-end tests en meer gespecialiseerde teststrategieën voor verschillende use cases. Ik werkte in agile teams volgens Scrum- en SAFe-methodologieën, wat mij leerde hoe ik incrementeel kan opleveren en effectief kan samenwerken in grote organisaties. De test- en kwaliteitsprincipes die ik bij Quintor heb geïnternaliseerd werden de basis van mijn werk en zijn praktijken die ik in elke volgende rol heb meegenomen.",
    },
    {
      name: "SVB",
      title: "Frontend Developer",
      startDate: "Apr 2021",
      endDate: "Apr 2022",
      skills: ["Angular", "TypeScript", "AngularJS", "CI/CD"],
      description:
        "Frontend developer bij een grote overheidsinstantie die de migratie van AngularJS naar Angular leidde voor diensten die door miljoenen burgers worden gebruikt. Richtte Jenkins CI/CD-pipelines en Cypress e2e-tests in voor betrouwbare continue oplevering.",
      extendedDescription:
        "Bij de SVB (Sociale Verzekeringsbank), een grote Nederlandse overheidsinstantie, werkte ik als frontend developer aan webapplicaties met Angular en TypeScript. Een belangrijk onderdeel van mijn rol was het leiden van de migratie van AngularJS naar modern Angular, wat zorgvuldige planning, diepgaande kennis van beide frameworks en een gefaseerde aanpak vereiste om verstoring van diensten te voorkomen waar miljoenen burgers op vertrouwen. Ik heb Jenkins CI/CD-pipelines opgezet voor continuous delivery en Cypress end-to-end tests geschreven om regressies vroegtijdig op te vangen. Dit was mijn eerste ervaring in een grote overheidsorganisatie en het leerde mij hoe ik complexe organisatiestructuren kan navigeren, strikte compliance-eisen kan volgen en betrouwbare software kan opleveren in een omgeving met hoge verwachtingen.",
    },
  ],
};

export const resumeEducation = {
  en: [
    {
      name: "MSc — Computer Systems and Networks",
      institution: "Warsaw University of Technology",
      startDate: "2023",
      endDate: "2025",
      description:
        "Thesis on Spectrum Sensing using Cognitive Radio (5/5). GPA: 4.55/5.",
    },
    {
      name: "BSc — Software Engineering",
      institution: "Windesheim Flevoland",
      startDate: "2016",
      endDate: "2020",
      description: "HBO-ICT with a minor in entrepreneurship.",
    },
  ],
  nl: [
    {
      name: "MSc — Computersystemen en Netwerken",
      institution: "Technische Universiteit Warschau",
      startDate: "2023",
      endDate: "2025",
      description:
        "Scriptie over Spectrum Sensing met Cognitive Radio (5/5). GPA: 4,55/5.",
    },
    {
      name: "BSc — Software Engineering",
      institution: "Windesheim Flevoland",
      startDate: "2016",
      endDate: "2020",
      description: "HBO-ICT met een minor in ondernemerschap.",
    },
  ],
};

export const resumeCertifications = {
  en: [
    { name: "Cambridge English: C1", year: "2016" },
    { name: "AWS Cloud Practitioner", year: "2021" },
    { name: "Certified Scrum Master", year: "2022" },
  ],
  nl: [
    { name: "Cambridge English: C1", year: "2016" },
    { name: "AWS Cloud Practitioner", year: "2021" },
    { name: "Gecertificeerd Scrum Master", year: "2022" },
  ],
};
