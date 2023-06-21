import { error } from '@sveltejs/kit';

import { listAllSlugs, getPost } from '$lib/core/posts';
import { siteUrl } from '$lib/core/config.js';

export function entries() {
	const slugs = listAllSlugs();
	return slugs;
}

export async function load({ params, url }) {
	try {
		const post = await getPost(params.slug);

		const { title, slug } = post.metadata;
		const imageUrl = `${siteUrl}/api/og/${slug}.png`;
		const postUrl = siteUrl + url.pathname;

		const meta = {
			title,
			url: postUrl,
			openGraph: {
				url: postUrl,
				type: 'article',
				title,
				images: [{ url: imageUrl }],
				article: {
					publishedTime: post.metadata.date,
				},
			},
			twitter: {
				cardType: 'summary_large_image',
				title,
				url: postUrl,
				image: imageUrl,
			},
		};

		return { post, meta };
	} catch (e) {
		throw error(404, `Could not find that post`);
	}
}
