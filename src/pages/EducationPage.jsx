import { Title, Meta } from '@solidjs/meta';
import { info } from '../data/info';
import Layout from '../layouts/Layout';

import AllExperience from '../components/experience/AllExperience';

export default function EducationPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<Title>VonkProgramming - Education</Title>
			<Meta name="description" content="My educational background and qualifications." />
			<Meta property="og:title" content="VonkProgramming - Education" />
			<Meta property="og:description" content="My educational background and qualifications." />
			<Meta property="og:type" content="website" />

			<AllExperience title="Education" details={info.education} />
		</div>
	);

	return <Layout slot={template} />;
}
