import { createSignal } from 'solid-js';

import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import { resumeTranslations, resumePdfPath } from '@/data/resume';

export default function ResumePage() {
	const [language, setLanguage] = createSignal('en');
	const [mode, setMode] = createSignal('compact');

	const t = () => resumeTranslations[language()];
	const pdfPath = () => resumePdfPath(language(), mode());

	const toggleClass = active =>
		[
			'flex-1 py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer border-2',
			active
				? 'bg-cyan-600 text-white border-cyan-600'
				: 'bg-zinc-200 text-zinc-600 border-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
		].join(' ');

	const template = (
		<div class="md:mt-4 mt-6 md:mb-8 mb-4">
			<SEO
				title="Resume"
				description="Resume of Lars Vonk — Full-Stack Engineer with nearly a decade of experience in JavaScript, Python, PHP, Go, AI integrations, and IoT."
				path="/resume"
				keywords={['resume', 'CV', 'full-stack engineer', 'freelance']}
			/>

			<div class="flex flex-col items-center gap-6 py-8 px-4">
				<h1 class="text-2xl font-bold dark:text-white">{t().title}</h1>
				<p class="text-zinc-500 dark:text-zinc-400 text-center max-w-md">
					Select a language and version, then download the resume as PDF.
				</p>

				<div class="flex gap-3 w-full max-w-md">
					<button
						class={toggleClass(language() === 'en')}
						onClick={() => setLanguage('en')}
						aria-label="Switch to English"
					>
						English
					</button>
					<button
						class={toggleClass(language() === 'nl')}
						onClick={() => setLanguage('nl')}
						aria-label="Switch to Dutch"
					>
						Nederlands
					</button>
				</div>

				<div class="flex gap-3 w-full max-w-md">
					<button
						class={toggleClass(mode() === 'compact')}
						onClick={() => setMode('compact')}
						aria-label="Switch to compact resume"
					>
						{t().compact}
					</button>
					<button
						class={toggleClass(mode() === 'extended')}
						onClick={() => setMode('extended')}
						aria-label="Switch to extended resume"
					>
						{t().extended}
					</button>
				</div>

				<a
					href={pdfPath()}
					download={`resume_${language()}_${mode()}.pdf`}
					class="w-full max-w-md py-3 text-center text-sm font-semibold bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
					aria-label={t().download}
				>
					&#128438; {t().download}
				</a>

				<embed
					src={pdfPath()}
					type="application/pdf"
					class="w-full max-w-[794px] mx-auto rounded-lg shadow-2xl"
					style={{ height: 'min(70vh, 900px)' }}
				/>
			</div>
		</div>
	);

	return <Layout slot={template} />;
}
