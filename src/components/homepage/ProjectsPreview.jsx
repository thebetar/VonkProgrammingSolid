import { For } from 'solid-js';

import ProjectCard from './ProjectCard';
import { info } from '../../data/info';

const { projects } = info;

export default function ProjectsPreview() {
	return (
		<section id="projects">
			<h2 class="text-center mt-16 uppercase sm:text-2xl text-3xl font-semibold">Featured projects</h2>

			<div class="w-full grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
				<For each={projects.filter(p => p.featured)}>{project => <ProjectCard {...project} />}</For>
			</div>

			<div class="lg:col-span-3 col-span-2 text-center mt-4 md:text-base text-sm">
				<a class="dark:text-white text-zinc-900 underline hover:opacity-70 transition-opacity" href="/projects">
					See all {projects.length} projects
				</a>
			</div>
		</section>
	);
}
