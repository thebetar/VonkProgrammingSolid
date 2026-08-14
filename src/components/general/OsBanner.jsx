import { TerminalSvg } from '@/components/Icons';

export default function OsBanner() {
	return (
		<a
			href="https://os.vonkprogramming.nl"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Open the terminal version of this website at os.vonkprogramming.nl"
			class="os-banner fixed z-40 left-4 bottom-20 md:left-6 md:bottom-6 w-[220px] rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform overflow-hidden"
		>
			<div class="flex items-center gap-1.5 px-3 py-1.5 border-b border-zinc-200 dark:border-zinc-700">
				<span class="w-2 h-2 rounded-full bg-red-400"></span>
				<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
				<span class="w-2 h-2 rounded-full bg-green-400"></span>
				<span class="ml-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
					os.vonkprogramming.nl
				</span>
			</div>

			<div class="px-3 py-2.5 flex items-start gap-2">
				<TerminalSvg width={14} height={14} />
				<div class="font-mono text-xs leading-snug">
					<p class="text-zinc-800 dark:text-zinc-200">Check out the new look</p>
					<p class="mt-0.5 text-cyan-800 dark:text-cyan-400 whitespace-nowrap">Open terminal →</p>
				</div>
			</div>
		</a>
	);
}
