import { createEffect, createSignal } from 'solid-js';

import Share from './Share';
import { getTagColor } from '../../data/blogs';

export default function BlogPost({ id, title, description, link, date, tags, keywords, content }) {
	const [showShare, setShowShare] = createSignal(false);

	const parseTitle = title => {
		const chars = title.split('');

		return {
			title: chars.reduce((acc, char) => {
				// If char is emoji
				if (char.charCodeAt(0) > 127) {
					return acc;
				}

				return acc + char;
			}, ''),
			emoji: chars.reduce((acc, char) => {
				// If char is emoji
				if (char.charCodeAt(0) > 127) {
					return acc + char;
				}

				return acc;
			}, ''),
		};
	};

	const openSubscribe = () => {
		// Fire custom event to trigger subscribe popup
		document.querySelector('body').dispatchEvent(new Event('open-subscribe'));
	};

	createEffect(() => {
		const titleElement = document.querySelector('title');
		titleElement.textContent = `VonkProgramming - ${title}`;

		const metaKeywords = document.createElement('meta[name="keywords"]');
		metaKeywords.content = keywords.join(', ');
	});

	return (
		<>
			<meta property="og:title" content={`VonkProgramming - ${title}`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="//assets/images/logo.webp" />
			<meta property="og:url" content={`//${link}`} />

			{showShare() && <Share handleClose={() => setShowShare(false)} />}

			<div id="blog_id" class="hidden">
				{id}
			</div>

			<div class="flex justify-center mb-8">
				<div>
					<a href="/" class="underline">
						Go back
					</a>{' '}
					in time ⏰
				</div>
			</div>

			<div class="blog-header">
				<div class="flex justify-between">
					<div>
						<h1 class="text-4xl my-0 w-fit inline">{parseTitle(title).title}</h1>
						<div class="text-4xl text-white inline">{parseTitle(title).emoji}</div>
					</div>

					<div class="dark:text-light text-dark hover:opacity-70 transition cursor-pointer">
						<svg
							id="share-icon"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="md:w-9 md:h-9 w-8 h-8"
							onClick={() => setShowShare(true)}
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
				</div>

				<p class="text-sm dark:text-gray mb-2">
					{date} | <span id="view-count">1</span> views
				</p>

				<div class="flex gap-x-2 mb-8">
					<For each={tags.sort((a, b) => a.localeCompare(b))}>
						{tag => (
							<span
								class={[
									'text-xs',
									'dark:text-dark',
									'text-light',
									'capitalize',
									'px-2',
									'py-1',
									'rounded-md',
									'font-semibold',
									`bg-${getTagColor(tag)}-700`,
								].join(' ')}
							>
								{tag}
							</span>
						)}
					</For>
				</div>
			</div>

			<div class="blog-post">{content}</div>

			<div class="flex max-w-[720px] mx-auto md:gap-x-4 gap-2 justify-center items-center md:text-base text-sm mb-10 md:flex-row flex-col">
				<button
					id="subscribe-popup-button"
					class="h-10 w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md block cursor-pointer text-light text-center"
					onClick={openSubscribe}
				>
					📚 Subscribe to my blog
				</button>

				<button
					id="share-button"
					class="h-10 w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md block cursor-pointer text-light text-center"
					onClick={() => setShowShare(true)}
				>
					🧠 Share this knowledge
				</button>

				<a
					class="h-10 w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md block cursor-pointer text-light text-center"
					href={`mailto:info@vonkprogramming.nl&subject=Question about ${title}&body=Hi VonkProgramming team,%0D%0A%0D%0AI have a question about ${title}.%0D%0A%0D%0AKind regards,%0D%0A%0D%0A[Your name]`}
				>
					❓ Ask me a question
				</a>
			</div>
		</>
	);
}
