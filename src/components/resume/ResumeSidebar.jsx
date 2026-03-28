import { For } from 'solid-js';

import { info } from '@/data/info';
import { skills, SkillType } from '@/data/skills';
import { resumeTranslations, resumeEducation, resumeCertifications } from '@/data/resume';

const cvSkillTypes = [
	SkillType.PROGRAMMING_LANGUAGE,
	SkillType.FRAMEWORK,
	SkillType.DATABASE,
	SkillType.TOOL,
	SkillType.INFRASTRUCTURE,
];

const languageSkills = skills.filter(s => s.type === SkillType.LANGUAGE && s.cv);

export default function ResumeSidebar({ language }) {
	const t = () => resumeTranslations[language()];
	const eduItems = () => resumeEducation[language()];
	const certItems = () => resumeCertifications[language()];

	return (
		<div class="w-[35%] bg-zinc-800 text-white p-5 flex flex-col gap-4.5 print-bg resume-sidebar">
			<div class="flex flex-col items-center gap-2 mt-8">
				<div class="w-32 h-32 rounded-full bg-zinc-500 flex items-center justify-center text-zinc-300">
					<img
						src="/assets/images/profile-picture.webp"
						alt="Profile picture of Lars Vonk"
						class="w-full h-full object-cover rounded-full"
					/>
				</div>
				<div class="text-center">
					<h1 class="text-lg font-bold">{info.name}</h1>
					<p class="text-cyan-400 text-xs mt-0.5">{info.jobDescription1}</p>
				</div>
			</div>

			<div class="flex flex-col gap-8">
				<div>
					<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-600 pb-1 mb-1.5">
						{t().contact}
					</h2>
					<div class="flex flex-col gap-1 text-xs">
						<a
							href={info.socialMedia.email}
							class="hover:text-cyan-400 transition-colors break-all flex items-center gap-1.5"
						>
							<img src="/assets/svg/mail.svg" alt="" class="w-3.5 h-3.5 invert" />
							info@vonkprogramming.nl
						</a>
						<a
							href={info.socialMedia.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-cyan-400 transition-colors break-all flex items-center gap-1.5"
						>
							<img src="/assets/svg/linkedin.svg" alt="" class="w-3.5 h-3.5 invert" />
							linkedin.com/in/lars-v-82455612a
						</a>
						<a
							href={info.socialMedia.github}
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-cyan-400 transition-colors break-all flex items-center gap-1.5"
						>
							<img src="/assets/svg/github.svg" alt="" class="w-3.5 h-3.5 invert" />
							github.com/thebetar
						</a>
					</div>
				</div>

				<div>
					<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-600 pb-1 mb-1.5">
						{t().skills}
					</h2>
					<div class="flex flex-col gap-1.5">
						<For each={cvSkillTypes}>
							{type => {
								const typeSkills = skills.filter(s => s.type === type && s.cv);
								return typeSkills.length > 0 ? (
									<div>
										<p class="text-xs font-semibold text-zinc-400 mb-0.5">{type}</p>
										<p class="text-xs leading-snug">{typeSkills.map(s => s.title).join(', ')}</p>
									</div>
								) : null;
							}}
						</For>
					</div>
				</div>

				<div>
					<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-600 pb-1 mb-1.5">
						{t().education}
					</h2>
					<div class="flex flex-col gap-1.5">
						<For each={eduItems()}>
							{item => (
								<div>
									<p class="text-xs font-semibold">{item.name}</p>
									<p class="text-xs text-zinc-400">
										{item.institution} | {item.startDate} — {item.endDate}
									</p>
								</div>
							)}
						</For>
					</div>
				</div>

				<div>
					<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-600 pb-1 mb-1.5">
						{t().certifications}
					</h2>
					<div class="flex flex-col gap-1">
						<For each={certItems()}>
							{item => (
								<div class="flex justify-between text-xs">
									<span>{item.name}</span>
									<span class="text-zinc-400">{item.year}</span>
								</div>
							)}
						</For>
					</div>
				</div>

				<div>
					<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-600 pb-1 mb-1.5">
						{t().languages}
					</h2>
					<div class="flex flex-col gap-1">
						<For each={languageSkills}>
							{lang => (
								<div class="flex justify-between text-xs">
									<span>{lang.title}</span>
									<span class="text-zinc-400">
										{lang.title === 'Dutch' ? 'C2' : lang.title === 'English' ? 'C1' : ''}
									</span>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
}
