export function ProductButton({ contactLink }) {
	return (
		<a
			href={contactLink}
			class="block mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors mx-auto w-fit"
		>
			Contact to get started
		</a>
	);
}
