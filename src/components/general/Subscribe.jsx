import { createSignal } from 'solid-js';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function Subscribe({ handleClose }) {
	const [email, setEmail] = createSignal('');

	const subscribe = async () => {
		const emailInput = document.getElementById('subscribe-email');

		if (!emailRegex.test(emailInput.value)) {
			document.getElementById('subscribe-error').classList.remove('hidden');
			return;
		}

		const response = await fetch('/subscribe.php', {
			method: 'POST',
			body: JSON.stringify({ email: emailInput.value }),
		});
		const data = await response.text();

		if (data === 'exists') {
			document.getElementById('subscribe-error-exists').classList.remove('hidden');
			return;
		}

		localStorage.setItem('subscribe-popup', new Date().getTime());
		handleClose();
	};

	const declineSubscribe = () => {
		localStorage.setItem('subscribe-popup', new Date().getTime());
		handleClose();
	};

	return (
		<div
			id="subscribe-component"
			class="w-screen h-screen px-4 fixed top-0 left-0 bg-zinc-800/70 flex justify-center items-center z-50 backdrop-blur"
		>
			<div class="bg-white text-black md:max-w-[420px] w-full p-4 text-center rounded-sm flex flex-col gap-y-2 relative">
				<svg
					id="subscribe-decline-button"
					class="absolute top-2 right-2 cursor-pointer hover:opacity-70 transition"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					height="16px"
					width="16px"
					version="1.1"
					viewBox="0 0 490 490"
					xml:space="preserve"
					onClick={declineSubscribe}
				>
					<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
				</svg>

				<svg
					width="48px"
					height="48px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto"
				>
					<path
						d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<rect
						x="3"
						y="5"
						width="18"
						height="14"
						rx="2"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					></rect>
				</svg>

				<div class="font-semibold text-xl">Subscribe</div>

				<div class="text-base mx-auto">
					Want to be the first to know when I drop a new blog post? Fill out your email below and hit
					subscribe and you will be notified!
				</div>

				<div class="text-base">
					<input
						id="subscribe-email"
						type="email"
						placeholder="Enter your email"
						class="w-full px-3 py-2 border border-zinc-800 rounded-sm focus:outline-none focus:border-zinc-600"
						value={email()}
						onInput={e => setEmail(e.currentTarget.value)}
					/>
					<div class="text-xs text-red-500 hidden mt-1" id="subscribe-error">
						Please enter a valid email address
					</div>
					<div class="text-xs text-red-500 hidden mt-1" id="subscribe-error-exists">
						This email is already subscribed
					</div>
				</div>

				<button
					id="subscribe-button"
					class="px-6 py-2 rounded-sm bg-zinc-800 hover:bg-zinc-600 transition text-white w-full text-center"
					onClick={subscribe}
				>
					Subscribe
				</button>
			</div>
		</div>
	);
}
