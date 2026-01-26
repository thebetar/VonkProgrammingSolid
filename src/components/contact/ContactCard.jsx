import { createSignal, onMount } from 'solid-js';
import { useParams } from '@solidjs/router';

import { LinkedInSvg, MailSvg } from '@/components/Icons';
import { info } from '@/data/info';
import { products } from '@/data/product-previews';

export default function ContactCard() {
	const questionTypes = [
		{ value: 'General question', label: 'General question' },
		...products.map(p => ({ value: p.id, label: p.title })),
		{ value: 'Blogs', label: 'Blogs (about articles, writing, etc.)' },
	];

	const [form, setForm] = createSignal({
		name: '',
		email: '',
		message: '',
		questionType: questionTypes[0].value,
		fax: '',
	});
	const [status, setStatus] = createSignal('');
	const [loading, setLoading] = createSignal(false);

	onMount(() => {
		const service = useParams().service;

		if (!service) {
			return;
		}

		const match = questionTypes.find(q => q.value.toLowerCase() === service.toLowerCase());

		if (!match) {
			return;
		}

		setForm(f => ({ ...f, questionType: match.value }));
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setForm(f => ({ ...f, [name]: value }));
	};

	const handleSubmit = async e => {
		e.preventDefault();

		// Honeypot check: if the hidden field is filled, block submission
		if (form().fax && form().fax.trim() !== '') {
			setStatus('error');
			return;
		}

		setLoading(true);
		setStatus('');

		try {
			const res = await fetch('/scripts/contact.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form()),
			});
			const text = await res.text();

			if (res.ok && text.includes('success')) {
				setStatus('success');
				setForm({ name: '', email: '', message: '', questionType: questionTypes[0].value, fax: '' });
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}

		setLoading(false);
	};

	return (
		<div class="w-full max-w-4xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
			<div class="md:w-1/3 w-full bg-zinc-50 dark:bg-zinc-800 flex flex-col items-center justify-center md:p-8 p-6 gap-6 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-700">
				<h2 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">Contact Info</h2>

				<div class="flex flex-col gap-4 w-full text-sm">
					<div class="flex items-center gap-3">
						<MailSvg width={22} height={22} color="#2563eb" />
						<a
							href={info.socialMedia.email}
							class="text-zinc-900 dark:text-white underline break-all hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							info@vonkprogramming.nl
						</a>
					</div>
					<div class="flex items-center gap-3">
						<LinkedInSvg width={22} height={22} color="#2563eb" />
						<a
							href={info.socialMedia.linkedin}
							class="text-zinc-900 dark:text-white underline break-all hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Lars Vonk
						</a>
					</div>
				</div>
			</div>

			<form
				class="md:w-2/3 w-full md:p-8 p-6 flex flex-col gap-4 justify-center"
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} aria-hidden="true">
					<label>
						Fax
						<input name="fax" tabIndex="-1" autoComplete="off" value={form().fax} onInput={handleChange} />
					</label>
				</div>
				<h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-white md:text-start text-center">
					Contact Us
				</h1>
				<label class="font-semibold text-zinc-900 dark:text-white">
					Type of question
					<select
						required
						name="questionType"
						value={form().questionType}
						onInput={handleChange}
						class="mt-1 w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
					>
						{questionTypes.map(opt => (
							<option value={opt.value}>{opt.label}</option>
						))}
					</select>
				</label>
				<label class="font-semibold text-zinc-900 dark:text-white">
					Name
					<input
						required
						name="name"
						value={form().name}
						onInput={handleChange}
						class="mt-1 w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-zinc-400 dark:placeholder-zinc-500"
						placeholder="Your name"
					/>
				</label>
				<label class="font-semibold text-zinc-900 dark:text-white">
					Email
					<input
						required
						type="email"
						name="email"
						value={form().email}
						onInput={handleChange}
						class="mt-1 w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-zinc-400 dark:placeholder-zinc-500"
						placeholder="you@email.com"
					/>
				</label>
				<label class="font-semibold text-zinc-900 dark:text-white">
					Message
					<textarea
						required
						name="message"
						value={form().message}
						onInput={handleChange}
						rows={5}
						class="mt-1 w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-zinc-400 dark:placeholder-zinc-500"
						placeholder="Type your message..."
					/>
				</label>
				<button
					type="submit"
					disabled={loading()}
					class={
						'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-semibold py-2 rounded-lg shadow transition-colors disabled:opacity-60 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' +
						(loading() ? ' cursor-not-allowed' : ' cursor-pointer')
					}
				>
					{loading() ? 'Sending...' : 'Send Message'}
				</button>
				{status() === 'success' && (
					<p class="text-green-500 dark:text-green-400 mt-2 text-center">Message sent successfully!</p>
				)}
				{status() === 'error' && (
					<p class="text-red-500 dark:text-red-400 mt-2 text-center">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</div>
	);
}
