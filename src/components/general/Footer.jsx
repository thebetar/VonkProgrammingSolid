import { info } from '@/data/info';
import { GitHubSvg, LinkedInSvg, MailSvg, StackOverflowSvg } from '@/components/Icons';

export default function Footer() {
	return (
		<footer class="container flex sm:flex-row flex-col justify-between items-center mb-8 sm:mb-4">
			<p class="text-right my-8">
				Developed by <strong>VonkProgramming</strong>
			</p>
			<div class="grid grid-cols-4 gap-4">
				<a
					aria-label="Visit my Stack Overflow profile"
					href={info.socialMedia.stackoverflow}
					target="_blank"
					rel="noopener noreferrer"
					class="footer-icons"
				>
					<StackOverflowSvg width={18} height={18} />
				</a>
				<a
					aria-label="Visit my GitHub profile"
					href={info.socialMedia.github}
					target="_blank"
					rel="noopener noreferrer"
					class="footer-icons"
				>
					<GitHubSvg width={18} height={18} />
				</a>
				<a
					aria-label="Connect on LinkedIn"
					href={info.socialMedia.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="footer-icons"
				>
					<LinkedInSvg width={18} height={18} />
				</a>
				<a
					aria-label="Send me an email"
					href={info.socialMedia.email}
					target="_blank"
					rel="noopener noreferrer"
					class="footer-icons"
				>
					<MailSvg width={18} height={18} />
				</a>
			</div>
		</footer>
	);
}
