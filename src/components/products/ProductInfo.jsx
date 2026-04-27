export default function ProductInfo({ title, logo, description }) {
	return (
		<div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
			{logo}
			<h1 className="md:text-4xl text-2xl my-0 w-fit mx-auto">{title}</h1>

			<div className="md:my-12 my-6">{description}</div>
		</div>
	);
}
