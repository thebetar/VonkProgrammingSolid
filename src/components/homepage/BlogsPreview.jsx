import { For } from 'solid-js';
import { info } from '../../data/info';
import { getTagColor } from '../../data/blogs';

const { blogs } = info;

export default function Blog() {
	const getReadmoreLink = link => {
		return link.split('/').pop().split('-').join(' ').toLowerCase();
	};

	return (
		<section id="blogs" class="flex items-start justify-between flex-col sm:flex-row dark:text-white">
			<h2 class="w-[15rem] mt-16 uppercase">Blog</h2>

			<div class="w-full">
				<For each={blogs.slice(0, 4)}>
					{blog => (
						<div class="md:my-16 my-8">
							<div>
								<div class="flex justify-between md:flex-row flex-col md:items-center mb-2">
									<h3 class="text-xl font-semibold">{blog.title}</h3>
									<p class="text-sm dark:text-gray">{blog.date}</p>
								</div>
								<div class="flex gap-x-2 mb-2">
									<For each={blog.tags.sort((a, b) => a.localeCompare(b))}>
										{tag => (
											<span
												class={[
													'text-xs',
													'text-white',
													'capitalize',
													'px-2',
													'py-1',
													'rounded-md',
													'font-semibold',
													'bg-opacity-70',
													`bg-${getTagColor(tag)}-700`,
												].join(' ')}
											>
												{tag}
											</span>
										)}
									</For>
								</div>
								<p class="text-base md:text-sm mb-1">{blog.description}</p>

								<a href={blog.link} class="text-sm underline hover:opacity-70 transition-opacity">
									Read more about {getReadmoreLink(blog.link)}
								</a>
							</div>
						</div>
					)}
				</For>

				<div class="lg:col-span-3 col-span-2 text-center mt-4 md:text-base text-sm">
					<a
						class="dark:text-white text-zinc-900 underline hover:opacity-70 transition-opacity"
						href="/blogs"
					>
						See all {blogs.length} blogs
					</a>
				</div>
			</div>
		</section>
	);
}
