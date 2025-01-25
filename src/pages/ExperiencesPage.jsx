import { info } from '../data/info';
import Layout from '../layouts/Layout';

import PageNavigation from '../components/general/PageNavigation';
import Hero from '../components/homepage/Hero';
import AllExperience from '../components/experience/AllExperience';

export default function ExperiencesPage() {
	const template = (
		<>
			<PageNavigation curPage={'experience'} />
			<Hero short />
			<AllExperience title="Experiences" details={info.experience} />
		</>
	);

	return <Layout slot={template} />;
}
