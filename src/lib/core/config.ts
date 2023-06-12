import { dev } from '$app/environment';

export const title = (pageTitle = 'PaintingWithCode') => `${pageTitle} • Today I Learned`;
export const url = dev ? 'http://localhost:5173/' : 'https://til.paintingwithco.de/';
