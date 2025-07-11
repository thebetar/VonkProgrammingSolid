export default function Share({ handleClose }) {
	function shareLinkedin() {
		const url = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
		window.open(url, '_blank');
	}

	function shareFacebook() {
		const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&amp;src=sdkpreparse`;
		window.open(url, '_blank');
	}

	function shareUrl() {
		const url = window.location.href;

		navigator.clipboard.writeText(url);

		shareUrlButton.innerText = 'URL copied';
	}

	function close() {
		handleClose();
	}

	return (
		<div
			id="share-component"
			class="w-screen h-screen px-4 fixed top-0 left-0 bg-zinc-800/70 flex justify-center items-center"
		>
			<div class="bg-white text-black md:max-w-[460px] w-full md:px-6 px-4 py-4 text-center rounded-sm relative">
				<svg
					id="share-close-button"
					class="absolute top-2 right-2 cursor-pointer hover:opacity-70 transition"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					height="16px"
					width="16px"
					version="1.1"
					viewBox="0 0 490 490"
					xml:space="preserve"
					onClick={close}
				>
					<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
				</svg>

				<svg
					width="48px"
					height="48px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z"
						fill="currentColor"
					></path>
				</svg>

				<div class="font-semibold text-xl mt-4">Share with your friends!</div>

				<div class="text-sm mt-2">
					Did you enjoy reading this blog? Share it with your friends, family, colleagues, your dog 🐶 or
					anyone else who would be interested!
				</div>

				<div class="flex gap-x-2 justify-center mt-2 md:flex-row flex-col gap-y-2">
					<button
						id="share-linkedin-button"
						class="px-2 py-2 rounded-sm bg-zinc-800 hover:bg-zinc-600 transition text-white md:w-42 w-full justify-center flex items-center gap-x-2 cursor-pointer"
						onClick={shareLinkedin}
					>
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
								fill="currentColor"
							></path>
							<path
								d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
								fill="currentColor"
							></path>
							<path
								d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
								fill="currentColor"
							></path>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
								fill="currentColor"
							></path>
						</svg>
						LinkedIn
					</button>

					<button
						id="share-facebook-button"
						class="px-2 py-2 rounded-sm bg-zinc-800 hover:bg-zinc-600 transition text-white md:w-42 w-full justify-center flex items-center gap-x-2 cursor-pointer"
						onClick={shareFacebook}
					>
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
								fill="currentColor"
							></path>
						</svg>
						Facebook
					</button>

					<button
						id="share-url-button"
						class="px-2 py-2 rounded-sm bg-zinc-800 hover:bg-zinc-600 transition text-white md:w-42 w-full justify-center flex items-center gap-x-2 cursor-pointer"
						onClick={shareUrl}
					>
						<svg
							width="18px"
							height="18px"
							viewBox="0 -0.5 21 21"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-299.000000, -600.000000)"
									fill="currentColor"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M246.400111,448.948654 C244.519883,447.158547 244.754644,444.106996 247.102248,442.631229 C248.809889,441.557573 251.103895,441.880078 252.551048,443.257869 L253.222099,443.896756 C253.641237,444.295804 254.319791,444.295804 254.737858,443.896756 C255.156996,443.498727 255.156996,442.852696 254.737858,442.453648 L254.170788,441.913758 C251.680612,439.542937 247.589992,439.302079 245.025851,441.600438 C242.372737,443.979423 242.32557,447.956645 244.884352,450.391762 L245.642231,451.113316 C246.060298,451.512365 246.739924,451.512365 247.15799,451.113316 C247.577129,450.715288 247.577129,450.069257 247.15799,449.670208 L246.400111,448.948654 Z M261.976841,449.345662 L261.430138,448.825163 C261.011,448.426114 260.332446,448.426114 259.914379,448.825163 C259.495241,449.223192 259.495241,449.869222 259.914379,450.268271 L260.585429,450.907158 C262.032583,452.284948 262.370252,454.469002 261.243616,456.094794 C259.693554,458.329877 256.487306,458.552364 254.60815,456.763278 L253.850271,456.041724 C253.431132,455.642675 252.752578,455.642675 252.334511,456.041724 C251.915373,456.439752 251.915373,457.085783 252.334511,457.484832 L253.092391,458.206386 C255.643669,460.63538 259.806111,460.597618 262.305934,458.09106 C264.742511,455.648799 264.478808,451.727709 261.976841,449.345662 L261.976841,449.345662 Z M257.639668,455.32017 L247.91587,446.062438 C247.497803,445.663389 247.497803,445.017358 247.91587,444.61831 C248.335008,444.220281 249.013562,444.220281 249.431629,444.61831 L259.156499,453.876041 C259.574566,454.27509 259.574566,454.921121 259.156499,455.32017 C258.737361,455.718198 258.058807,455.718198 257.639668,455.32017 L257.639668,455.32017 Z"
											id="url-[#1424]"
										></path>
									</g>
								</g>
							</g>
						</svg>
						Copy URL
					</button>
				</div>
			</div>
		</div>
	);
}
