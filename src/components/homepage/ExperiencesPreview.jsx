import ExperienceCard from '../experience/ExperienceCard.jsx';

export default function ExperiencesPreview({ title, details }) {
	return (
		<section id={title.toLowerCase()} class="flex items-start justify-between flex-col sm:flex-row">
			<h2 class="w-[15rem] sm:mt-16 mt-24 uppercase sm:text-2xl text-3xl font-semibold">{title}</h2>

			<div class="w-full">
				<For each={details}>{item => <ExperienceCard small={true} item={item} />}</For>
				<div class="lg:col-span-3 col-span-2 text-center mt-4 text-base">
					<a class="underline hover:opacity-70 transition-opacity" href={`/${title.toLowerCase()}`}>
						View all my {title.toLowerCase()}
					</a>
				</div>
			</div>
		</section>
	);
}
