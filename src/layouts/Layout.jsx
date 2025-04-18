import { createSignal, createEffect } from 'solid-js';

import Cookie from '../components/general/Cookie';
import Subscribe from '../components/general/Subscribe';
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';

export default function Layout({ slot }) {
	const showCookie = !localStorage.getItem('cookie-accept');
	const [showSubscribe, setShowSubscribe] = createSignal(null);

	// ZenuNet banner state
	const [showZenuNet, setShowZenuNet] = createSignal(false);

	// Show ZenuNet banner logic
	createEffect(() => {
		const lastClosed = localStorage.getItem('zenunet-banner-closed');
		const oneMonthAgo = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;

		if (!lastClosed || Number(lastClosed) < oneMonthAgo) {
			setShowZenuNet(true);
		}
	});

	const handleCloseZenuNet = e => {
		e.stopPropagation();

		setShowZenuNet(false);
		localStorage.setItem('zenunet-banner-closed', new Date().getTime());
	};

	document.querySelector('body').addEventListener('open-subscribe', () => {
		setShowSubscribe(true);
		localStorage.setItem('subscribe-popup', new Date().getTime());
	});

	createEffect(() => {
		const lastClosed = localStorage.getItem('subscribe-popup');
		const oneYearAgo = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;

		if (!lastClosed || Number(lastClosed) < oneYearAgo) {
			setTimeout(() => {
				if (showSubscribe()) {
					return;
				}

				setShowSubscribe(true);
			}, 10000);
		}
	});

	return (
		<>
			<Navbar />

			<main class="container">
				<div class="fixed top-0 left-0 w-screen h-screen background-glow"></div>
				{showCookie && <Cookie />}
				{showSubscribe() && <Subscribe handleClose={() => setShowSubscribe(false)} />}

				{slot}
			</main>

			{showZenuNet() && (
				<div
					className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
						bg-white/90 dark:bg-zinc-900/95 border border-zinc-300 dark:border-zinc-700
						rounded-xl shadow-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4
						max-w-xs w-[95vw] sm:max-w-md sm:w-full px-4 py-3 sm:px-6 sm:py-4
						hover:bg-white dark:hover:bg-zinc-900 transition-colors cursor-pointer"
					style={{ minWidth: '0' }}
					onClick={() => {
						window.open('https://zenunet.nl', '_blank');
					}}
				>
					<img
						src="/assets/images/zenunet-logo.png"
						alt="ZenuNet logo"
						className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex-shrink-0"
						loading="lazy"
					/>

					<div className="flex-1 text-left">
						<span className="text-sm sm:text-base font-medium text-zinc-900 dark:text-white">
							Try out my new application{' '}
							<a className="underline font-semibold text-primary hover:opacity-80" tabIndex={-1}>
								ZenuNet!
							</a>
						</span>
						<div className="text-xs text-zinc-500 dark:text-gray-400 mt-1">
							Create neural network models with ease.
						</div>
					</div>

					{/* Close button: absolute on mobile, inline on desktop */}
					<button
						onClick={e => {
							e.stopPropagation();
							handleCloseZenuNet(e);
						}}
						className="absolute top-2 right-2 sm:static sm:ml-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-400 dark:text-gray-400 hover:text-zinc-700 dark:hover:text-white focus:outline-none flex-shrink-0"
						aria-label="Close"
						title="Close"
						style={{ marginTop: '0.25rem' }}
					>
						<svg width="18" height="18" viewBox="0 0 20 20" fill="none">
							<path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</button>
				</div>
			)}

			<Footer />
		</>
	);
}
