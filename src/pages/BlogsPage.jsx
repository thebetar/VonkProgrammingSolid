import { createEffect } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

import Layout from '../layouts/Layout';

import AllBlogs from '../components/blogs/AllBlogs';

export default function BlogsPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<Title>VonkProgramming - Blogs</Title>
			<Meta
				name="description"
				content="Read my latest thoughts and tutorials on programming, technology, and more."
			/>
			<Meta property="og:title" content="VonkProgramming - Blogs" />
			<Meta
				property="og:description"
				content="Read my latest thoughts and tutorials on programming, technology, and more."
			/>
			<Meta property="og:type" content="website" />

			<AllBlogs />
		</div>
	);

	return <Layout slot={template} />;
}
