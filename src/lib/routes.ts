/**
 * Map the current URL path (and optional ?cmd=) to a terminal command.
 * Used so shareable links open VonkOS with the right command pre-run.
 */
export function pathToCommand(pathname: string, search = ''): string | null {
	let searchParams = search;
	if (search.startsWith('?')) {
		searchParams = search.slice(1);
	}

	const params = new URLSearchParams(searchParams);
	const cmdParam = params.get('cmd');

	if (cmdParam) {
		const trimmed = cmdParam.trim();
		if (trimmed) {
			return trimmed;
		}
	}

	let path = pathname.replace(/\/+$/, '');
	if (!path) {
		path = '/';
	}

	const parts = path.split('/').filter(Boolean);

	if (parts.length === 0) {
		return null;
	}

	const section = parts[0];
	const id = parts[1];
	const rest = parts.slice(2);

	switch (section) {
		case 'about':
			return 'about';
		case 'contact':
			return 'contact';
		case 'help':
			return 'help';
		case 'blogs':
		case 'blog':
			return pathToCollectionCommand('blog', id, rest);
		case 'experience':
			return pathToCollectionCommand('experience', id, rest);
		case 'projects':
		case 'project':
			return pathToCollectionCommand('projects', id, rest);
		case 'education':
			return pathToCollectionCommand('education', id, rest);
		case 'skills':
		case 'skill':
			if (!id) {
				return 'skills list';
			}

			return `skills get ${decodeURIComponent([id, ...rest].join(' '))}`;
		case 'resume':
			return pathToResumeCommand(id, rest);
		default:
			return null;
	}
}

function pathToCollectionCommand(
	name: string,
	id: string | undefined,
	rest: string[],
): string {
	if (!id) {
		return `${name} list`;
	}

	if (id === 'page') {
		if (rest[0]) {
			return `${name} list page ${rest[0]}`;
		}
	}

	return `${name} get ${decodeURIComponent(id)}`;
}

function pathToResumeCommand(id: string | undefined, rest: string[]): string {
	if (!id) {
		return 'resume help';
	}

	if (id === 'default') {
		return 'resume get default';
	}

	if (id === 'compact-en') {
		return 'resume get compact en';
	}

	if (id === 'compact-nl') {
		return 'resume get compact nl';
	}

	if (id === 'extended-en') {
		return 'resume get extended en';
	}

	if (id === 'extended-nl') {
		return 'resume get extended nl';
	}

	if (id === 'compact') {
		if (rest[0] === 'en' || rest[0] === 'nl') {
			return `resume get compact ${rest[0]}`;
		}
	}

	if (id === 'extended') {
		if (rest[0] === 'en' || rest[0] === 'nl') {
			return `resume get extended ${rest[0]}`;
		}
	}

	return 'resume help';
}

/** Build a shareable path for a command when possible. */
export function commandToPath(command: string): string | null {
	const parts = command.trim().split(/\s+/);
	const cmd = parts[0];
	const sub = parts[1];
	const rest = parts.slice(2);

	if (!cmd) {
		return null;
	}

	const normalizedCmd = cmd.toLowerCase();
	const normalizedSub = sub ? sub.toLowerCase() : '';

	if (normalizedCmd === 'about') {
		return '/about';
	}

	if (normalizedCmd === 'contact') {
		return '/contact';
	}

	if (normalizedCmd === 'help') {
		return '/help';
	}

	if (normalizedCmd === 'blog' || normalizedCmd === 'blogs') {
		return commandToCollectionPath('blogs', normalizedSub, rest);
	}

	if (normalizedCmd === 'experience') {
		return commandToCollectionPath('experience', normalizedSub, rest);
	}

	if (normalizedCmd === 'projects' || normalizedCmd === 'project') {
		return commandToCollectionPath('projects', normalizedSub, rest);
	}

	if (normalizedCmd === 'education') {
		return commandToCollectionPath('education', normalizedSub, rest);
	}

	if (normalizedCmd === 'skills' || normalizedCmd === 'skill') {
		if (!normalizedSub || normalizedSub === 'list') {
			return '/skills';
		}

		if (normalizedSub === 'get') {
			if (rest[0]) {
				return `/skills/${encodeURIComponent(rest.join(' '))}`;
			}
		}

		return null;
	}

	if (normalizedCmd === 'resume') {
		return commandToResumePath(normalizedSub, rest);
	}

	return null;
}

function commandToCollectionPath(
	section: string,
	sub: string,
	rest: string[],
): string | null {
	if (!sub || sub === 'list') {
		if (rest[0] === 'page') {
			if (rest[1]) {
				return `/${section}/page/${rest[1]}`;
			}
		}

		return `/${section}`;
	}

	if (sub === 'get') {
		if (!rest[0]) {
			return null;
		}

		if (section === 'blogs' && rest[0].toLowerCase() === 'latest') {
			return '/blogs/latest';
		}

		return `/${section}/${encodeURIComponent(rest.join(' '))}`;
	}

	return null;
}

function commandToResumePath(sub: string, rest: string[]): string | null {
	if (!sub || sub === 'help') {
		return '/resume';
	}

	if (sub !== 'get') {
		return null;
	}

	if (!rest[0] || rest[0] === 'default') {
		return '/resume/default';
	}

	if (rest[0] === 'compact' && rest[1] === 'en') {
		return '/resume/compact-en';
	}

	if (rest[0] === 'compact' && rest[1] === 'nl') {
		return '/resume/compact-nl';
	}

	if (rest[0] === 'extended' && rest[1] === 'en') {
		return '/resume/extended-en';
	}

	if (rest[0] === 'extended' && rest[1] === 'nl') {
		return '/resume/extended-nl';
	}

	return null;
}
