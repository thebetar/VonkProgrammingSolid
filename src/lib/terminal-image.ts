/** Marker prefix for lines that should render as inline terminal images. */
export const IMAGE_LINE_PREFIX = '\x1fIMG:';

export function imageLine(src: string): string {
	return `${IMAGE_LINE_PREFIX}${src}`;
}

export function isImageLine(line: string): boolean {
	return line.startsWith(IMAGE_LINE_PREFIX);
}

export function imageSrcFromLine(line: string): string {
	return line.slice(IMAGE_LINE_PREFIX.length);
}

function bytesToBase64(bytes: Uint8Array): string {
	let binary = '';
	const chunk = 0x8000;
	for (let i = 0; i < bytes.length; i += chunk) {
		binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
	}
	return btoa(binary);
}

function sniffImageKind(bytes: Uint8Array): 'png' | 'jpeg' | 'gif' | 'webp' | 'other' {
	if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
		return 'png';
	}
	if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
		return 'jpeg';
	}
	if (
		bytes.length >= 6 &&
		bytes[0] === 0x47 &&
		bytes[1] === 0x49 &&
		bytes[2] === 0x46 &&
		bytes[3] === 0x38
	) {
		return 'gif';
	}
	if (
		bytes.length >= 12 &&
		bytes[0] === 0x52 &&
		bytes[1] === 0x49 &&
		bytes[2] === 0x46 &&
		bytes[3] === 0x46 &&
		bytes[8] === 0x57 &&
		bytes[9] === 0x45 &&
		bytes[10] === 0x42 &&
		bytes[11] === 0x50
	) {
		return 'webp';
	}
	return 'other';
}

function loadHtmlImage(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.decoding = 'async';
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
		img.src = url;
	});
}

async function canvasToPngBase64(url: string): Promise<{ base64: string; size: number }> {
	const img = await loadHtmlImage(url);
	const canvas = document.createElement('canvas');
	canvas.width = img.naturalWidth || img.width;
	canvas.height = img.naturalHeight || img.height;

	if (canvas.width < 1 || canvas.height < 1) {
		throw new Error(`Invalid image dimensions: ${url}`);
	}

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Canvas 2D unavailable');
	}

	ctx.drawImage(img, 0, 0);
	const dataUrl = canvas.toDataURL('image/png');
	const base64 = dataUrl.slice(dataUrl.indexOf(',') + 1);
	const size = Math.floor((base64.length * 3) / 4);
	return { base64, size };
}

/**
 * Prepare image payload for iTerm IIP (PNG/JPEG/GIF).
 * WebP/SVG/other formats are rasterized to PNG via canvas when possible.
 */
export async function imageUrlToPngBase64(url: string): Promise<{ base64: string; size: number }> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		const buffer = await response.arrayBuffer();
		const bytes = new Uint8Array(buffer);
		const kind = sniffImageKind(bytes);

		if (kind === 'png' || kind === 'jpeg' || kind === 'gif') {
			return { base64: bytesToBase64(bytes), size: bytes.length };
		}
	} catch {
		// Fall through to canvas path (same-origin <img> may still work).
	}

	return canvasToPngBase64(url);
}

/** iTerm2 Inline Image Protocol sequence for xterm ImageAddon. */
export function buildInlineImageSequence(base64: string, size: number, widthPercent = 72): string {
	return `\x1b]1337;File=inline=1;width=${widthPercent}%;preserveAspectRatio=1;size=${size}:${base64}\x07`;
}
