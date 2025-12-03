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
		title: 'Encrypted replicated messaging',
		description: `
				Encrypted replicated messaging is a project I created to practise my skills in distributed systems and cryptography. The project is a simple command line tool that can send and receive messages between multiple nodes in a distributed system. The messages are encrypted using a simple key and can be decrypted by the recipient.
			`,
		thumbnail: '/assets/images/projects/encrypted-message-exchange.webp',
		githubUrl: 'https://github.com/thebetar/EncryptedMessageExchange',
		language: 'javascript',
	},
];
