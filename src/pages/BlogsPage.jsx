import { createEffect } from 'solid-js';

import Layout from '../layouts/Layout';
import AllBlogs from '../components/blogs/AllBlogs';
import Hero from '../components/homepage/Hero';

export default function BlogsPage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Blogs`;
	});

	const template = (
		<>
			<Hero short />
			<AllBlogs />
		</>
	);

	return <Layout slot={template} />;
}
