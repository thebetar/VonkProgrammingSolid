import { For } from 'solid-js';

import { resumeExperience, resumeTranslations } from '@/data/resume';

export default function ResumeExperience({ language }) {
	const t = () => resumeTranslations[language()];
	const items = () => resumeExperience[language()];

	return (
		<div>
			<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
				{t().experience}
			</h2>
			<div class="flex flex-col gap-2.5">
				<For each={items()}>
					{item => (
						<div>
							<div class="flex justify-between items-baseline">
								<h3 class="text-xs font-semibold">{item.name}</h3>
								<span class="text-xs text-zinc-500 whitespace-nowrap ml-2">
									{item.startDate} — {item.endDate}
								</span>
							</div>
							<div class="flex items-center gap-1.5">
								<p class="text-xs text-cyan-700 font-medium shrink-0">{item.title}</p>
								<span class="text-zinc-300">|</span>
								<p class="text-[9px] text-zinc-400 truncate">{item.skills.join(' · ')}</p>
							</div>
							<p class="text-xs text-zinc-600 leading-snug mt-0.5">{item.description}</p>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
