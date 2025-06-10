import { createSignal } from 'solid-js';

export default function Comment({ handleClose }) {
	const [name, setName] = createSignal('');
	const [comment, setComment] = createSignal('');

	function sendComment() {
		if (name() && comment()) {
			// Here you would typically send the comment to a server
			console.log('Comment submitted:', { name: name(), comment: comment() });
			handleClose();
		} else {
			alert('Please fill in both fields.');
		}
	}

	return (
		<div className="max-w-[720px] mx-auto mb-10">
			<div className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
				<h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Leave a Comment</h3>

				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Your name"
							class="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
							value={name()}
							onInput={e => setName(e.target.value)}
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
							Comment
						</label>
						<textarea
							name="comment"
							placeholder="Share your thoughts..."
							class="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
							rows="4"
							value={comment()}
							onInput={e => setComment(e.target.value)}
						/>
					</div>

					<div class="flex gap-3 pt-2">
						<button
							class="px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
							onClick={sendComment}
						>
							Submit Comment
						</button>

						<button
							class="px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
							onClick={handleClose}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
