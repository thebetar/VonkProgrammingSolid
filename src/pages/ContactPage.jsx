import { Title, Meta } from '@solidjs/meta';

import Layout from '@/layouts/Layout';
import ContactCard from '@/components/contact/ContactCard';

export default function ContactPage() {
	const template = (
		<div class="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] py-16 px-4 text-zinc-900 dark:text-white">
			<Title>VonkProgramming - Contact</Title>
			<Meta name="description" content="Get in touch with me for inquiries, collaborations, or just to say hi." />
			<Meta property="og:title" content="VonkProgramming - Contact" />
			<Meta
				property="og:description"
				content="Get in touch with me for inquiries, collaborations, or just to say hi."
			/>
			<Meta property="og:type" content="website" />

			<ContactCard />
		</div>
	);

	return <Layout slot={template} />;
}
