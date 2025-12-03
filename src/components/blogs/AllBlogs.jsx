import { For } from 'solid-js';

import PageHeader from '@/components/skills/PageHeader';
import { blogs, getTagColor } from '@/data/blog_previews';

export default function AllBlogs() {
	function getReadmoreLink(link) {
		return link.split('/').pop().split('-').join(' ').toLowerCase();
	}

	return (
		<section class="flex items-center justify-start flex-col dark:text-white">
			<PageHeader>Blog</PageHeader>

			<div class="flex justify-center md:mb-8 mb-2">
				<div>
					<a href="/" class="underline" aria-label="Go to homepage">
						Go to homepage
					</a>{' '}
					🏚️
				</div>
			</div>

			<div class="xl:w-[960px] md:w-[720px] w-full">
				<For each={blogs}>
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
								<p class="text-base md:text-sm dark:text-gray mb-1">{blog.description}</p>
								<a
									aria-label={`Read more about ${getReadmoreLink(blog.link)}`}
									href={blog.link}
									class="text-sm dark:text-gray underline hover:opacity-70 transition-opacity"
								>
									Read more about {getReadmoreLink(blog.link)}
								</a>
							</div>
						</div>
					)}
				</For>
			</div>
		</section>
	);
}
