// SparkTracker sets a persistent visitor id, so it only runs after the visitor accepts
// cookies. Pinned to a commit so the live site only changes when this file does
// (and jsDelivr can cache it for a year instead of 7 days for a branch).
const TRACKER_URL =
	'https://cdn.jsdelivr.net/gh/thebetar/SparkTracker@662e709928def04ceff602fe1d8b1cf9882e0b78/dist/spark-tracker.min.js';

export function hasCookieConsent() {
	return localStorage.getItem('cookie-accept') === 'accept';
}

export function loadTracker() {
	if (document.getElementById('spark-tracker')) {
		return;
	}

	const script = document.createElement('script');
	script.id = 'spark-tracker';
	script.src = TRACKER_URL;

	// The tracker starts on window `load`. When consent is given after the page has
	// loaded that event has already fired, so replay it once for the tracker.
	script.addEventListener('load', () => {
		if (document.readyState === 'complete') {
			window.dispatchEvent(new Event('load'));
		}
	});

	document.head.appendChild(script);
}
