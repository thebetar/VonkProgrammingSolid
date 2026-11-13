import { createEffect, onCleanup, lazy } from 'solid-js';

import { info } from '@/data/info';
import { experience } from '@/data/featured-experience';
import { education } from '@/data/featured-education';

import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import Hero from '@/components/homepage/Hero';
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

	const homeJsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${info.baseUrl}/#website`,
				url: `${info.baseUrl}/`,
				name: 'VonkProgramming',
				description: 'CV and blog of Lars Vonk, Senior Full-Stack Engineer.',
				potentialAction: {
					'@type': 'SearchAction',
					target: `${info.baseUrl}/blogs?q={search_term_string}`,
					'query-input': 'required name=search_term_string',
				},
			},
			{
				'@type': 'Person',
				'@id': `${info.baseUrl}/#person`,
				name: info.name,
				url: info.baseUrl,
				image: `${info.baseUrl}/assets/images/profile-picture.webp`,
				jobTitle: `Senior ${info.jobDescription1}`,
				worksFor: {
					'@type': 'Organization',
					name: info.jobDescription2,
					url: 'https://www.labdigital.nl/',
				},
				sameAs: [info.socialMedia.github, info.socialMedia.linkedin, info.socialMedia.stackoverflow],
			},
		],
	};

	const template = (
		<>
			<SEO
				title="Full-Stack Engineer"
				description="Lars Vonk — Senior Full-Stack Engineer at Lab Digital. CV, experience, projects and blogs on JavaScript, TypeScript, Python, GraphQL, AI and IoT."
				path="/"
				keywords={info.keywords}
				jsonLd={homeJsonLd}
			/>
			<Hero />
			<BlogsPreview />
			<SkillsPreview />
			<ExperiencesPreview title="Experience" details={experience} />
			<ExperiencesPreview title="Education" details={education} />
			<ProjectsPreview />
		</>
	);

	return <Layout slot={template} />;
}
