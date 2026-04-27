import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';

import AllSkills from '@/components/skills/AllSkills';

export default function SkillsPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<SEO
				title="Skills"
				description="Technical expertise of Lars Vonk: JavaScript, TypeScript, Python, PHP, Go, C++, SolidJS, React, Node.js, Laravel, Docker, AI, and more."
				path="/skills"
				keywords={['skills', 'javascript', 'typescript', 'python', 'php', 'go', 'docker', 'AI']}
			/>

			<AllSkills />
		</div>
	);

	return <Layout slot={template} />;
}
