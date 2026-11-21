export default function () {
	const declineCookie = () => {
		localStorage.setItem('cookie-accept', 'decline');
		location.reload();
	};

	const acceptCookie = () => {
		localStorage.setItem('cookie-accept', 'accept');
		location.reload();
	};

	return (
		<div
			id="cookie-component"
			class="w-screen h-screen px-4 fixed top-0 left-0 bg-zinc-800/70 flex justify-center items-center z-50 backdrop-blur"
		>
			<div class="bg-white dark:bg-zinc-900 text-black dark:text-white border border-transparent dark:border-zinc-800 md:max-w-[420px] w-full p-5 text-center rounded-lg shadow-xl flex flex-col gap-y-2 relative">
				<svg
					id="cookie-decline"
					class="absolute top-2 right-2 cursor-pointer hover:opacity-70 transition"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="currentColor"
					height="16px"
					width="16px"
					version="1.1"
					viewBox="0 0 490 490"
					onClick={declineCookie}
				>
					<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
				</svg>

				<svg
					class="md:h-12 h-10 mx-auto"
					height="48px"
					width="48px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					 />
				</svg>

				<div class="font-semibold text-xl">Cookie statement</div>

				<div class="text-sm px-6">
					Our website sprinkles <span class="rainbow-text">digital cookies</span> to see what you love. Don't
					worry, these cookies play nice, no personal info nabbing. Your privacy is our priority like a
					squirrel guarding its acorns 🌰🐿️
				</div>

				<div class="text-sm font-semibold">Do you want to accept our cookies?</div>

				<button
					id="cookie-accept"
					class="px-6 py-2 rounded-md bg-zinc-800 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition text-white w-full cursor-pointer"
					onClick={acceptCookie}
				>
					Accept
				</button>
			</div>
		</div>
	);
}
