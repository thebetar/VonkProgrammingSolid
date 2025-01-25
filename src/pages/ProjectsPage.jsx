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

			<Hero short />

			<h2 class="w-full text-4xl text-center md:my-4 my-2">Projects</h2>

			<div class="flex justify-center dark:text-white text-zinc-900 w-full">
				<div>
					<a href="/" class="dark:text-white text-zinc-900 underline">
						Go back
					</a>{' '}
					in time ⏰
				</div>
			</div>

			<div class="w-full mt-6 grid lg:grid-cols-3 grid-cols-2 md:gap-8 gap-2">
				<For each={info.projects}>{project => <ProjectCard {...project} />}</For>
			</div>
		</>
	);

	return <Layout slot={template} />;
}
