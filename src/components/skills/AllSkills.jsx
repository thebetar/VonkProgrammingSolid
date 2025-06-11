import Rating from '../general/Rating';
import { info, SkillType } from '../../data/info';

const skillTypes = Object.values(SkillType);

export default function AllSkills() {
	return (
		<section class="flex items-center justify-start flex-col dark:text-white">
			<h2 class="w-full text-4xl text-center md:my-4 my-2 uppercase">Skills</h2>

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline">
						Go to homepage
					</a>{' '}
					🏚️
				</div>
			</div>

			<div class="w-full">
				<For each={skillTypes}>
					{skillType => (
						<div class="w-full mt-8">
							<h3 class="w-full font-semibold text-2xl">{skillType}</h3>
							<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-4 md:gap-x-8 gap-x-2">
								<For each={info.skills.filter(skill => skill.type === skillType)}>
									{item => (
										<a
											href={item.link}
											class="md:my-4 my-1 flex md:flex-row flex-col gap-1 justify-between items-center dark:border-zinc-300 border-zinc-600 border md:p-4 px-2 py-3 dark:text-white text-black no-underline md:rounded rounded-lg dark:hover:bg-zinc-900 hover:bg-zinc-200 transition"
										>
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
										</a>
									)}
								</For>
							</div>
						</div>
					)}
				</For>
			</div>
		</section>
	);
}
