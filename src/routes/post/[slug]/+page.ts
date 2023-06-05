import { error } from '@sveltejs/kit';
import { getAllSlugs, getPost } from '$lib/core/posts';

export const prerender = true;

export async function entries() {
	const slugs = await getAllSlugs();
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
