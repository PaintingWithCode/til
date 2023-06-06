import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text', meta) => {
			const showLineNumbers = meta?.includes('showLineNumbers') ?? false;

			const highlighter = await shiki.getHighlighter({ theme: 'rose-pine-moon' });
			const tokens = highlighter.codeToThemedTokens(code, lang);

			const html = shiki.renderToHtml(tokens, {
				fg: highlighter.getForegroundColor('rose-pine-moon'),
				bg: highlighter.getBackgroundColor('rose-pine-moon'),
				elements: {
					pre({ className, style, children }) {
						return `<div class='lang'>${lang}</div><pre tabindex="0" class="${className}" style="${style}">${children}</pre>`;
					},
					// customize line to add line number
					line({ className, index, children }) {
						return `<span class="${className}">${
							showLineNumbers ? `<span class="line-number">${index + 1}</span>` : ''
						}${children}</span>`;
					},
				},
			});

			return `{@html \`${escapeSvelte(html)}\` }`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [preprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
	},
};

export default config;
