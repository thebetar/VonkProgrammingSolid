import { For } from 'solid-js';
import { info } from '../../data/info';
import { getTagColor } from '../../data/blogs';

const { projects } = info;

export default function Blog() {
	const getReadmoreLink = link => {
		return link.split('/').pop().split('-').join(' ').toLowerCase();
	};

	return (
		<section class="flex items-start justify-between flex-col sm:flex-row dark:text-light">
			<h2 class="w-[15rem] mt-16 uppercase">Project</h2>
			<div class="w-full">
				<For each={projects.filter(p => p.isFeatured)}>{project => <div>{project.title}</div>}</For>

				<div class="lg:col-span-3 col-span-2 text-center mt-4 md:text-base text-sm">
					<a
						class="dark:text-white text-zinc-900 underline hover:opacity-70 transition-opacity"
						href="/blogs"
					>
						See all {projects.length} blogs
					</a>
				</div>
			</div>
		</section>
	);
}
