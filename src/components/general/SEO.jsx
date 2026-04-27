import { Title, Meta, Link } from '@solidjs/meta';

import { info } from '@/data/info';

const DEFAULT_IMAGE = '/assets/images/logo.webp';
const SITE_NAME = 'VonkProgramming';

function truncate(text, max = 158) {
	if (!text) return '';
	const clean = String(text).replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function absoluteUrl(pathOrUrl, fallbackPath = '/') {
	const target = pathOrUrl || fallbackPath;
	if (/^https?:\/\//i.test(target)) return target;
	return info.baseUrl + (target.startsWith('/') ? target : '/' + target);
}

export default function SEO({
	title,
	description,
	path = '/',
	image = DEFAULT_IMAGE,
	type = 'website',
	keywords,
	noindex = false,
	jsonLd,
	titleOverride = false,
}) {
	const fullTitle = titleOverride ? title : `${SITE_NAME} - ${title}`;
	const desc = truncate(description);
	const canonical = absoluteUrl(path);
	const imageUrl = absoluteUrl(image);
	const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

	return (
		<>
			<Title>{fullTitle}</Title>
			<Meta name="description" content={desc} />
			{keywordsString && <Meta name="keywords" content={keywordsString} />}
			{noindex && <Meta name="robots" content="noindex,nofollow" />}
			<Link rel="canonical" href={canonical} />

			<Meta property="og:site_name" content={SITE_NAME} />
			<Meta property="og:type" content={type} />
			<Meta property="og:url" content={canonical} />
			<Meta property="og:title" content={fullTitle} />
			<Meta property="og:description" content={desc} />
			<Meta property="og:image" content={imageUrl} />

			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:url" content={canonical} />
			<Meta name="twitter:title" content={fullTitle} />
			<Meta name="twitter:description" content={desc} />
			<Meta name="twitter:image" content={imageUrl} />

			{jsonLd && (
				<script type="application/ld+json" innerHTML={JSON.stringify(jsonLd)} />
			)}
		</>
	);
}
