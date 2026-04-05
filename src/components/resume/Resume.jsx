import { resumeTranslations } from '@/data/resume';

import ResumeSidebar from '@/components/resume/ResumeSidebar';
import ResumeExperience from '@/components/resume/ResumeExperience';

export default function Resume({ language, mode }) {
	const t = () => resumeTranslations[language()];
	const isExtended = () => mode() === 'extended';

	return (
		<div
			class={[
				'resume-page mx-auto bg-white text-zinc-900 shadow-2xl',
				isExtended() ? 'resume-extended' : '',
			].join(' ')}
			id="resume"
		>
			<div class="flex min-h-full">
				<ResumeSidebar language={language} mode={mode} />

				<div class="w-[65%] p-5 flex flex-col gap-3 resume-content">
					<div>
						<h2 class="text-xs font-bold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-1.5">
							{t().summary.trim()}
						</h2>
						<p class="text-xs text-zinc-600 leading-snug whitespace-pre-line">
							{(isExtended() ? t().extendedSummaryText : t().summaryText).trim()}
						</p>
					</div>

					<ResumeExperience language={language} mode={mode} />
				</div>
			</div>
		</div>
	);
}
