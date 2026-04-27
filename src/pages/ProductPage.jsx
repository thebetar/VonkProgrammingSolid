import { useParams } from '@solidjs/router';

import { info } from '@/data/info';
import { products } from '@/data/products';
import Layout from '@/layouts/Layout';
import SEO from '@/components/general/SEO';
import ProductInfo from '@/components/products/ProductInfo';

function buildJsonLd(product) {
	const url = `${info.baseUrl}${product.productLink}`;
	const offerUrl = `${info.baseUrl}${product.contactLink || product.productLink}`;
	const image = `${info.baseUrl}${product.image || '/assets/images/logo.webp'}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.title,
		description: product.descriptionShort,
		image,
		url,
		category: product.category || 'Software Development Service',
		brand: { '@type': 'Brand', name: 'VonkProgramming', url: info.baseUrl },
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock',
			url: offerUrl,
			priceSpecification: {
				'@type': 'PriceSpecification',
				priceCurrency: 'EUR',
				valueAddedTaxIncluded: true,
				description: 'Contact for a custom quote',
			},
			seller: {
				'@type': 'Organization',
				name: 'VonkProgramming',
				url: info.baseUrl,
			},
		},
	};
}

export default function ProductPage() {
	const productId = useParams().id;
	const product = products.find(p => p.id === productId);

	const template = (
		<div className="md:mt-4 mt-6 min-h-[calc(100vh-314px)]">
			{product && (
				<SEO
					title={product.title}
					description={product.descriptionShort}
					path={product.productLink}
					type="website"
					jsonLd={buildJsonLd(product)}
				/>
			)}

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline">
						Go to Homepage
					</a>{' '}
					🏠
				</div>
			</div>

			{product ? (
				<ProductInfo {...product} />
			) : (
				<div class="min-h-[calc(100vh-314px)] flex justify-center text-4xl py-4">Product Not Found</div>
			)}
		</div>
	);

	return <Layout slot={template} />;
}
