import { useParams } from '@solidjs/router';

import { info } from '@/data/info';
import { blogs } from '@/data/blogs';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import BlogPost from '@/components/blogs/BlogPost';

function cleanText(text) {
	return text ? text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim() : '';
}

function buildJsonLd(blog) {
	const description = cleanText(blog.description);
	const url = `${info.baseUrl}${blog.link}`;
	const image = `${info.baseUrl}${blog.image || '/assets/images/logo.webp'}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		headline: blog.title,
		description,
		image,
		author: { '@type': 'Person', name: info.name, url: info.baseUrl },
		publisher: {
			'@type': 'Organization',
			name: 'VonkProgramming',
			logo: { '@type': 'ImageObject', url: `${info.baseUrl}/assets/images/logo.webp` },
		},
		datePublished: blog.date,
		dateModified: blog.dateModified || blog.date,
		keywords: Array.isArray(blog.keywords) ? blog.keywords.join(', ') : blog.keywords,
		url,
	};
}

export default function BlogPage() {
	const blogId = useParams().id;
	const blog = blogs.find(b => b.link.replace('/blogs/', '') === blogId);

	const template = (
		<div className="md:mt-4 mt-6">
			{blog && (
				<SEO
					title={blog.title}
					description={cleanText(blog.description)}
					path={blog.link}
					image={blog.image || '/assets/images/logo.webp'}
					type="article"
					keywords={blog.keywords}
					jsonLd={buildJsonLd(blog)}
				/>
			)}

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
