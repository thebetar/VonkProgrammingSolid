import { createSignal } from 'solid-js';
import { CopySvg, CheckSvg } from '../Icons';

export default function Code({ children }) {
	let preRef;
	const [copied, setCopied] = createSignal(false);

	async function handleCopy() {
		// Prefer selected text within this code block; fallback to full code
		let text = preRef?.innerText ?? '';
		const sel = window.getSelection?.();
		if (sel && sel.rangeCount > 0) {
			const range = sel.getRangeAt(0);
			const selected = sel.toString();
			if (selected && preRef?.contains(range.commonAncestorContainer)) {
				text = selected;
			}
		}

		const doOk = () => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		};

		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(text);
				doOk();
			} else {
				throw new Error('Clipboard API not available');
			}
		} catch {
			// Fallback for older browsers
			const ta = document.createElement('textarea');
			ta.value = text;
			ta.style.position = 'fixed';
			ta.style.left = '-9999px';
			document.body.appendChild(ta);
			ta.select();

			try {
				document.execCommand('copy');
				doOk();
			} finally {
				document.body.removeChild(ta);
			}
		}
	}

	return (
		<div class="relative group">
			<pre ref={el => (preRef = el)}>
				<code class="example">{children}</code>
			</pre>

			<button
				type="button"
				aria-label="Copy code to clipboard"
				title="Copy code"
				onClick={handleCopy}
				class={[
					'absolute',
					'top-2',
					'right-2',
					'p-2',
					'rounded-md',
					'border',
					'border-zinc-300',
					'dark:border-zinc-700',
					'bg-zinc-100',
					'dark:bg-[#202020]',
					'hover:bg-zinc-200',
					'dark:hover:bg-zinc-900',
					'transition',
					'opacity-100',
					'md:opacity-0',
					'md:group-hover:opacity-100',
					'focus:opacity-100',
					'z-10',
					'cursor-pointer',
					copied() ? 'text-green-600' : '',
				].join(' ')}
			>
				{copied() ? <CheckSvg /> : <CopySvg />}
			</button>
		</div>
	);
}
