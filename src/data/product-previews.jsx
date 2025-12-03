import { CodeSvg, EyeSvg, GitServiceSvg, MonitorSvg, ServerSvg, LightBulbSvg } from '@/components/Icons';

export const products = [
	{
		id: 'web-tracking',
		title: 'Web Tracking with AI insights',
		titleShort: 'Tracking',
		descriptionShort:
			'Gain actionable insights with our privacy-first, AI-powered web tracking. Receive weekly summaries of anonymous user activity to improve your website without the need for expensive, complex analytics tools.',
		contactLink: '/contact/web-tracking',
		productLink: '/products/web-tracking',
		logo: <EyeSvg width={48} height={48} />,
	},
	{
		id: 'monitoring',
		title: 'Monitoring',
		titleShort: 'Monitoring',
		descriptionShort:
			'Ensure your services stay online with our managed uptime monitoring. We provide a simple, affordable alternative to complex monitoring platforms, alerting you instantly to downtime or expired SSL certificates.',
		contactLink: '/contact/monitoring',
		productLink: '/products/monitoring',
		logo: <MonitorSvg width={48} height={48} />,
	},
	{
		id: 'container-hosting',
		title: 'Container Hosting',
		titleShort: 'Hosting',
		descriptionShort:
			'VonkProgramming provides affordable and reliable container hosting solutions without the lock-in. Perfect for side projects that need flexible, short-term deployments without long-term contracts.',
		contactLink: '/contact/container-hosting',
		productLink: '/products/container-hosting',
		logo: <ServerSvg width={48} height={48} />,
	},
	{
		id: 'git-backup',
		title: 'Git Backup Service',
		titleShort: 'Git Backup',
		descriptionShort:
			'Secure your code with an automated fail-safe. We provide a simple managed backup service that mirrors your repositories, ensuring your code remains safe even if you lose access to your main Git provider.',
		contactLink: '/contact/git-backup',
		productLink: '/products/git-backup',
		logo: <GitServiceSvg width={48} height={48} />,
	},
	{
		id: 'custom-solutions',
		title: 'Custom solutions',
		titleShort: 'Solutions',
		descriptionShort:
			'Turn your unique ideas into reality with tailored software solutions. From web development and AI integration to IoT, we build custom applications designed specifically to meet your business goals.',
		contactLink: '/contact/custom-solutions',
		productLink: '/products/custom-solutions',
		logo: <CodeSvg width={48} height={48} />,
	},
	{
		id: 'workflow-automation',
		title: 'Workflow Automation',
		titleShort: 'Automation',
		descriptionShort:
			'Stop wasting time on repetitive tasks. Our custom workflow automation solutions streamline your business processes, reducing errors and freeing up your team to focus on high-value work.',
		contactLink: '/contact/workflow-automation',
		productLink: '/products/workflow-automation',
		logo: <LightBulbSvg width={48} height={48} />,
	},
];
