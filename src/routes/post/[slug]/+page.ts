import { error } from '@sveltejs/kit';
import { listAllSlugs, getPost } from '$lib/core/posts';

export async function entries() {
	const slugs = await listAllSlugs();
	return slugs;
}

export async function load({ params }) {
	try {
		const post = await getPost(params.slug);

		return post;
	} catch (e) {
		throw error(404, `Could not find that post`);
	}
}
