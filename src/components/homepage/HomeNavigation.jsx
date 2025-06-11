import { createEffect, createSignal, For, onCleanup } from 'solid-js';

const iconStyle = 'md:w-5 md:h-5 w-7 h-7';

export default function Navigation() {
	const [scrollListener, setScrollListener] = createSignal(null);
	const [navToggle, setNavToggle] = createSignal(false);

	const sections = [
		{
			id: 'hero',
			title: 'Home',
			mobile: false,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M11.3248,7.22461 C11.7513,6.58854 12,5.82332 12,5 C12,2.79086 10.2091,1 8,1 C5.79086,1 4,2.79086 4,5 C4,5.82332 4.24874,6.58854 4.67518,7.22461 C3.11714,7.77132 2,9.2552 2,11 L2,15 L14,15 L14,11 C14,9.2552 12.8829,7.77132 11.3248,7.22461 Z M10,5 C10,6.10457 9.10457,7 8,7 C6.89543,7 6,6.10457 6,5 C6,3.89543 6.89543,3 8,3 C9.10457,3 10,3.89543 10,5 Z M6,9 C4.89543,9 4,9.89543 4,11 L4,13 L12,13 L12,11 C12,9.89543 11.1046,9 10,9 L6,9 Z"
					/>
				</svg>
			),
		},
		{
			id: 'blogs',
			title: 'Blog',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3,1 L9.17157,1 C9.64307222,1 10.0973893,1.16648691 10.4559723,1.46691468 L10.5858,1.58579 L13.4142,4.41421 C13.7476222,4.74761444 13.9511481,5.18659519 13.9922598,5.65257532 L14,5.82843 L14,14 C14,14.51285 13.613973,14.9355092 13.1166239,14.9932725 L13,15 L3,15 C2.48716857,15 2.06449347,14.613973 2.0067278,14.1166239 L2,14 L2,2 C2,1.48716857 2.38604429,1.06449347 2.88337975,1.0067278 L3,1 L9.17157,1 L3,1 Z M9,3 L4,3 L4,13 L12,13 L12,6 L10,6 C9.48715929,6 9.06449214,5.61395571 9.00672766,5.11662025 L9,5 L9,3 Z M6,10 L8,10 C8.55228,10 9,10.4477 9,11 C9,11.51285 8.61395571,11.9355092 8.11662025,11.9932725 L8,12 L6,12 C5.44772,12 5,11.5523 5,11 C5,10.48715 5.38604429,10.0644908 5.88337975,10.0067275 L6,10 Z M10,7 C10.5523,7 11,7.44772 11,8 C11,8.55228 10.5523,9 10,9 L6,9 C5.44772,9 5,8.55228 5,8 C5,7.44772 5.44772,7 6,7 L10,7 Z"
					/>
				</svg>
			),
		},
		{
			id: 'skills',
			title: 'Skills',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M10.0248,9.97521 L5.83008,14.1699 C4.72551,15.2745 2.93464,15.2745 1.83008,14.1699 C0.725505,13.0654 0.725506,11.2745 1.83008,10.1699 L6.02479,5.97521 C6.0084,5.81904 6,5.6605 6,5.5 C6,3.18096 7.7542,1.27164 10.008,1.02658 C10.1696,1.00901 10.3338,1 10.5,1 C11.1906,1 11.8448,1.15555 12.4295,1.43351 L10.2851,3.57797 C9.6993,4.16376 9.6993,5.11351 10.2851,5.69929 C10.8709,6.28508 11.8206,6.28508 12.4064,5.69929 L14.5564,3.54932 C14.8407,4.13945 15,4.80112 15,5.5 C15,5.65429 14.9922,5.80676 14.9771,5.95705 C14.748,8.22767 12.831,10 10.5,10 C10.3395,10 10.181,9.9916 10.0248,9.97521 Z M9.28499,7.88658 L4.41586,12.7557 C4.09234,13.0792 3.56781,13.0792 3.24429,12.7557 C2.92077,12.4322 2.92077,11.9077 3.24429,11.5841 L8.11342,6.715 L9.28499,7.88658 Z"
					/>
				</svg>
			),
		},
		{
			id: 'experience',
			title: 'Experience',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M4,4 L4,3 C4,1.89543 4.89543,1 6,1 L10,1 C11.1046,1 12,1.895431 12,3 L12,4 L14,4 C15.1046,4 16,4.89543 16,6 L16,13 C16,14.1046 15.1046,15 14,15 L2,15 C0.895431,15 0,14.1046 0,13 L0,6 C0,4.89543 0.895431,4 2,4 L4,4 Z M6,3 L10,3 L10,4 L6,4 L6,3 Z M2,6 L2,8 L14,8 L14,6 L2,6 Z M2,13 L2,10 L7,10 L7,11 L9,11 L9,10 L14,10 L14,13 L2,13 Z"
					/>
				</svg>
			),
		},
		{
			id: 'education',
			title: 'Education',
			mobile: true,
			icon: (
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={iconStyle}>
					<path
						fill="currentColor"
						d="M8,1 C8.55228,1 9,1.44769 9,2 C9,2.05821 9.04103,2.1082 9.09783,2.12092 C9.23039,2.15062 9.36095,2.18556 9.4893,2.22556 C9.54467,2.24281 9.60497,2.22009 9.63397,2.16986 C9.91013,1.69159 10.5217,1.52771 11,1.80383 C11.4783,2.07996 11.6422,2.69159 11.366,3.16986 C11.3366,3.22077 11.3472,3.2852 11.3904,3.32507 C11.489,3.41606 11.5839,3.51096 11.6749,3.60956 C11.7148,3.65275 11.7792,3.66335 11.8301,3.63397 C12.3084,3.35785 12.92,3.52173 13.1962,4 C13.4723,4.47827 13.3084,5.0899 12.8301,5.36603 C12.7799,5.39501 12.7572,5.4553 12.7744,5.51066 C12.8144,5.63902 12.8494,5.76962 12.8791,5.9022 C12.8918,5.95898 12.9418,6 13,6 C13.5523,6 14,6.44769 14,7 C14,7.55231 13.5523,8 13,8 C12.9418,8 12.8918,8.04102 12.8791,8.0978 C12.8712,8.13326 12.8629,8.16857 12.8542,8.20374 C12.8303,8.30006 12.8037,8.3953 12.7744,8.48934 C12.7572,8.5447 12.7799,8.60499 12.8301,8.63397 C13.3084,8.9101 13.4723,9.52173 13.1962,10 C12.92,10.4783 12.3084,10.6422 11.8301,10.366 L11.7795,10.3368 C11.7581,10.3244 11.7309,10.3289 11.7144,10.3472 C11.6991,10.3641 11.6964,10.3888 11.7078,10.4085 L14.07,14.5 L12.271,14.384 L11.4719,16 L9.11587,11.9192 C9.10244,11.8959 9.0755,11.8841 9.04923,11.8897 C9.02063,11.8958 9,11.921 9,11.9502 L9,12 C9,12.5523 8.55228,13 8,13 C7.44772,13 7,12.5523 7,12 L7,11.9502 C7,11.921 6.97937,11.8958 6.95077,11.8897 C6.9245,11.8841 6.89756,11.8959 6.88413,11.9192 L4.52807,16 L3.72903,14.384 L1.92999,14.5 L4.29222,10.4085 C4.30358,10.3888 4.30085,10.3641 4.28564,10.3472 C4.26908,10.3289 4.24195,10.3244 4.22053,10.3368 L4.16989,10.366 C3.69159,10.6422 3.08002,10.4783 2.80386,10 C2.52771,9.52173 2.69159,8.9101 3.16989,8.63397 C3.2201,8.60499 3.24282,8.54472 3.22557,8.48937 C3.18557,8.361 3.1506,8.23039 3.12089,8.0978 C3.10817,8.04102 3.05819,8 3,8 C2.44772,8 2,7.55231 2,7 C2,6.44769 2.44772,6 3,6 C3.05819,6 3.10817,5.95898 3.12089,5.9022 C3.1506,5.76961 3.18557,5.639 3.22557,5.51063 C3.24282,5.45528 3.2201,5.39501 3.16989,5.36603 C2.69159,5.0899 2.52771,4.47827 2.80386,4 C3.08002,3.52173 3.69159,3.35785 4.16989,3.63397 C4.22078,3.66335 4.28519,3.65276 4.32505,3.60958 C4.41608,3.51095 4.51103,3.41599 4.60965,3.32496 C4.65282,3.28512 4.66341,3.22073 4.63403,3.16986 C4.35791,2.69159 4.52176,2.08002 5.00006,1.80383 C5.47836,1.52771 6.08994,1.69159 6.36609,2.16986 C6.39507,2.22009 6.45536,2.24282 6.51072,2.22558 C6.63906,2.1856 6.76963,2.15064 6.90217,2.12093 C6.95897,2.1082 7,2.05821 7,2 C7,1.44769 7.44772,1 8,1 Z M8,4 C6.34314,4 5,5.34314 5,7 C5,8.65686 6.34314,10 8,10 C9.65686,10 11,8.65686 11,7 C11,5.34314 9.65686,4 8,4 Z M8,6 C8.55229,6 9,6.44772 9,7 C9,7.55228 8.55229,8 8,8 C7.44772,8 7,7.55228 7,7 C7,6.44772 7.44772,6 8,6 Z"
					/>
				</svg>
			),
		},
		{
			id: 'projects',
			title: 'Projects',
			mobile: true,
			icon: (
				<svg
					width="800px"
					height="800px"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
					class={iconStyle}
				>
					<path d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6z" fill="currentColor" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 5a1 1 0 001 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 001-1V2a1 1 0 00-1-1H1a1 1 0 00-1 1v3zm2-2v1h12V3H2zm1 10V6h10v7H3z"
						fill="currentColor"
					/>
				</svg>
			),
		},
	];

	function scrollToSection(id) {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	}

	createEffect(() => {
		// Check which id is in view
		const scrollListener = window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;

			sections.forEach(section => {
				const element = document.getElementById(section.id);

				if (!element) {
					return;
				}

				const elementTop = element.offsetTop - 60;
				const elementBottom = elementTop + element.clientHeight;

				if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
					const navElement = document.querySelector(`nav > a[name="navigation-${section.id}"]`);

					document.querySelectorAll('nav > a').forEach(a => {
						a.classList.remove('md:underline');
					});

					navElement.classList.add('md:underline');
				}
			});
		});
		setScrollListener(scrollListener);
	});

	onCleanup(() => {
		window.removeEventListener('scroll', scrollListener);
	});

	return (
		<div class="fixed left-0 bottom-0 md:w-[12rem] w-screen md:bg-none bg-light dark:bg-zinc-900 md:border-0 border-t-2 z-50 md:h-screen h-fit md:flex md:flex-col md:justify-center md:pl-2">
			<div
				class="md:block hidden absolute top-2 hover:opacity-80 transition-opacity cursor-pointer"
				onClick={() => setNavToggle(!navToggle())}
			>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
					<path
						d="M4 6H20M4 12H14M4 18H9"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<div class={`block transition ${navToggle() ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
				<h2 class="md:block hidden uppercase md:text-2xl md:text-left text-center">Navigation</h2>

				<nav class="w-full grid md:grid-cols-1 grid-cols-5 md:gap-2 md:mt-2">
					<For each={sections}>
						{section => (
							<a
								class={
									'md:text-lg text-base dark:text-white hover:opacity-70 transition-opacity cursor-pointer md:p-2 p-4 md:flex md:h-auto items-center md:justify-start justify-center gap-x-2 ' +
									(section.mobile ? 'flex' : 'hidden')
								}
								name={`navigation-${section.id}`}
								onClick={() => scrollToSection(section.id)}
							>
								{section.icon}
								<span class="md:inline hidden">{section.title}</span>
							</a>
						)}
					</For>
				</nav>
			</div>
		</div>
	);
}
