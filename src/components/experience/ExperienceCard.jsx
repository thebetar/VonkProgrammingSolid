import { For } from 'solid-js';
import { info } from '../../data/info';

export default function ExperienceCard({ small, item }) {
	return (
		<div class="md:my-16 my-8">
			<div class="flex justify-between md:flex-row flex-col md:items-center mb-2">
				<div className="flex gap-x-4 items-center md:justify-start justify-between">
					<h3 class="text-xl font-semibold">{item.name}</h3>
					<div class="flex gap-x-1">
						<For each={item.skills}>
							{skill => (
								<div class="w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-100 flex justify-center items-center">
									<img
										src={info.skills?.find(s => s.title === skill)?.logo}
										alt={skill}
										title={skill}
										loading="lazy"
										class="w-4 h-4"
									/>
								</div>
							)}
						</For>
					</div>
				</div>
				<p class="text-sm">
					{item.startDate} - {item.endDate}
				</p>
			</div>

			<p class="text-sm mt-3 dark:text-blue text-cyan-800">{item.location}</p>

			<ul class="mt-3 mb-1" classList={{ 'md:text-sm': small }}>
				<For each={item.description}>{item => <li>{item}</li>}</For>
			</ul>

			{item.link ? (
				<a href={item.link} class="text-sm underline mt-4" target="_blank" rel="noopener noreferrer">
					Go to website of {item.name}
				</a>
			) : null}
		</div>
	);
}
