import { useParams } from '@solidjs/router';
import { info } from '../data/info';
import Layout from '../layouts/Layout';
import ProductInfo from '../components/products/ProductInfo';

export default function ProductPage() {
	const productId = useParams().id;

	const product = info.products.find(product => product.id === productId);

	const template = (
		<div className="md:mt-4 mt-6 min-h-[calc(100vh-314px)]">
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
