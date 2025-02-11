import { info } from '../data/info';
import Layout from '../layouts/Layout';

export default function ProjectsPage() {
	const template = (
		<div class="h-[calc(100vh-254px)] flex flex-col items-center justify-center">
			<h2 class="w-full text-4xl text-center md:my-4 my-6">Not found</h2>
			<p class="w-full text-center md:text-lg text-base md:mt-4 md:mb-8 my-6">
				The page you are looking for does not exist.
			</p>
			<div>
				<a href="/" class="font-semibold underline">
					Go back to the home page
				</a>{' '}
				🏚️
			</div>
		</div>
	);

	return <Layout slot={template} />;
}
