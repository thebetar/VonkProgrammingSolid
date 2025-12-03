import { createEffect, onCleanup, lazy } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import { experience } from '@/data/experience';
import { education } from '@/data/education';

import Layout from '@/layouts/Layout';
import Hero from '@/components/homepage/Hero';
import ProductsPreview from '@/components/products/ProductsPreview';

const LazyBlogsPreview = lazy(() => import('@/components/homepage/BlogsPreview'));
const LazySkillsPreview = lazy(() => import('@/components/homepage/SkillsPreview'));
const LazyExperiencesPreview = lazy(() => import('@/components/homepage/ExperiencesPreview'));
const LazyProjectsPreview = lazy(() => import('@/components/homepage/ProjectsPreview'));

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

			<LazyBlogsPreview />
			<LazySkillsPreview />
			<LazyExperiencesPreview title="Experience" details={experience.filter(e => e.featured)} />
			<LazyExperiencesPreview title="Education" details={education.filter(e => e.featured)} />
			<LazyProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
