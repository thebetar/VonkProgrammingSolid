import { createSignal, onMount, onCleanup, Show } from 'solid-js';

export default function WhenVisible(props) {
	const [visible, setVisible] = createSignal(false);
	let el;

	onMount(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(el);
					}
				});
			},
			{ rootMargin: '360px' },
		);

		observer.observe(el);

		onCleanup(() => observer.disconnect());
	});

	return (
		<div ref={el} class={props.class}>
			<Show when={visible()}>{props.children}</Show>
		</div>
	);
}
