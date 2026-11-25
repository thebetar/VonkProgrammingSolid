import { loadTracker } from '@/utils/tracker';

const buttonClass = ['flex-1', 'px-4', 'py-2', 'rounded-md', 'text-sm', 'font-semibold', 'transition', 'cursor-pointer'];

export default function Cookie({ handleClose }) {
	const declineCookie = () => {
		localStorage.setItem('cookie-accept', 'decline');
		handleClose();
	};

	const acceptCookie = () => {
		localStorage.setItem('cookie-accept', 'accept');
		loadTracker();
		handleClose();
	};

	return (
		<div
			id="cookie-component"
			role="dialog"
			aria-label="Cookie statement"
			class="fixed z-50 bottom-16 left-3 right-3 md:bottom-6 md:left-6 md:right-auto md:max-w-sm bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl p-4 flex flex-col gap-3"
		>
			<div class="flex items-start gap-3">
				<svg class="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<div class="flex flex-col gap-1">
					<div class="font-semibold">Cookie statement</div>
					<p class="text-sm">
						Our website sprinkles <span class="rainbow-text">digital cookies</span> to see what you love.
						Don't worry, these cookies play nice, no personal info nabbing. Your privacy is our priority like
						a squirrel guarding its acorns 🌰🐿️
					</p>
					<p class="text-sm font-semibold">Do you want to accept our cookies?</p>
				</div>
			</div>

			<div class="flex gap-2">
				<button
					id="cookie-decline"
					aria-label="Decline cookies"
					class={[
						...buttonClass,
						'border',
						'border-zinc-300',
						'dark:border-zinc-700',
						'hover:bg-zinc-100',
						'dark:hover:bg-zinc-800',
					].join(' ')}
					onClick={declineCookie}
				>
					Decline
				</button>
				<button
					id="cookie-accept"
					aria-label="Accept cookies"
					class={[
						...buttonClass,
						'bg-zinc-800',
						'hover:bg-zinc-600',
						'dark:bg-zinc-700',
						'dark:hover:bg-zinc-600',
						'text-white',
					].join(' ')}
					onClick={acceptCookie}
				>
					Accept
				</button>
			</div>
		</div>
	);
}
