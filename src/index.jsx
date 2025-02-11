/* @refresh reload */
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './fonts.css';
import './index.css';

const root = document.getElementById('app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

const routes = [
	{
		path: '/',
		component: lazy(() => import('./pages/HomePage')),
	},
	{
		path: '/blogs',
		component: lazy(() => import('./pages/BlogsPage')),
	},
	{
		path: '/blogs/:id',
		component: lazy(() => import('./pages/BlogPage')),
	},
	{
		path: '/skills',
		component: lazy(() => import('./pages/SkillsPage')),
	},
	{
		path: '/experience',
		component: lazy(() => import('./pages/ExperiencesPage')),
	},
	{
		path: '/education',
		component: lazy(() => import('./pages/EducationPage')),
	},
	{
		path: '/projects',
		component: lazy(() => import('./pages/ProjectsPage')),
	},
	{
		path: '*',
		component: lazy(() => import('./pages/NotFoundPage')),
	},
];

render(() => <Router>{routes}</Router>, root);
