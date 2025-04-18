import { For } from 'solid-js';
import { info } from '../../data/info';

const { products } = info;

export default function ProductsPreview() {
	return (
		<section id="products" class="flex items-start justify-between flex-col sm:flex-row dark:text-light">
			<h2 class="w-[15rem] mt-16 uppercase">Products</h2>

			<div class="w-full">
				<For each={products.slice(0, 4)}>
					{product => (
						<div class="md:my-16 my-8">
							<div>
								<div class="flex justify-between md:flex-row flex-col md:items-center mb-2">
									<div class="flex items-center gap-2">
										{product.logo && (
											<img
												src={product.logo}
												alt={`${product.title} logo`}
												class="w-7 h-7 object-contain rounded-md"
												loading="lazy"
											/>
										)}
										<h3 class="text-xl font-semibold">{product.title}</h3>
									</div>
									<p class="text-sm dark:text-gray">{product.date}</p>
								</div>
								<p class="text-base md:text-sm mb-1">{product.description}</p>

								<a
									href={product.link}
									class="text-sm underline hover:opacity-70 transition-opacity"
									target="_blank"
								>
									Go to {product.title}
								</a>
							</div>
						</div>
					)}
				</For>
			</div>
		</section>
	);
}
