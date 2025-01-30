import { createEffect } from 'solid-js';

import Layout from '../layouts/Layout';

import PageNavigation from '../components/general/PageNavigation';
import Hero from '../components/homepage/Hero';
import AllSkills from '../components/skills/AllSkills';

export default function BlogsPage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Skills`;
	});

	const template = (
		<>
			<PageNavigation curPage={'skills'} />

			<div className="md:mt-4 mt-6">
				<AllSkills />
			</div>
		</>
	);

	return <Layout slot={template} />;
}
