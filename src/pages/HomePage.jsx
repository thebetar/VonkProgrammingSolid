import { info } from '../data/info';
import { createEffect, onCleanup } from 'solid-js';

import Layout from '../layouts/Layout';
import Hero from '../components/homepage/Hero';
import Navigation from '../components/homepage/Navigation';
import BlogsPreview from '../components/homepage/BlogsPreview';
import SkillsPreview from '../components/homepage/SkillsPreview';
import ExperiencesPreview from '../components/homepage/ExperiencesPreview';
import ProjectsPreview from '../components/homepage/ProjectsPreview';

let scrollListener;

export default function Homepage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Home`;

		// On scroll remove # from URL
		scrollListener = () => {
			if (window.location.hash) {
				history.replaceState(null, null, ' ');
			}
		};
	});

	onCleanup(() => {
		window.removeEventListener('scroll', scrollListener);
	});

	const template = (
		<>
			<Hero />
			<Navigation />
			<BlogsPreview />
			<SkillsPreview />
			<ExperiencesPreview title="Experience" details={info.experience.filter(e => e.featured)} />
			<ExperiencesPreview title="Education" details={info.education.filter(e => e.featured)} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
