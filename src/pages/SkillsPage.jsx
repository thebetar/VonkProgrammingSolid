import { createEffect } from 'solid-js';

import Layout from '../layouts/Layout';
import Hero from '../components/homepage/Hero';
import AllSkills from '../components/skills/AllSkills';

export default function BlogsPage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Skills`;
	});

	const template = (
		<>
			<Hero short />
			<AllSkills />
		</>
	);

	return <Layout slot={template} />;
}
