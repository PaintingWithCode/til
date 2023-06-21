import { error } from '@sveltejs/kit';
import { listAllSlugs, getPost } from '$lib/core/posts';

export function entries() {
	const slugs = listAllSlugs();
	return slugs;
}

export async function load({ params, url }) {
	try {
		const post = await getPost(params.slug);

		const { title, slug } = post.metadata;
		const { href, origin } = url;
		const imageUrl = `${origin}/api/og/${slug}.png`;

		const meta = {
			title,
			url: href,
			openGraph: {
				url: href,
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
				url: href,
				image: imageUrl,
			},
		};

		return { post, meta };
	} catch (e) {
		throw error(404, `Could not find that post`);
	}
}
