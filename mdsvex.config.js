import { escapeSvelte } from 'mdsvex';
import externalLinks from 'rehype-external-links';
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	rehypePlugins: [[externalLinks, { target: ['_blank'], rel: ['nofollow'] }]],
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

export default config;
