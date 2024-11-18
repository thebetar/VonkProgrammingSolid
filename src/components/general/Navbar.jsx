import { createSignal, createEffect } from 'solid-js';

import { info } from '../../data/info';

const parser = new DOMParser();
const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const moonButton = parser.parseFromString(moon, 'image/svg+xml').documentElement;
const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const sunButton = parser.parseFromString(sun, 'image/svg+xml').documentElement;

export default function Navbar() {
	const [themeButton, setThemeButton] = createSignal('');

	const changeTheme = () => {
		const theme = localStorage.getItem('theme') || 'light';
		localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');

		themeHandler();
	};

	function themeHandler() {
		let theme = localStorage.getItem('theme');

		if (!theme) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		if (theme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			document.querySelector('[name="theme-color"]').content = '#111111';
			setThemeButton(sunButton);
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			document.querySelector('[name="theme-color"]').content = '#FFFFFF';
			setThemeButton(moonButton);
		}
	}

	createEffect(themeHandler);

	return (
		<header class="container flex items-center justify-between h-[80px] sm:h-[123px]">
			<a class="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit" href="/">
				<img src="/assets/images/logo.webp" alt="logo" title="logo" class="md:h-10 h-8" />
			</a>
			<nav>
				<ul class="flex items-center">
					<li>
						<a
							aria-label="github-button"
							class="block rounded-lg p-4 ml-2 bg-zinc-100 dark:bg-[#202020] dark:hover:bg-zinc-900 hover:bg-zinc-200 transition"
							href={info.socialMedia.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					</li>

					<li>
						<button
							aria-label="theme-button"
							id="theme-button"
							class="dark:text-light rounded-lg p-4 ml-2 bg-zinc-100 dark:bg-[#202020] dark:hover:bg-zinc-900 hover:bg-zinc-200 transition"
							onClick={changeTheme}
						>
							{themeButton}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
