import { listPosts } from '$lib/core/posts';

export async function load({ params }) {
	const pageNumber = Number(params.number);
	const data = await listPosts(pageNumber);

	return data;
}
