import { For } from 'solid-js';

import { info } from '../../data/info';
import ProductCard from './ProductCard.jsx';

const { products } = info;

export default function ProductsPreview() {
	return (
		<section id="products" class="flex items-start justify-between flex-col sm:flex-row dark:text-white">
			<h2 class="w-[15rem] sm:mt-16 mt-24 uppercase sm:text-2xl text-3xl font-semibold">Services</h2>

			<div class="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
				<For each={products}>{product => <ProductCard product={product} />}</For>
			</div>
		</section>
	);
}
