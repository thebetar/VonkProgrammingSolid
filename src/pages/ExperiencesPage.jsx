import { experience } from '@/data/experience';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import AllExperience from '@/components/experience/AllExperience';

export default function ExperiencesPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<SEO
				title="Experience"
				description="Nearly a decade of professional software engineering experience across web, AI, IoT, and data — full project history of Lars Vonk."
				path="/experience"
				keywords={['experience', 'career', 'freelance', 'full-stack engineer', 'consulting']}
			/>

			<AllExperience title="Experiences" details={experience} />
		</div>
	);

	return <Layout slot={template} />;
}
