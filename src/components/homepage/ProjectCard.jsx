export default function ProjectCard({ language, githubUrl, liveUrl, thumbnail, title, description, small }) {
	return (
		<article class="w-full max-h-96 overflow-hidden relative group rounded-lg flex items-center justify-center border-4 dark:border-zinc-800 dark:hover:border-cyan-800 border-zinc-200 hover:border-cyan-300 transition duration-500">
			{language && (
				<div class="absolute left-4 top-4 md:left-2 md:top-2 z-10">
					<img
						src={`/assets/svg/${language.toLowerCase()}.svg`}
						class="md:h-10 h-8 md:w-10 w-8 md:p-2 p-1 bg-black/50 rounded-full backdrop-blur-md"
						alt={language}
						title={`Created using ${language}`}
					/>
				</div>
			)}
			<div class="flex items-center absolute right-4 top-4 md:right-2 md:top-2 z-10">
				{githubUrl && (
					<a
						href={githubUrl}
						class="text-white md:p-3 p-2 bg-black/50 rounded-full backdrop-blur-md"
						aria-label="Social Media"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-github"
						>
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
						</svg>
					</a>
				)}

				{liveUrl && (
					<a
						href={liveUrl}
						class="text-white md:p-3 p-2 bg-black/50 rounded-full backdrop-blur-md ml-1"
						aria-label="Social Media"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-link-2"
						>
							<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
							<line x1="8" y1="12" x2="16" y2="12" />
						</svg>
					</a>
				)}
			</div>
			<a href={githubUrl ? githubUrl : liveUrl} target="_blank" rel="noopener noreferrer" class="w-full">
				<img
					src={thumbnail}
					class="w-full h-auto scale-100 hover:scale-110 transition duration-1000 aspect-square"
					loading="lazy"
					width="100%"
					height="100%"
					alt={title}
					title={title}
				/>
			</a>
			<div class="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 md:p-4 p-2 transition duration-700">
				<h3 class="mr-2 md:text-xl text-base">{title}</h3>

				{!small && description && (
					<p class="sm:max-h-0 max-h-56 overflow-y-hidden group-hover:max-h-56 transition-all duratio-300 md:text-sm text-xs mt-1">
						{description}
					</p>
				)}
			</div>
		</article>
	);
}
