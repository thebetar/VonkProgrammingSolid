import { Title, Meta } from '@solidjs/meta';
import { info } from '../data/info';
import Layout from '../layouts/Layout';

import AllExperience from '../components/experience/AllExperience';

export default function ExperiencesPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<Title>VonkProgramming - Experience</Title>
			<Meta name="description" content="My professional experience and career journey." />
			<Meta property="og:title" content="VonkProgramming - Experience" />
			<Meta property="og:description" content="My professional experience and career journey." />
			<Meta property="og:type" content="website" />

			<AllExperience title="Experiences" details={info.experience} />
		</div>
	);

	return <Layout slot={template} />;
}
