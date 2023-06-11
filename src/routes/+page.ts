import { listPosts } from '$lib/core/posts';

export async function load() {
	const data = await listPosts();
	return data;
}
