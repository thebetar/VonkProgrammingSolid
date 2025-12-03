import { Title, Meta } from '@solidjs/meta';

export default function ProductInfo({ title, logo, description, productLink, descriptionShort }) {
	return (
		<div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
			<Title>VonkProgramming - {title}</Title>
			<Meta name="description" content={descriptionShort || `Learn more about ${title} at VonkProgramming.`} />

			<Meta property="og:title" content={`VonkProgramming - ${title}`} />
			<Meta
				property="og:description"
				content={descriptionShort || `Learn more about ${title} at VonkProgramming.`}
			/>
			<Meta property="og:image" content="https://vonkprogramming.nl/assets/images/logo.webp" />
			<Meta property="og:type" content="product" />

			<script type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Product',
					name: title,
					description: descriptionShort,
					image: 'https://vonkprogramming.nl/assets/images/logo.webp',
					brand: {
						'@type': 'Brand',
						name: 'VonkProgramming',
					},
					url: `https://vonkprogramming.nl${productLink}`,
				})}
			</script>

			{logo}
			<h1 className="md:text-4xl text-2xl my-0 w-fit mx-auto">{title}</h1>

			<div className="md:my-12 my-6">{description}</div>
		</div>
	);
}
