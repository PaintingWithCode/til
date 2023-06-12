import { dev } from '$app/environment';

export function title(pageTitle = 'PaintingWithCode') {
	return `${pageTitle} • Today I Learned`;
}

export const url = dev ? 'http://localhost:5173/' : 'https://til.paintingwithco.de/';
