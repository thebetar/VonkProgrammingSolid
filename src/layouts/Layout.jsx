import { createSignal, createEffect } from 'solid-js';

import Cookie from '../components/general/Cookie';
import Subscribe from '../components/general/Subscribe';
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';

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

	return (
		<>
			<Navbar />

			<main class="container">
				<div class="fixed top-0 left-0 w-screen h-screen background-glow -z-5"></div>
				{showCookie && <Cookie />}
				{showSubscribe() && <Subscribe handleClose={() => setShowSubscribe(false)} />}

				{slot}
			</main>

			<Footer />
		</>
	);
}
