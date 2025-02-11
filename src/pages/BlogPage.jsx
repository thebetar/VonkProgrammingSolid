import { useParams } from '@solidjs/router';
import { info } from '../data/info';

import Layout from '../layouts/Layout';
import BlogPost from '../components/blog/BlogPost';

export default function BlogPage() {
	const blogId = useParams().id;

	const blog = info.blogs.find(blog => blog.link.replace('/blogs/', '') === blogId);

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

			<BlogPost {...blog()} />
		</div>
	);

	return <Layout slot={template} />;
}
