import { createEffect } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import Layout from '../layouts/Layout';

import AllSkills from '../components/skills/AllSkills';

export default function BlogsPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<Title>VonkProgramming - Skills</Title>
			<Meta name="description" content="Overview of my technical skills and expertise." />
			<Meta property="og:title" content="VonkProgramming - Skills" />
			<Meta property="og:description" content="Overview of my technical skills and expertise." />
			<Meta property="og:type" content="website" />

			<AllSkills />
		</div>
	);

	return <Layout slot={template} />;
}
