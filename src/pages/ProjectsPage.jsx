import { For } from 'solid-js';

import { projects } from '@/data/projects';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ProjectCard from '@/components/homepage/ProjectCard';
import PageHeader from '@/components/skills/PageHeader';

export default function ProjectsPage() {
	const template = (
		<>
			<SEO
				title="Projects"
				description="Personal and open-source projects by Lars Vonk — the Fyndyr Android app, Go and TypeScript infrastructure tools, C++ experiments, IoT automation and more."
				path="/projects"
				keywords={['projects', 'open source', 'Go', 'TypeScript', 'C++', 'IoT', 'Android app', 'github']}
				jsonLd={{
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: 'VonkProgramming Projects',
					url: 'https://vonkprogramming.nl/projects',
				}}
			/>

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
				<For each={projects}>{project => <ProjectCard {...project} />}</For>
			</div>
		</>
	);

	return <Layout slot={template} />;
}
