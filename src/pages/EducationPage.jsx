import { education } from '@/data/education';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import AllExperience from '@/components/experience/AllExperience';

export default function EducationPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<SEO
				title="Education"
				description="Educational background of Lars Vonk — including a Master's in Computer Systems and Networks at the Warsaw University of Technology."
				path="/education"
				keywords={['education', 'master degree', 'computer science', 'networks']}
			/>

			<AllExperience title="Education" details={education} />
		</div>
	);

	return <Layout slot={template} />;
}
