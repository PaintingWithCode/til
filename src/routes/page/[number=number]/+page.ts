import { error } from '@sveltejs/kit';
import { listPosts } from '$lib/core/posts';

export const prerender = 'auto';

export function load({ params }) {
	const pageNumber = Number(params.number);
	const data = listPosts(pageNumber);

	if (!data.posts.length) {
		throw error(404);
	}

	return data;
}
