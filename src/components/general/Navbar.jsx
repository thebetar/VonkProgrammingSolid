import { createSignal, createEffect, For } from 'solid-js';

import { info } from '@/data/info';
import PageNavigation from '@/components/general/PageNavigation';

const parser = new DOMParser();
const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const moonButton = parser.parseFromString(moon, 'image/svg+xml').documentElement;
const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const sunButton = parser.parseFromString(sun, 'image/svg+xml').documentElement;

export default function Navbar() {
	const [themeButton, setThemeButton] = createSignal('');
	const [navToggle, setNavToggle] = createSignal(false);

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

	const buttonClass =
		'flex justify-center items-center h-[52px] w-[52px] dark:text-white rounded-lg ml-2 bg-zinc-100 dark:bg-[#202020] dark:hover:bg-zinc-900 hover:bg-zinc-200 transition cursor-pointer';

	createEffect(themeHandler);

	return (
		<header class="container flex items-center justify-between h-20 sm:h-[123px]">
			<a
				class="text-2xl dark:text-white font-semibold dark:font-semibold font-outfit"
				href="/"
				aria-label="Logo home link"
			>
				<img src="/assets/images/logo.webp" alt="logo" title="logo" class="md:h-10 h-8" />
			</a>
			<nav>
				<ul class="flex items-center">
					<li>
						<a
							aria-label="Github button"
							class={buttonClass}
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
							aria-label="LinkedIn button"
							class={buttonClass}
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
						<button aria-label="theme-button" id="theme-button" class={buttonClass} onClick={changeTheme}>
							{themeButton}
						</button>
					</li>

					<li class="relative md:block hidden">
						<button
							aria-label="menu-button"
							id="menu-button"
							class={buttonClass}
							onClick={() => setNavToggle(!navToggle())}
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
							>
								<path
									d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
									fill="currentColor"
								/>
								<path
									d="M19 8.25H5C4.80109 8.25 4.61032 8.17098 4.46967 8.03033C4.32902 7.88968 4.25 7.69891 4.25 7.5C4.25 7.30109 4.32902 7.11032 4.46967 6.96967C4.61032 6.82902 4.80109 6.75 5 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z"
									fill="currentColor"
								/>
								<path
									d="M19 17.25H5C4.80109 17.25 4.61032 17.171 4.46967 17.0303C4.32902 16.8897 4.25 16.6989 4.25 16.5C4.25 16.3011 4.32902 16.1103 4.46967 15.9697C4.61032 15.829 4.80109 15.75 5 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z"
									fill="currentColor"
								/>
							</svg>
						</button>

						{navToggle() && (
							<nav class="absolute top-16 right-0 dark:text-white rounded-lg ml-2 bg-zinc-100 dark:bg-[#202020] w-52 px-3 py-1">
								<nav class="grid md:grid-cols-1 grid-cols-5 gap-2">
									<For each={info.routes}>
										{route => (
											<a
												aria-label={route.title}
												class="text-base hover:opacity-70 transition-opacity cursor-pointer px-0 py-2 p-4 flex h-auto items-center justify-start gap-x-2"
												href={route.url}
											>
												{route.icon}
												{route.title}
											</a>
										)}
									</For>
								</nav>
							</nav>
						)}
					</li>
				</ul>
			</nav>

			<PageNavigation />
		</header>
	);
}
