import { info } from '../data/info';
import { createEffect, onCleanup } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import Layout from '@/layouts/Layout';
import Hero from '@/components/homepage/Hero';
import BlogsPreview from '@/components/homepage/BlogsPreview';
import SkillsPreview from '@/components/homepage/SkillsPreview';
import ExperiencesPreview from '@/components/homepage/ExperiencesPreview';
import ProjectsPreview from '@/components/homepage/ProjectsPreview';
import ProductsPreview from '@/components/products/ProductsPreview';

let scrollListener;

export default function Homepage() {
	createEffect(() => {
		// On scroll remove # from URL
		scrollListener = () => {
			if (window.location.hash) {
				history.replaceState(null, null, ' ');
			}
		};
	});

	onCleanup(() => {
		window.removeEventListener('scroll', scrollListener);
	});

	const template = (
		<>
			<Title>VonkProgramming - Home</Title>
			<Meta
				name="description"
				content="I am an experienced developer with experience in Javascript and Python. I value code quality and continuous learning as can be read in my blogs."
			/>
			<Hero />
			<ProductsPreview />
			<BlogsPreview />
			<SkillsPreview />
			<ExperiencesPreview title="Experience" details={info.experience.filter(e => e.featured)} />
			<ExperiencesPreview title="Education" details={info.education.filter(e => e.featured)} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
