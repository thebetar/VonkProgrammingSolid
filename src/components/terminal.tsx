import { onCleanup, onMount } from 'solid-js';
import { getPromptPlain, os } from '@/data/os';
import { initTerminal } from '@/lib/terminal';

export default function Terminal() {
	let screenElement!: HTMLDivElement;
	let inputElement!: HTMLInputElement;
	let stickyElement!: HTMLFormElement;

	onMount(() => {
		const dispose = initTerminal({
			screen: screenElement,
			input: inputElement,
			sticky: stickyElement,
		});
		onCleanup(dispose);
	});

	return (
		<div class="terminal-root">
			<div class="terminal-screen" ref={screenElement} />
			<form
				class="terminal-sticky-input"
				ref={stickyElement}
				hidden
				autocomplete="off"
				spellcheck={false}
			>
				<label class="terminal-sticky-prompt" for="terminal-command">
					<span class="terminal-sticky-user">{os.promptUser}</span>
					<span class="terminal-sticky-at">@</span>
					<span class="terminal-sticky-host">{os.osName}</span>
					<span class="terminal-sticky-path">:~$</span>
				</label>
				<input
					id="terminal-command"
					ref={inputElement}
					class="terminal-sticky-field"
					type="text"
					name="command"
					aria-label={getPromptPlain()}
					autocapitalize="off"
					autocomplete="off"
					autocorrect="off"
					spellcheck={false}
				/>
			</form>
		</div>
	);
}
