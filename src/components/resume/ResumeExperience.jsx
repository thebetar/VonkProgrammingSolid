import { For, Show } from 'solid-js';

import { resumeExperience, resumeTranslations } from '@/data/resume';

function ExperienceItem({ item, isExtended }) {
	return (
		<div class="resume-experience-entry">
			<div class="flex justify-between items-baseline">
				<h3 class="text-xs font-semibold">{item.name}</h3>
				<span class="text-xs text-zinc-500 whitespace-nowrap ml-2">
					{item.startDate} — {item.endDate}
				</span>
			</div>
			<div class="flex items-center gap-1.5">
				<p class="text-xs text-cyan-700 font-medium shrink-0">{item.title}</p>
				<span class="text-zinc-300">|</span>
				<p class="text-[9px] text-zinc-500 truncate">{item.skills.join(' · ')}</p>
			</div>
			<p class="text-xs text-zinc-600 leading-snug mt-0.5 whitespace-pre-line">
				{(isExtended() ? item.extendedDescription : item.description).trim()}
			</p>
		</div>
	);
}

function chunkExperience(items) {
	const chunks = [];
	if (items.length > 0) chunks.push(items.slice(0, 3));
	for (let i = 3; i < items.length; i += 4) {
		chunks.push(items.slice(i, i + 4));
	}
	return chunks;
}

export default function ResumeExperience({ language, mode }) {
	const t = () => resumeTranslations[language()];
	const items = () => resumeExperience[language()];
	const isExtended = () => mode() === 'extended';
	const chunks = () => chunkExperience(items());

	return (
		<div>
			<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
				{t().experience}
			</h2>
			<Show
				when={isExtended()}
				fallback={
					<div class="flex flex-col gap-2.5">
						<For each={items()}>{item => <ExperienceItem item={item} isExtended={isExtended} />}</For>
					</div>
				}
			>
				<For each={chunks()}>
					{(chunk, index) => (
						<div class={index() > 0 ? 'resume-page-break' : ''}>
							<div class="flex flex-col gap-6">
								<For each={chunk}>{item => <ExperienceItem item={item} isExtended={isExtended} />}</For>
							</div>
						</div>
					)}
				</For>
			</Show>
		</div>
	);
}
