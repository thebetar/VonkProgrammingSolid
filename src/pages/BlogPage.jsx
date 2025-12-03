import { useParams } from '@solidjs/router';

import { blogs } from '@/data/blogs';
import Layout from '../layouts/Layout';
import BlogPost from '../components/blogs/BlogPost';

export default function BlogPage() {
	const blogId = useParams().id;

	const blog = blogs.find(blog => blog.link.replace('/blogs/', '') === blogId);

	const template = (
		<div className="md:mt-4 mt-6">
			<div class="flex justify-center mb-8">
				<div>
					<a href="/blogs" class="underline">
						See all blogs
					</a>{' '}
					📚
				</div>
			</div>

			{blog ? (
				<BlogPost {...blog} />
			) : (
				<div class="min-h-[calc(100vh-314px)] flex justify-center text-4xl py-4">Blog Not Found</div>
			)}
		</div>
	);

	return <Layout slot={template} />;
}
