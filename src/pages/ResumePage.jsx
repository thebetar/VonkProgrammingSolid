import { createSignal } from 'solid-js';

import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ResumeControls from '@/components/resume/ResumeControls';
import Resume from '@/components/resume/Resume';

export default function ResumePage() {
	const [language, setLanguage] = createSignal('en');
	const [mode, setMode] = createSignal('compact');

	const template = (
		<div class="md:mt-4 mt-6 md:mb-8 mb-4">
			<SEO
				title="Resume"
				description="Resume of Lars Vonk — Full-Stack Engineer with nearly a decade of experience in JavaScript, Python, PHP, Go, AI integrations, and IoT."
				path="/resume"
				keywords={['resume', 'CV', 'full-stack engineer', 'freelance']}
			/>

			<div class="hidden md:block">
				<ResumeControls language={language} setLanguage={setLanguage} mode={mode} setMode={setMode} />
				<Resume language={language} mode={mode} />
			</div>

			<div class="flex md:hidden flex-col items-center gap-6 py-12 px-4">
				<h1 class="text-2xl font-bold dark:text-white">Resume</h1>
				<p class="text-zinc-500 dark:text-zinc-400 text-center">
					Select a language and version, then download the resume as PDF.
				</p>

				<div class="flex gap-4 w-full max-w-xs">
					<button
						class={[
							'flex-1 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer border-2',
							language() === 'en'
								? 'bg-cyan-600 text-white border-cyan-600'
								: 'bg-zinc-200 text-zinc-600 border-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
						].join(' ')}
						onClick={() => setLanguage('en')}
						aria-label="Switch to English"
					>
						English
					</button>
					<button
						class={[
							'flex-1 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer border-2',
							language() === 'nl'
								? 'bg-cyan-600 text-white border-cyan-600'
								: 'bg-zinc-200 text-zinc-600 border-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
						].join(' ')}
						onClick={() => setLanguage('nl')}
						aria-label="Switch to Dutch"
					>
						Nederlands
					</button>
				</div>

				<div class="flex gap-4 w-full max-w-xs">
					<button
						class={[
							'flex-1 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer border-2',
							mode() === 'compact'
								? 'bg-cyan-600 text-white border-cyan-600'
								: 'bg-zinc-200 text-zinc-600 border-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
						].join(' ')}
						onClick={() => setMode('compact')}
						aria-label="Switch to compact resume"
					>
						Compact
					</button>
					<button
						class={[
							'flex-1 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer border-2',
							mode() === 'extended'
								? 'bg-cyan-600 text-white border-cyan-600'
								: 'bg-zinc-200 text-zinc-600 border-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
						].join(' ')}
						onClick={() => setMode('extended')}
						aria-label="Switch to extended resume"
					>
						{language() === 'nl' ? 'Uitgebreid' : 'Extended'}
					</button>
				</div>

				<button
					class="w-full max-w-xs py-4 text-lg font-semibold bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer"
					onClick={() => window.print()}
					aria-label="Download resume as PDF"
				>
					&#128438; Download PDF
				</button>
			</div>
		</div>
	);

	return <Layout slot={template} />;
}
