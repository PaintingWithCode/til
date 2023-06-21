import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

import { OgImage } from '$lib/components';
import type { CustomComponent } from '$lib/core/types';

export const prerender = true;

export const GET = async () => {
	const width = 1200;
	const height = 600;
	return componentToPng(OgImage, { title: 'Hello world' }, height, width);
};

const fontFile = await fetch(
	'https://github.com/rsms/inter/raw/master/docs/font-files/InterDisplay-ExtraBold.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

async function componentToPng(
	component: CustomComponent,
	props: { title: string },
	height: number,
	width: number
) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = (component as any).render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Inter Tight',
				data: fontData,
				weight: 800,
				style: 'normal',
			},
		],
		height: height,
		width: width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width,
		},
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png',
		},
	});
}
