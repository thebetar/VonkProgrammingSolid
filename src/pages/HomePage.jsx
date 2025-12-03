import { createEffect, onCleanup, lazy } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import { experience } from '@/data/featured-experience';
import { education } from '@/data/featured-education';

import Layout from '@/layouts/Layout';
import Hero from '@/components/homepage/Hero';
import ProductsPreview from '@/components/products/ProductsPreview';
import BlogsPreview from '@/components/homepage/BlogsPreview';
import SkillsPreview from '@/components/homepage/SkillsPreview';
import ExperiencesPreview from '@/components/homepage/ExperiencesPreview';
import ProjectsPreview from '@/components/homepage/ProjectsPreview';

let scrollListener;

export default function Homepage() {
	createEffect(() => {
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
			<ExperiencesPreview title="Experience" details={experience} />
			<ExperiencesPreview title="Education" details={education} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
