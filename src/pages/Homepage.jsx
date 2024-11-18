import { info } from '../data/info';
import { createEffect } from 'solid-js';

import Layout from '../layouts/Layout';
import Hero from '../components/homepage/Hero';
import BlogsPreview from '../components/homepage/BlogsPreview';
import SkillsPreview from '../components/homepage/SkillsPreview';
import ExperiencesPreview from '../components/homepage/ExperiencesPreview';
import ProjectsPreview from '../components/homepage/ProjectsPreview';

export default function Homepage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Home`;
	});

	const template = (
		<>
			<Hero />
			<BlogsPreview />
			<SkillsPreview />
			<ExperiencesPreview title="Experience" details={info.experience.filter(e => e.featured)} />
			<ExperiencesPreview title="Education" details={info.education.filter(e => e.featured)} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
