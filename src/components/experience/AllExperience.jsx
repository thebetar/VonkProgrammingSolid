export default function AllExperience({ title, details }) {
	return (
		<section class="flex items-center justify-start flex-col dark:text-light">
			<h2 class="w-full text-4xl text-center md:my-4 my-2">{title}</h2>

			<div class="flex justify-center dark:text-white text-zinc-900">
				<div>
					<a href="/" class="underline dark:text-white text-zinc-900">
						Go back
					</a>{' '}
					in time ⏰
				</div>
			</div>

			<div class="xl:w-[960px] md:w-[720px] w-full">
				<For each={details}>
					{item => (
						<div class="md:my-16 my-8">
							<div class="flex justify-between md:flex-row flex-col md:items-center flex-wrap">
								<h3 class="text-xl leading-6 font-semibold md:mb-0 mb-1">{item.name}</h3>
								<p class="text-sm dark:text-gray">
									{item.startDate} - {item.endDate}
								</p>
							</div>
							<p class="text-sm mt-3 dark:text-blue text-cyan-800">{item.location}</p>
							<ul class="mt-3">
								{item.description.map(item => (
									<li class="dark:text-gray">{item}</li>
								))}
							</ul>
							{item.link ? (
								<a
									href={item.link}
									class="text-sm underline dark:text-gray mt-4"
									target="_blank"
									rel="noopener noreferrer"
								>
									Go to website
								</a>
							) : null}
						</div>
					)}
				</For>
			</div>
		</section>
	);
}
