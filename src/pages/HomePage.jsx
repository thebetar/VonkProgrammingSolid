import { createEffect, onCleanup, lazy } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import { experience } from '@/data/experience';
import { education } from '@/data/education';

import Layout from '@/layouts/Layout';
import Hero from '@/components/homepage/Hero';
import ProductsPreview from '@/components/products/ProductsPreview';

const BlogsPreview = lazy(() => import('@/components/homepage/BlogsPreview'));
const SkillsPreview = lazy(() => import('@/components/homepage/SkillsPreview'));
const ExperiencesPreview = lazy(() => import('@/components/homepage/ExperiencesPreview'));
const ProjectsPreview = lazy(() => import('@/components/homepage/ProjectsPreview'));

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
			<ExperiencesPreview title="Experience" details={experience.filter(e => e.featured)} />
			<ExperiencesPreview title="Education" details={education.filter(e => e.featured)} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
