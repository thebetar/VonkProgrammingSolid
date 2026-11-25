import { createSignal, createEffect, onCleanup } from 'solid-js';

import Cookie from '@/components/general/Cookie';
import Subscribe from '@/components/general/Subscribe';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';
import { PhoneSvg } from '@/components/Icons';

export default function Layout({ slot }) {
	const [showCookie, setShowCookie] = createSignal(!localStorage.getItem('cookie-accept'));
	const [showSubscribe, setShowSubscribe] = createSignal(null);

	function openSubscribe() {
		setShowSubscribe(true);
		localStorage.setItem('subscribe-popup', new Date().getTime());
	}

	// Every page renders its own Layout, so remove the listener again when it unmounts
	document.body.addEventListener('open-subscribe', openSubscribe);
	onCleanup(() => document.body.removeEventListener('open-subscribe', openSubscribe));

	// Offer the subscribe popup at most once a year, and only after the cookie banner is answered
	createEffect(() => {
		if (showCookie() || localStorage.getItem('subscribed-email')) {
			return;
		}

		const lastClosed = localStorage.getItem('subscribe-popup');
		const oneYearAgo = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;

		if (lastClosed && Number(lastClosed) >= oneYearAgo) {
			return;
		}

		const timer = setTimeout(() => setShowSubscribe(true), 10000);
		onCleanup(() => clearTimeout(timer));
	});

	function handleFabClick() {
		window.open(window.location.origin + '/contact', '_blank');
	}

	return (
		<div class="md:pb-0 pb-12">
			<Navbar />

			<main class="container">
				<div class="fixed top-0 left-0 w-screen h-screen background-glow -z-5" />
				{showCookie() && <Cookie handleClose={() => setShowCookie(false)} />}
				{showSubscribe() && <Subscribe handleClose={() => setShowSubscribe(false)} />}

				{slot}
			</main>

			<Footer />

			<button
				class="md:fixed hidden bottom-6 right-6 bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-700 dark:hover:bg-cyan-600 shadow-lg rounded-full w-16 h-16 md:flex items-center justify-center transition-colors cursor-pointer"
				aria-label="Call us"
				onClick={handleFabClick}
			>
				<PhoneSvg width={32} height={32} color="#fff" />
			</button>
		</div>
	);
}
