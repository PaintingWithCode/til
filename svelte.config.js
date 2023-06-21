import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	onwarn(warning, handler) {
		if (warning.filename.includes('@lottiefiles')) {
			return;
		}
		handler(warning);
	},
	kit: {
		adapter: adapter(),
	},
};

export default config;
