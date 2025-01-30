import { For } from 'solid-js';

import { info } from '../data/info';
import Layout from '../layouts/Layout';

import PageNavigation from '../components/general/PageNavigation';
import Hero from '../components/homepage/Hero';
import ProjectCard from '../components/homepage/ProjectCard';

export default function ProjectsPage() {
	const template = (
		<>
			<PageNavigation curPage={'projects'} />

			<h2 class="w-full text-4xl text-center md:my-4 my-6">Projects</h2>

			<p class="w-full text-center md:text-lg text-base md:mt-4 md:mb-8 my-6">
				Here are the projects that I have worked on in my free time, every project card has a link to the Github
				repository (if available) and a marker for which programming language was used.
			</p>

			<div class="w-full grid lg:grid-cols-3 grid-cols-2 md:gap-8 gap-2">
				<For each={info.projects}>{project => <ProjectCard {...project} />}</For>
			</div>
		</>
	);

	return <Layout slot={template} />;
}
