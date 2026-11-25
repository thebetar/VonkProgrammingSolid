import { For } from 'solid-js';
import { useLocation } from '@solidjs/router';

import { info } from '@/data/info';

const mobileRoutes = info.routes.filter(route => route.mobile);

export default function PageNavigation() {
	const location = useLocation();

	function isActive(url) {
		return url === '/' ? location.pathname === '/' : location.pathname.startsWith(url);
	}

	return (
		<div class="md:hidden fixed left-0 bottom-0 w-screen bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-50 h-fit">
			<nav class="w-full flex" aria-label="Page navigation">
				<For each={mobileRoutes}>
					{route => (
						<a
							href={route.url}
							aria-label={route.title}
							aria-current={isActive(route.url) ? 'page' : undefined}
							class={[
								'flex-1 flex flex-col items-center gap-1 pt-2 pb-1.5',
								'text-[10px] leading-none transition-colors',
								isActive(route.url)
									? 'text-cyan-700 dark:text-cyan-400 font-semibold'
									: 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white',
							].join(' ')}
						>
							<span class="flex *:size-6">{route.icon}</span>
							<span>{route.title}</span>
						</a>
					)}
				</For>
			</nav>
		</div>
	);
}
