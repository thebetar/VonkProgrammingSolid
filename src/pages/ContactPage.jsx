import Layout from '../layouts/Layout';
import ContactCard from '../components/contact/ContactCard';

export default function ContactPage() {
	const template = (
		<div class="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] py-16 px-4 text-zinc-900 dark:text-white">
			<ContactCard />
		</div>
	);

	return <Layout slot={template} />;
}
