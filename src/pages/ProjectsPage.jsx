import { For } from 'solid-js';

import { info } from '../data/info';
import Layout from '../layouts/Layout';

import ProjectCard from '../components/homepage/ProjectCard';
import PageHeader from '../components/skills/PageHeader';

export default function ProjectsPage() {
	const template = (
		<>
			<PageHeader>Projects</PageHeader>

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline">
						Go to homepage
					</a>{' '}
					🏚️
				</div>
			</div>

			<p class="w-full text-center md:text-lg text-base md:mt-4 md:mb-8 my-6">
				Here are the projects that I have worked on in my free time, every project card has a link to the Github
				repository (if available) and a marker for which programming language was used.
			</p>

			<div class="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-2">
				<For each={info.projects}>{project => <ProjectCard {...project} />}</For>
			</div>
		</>
	);

	return <Layout slot={template} />;
}
