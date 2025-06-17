import { createEffect, createSignal, For } from 'solid-js';
import { info } from '../../data/info';

export default function Navigation({ curPage }) {
	const [navRoutes, setNavRoutes] = createSignal([]);

	createEffect(() => {
		// Get url
		const url = window.location.pathname;

		// Get current page
		const currentPage = url.split('/')[1];

		// Set navigation routes
		setNavRoutes(() => info.routes.filter(route => route.url !== `/${currentPage}`));
	});

	return (
		<div class="md:hidden fixed left-0 bottom-0 w-screen bg-light dark:bg-zinc-900 border-t-2 z-50 h-fit">
			<nav class="w-full grid grid-cols-5">
				<For each={navRoutes()}>
					{route => (
						<a class="p-3 flex items-center justify-center" href={route.url} aria-label={route.title}>
							{route.icon}
						</a>
					)}
				</For>
			</nav>
		</div>
	);
}
