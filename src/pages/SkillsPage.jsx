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
			<Hero short />
			<AllSkills />
		</>
	);

	return <Layout slot={template} />;
}
