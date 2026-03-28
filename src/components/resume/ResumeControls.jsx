import { For } from 'solid-js';

export default function ResumeControls({ language, setLanguage }) {
	return (
		<div class="flex justify-between items-center mb-6 print:hidden max-w-[794px] mx-auto">
			<div class="flex border border-zinc-400 rounded overflow-hidden">
				<button
					class={[
						'px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer',
						language() === 'en'
							? 'bg-zinc-800 text-white'
							: 'bg-white text-zinc-800 dark:bg-zinc-700 dark:text-white',
					].join(' ')}
					onClick={() => setLanguage('en')}
					aria-label="Switch to English"
				>
					EN
				</button>
				<button
					class={[
						'px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer',
						language() === 'nl'
							? 'bg-zinc-800 text-white'
							: 'bg-white text-zinc-800 dark:bg-zinc-700 dark:text-white',
					].join(' ')}
					onClick={() => setLanguage('nl')}
					aria-label="Switch to Dutch"
				>
					NL
				</button>
			</div>

			<button
				class="px-4 py-1.5 text-sm font-medium bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors cursor-pointer"
				onClick={() => window.print()}
				aria-label="Download resume as PDF"
			>
				&#128438; PDF
			</button>
		</div>
	);
}
