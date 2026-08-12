import { onCleanup, onMount } from 'solid-js';
import { Terminal as AppTerminal } from '@/lib/terminal';

export default function Terminal() {
	let screenElement!: HTMLDivElement;

	onMount(() => {
		const terminal = new AppTerminal({
			screen: screenElement,
		});
		onCleanup(() => terminal.dispose());
	});

	return (
		<div class="terminal-root">
			<div class="terminal-screen" ref={screenElement} />
		</div>
	);
}
