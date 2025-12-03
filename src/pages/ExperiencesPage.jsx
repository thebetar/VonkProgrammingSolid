import { Title, Meta } from '@solidjs/meta';

import { experience } from '@/data/experience';
import Layout from '@/layouts/Layout';
import AllExperience from '@/components/experience/AllExperience';

export default function ExperiencesPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<Title>VonkProgramming - Experience</Title>
			<Meta name="description" content="My professional experience and career journey." />
			<Meta property="og:title" content="VonkProgramming - Experience" />
			<Meta property="og:description" content="My professional experience and career journey." />
			<Meta property="og:type" content="website" />

			<AllExperience title="Experiences" details={experience} />
		</div>
	);

	return <Layout slot={template} />;
}
