import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';

import AllBlogs from '@/components/blogs/AllBlogs';

export default function BlogsPage() {
	const template = (
		<div className="md:mt-4 mt-6">
			<SEO
				title="Blogs"
				description="Tutorials and deep-dives on full-stack development, AI, networking, IoT, code quality, and the craft of building software by Lars Vonk."
				path="/blogs"
				keywords={['blogs', 'programming tutorials', 'full-stack', 'javascript', 'python', 'php', 'AI', 'IoT']}
				jsonLd={{
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: 'VonkProgramming Blogs',
					url: 'https://vonkprogramming.nl/blogs',
					description: 'Articles and tutorials on programming, AI, IoT, and software craftsmanship.',
				}}
			/>

			<AllBlogs />
		</div>
	);

	return <Layout slot={template} />;
}
