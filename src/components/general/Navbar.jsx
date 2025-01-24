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
						<a
							aria-label="linkedin-button"
							class="block rounded-lg p-4 ml-2 bg-zinc-100 dark:bg-[#202020] dark:hover:bg-zinc-900 hover:bg-zinc-200 transition"
							href={info.socialMedia.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
									fill="currentColor"
								/>
								<path
									d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
									fill="currentColor"
								/>
								<path
									d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
									fill="currentColor"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
									fill="currentColor"
								/>
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
