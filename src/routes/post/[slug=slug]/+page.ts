import { error } from '@sveltejs/kit';
import { listAllSlugs, getPost } from '$lib/core/posts';

export function entries() {
	const slugs = listAllSlugs();
	return slugs;
}

export async function load({ params }) {
	try {
		const post = await getPost(params.slug);

		return { post, pageTitle: post.metadata.title };
	} catch (e) {
		throw error(404, `Could not find that post`);
	}
}