import { dev } from '$app/environment';

export const title = (pageTitle = 'Painting With Code') => `${pageTitle} • Today I Learned`;
export const url = dev ? 'http://localhost:5173/' : 'https://til.paintingwithco.de/';
