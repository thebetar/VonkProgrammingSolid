export default function ProductInfo({ title, logo, description }) {
	return (
		<div class="max-w-3xl mx-auto flex flex-col items-center">
			{logo}

			<h1 class="md:text-4xl text-2xl my-0 w-fit mx-auto">{title}</h1>

			<div className="md:my-12 my-6">{description}</div>
		</div>
	);
}
