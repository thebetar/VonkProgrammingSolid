import { info } from '@/data/info';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ContactCard from '@/components/contact/ContactCard';

export default function ContactPage() {
	const path = '/contact';

	const template = (
		<div class="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] py-16 px-4 text-zinc-900 dark:text-white">
			<SEO
				title="Contact"
				description="Get in touch with Lars Vonk about blogs, projects, or anything else."
				path={path}
				keywords={['contact', 'inquiry', 'blogs']}
				jsonLd={{
					'@context': 'https://schema.org',
					'@type': 'ContactPage',
					url: `${info.baseUrl}${path}`,
					name: 'Contact VonkProgramming',
					mainEntity: {
						'@type': 'Person',
						name: info.name,
						email: info.socialMedia.email.replace('mailto:', ''),
						sameAs: [info.socialMedia.github, info.socialMedia.linkedin, info.socialMedia.stackoverflow],
					},
				}}
			/>

			<ContactCard />
		</div>
	);

	return <Layout slot={template} />;
}
