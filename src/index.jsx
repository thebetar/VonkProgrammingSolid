/* @refresh reload */
import { lazy, onMount } from 'solid-js';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';

const root = document.getElementById('app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

// Clear the root element to remove fallback content
root.innerHTML = '';

const routes = [
	{
		path: '/',
		component: lazy(() => import('./pages/HomePage')),
	},
	{
		path: '/products/:id',
		component: lazy(() => import('./pages/ProductPage')),
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
		path: '/contact',
		component: lazy(() => import('./pages/ContactPage')),
	},
	{
		path: '/contact/:service',
		component: lazy(() => import('./pages/ContactPage')),
	},
	{
		path: '*',
		component: lazy(() => import('./pages/NotFoundPage')),
	},
];

render(() => {
	onMount(() => {
		import('./index.css');
	});

	return (
		<MetaProvider>
			<Router>{routes}</Router>
		</MetaProvider>
	);
}, root);
