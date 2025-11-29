import { createSignal } from 'solid-js';
import Layout from '../layouts/Layout';

export default function ContactPage() {
	const [form, setForm] = createSignal({ name: '', email: '', message: '' });
	const [status, setStatus] = createSignal('');
	const [loading, setLoading] = createSignal(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setForm(f => ({ ...f, [name]: value }));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setStatus('');
		try {
			const res = await fetch('/scripts/contact.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(form()).toString(),
			});
			const text = await res.text();
			if (res.ok && text.includes('success')) {
				setStatus('success');
				setForm({ name: '', email: '', message: '' });
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
		setLoading(false);
	};

	const template = (
		<section class="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 dark:text-white">
			<h1 class="text-3xl font-bold mb-6">Contact Us</h1>
			<form
				class="w-full max-w-lg bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg border-2 border-blue-200/60 dark:border-purple-700/60 p-8 flex flex-col gap-4"
				onSubmit={handleSubmit}
			>
				<label class="font-semibold">
					Name
					<input
						required
						name="name"
						value={form().name}
						onInput={handleChange}
						class="mt-1 w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-800"
					/>
				</label>
				<label class="font-semibold">
					Email
					<input
						required
						type="email"
						name="email"
						value={form().email}
						onInput={handleChange}
						class="mt-1 w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-800"
					/>
				</label>
				<label class="font-semibold">
					Message
					<textarea
						required
						name="message"
						value={form().message}
						onInput={handleChange}
						rows={5}
						class="mt-1 w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-800"
					/>
				</label>
				<button
					type="submit"
					disabled={loading()}
					class="bg-zinc-900 dark:bg-zinc-700 text-white font-semibold py-2 rounded-md shadow hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors disabled:opacity-60"
				>
					{loading() ? 'Sending...' : 'Send Message'}
				</button>
				{status() === 'success' && <p class="text-green-600 dark:text-green-400">Message sent successfully!</p>}
				{status() === 'error' && (
					<p class="text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
				)}
			</form>
		</section>
	);

	return <Layout slot={template} />;
}
