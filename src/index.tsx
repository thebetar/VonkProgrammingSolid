/* @refresh reload */
import { render } from 'solid-js/web';
import { MetaProvider, Title, Meta } from '@solidjs/meta';

import '@/index.css';
import Terminal from './components/terminal';

const root = document.getElementById('app');

if (!(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

// Clear SEO/no-JS fallback markup before mounting the interactive terminal.
root.innerHTML = '';

render(() => {
	return (
		<MetaProvider>
			<Title>VonkProgramming - Full-Stack Engineer & Freelancer</Title>
			<Meta
				name="description"
				content="Lars Vonk — Full-Stack Engineer & Freelancer. Custom software in JavaScript, Python, PHP, Go, AI integrations, web tracking, monitoring, and IoT."
			/>
			<Terminal />
		</MetaProvider>
	);
}, root);
