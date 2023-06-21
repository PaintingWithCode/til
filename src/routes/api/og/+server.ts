import { ImageResponse } from '@ethercorps/sveltekit-og';
import { error } from '@sveltejs/kit';

function template(title: string) {
	return `
	<div tw="flex w-full h-full items-start justify-start">
		<img
		tw="absolute top-0 left-0 right-0 bottom-0"
		height=630
		width=1200
		src="https://671c55d4.til-ahu.pages.dev/images/og-template.png"

		/>
		<h1 tw="text-6xl font-extrabold text-[#1d1d1b] text-left pt-64 px-28 leading-tight">
			${title}
		</h1>
	</div>
`;
}

const fontFile = await fetch(
	'https://github.com/rsms/inter/raw/master/docs/font-files/InterDisplay-ExtraBold.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export function GET({ url }) {
	const title = url.searchParams.get('title');

	if (title) {
		const renderedTemplate = template(title);

		return ImageResponse(renderedTemplate, {
			height: 627,
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
