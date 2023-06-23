import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

import { OgImage } from '$lib/components';
import { getPost, listAllSlugs } from '$lib/core/posts.js';

export const prerender = true;

export function entries() {
	const slugs = listAllSlugs();
	return slugs;
}

export async function GET({ params }) {
	const post = await getPost(params.slug);

	return renderPng(post.metadata.title);
}

const fontFile = await fetch(
	'https://github.com/rsms/inter/raw/master/docs/font-files/InterDisplay-ExtraBold.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

async function renderPng(title: string) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = (OgImage as any).render({ title });
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Inter Display',
				data: fontData,
				weight: 800,
				style: 'normal',
			},
		],
		height: 630,
		width: 1200,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200,
		},
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png',
		},
	});
}
