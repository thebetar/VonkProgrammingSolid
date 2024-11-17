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
		const subscribePopup = localStorage.getItem('subscribe-popup');

		const oneWeekAgo = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;

		if (!subscribePopup || Number(subscribePopup) < oneWeekAgo) {
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
				{showCookie && <Cookie />}
				{showSubscribe() && <Subscribe handleClose={() => setShowSubscribe(false)} />}

				{slot}
			</main>

			<Footer />
		</>
	);
}
