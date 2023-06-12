import { listPosts } from '$lib/core/posts';

export async function load() {
	const data = listPosts();
	return data;
}
