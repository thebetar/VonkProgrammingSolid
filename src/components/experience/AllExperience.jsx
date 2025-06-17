import PageHeader from '../skills/PageHeader';
import ExperienceCard from './ExperienceCard';

export default function AllExperience({ title, details }) {
	return (
		<section class="flex items-center justify-start flex-col dark:text-white">
			<PageHeader>{title}</PageHeader>

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline" aria-label="Go to homepage">
						Go to homepage
					</a>{' '}
					🏚️
				</div>
			</div>

			<div class="xl:w-[960px] md:w-[720px] w-full">
				<For each={details}>{item => <ExperienceCard item={item} />}</For>
			</div>
		</section>
	);
}
