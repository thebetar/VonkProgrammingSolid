import { useParams } from '@solidjs/router';

import { info } from '@/data/info';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ContactCard from '@/components/contact/ContactCard';

export default function ContactPage() {
	const params = useParams();
	const isService = !!params.service;
	const path = isService ? `/contact/${params.service}` : '/contact';

	const template = (
		<div class="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] py-16 px-4 text-zinc-900 dark:text-white">
			<SEO
				title="Contact"
				description="Get in touch with Lars Vonk for freelance projects, custom software, AI integrations, web tracking, monitoring, hosting, or backups."
				path={path}
				noindex={isService}
				keywords={['contact', 'freelance', 'inquiry', 'hire developer']}
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
