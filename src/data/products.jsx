import { CodeSvg, EyeSvg, GitServiceSvg, MonitorSvg, ServerSvg, LightBulbSvg } from '../components/Icons';

import { ProductButton } from '../components/products/ProductButton';

export const products = [
	{
		id: 'web-tracking',
		title: 'Web Tracking with AI insights',
		titleShort: 'Tracking',
		descriptionShort:
			'Gain actionable insights with our privacy-first, AI-powered web tracking. Receive weekly summaries of anonymous user activity to improve your website without the need for expensive, complex analytics tools.',
		description: (
			<>
				<p className="mb-4">
					<strong>
						Curious about what products or features your users love? These AI insights will tell you!
					</strong>
				</p>
				<p className="mb-4">
					Most analytics tools are expensive, invasive, and require hours of manual monitoring. Whether you
					run a webshop, a corporate site, or a blog, I provide a solution that does the heavy lifting for
					you. It is perfect for any online business that wants insights without the high cost or time
					commitment.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>The Budget-Friendly Analyst:</strong> Hiring a human data analyst is expensive. While
						this AI solution might not capture every subtle nuance a human expert would, it provides the
						essential actionable insights you need at a significantly lower cost. It is the perfect balance
						for businesses that need guidance but cannot justify a full-time analyst salary.
					</li>
					<li>
						<strong>Privacy-First:</strong> All tracking is strictly anonymous. We assign unique browser IDs
						to track sessions, clicks, and page views without ever compromising personal user identity.
					</li>
					<li>
						<strong>Less Work, More Value:</strong> Since we handle the hosting and analysis, you can focus
						entirely on growing your business and serving your customers, rather than worrying about
						technical maintenance or interpreting complex data graphs.
					</li>
				</ul>
				<p>
					This streamlined approach allows you to focus your efforts effectively on what matters most to your
					business, while we handle the tracking and insights.
				</p>

				<ProductButton contactLink="/contact/web-tracking" />

				<div className="w-full border border-zinc-300 dark:border-zinc-700 my-4"></div>
				<div className="text-xl">
					<strong>Example AI-Generated Insights:</strong>
				</div>
				<img
					src="/assets/images/products/tracking-report.webp"
					alt="Web Tracking Report Example"
					className="mt-4 rounded-lg shadow-lg"
				/>
			</>
		),
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
		description: (
			<>
				<p className="mb-4">
					<strong>Reliable uptime monitoring without the complexity or high price tag.</strong>
				</p>
				<p className="mb-4">
					Many monitoring services offer advanced features, but they often come with steep learning curves and
					high costs. Our solution is designed to be simple, effective, and accessible to everyone who needs
					to ensure their services are online.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>Zero Configuration Hassle:</strong> Just provide us with the services you want to
						monitor and your contact details. We handle the technical setup so you do not have to.
					</li>
					<li>
						<strong>Essential Real-Time Alerts:</strong> Receive immediate notifications if your service
						goes down or if an SSL certificate has expired. We focus on the critical metrics that keep your
						business running.
					</li>
					<li>
						<strong>Budget-Friendly:</strong> This is a managed solution designed to be affordable. It is
						perfect for those who do not have monitoring yet and want a professional safety net without the
						enterprise expense.
					</li>
				</ul>
				<p>
					Enjoy the peace of mind that comes with 24/7 monitoring, delivered through a straightforward and
					cost-effective managed service.
				</p>

				<ProductButton contactLink="/contact/monitoring" />

				<div className="w-full border border-zinc-300 dark:border-zinc-700 my-4"></div>
				<div className="text-xl">
					<strong>Monitoring service used:</strong>
				</div>
				<img
					src="/assets/images/products/monitoring.webp"
					alt="Monitoring Dashboard Example"
					className="mt-4 rounded-lg shadow-lg"
				/>
			</>
		),
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
		description: (
			<>
				<p className="mb-4">
					<strong>Flexible container hosting without the long-term lock-in.</strong>
				</p>
				<p className="mb-4">
					Big hosting providers often demand year-long contracts even for simple side projects. We offer a
					low-barrier alternative that is perfect for testing concepts, running internal tools, or managing
					temporary deployments without the commitment.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>No Contracts Required:</strong> Perfect for short-term needs. Whether you need to host a
						container for a couple of weeks or a few months, you only pay for what you use without signing a
						yearly agreement.
					</li>
					<li>
						<strong>Ideal for Internal Tools:</strong> Please note that no public IP is provided. This makes
						our solution more cost effective for hosting application that do not require public access such
						as scrapers, monitoring agents, chat bots, or development environments.
					</li>
					<li>
						<strong>Budget-Friendly:</strong> Stop overpaying for infrastructure you do not use. Get
						reliable container hosting at a fraction of the cost of enterprise cloud providers.
					</li>
				</ul>
				<p>
					Launch your containers quickly and easily in a managed environment designed for developers who need
					flexibility.
				</p>

				<ProductButton contactLink="/contact/container-hosting" />

				<div className="w-full border border-zinc-300 dark:border-zinc-700 my-4"></div>
				<div className="text-xl">
					<strong>Container hosting service used:</strong>
				</div>
				<img
					src="/assets/images/products/portainer.webp"
					alt="Container Hosting Dashboard Example"
					className="mt-4 rounded-lg shadow-lg"
				/>
			</>
		),
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
		description: (
			<>
				<p className="mb-4">
					<strong>Your ultimate fail-safe for critical code repositories.</strong>
				</p>
				<p className="mb-4">
					Relying on a single provider like GitHub can be risky. Whether it is a server outage or an
					unexpected account lockout, losing access to your code can be devastating. Our managed solution
					provides an essential safety net by automatically backing up your repositories to a secure,
					independent environment.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>True Independence:</strong> Do not rely on a single point of failure. We host a
						completely separate instance (powered by Gitea) to ensure your code is accessible even if big
						providers go down.
					</li>
					<li>
						<strong>Automated Peace of Mind:</strong> Once set up, the system automatically mirrors your
						work. You do not need to manually push code or manage servers; it just works in the background.
					</li>
					<li>
						<strong>Low-Barrier Protection:</strong> Securing your intellectual property should not be
						complicated or expensive. We offer a straightforward, cost-effective way to keep a secondary
						copy of your important projects.
					</li>
				</ul>
				<p>
					Protect your hard work with a simple, managed backup strategy that ensures you always have control
					over your own code.
				</p>

				<ProductButton contactLink="/contact/git-backup" />

				<div className="w-full border border-zinc-300 dark:border-zinc-700 my-4"></div>
				<div className="text-xl">
					<strong>Backup service powered by:</strong>
				</div>
				<img
					src="/assets/images/products/gitea.webp"
					alt="Git Backup Service Dashboard Example"
					className="mt-4 rounded-lg shadow-lg"
				/>
			</>
		),
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
		description: (
			<>
				<p className="mb-4">
					<strong>Software built specifically for your business needs.</strong>
				</p>
				<p className="mb-4">
					Off-the-shelf software often forces you to change your processes to fit the tool. We believe the
					tool should fit your process. Whether you need a complex web application, an AI-integrated
					dashboard, or a specialized IoT solution, we build it from the ground up to solve your specific
					problems.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>Tailored Fit:</strong> We do not use cookie-cutter templates. We analyze your
						requirements to build a solution that fits your workflow perfectly.
					</li>
					<li>
						<strong>Diverse Expertise:</strong> From modern web development and data science to hardware
						integration with IoT, we have the skills to handle complex, multi-disciplinary projects.
					</li>
					<li>
						<strong>Collaborative Partner:</strong> We work closely with you throughout the process,
						ensuring the final product is exactly what you envisioned.
					</li>
				</ul>
				<p>
					Transform your unique challenges into competitive advantages with custom software designed just for
					you.
				</p>

				<ProductButton contactLink="/contact/custom-solutions" />
			</>
		),
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
		description: (
			<>
				<p className="mb-4">
					<strong>Eliminate repetitive tasks and boost your team's efficiency.</strong>
				</p>
				<p className="mb-4">
					Manual data entry, file management, and repetitive reporting consume valuable time and are prone to
					human error. We analyze your daily operations to identify bottlenecks and build custom automation
					scripts that handle the busywork for you.
				</p>
				<ul className="list-disc pl-5 mb-4 space-y-2">
					<li>
						<strong>Save Time & Money:</strong> By automating routine tasks, your team can focus on
						strategic initiatives that actually drive revenue.
					</li>
					<li>
						<strong>Reduce Errors:</strong> Automated workflows perform tasks consistently every time,
						eliminating the risk of typos or missed steps.
					</li>
					<li>
						<strong>Seamless Integration:</strong> We connect your existing tools and services to create a
						smooth, unified workflow that operates in the background.
					</li>
				</ul>
				<p>Let technology handle the boring stuff so you can focus on growing your business.</p>
				<ProductButton contactLink="/contact/workflow-automation" />
				<div className="w-full border border-zinc-300 dark:border-zinc-700 my-4"></div>
				<div className="text-xl">
					<strong>Example Automation Tools Used:</strong>
				</div>
				<img
					src="/assets/images/products/n8n.webp"
					alt="Workflow Automation Tools Example"
					className="mt-4 rounded-lg shadow-lg"
				/>
			</>
		),
		contactLink: '/contact/workflow-automation',
		productLink: '/products/workflow-automation',
		logo: <LightBulbSvg width={48} height={48} />,
	},
];
