import { createEffect } from 'solid-js';

import Layout from '../layouts/Layout';

import AllBlogs from '../components/blogs/AllBlogs';

export default function BlogsPage() {
	createEffect(() => {
		const titleElement = document.querySelector('title');

		titleElement.textContent = `VonkProgramming - Blogs`;
	});

	const template = (
		<div className="md:mt-4 mt-6">
			<AllBlogs />
		</div>
	);

	return <Layout slot={template} />;
}
