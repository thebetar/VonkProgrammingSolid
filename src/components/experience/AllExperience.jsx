import { info } from '../../data/info';
import ExperienceCard from './ExperienceCard';

export default function AllExperience({ title, details }) {
	return (
		<section class="flex items-center justify-start flex-col dark:text-light">
			<h2 class="w-full text-4xl text-center md:my-4 my-2">{title}</h2>

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline">
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
