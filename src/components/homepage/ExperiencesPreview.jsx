export default function ExperiencesPreview({ title, details }) {
	return (
		<section id={title.toLowerCase()} class="flex items-start justify-between flex-col sm:flex-row">
			<h2 class="w-[15rem] mt-16 uppercase">{title}</h2>
			<div class="w-full">
				<For each={details}>
					{item => (
						<div class="md:my-16 my-8">
							<div class="flex justify-between md:flex-row flex-col md:items-center mb-2">
								<h3 class="text-xl font-semibold">{item.name}</h3>
								<p class="text-sm">
									{item.startDate} - {item.endDate}
								</p>
							</div>
							<p class="text-sm mt-3 dark:text-blue text-cyan-800">{item.location}</p>
							<ul class="mt-3 text-base md:text-sm mb-1">
								{item.description.map(item => (
									<li>{item}</li>
								))}
							</ul>
							{item.link ? (
								<a
									href={item.link}
									class="text-sm underline mt-4"
									target="_blank"
									rel="noopener noreferrer"
								>
									Go to website of {item.name}
								</a>
							) : null}
						</div>
					)}
				</For>
				<div class="lg:col-span-3 col-span-2 text-center mt-4 md:text-base text-sm">
					<a class="underline hover:opacity-70 transition-opacity" href={`/${title.toLowerCase()}`}>
						View all my {title.toLowerCase()}
					</a>
				</div>
			</div>
		</section>
	);
}
