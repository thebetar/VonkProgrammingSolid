import { For } from 'solid-js';

export default function Rating({ rating }) {
	function generateArray(length) {
		return new Array(length).fill(0);
	}

	return (
		<div class="flex items-center md:gap-1 gap-[2px]">
			<For each={generateArray(rating)}>
				{() => (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ffe234"
						width="12px"
						height="12px"
						viewBox="0 0 16 16"
					>
						<g>
							<polygon points="8 11.43 3.67 14 4.84 9.19 1 5.97 6.05 5.57 8 1 9.95 5.57 15 5.97 11.15 9.19 12.33 14 8 11.43" />
						</g>
					</svg>
				)}
			</For>

			<For each={generateArray(5 - rating)}>
				{() => (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ffe2345f"
						width="12px"
						height="12px"
						viewBox="0 0 16 16"
					>
						<g>
							<path d="M8,4.31l.75,1.77.31.72.79.06L11.73,7,10.32,8.19l-.62.52.19.78.44,1.81-1.67-1L8,9.91l-.66.4-1.67,1,.44-1.81.19-.78-.62-.52L4.27,7l1.88-.15.79-.06.31-.72L8,4.31M8,1,6.05,5.57,1,6,4.85,9.19,3.67,14,8,11.43,12.33,14,11.15,9.19,15,6,10,5.57,8,1Z" />
						</g>
					</svg>
				)}
			</For>
		</div>
	);
}
