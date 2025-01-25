import { useParams } from '@solidjs/router';
import { info } from '../data/info';

import Layout from '../layouts/Layout';
import PageNavigation from '../components/general/PageNavigation';
import BlogPost from '../components/blog/BlogPost';

export default function BlogPage() {
	const blogId = useParams().id;

	const blog = info.blogs.find(blog => blog.link.replace('/blogs/', '') === blogId);

	return (
		<Layout
			slot={
				<>
					<PageNavigation curPage={'blogs'} />
					<BlogPost {...blog()} />
				</>
			}
		/>
	);
}
