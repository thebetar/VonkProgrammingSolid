import { createSignal, on, onMount } from 'solid-js';
import Layout from '../layouts/Layout';
import { MailSvg } from '../components/Icons';
import { info } from '../data/info';

export default function ContactPage() {
	const questionTypes = [
		{ value: 'General question', label: 'General question' },
		...info.products.map(p => ({ value: p.id, label: p.title })),
		{ value: 'Blogs', label: 'Blogs (about articles, writing, etc.)' },
	];

	const [form, setForm] = createSignal({
		name: '',
		email: '',
		message: '',
		questionType: questionTypes[0].value,
		website: '',
	}); // 'website' is the honeypot field
	const [status, setStatus] = createSignal('');
	const [loading, setLoading] = createSignal(false);

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const service = params.get('service');

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
		if (form().website && form().website.trim() !== '') {
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
				setForm({ name: '', email: '', message: '', questionType: questionTypes[0].value, website: '' });
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}

		setLoading(false);
	};

	const template = (
		   <section class="flex flex-col items-center justify-center min-h-[calc(100vh-240px)] py-16 px-4 text-zinc-900 dark:text-white">
			   <div class="w-full max-w-4xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
				   <div class="md:w-1/3 w-full bg-zinc-50 dark:bg-zinc-800 flex flex-col items-center justify-center md:p-8 p-6 gap-6 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-700">
					   <h2 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">Contact Info</h2>

					   <div class="flex flex-col gap-4 w-full text-sm">
						   <div class="flex items-center gap-3">
							   <MailSvg width={22} height={22} color="#2563eb" />
							   <a
								   href="mailto:info@vonkprogramming.nl"
								   class="text-zinc-900 dark:text-white underline break-all hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							   >
								   info@vonkprogramming.nl
							   </a>
						   </div>
						   <div class="flex items-center gap-3">
							   <svg
								   width="22"
								   height="22"
								   fill="none"
								   stroke="#2563eb"
								   strokeWidth="2"
								   strokeLinecap="round"
								   strokeLinejoin="round"
								   viewBox="0 0 24 24"
							   >
								   <rect x="3" y="7" width="18" height="13" rx="2" />
								   <path d="M16 3.13V7" />
								   <path d="M8 3.13V7" />
							   </svg>
							   <span class="text-zinc-900 dark:text-white">VonkProgramming</span>
						   </div>
						   <div class="flex items-center gap-3">
							   <svg
								   width="22"
								   height="22"
								   fill="none"
								   stroke="#2563eb"
								   strokeWidth="2"
								   strokeLinecap="round"
								   strokeLinejoin="round"
								   viewBox="0 0 24 24"
							   >
								   <path d="M17.657 16.657A8 8 0 1 0 7.05 7.05a8 8 0 0 0 10.607 9.607z" />
								   <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
							   </svg>
							   <span class="text-zinc-900 dark:text-white">Netherlands</span>
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
							   Website
							   <input
								   name="website"
								   tabIndex="-1"
								   autoComplete="off"
								   value={form().website}
								   onInput={handleChange}
							   />
						   </label>
					   </div>
					   <h1 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-white md:text-start text-center">Contact Us</h1>
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
		   </section>
	);

	return <Layout slot={template} />;
}
