import { createSignal, createEffect } from 'solid-js';

import Cookie from '../components/general/Cookie';
import Subscribe from '../components/general/Subscribe';
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';
import { PhoneSvg } from '../components/Icons';

export default function Layout({ slot }) {
	const showCookie = !localStorage.getItem('cookie-accept');
	const [showSubscribe, setShowSubscribe] = createSignal(null);

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

	function handleFabClick() {
		window.open(window.location.origin + '/contact', '_blank');
	}

	return (
		<div class="md:pb-0 pb-12">
			<Navbar />

			<main class="container">
				<div class="fixed top-0 left-0 w-screen h-screen background-glow -z-5"></div>
				{showCookie && <Cookie />}
				{showSubscribe() && <Subscribe handleClose={() => setShowSubscribe(false)} />}

				{slot}
			</main>

			<Footer />

			<button
				class="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 shadow-lg rounded-full w-16 h-16 flex items-center justify-center transition-colors cursor-pointer"
				aria-label="Call us"
				onClick={handleFabClick}
			>
				<PhoneSvg width={32} height={32} color="#fff" />
			</button>
		</div>
	);
}
