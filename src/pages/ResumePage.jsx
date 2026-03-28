import { createSignal } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import Layout from '@/layouts/Layout';
import ResumeControls from '@/components/resume/ResumeControls';
import Resume from '@/components/resume/Resume';

export default function ResumePage() {
	const [language, setLanguage] = createSignal('en');

	const template = (
		<div class="md:mt-4 mt-6 md:mb-8 mb-4">
			<Title>VonkProgramming - Resume</Title>
			<Meta
				name="description"
				content="Resume of Lars Vonk - Full-Stack Engineer with experience in JavaScript, Python, and PHP."
			/>
			<Meta property="og:title" content="VonkProgramming - Resume" />
			<Meta property="og:description" content="Resume of Lars Vonk - Full-Stack Engineer" />
			<Meta property="og:type" content="website" />

			<div class="hidden md:block">
				<ResumeControls language={language} setLanguage={setLanguage} />
				<Resume language={language} />
			</div>

			<div class="flex md:hidden flex-col items-center gap-6 py-12 px-4">
				<h1 class="text-2xl font-bold dark:text-white">Resume</h1>
				<p class="text-zinc-500 dark:text-zinc-400 text-center">
					Select a language and download the resume as PDF.
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
