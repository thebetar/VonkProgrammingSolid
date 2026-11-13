export const projects = [
	{
		title: 'Fyndyr',
		description: `
				Fyndyr is an Android app that helps you find your friends in any crowd, even without signal. Hold up a giant flashing sign, chat with your group over Bluetooth without internet or an account, and follow a compass that points straight at your friend. It is built with Ionic, React and Capacitor and is available on the Google Play Store.
			`,
		thumbnail: '/assets/images/projects/fyndyr-showcase.webp',
		liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr',
		language: 'typescript',
	},
	{
		title: 'Abeona Proxy',
		description: `
				Abeona Proxy is a reverse proxy with load balancing that I wrote in TypeScript to understand how tools like Nginx route traffic. Routes are configured in JSON and can spread requests over multiple services using round robin, weighted round robin or IP hash strategies.
			`,
		thumbnail: '/assets/images/projects/abeona-proxy.webp',
		githubUrl: 'https://github.com/thebetar/abeona-proxy',
		language: 'typescript',
	},
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
];
