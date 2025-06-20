import { info } from '../../data/info';

import Rating from '../styling/Rating';

const skills = info.skills.filter(s => s.featured);

export default function SkillsPreview() {
	return (
		<section id="skills" class="flex items-start justify-between flex-col sm:flex-row dark:text-white">
			<h2 class="w-[15rem] sm:mt-16 mt-24 uppercase sm:text-2xl text-3xl font-semibold">Skills</h2>

			<div class="w-full mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-4 md:gap-x-8 gap-x-2">
				<For each={skills}>
					{item => (
						<div class="md:my-4 my-1 flex md:flex-row flex-col gap-1 justify-between items-center dark:border-zinc-300 border-zinc-600 border md:p-4 px-2 py-3 dark:text-white text-black no-underline md:rounded rounded-lg dark:hover:bg-zinc-900 hover:bg-zinc-200 transition">
							<div class="flex md:gap-2 gap-1 md:flex-row flex-col items-center">
								<div class="md:w-10 md:h-10 w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-100 flex justify-center items-center">
									<img
										src={item.logo}
										alt={item.title}
										title={item.title}
										loading="lazy"
										class="md:w-6 md:h-6 w-4 h-4"
									/>
								</div>
								<h3 class="md:text-lg text-sm">{item.title}</h3>
							</div>
							<Rating rating={item.level} />
						</div>
					)}
				</For>
				<div class="lg:col-span-3 md:col-span-2 col-span-4 text-center mt-4 md:text-base text-sm">
					<a
						class="dark:text-white text-zinc-900 underline hover:opacity-70 transition-opacity"
						href="/skills"
						aria-label="Check all of my skills"
					>
						Check all of my skills
					</a>
				</div>
			</div>
		</section>
	);
}
