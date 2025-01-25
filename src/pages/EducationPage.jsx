import { info } from '../data/info';
import Layout from '../layouts/Layout';

import PageNavigation from '../components/general/PageNavigation';
import Hero from '../components/homepage/Hero';
import AllExperience from '../components/experience/AllExperience';

export default function EducationPage() {
	const template = (
		<>
			<PageNavigation curPage={'education'} />
			<Hero short />
			<AllExperience title="Education" details={info.education} />
		</>
	);

	return <Layout slot={template} />;
}
