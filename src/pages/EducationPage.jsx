import { info } from '../data/info';
import Layout from '../layouts/Layout';

import AllExperience from '../components/experience/AllExperience';

export default function EducationPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<AllExperience title="Education" details={info.education} />
		</div>
	);

	return <Layout slot={template} />;
}
