import { info } from '@/data/info';
import { CodeSvg, LightBulbSvg, LinkedInSvg, MailSvg } from '@/components/Icons';

const { name, jobDescription1, jobDescription2, about, socialMedia } = info;

export default function Hero({ short = false }) {
	return (
		<section id="hero" class={short ? 'md:block hidden' : ''}>
			<p class="dark:text-white md:mt-[117px] mt-16">Hey, I’m</p>

			<header class="lg:text-6xl lg:my-8 my-4 text-4xl main-heading font-semibold" aria-label={name}>
				{name}
			</header>

			<h1
				aria-label={jobDescription1 + ' | ' + jobDescription2}
				class="md:text-xl text-lg flex md:flex-row flex-col items-start gap-x-4"
			>
				<div class="flex gap-x-2 items-center">
					<CodeSvg width={24} height={24} />
					<span>{jobDescription1}</span>
				</div>

				<div class="flex gap-x-2 items-center">
					<LightBulbSvg width={24} height={24} />
					{jobDescription2}
				</div>
			</h1>

			<div class="mt-4">
				<p class="text-md mt-8">{about}</p>

				<div className="mt-2 flex gap-2 lg:flex-row flex-col">
					<a
						href="/contact"
						class="px-3 py-2 lg:w-fit w-full rounded-md transition-colors flex items-center justify-center gap-x-2 dark:bg-zinc-800 bg-zinc-300 dark:hover:bg-zinc-800/80 hover:bg-zinc-400/60"
						aria-label="Send an email"
					>
						<MailSvg width={16} height={16} />
						<span class="text-sm">Get in touch</span>
					</a>

					<a
						href={socialMedia.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="px-3 py-2 lg:w-fit w-full rounded-md transition-colors flex items-center justify-center gap-x-2 dark:bg-zinc-800 bg-zinc-300 dark:hover:bg-zinc-800/80 hover:bg-zinc-400/60"
						aria-label="Connect on LinkedIn"
					>
						<LinkedInSvg width={16} height={16} />
						<span class="text-sm">Connect on LinkedIn</span>
					</a>
				</div>
			</div>
		</section>
	);
}
