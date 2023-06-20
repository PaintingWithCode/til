import { dev } from '$app/environment';

export const author = 'PaintingWithCode';
export const authorSiteUrl = 'https://aravindmurali.com';
export const siteUrl = dev ? 'http://localhost:5173' : 'https://til.paintingwithco.de';
export const description =
	'A miniblog that catalogues the things I learn day-to-day as a software developer.';
export const ogImageUrl = `${siteUrl}/images/og.png`;
