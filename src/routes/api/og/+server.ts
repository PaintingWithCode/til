import { ImageResponse } from '@ethercorps/sveltekit-og';
import { error } from '@sveltejs/kit';

function template(title: string) {
	return `
	<div tw="flex w-full h-full items-end justify-start">
		<img
		tw="absolute top-0 left-0 right-0 bottom-0"
		height=630
		width=1200
		src="https://placehold.co/1200x630.png"

		/>
		<h1 tw="text-6xl font-extrabold text-[#1d1d1b] text-left px-20 py-12">
			${title}
		</h1>
	</div>
`;
}

const fontFile = await fetch(
	'https://github.com/rsms/inter/raw/master/docs/font-files/InterDisplay-ExtraBold.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export async function GET({ url }) {
	const title = url.searchParams.get('title');

	if (title) {
		const renderedTemplate = template(title);

		return await ImageResponse(renderedTemplate, {
			height: 630,
			width: 1200,
			fonts: [
				{
					name: 'Inter Latin',
					data: fontData,
					weight: 800,
				},
			],
		});
	} else throw error(400, 'Invalid params');
}
