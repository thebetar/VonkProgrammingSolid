import { createSignal } from 'solid-js';

import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ResumeControls from '@/components/resume/ResumeControls';
import Resume from '@/components/resume/Resume';

export default function ResumePdfPage() {
	const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
	const [language, setLanguage] = createSignal(params?.get('lang') === 'nl' ? 'nl' : 'en');
	const [mode, setMode] = createSignal(params?.get('mode') === 'extended' ? 'extended' : 'compact');

	const template = (
		<div class="md:mt-4 mt-6 md:mb-8 mb-4">
			<SEO
				title="Resume PDF"
				description="Print-ready resume of Lars Vonk."
				path="/resume-pdf"
				noindex={true}
			/>

			<ResumeControls language={language} setLanguage={setLanguage} mode={mode} setMode={setMode} />
			<Resume language={language} mode={mode} />
		</div>
	);

	return <Layout slot={template} />;
}
