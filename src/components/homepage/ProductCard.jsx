export default function ProductCard({ product }) {
	return (
		<div
			onClick={() => (window.location.href = product.link)}
			class="block md:my-16 my-8 rounded-md border border-zinc-300 bg-zinc-900 px-6 py-5 hover:scale-[1.01] transition-transform shadow-lg cursor-pointer"
		>
			<div class="flex flex-col items-center justify-center">
				<div class="flex justify-between md:flex-row flex-col md:items-center">
					<div class="flex items-center justify-center gap-2 w-full">
						{product.logo}
						<h3 class="text-xl font-semibold">{product.title}</h3>
					</div>

					<p class="text-sm dark:text-gray">{product.date}</p>
				</div>

				<p class="text-base text-center md:text-sm mt-2">{product.description}</p>

				<a
					href={product.link}
					class="text-sm hover:opacity-70 transition-opacity underline rounded-md px-4 py-2 mt-3"
					target="_blank"
					aria-label={`Go to ${product.title}`}
				>
					Contact us about {product.title}
				</a>
			</div>
		</div>
	);
}
