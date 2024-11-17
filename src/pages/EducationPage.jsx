import { info } from '../data/info';
import Layout from '../layouts/Layout';
import Hero from '../components/homepage/Hero';
import AllExperience from '../components/experience/AllExperience';

export default function EducationPage() {
	const template = (
		<>
			<Hero short />
			<AllExperience title="Experiences" details={info.education} />
		</>
	);

	return <Layout slot={template} />;
}
