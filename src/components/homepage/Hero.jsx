import { info } from '../../data/info';

const { name, jobDescription1, jobDescription2, about } = info;

export default function Hero({ short = false }) {
	return (
		<section>
			<p class="dark:text-light md:mt-[117px] mt-20">Hey, I’m</p>

			<h1 class="main-heading" aria-label={name}>
				{name}
			</h1>

			<div
				aria-label={jobDescription1 + ' | ' + jobDescription2}
				class="md:text-xl text-lg flex md:flex-row flex-col items-start gap-x-4"
			>
				<div class="dark:text-light flex gap-x-2 items-center">
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z"
							fill="currentColor"
						></path>
						<path
							d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z"
							fill="currentColor"
						></path>
						<path
							d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z"
							fill="currentColor"
						></path>
					</svg>
					<span>{jobDescription1}</span>
				</div>

				<div class="dark:text-light flex gap-x-2 items-center">
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
							stroke="currentColor"
							stroke-width="2"
						></path>
						<path
							d="M9 12L10.6828 13.6828V13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828V13.6828L15 10"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>{jobDescription2}</span>
				</div>
			</div>

			{!short ? (
				<p class="dark:text-light text-md mt-8 mb-16">{about}</p>
			) : (
				<div class="w-full border-b border-zinc-600 dark:border-zinc-300/25 my-8"></div>
			)}
		</section>
	);
}
