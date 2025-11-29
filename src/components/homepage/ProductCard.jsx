export default function ProductCard({ product }) {
	return (
		<div
			onClick={() => (window.location.href = product.link)}
			class="block md:my-8 my-8 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-900 px-6 py-6 hover:scale-[1.025] transition-transform shadow-lg hover:shadow-2xl cursor-pointer group focus-within:ring-2 focus-within:ring-blue-400 max-w-lg mx-auto"
			tabIndex={0}
		>
			<div class="flex flex-col items-center justify-between h-full">
				<div class="flex justify-between md:flex-row flex-col md:items-center w-full">
					<div class="flex items-center justify-center flex-col gap-2 w-full">
						{product.logo}
						<h3 class="text-xl font-semibold text-white">{product.title}</h3>
					</div>

					<p class="text-sm text-zinc-400">{product.date}</p>
				</div>

				<p class="text-base text-center md:text-sm mt-2 text-zinc-200">{product.description}</p>

				<a
					href={product.link}
					class="text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 text-white rounded-lg px-5 py-2 mt-4 shadow transition-all outline-none focus:ring-2 focus:ring-blue-400 group-hover:bg-zinc-700 group-hover:scale-105 group-hover:shadow-xl"
					target="_blank"
					aria-label={`Go to ${product.title}`}
					tabIndex={0}
				>
					Contact
				</a>
			</div>
		</div>
	);
}
