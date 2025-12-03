export const projects = [
	{
		title: 'Vonk Wifi Scan',
		description: `
				Scan each WiFi channel using promiscuous mode to find the channel where the least packets are being sent. This can be used to find the best channel for your WiFi network.
			`,
		thumbnail: '/assets/images/projects/vonk-wifi-scan.webp',
		githubUrl: 'https://github.com/thebetar/VonkWifiScan',
	},
	{
		title: 'VonkServer (home automation)',
		description: `
				With the VonkServer project I attempted to write my own simple web server using only C. I succeeded in this fairly quickly so I decided to find a good use case for it which became running it as the central hub for my home automation system. The web server runs on my raspberry pi while the sensors are read by an ESP32 which sends the data every 20 minutes to the web server.
			`,
		thumbnail: '/assets/images/projects/vonkserver-home-automation.webp',
		githubUrl: 'https://github.com/thebetar/Vonkserver',
		language: 'c',
	},
	{
		title: 'ZenuNet',
		description: `
				ZenuNet is a project I started to create an easy way to create and configure neural networks making it accessible to everyone. It is a web application that was written using React.js and PHP.
			`,
		thumbnail: '/assets/images/projects/zenunet.webp',
		liveUrl: 'https://zenunet.nl/',
		language: 'javascript',
	},
	{
		title: 'VonkCountGame',
		description: `
				VonkCountGame is a simple game I made to practice my C++ skills. The game is a simple counting game where you have to count the number of objects on the screen. It is a simple game but it was a good exercise to practice my C++ skills.
			`,
		thumbnail: '/assets/images/projects/vonk-count-game.webp',
		githubUrl: 'https://github.com/thebetar/VonkCountGame',
		language: 'C++',
	},
	{
		title: 'VonkMaze',
		description: `
				VonkMaze is a simple game I made to practice my C++ skills. The game is a simple maze game where you have to find your way through the maze. It is a simple game but it was a good exercise to practice my C++ skills.
			`,
		thumbnail: '/assets/images/projects/vonk-maze.webp',
		githubUrl: 'https://github.com/thebetar/VonkMaze',
		language: 'C++',
	},
	{
		title: 'VonkEcrypt',
		description: `
				VonkEncrypt is a simple tool I created to practise both my skills in C++ and cryptography. The tool is a simple command line tool that can encrypt and decrypt files using a simple key. It is a simple tool but it was a good exercise to practice my C++ skills and learn more about cryptography.
			`,
		thumbnail: '/assets/images/projects/vonk-encrypt.webp',
		githubUrl: 'https://github.com/thebetar/VonkEncrypt',
		language: 'C++',
	},
	{
		title: 'VonkListTree',
		description: `
				VonkListTree is a simple tool I created to practise both my skills in C++ and data structures. The tool is a simple command line tool that can create a tree structure from the current directory, it's subdirectories and files. It is a simple tool but it was a good exercise to practice my C++ skills and learn more about data structures.
			`,
		thumbnail: '/assets/images/projects/vonk-list-tree.webp',
		githubUrl: 'https://github.com/thebetar/VonkListTree',
		language: 'C++',
	},
	{
		title: 'VonkDB',
		description: `
				VonkDB is a simple database I created to practise both my skills in C++ and databases. The database contains a simple table structure using CSV to store every table.
			`,
		thumbnail: '/assets/images/projects/vonk-db.webp',
		githubUrl: 'https://github.com/thebetar/VonkDB',
		language: 'C++',
	},
	{
		title: 'VonkHash',
		description: `
				VonkHash is a simple hash function I created to practise both my skills in C and cryptography. The hash function is a simple command line tool that can hash it's input and be used for checksums. It does not support a way to decrypt the hash.
			`,
		thumbnail: '/assets/images/projects/vonk-hash.webp',
		githubUrl: 'https://github.com/thebetar/VonkHash',
		language: 'C',
	},
	{
		title: 'ArduinoChristmas',
		description: `
				ArduinoChristmas was a project I created to practise my electrical engineering skills. I ordered a simple christmas tree that I had to solder myself and I added some extra addons like a small speaker and extra lights that would turn on based on a timer or button input.
			`,
		thumbnail: '/assets/images/projects/arduino-christmas.webp',
		githubUrl: 'https://github.com/thebetar/ArduinoChristmas',
		language: 'C',
	},
	{
		title: 'AssistAI',
		description: `
				AssistAI is a tool that I created that uses RAG to take context from the notes that exist in one's application. This will be the base of a note-taking app that I am working on that will integrate AI to quickly search your notes or create new notes based on quick scribbles from the user.
			`,
		thumbnail: '/assets/images/projects/assistai.png',
		githubUrl: 'https://github.com/thebetar/AssistAI',
		language: 'python',
	},
	{
		title: 'Portfolio website (Solid)',
		description: `
				This is my portfolio website that I created using SolidJS. It is a simple website that showcases my skills and projects. It is a simple website but it was a good exercise to practice my SolidJS skills and learn more about web development.
			`,
		thumbnail: '/assets/images/projects/vonkprogramming-solid.webp',
		githubUrl: 'https://github.com/thebetar/VonkProgrammingSolid',
		language: 'javascript',
	},
	{
		title: 'Portfolio website (Astro)',
		description: `
				This is my previous portfolio website that I created using Astro. It is a simple website that showcases my skills and projects. It is a simple website but it was a good exercise to practice my Astro skills and learn more about web development.
			`,
		thumbnail: '/assets/images/projects/vonkprogramming-astro.webp',
		githubUrl: 'https://github.com/thebetar/VonkProgrammingAstro',
		language: 'javascript',
	},
	{
		title: 'Encrypted replicated messaging',
		description: `
				Encrypted replicated messaging is a project I created to practise my skills in distributed systems and cryptography. The project is a simple command line tool that can send and receive messages between multiple nodes in a distributed system. The messages are encrypted using a simple key and can be decrypted by the recipient.
			`,
		thumbnail: '/assets/images/projects/encrypted-message-exchange.webp',
		githubUrl: 'https://github.com/thebetar/EncryptedMessageExchange',
		language: 'javascript',
	},
	{
		title: 'x86 assembly',
		description: `
				During my master's studies at Politechnika Warszawska, I had multiple exercises, a project and a test about x86 assembly. For this purpose I have grouped the exercises I made, the project and multiple exercises I made to practise my x86 assembly skills for the final test.
			`,
		thumbnail: '/assets/images/projects/x86-assembly.png',
		githubUrl: 'https://github.com/thebetar/x86-assembly',
		language: 'assembly',
	},
	{
		title: 'Risc-V assembly',
		description: `
				During my master's studies at Politechnika Warszawska, I had multiple exercises, a project and a test about Risc-V assembly. For this purpose I have grouped the exercises I made, the project and multiple exercises I made to practise my Risc-V assembly skills for the final test.
			`,
		thumbnail: '/assets/images/projects/risc-v-assembly.webp',
		githubUrl: 'https://github.com/thebetar/RISC-V-assembly',
		language: 'assembly',
	},
	// {
	// 	title: 'AssistAI',
	// 	thumbnail: '/assets/images/assistai.png',
	// 	githubUrl: 'https://github.com/thebetar/AssistAI',
	// },
	{
		title: 'Resilient hosting',
		description: `
				A simple docker compose setup which show cases the methodology to setup docker compose with replication and fail-safes for when a single container crashes.
			`,
		thumbnail: '/assets/images/projects/resilienthosting.webp',
		githubUrl: 'https://github.com/thebetar/ResillientHosting',
		language: 'docker',
	},
	{
		title: 'Advent of code',
		description: `
				Advent of code is a yearly coding challenge that I participate in. I have created a repository where I store my solutions to the challenges. The challenges are in Go and Python, but I also have some solutions in JavaScript.
			`,
		thumbnail: '/assets/images/projects/adventofcode.webp',
		githubUrl: 'https://github.com/thebetar/AdventOfCode',
		liveUrl: 'https://adventofcode.com/',
		language: 'go',
	},
	{
		title: 'Voice calculator',
		thumbnail: '/assets/images/projects/voicecalculator.webp',
		githubUrl: 'https://github.com/thebetar/IASRProject',
		language: 'python',
	},
	{
		title: 'ESlint custom rules',
		thumbnail: '/assets/images/projects/eslint.webp',
		githubUrl: 'https://github.com/thebetar/EslintCustomRules',
		language: 'javascript',
	},
	{
		title: 'Bun vs Node',
		thumbnail: '/assets/images/projects/bunvsnode.webp',
		githubUrl: 'https://github.com/thebetar/BunVsNode',
		language: 'javascript',
	},
	{
		title: 'FietsTracker',
		thumbnail: '/assets/images/projects/fietstrekker.webp',
		githubUrl: 'https://github.com/thebetar/fietsTracker',
		language: 'javascript',
	},
	{
		title: 'Klets',
		thumbnail: '/assets/images/projects/klets.webp',
		liveUrl: 'https://vonkprogramming.nl',
		language: 'javascript',
	},
	{
		title: 'Deet',
		thumbnail: '/assets/images/projects/deet.webp',
		liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.deetcalendar',
		language: 'javascript',
	},
	{
		title: 'Fyndyr',
		thumbnail: '/assets/images/projects/fyndyr.webp',
		githubUrl: 'https://github.com/thebetar/Fyndyr',
		liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr',
		language: 'javascript',
	},
];
