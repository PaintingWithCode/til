import { listPosts } from '$lib/core/posts';

export async function load() {
	const posts = await listPosts();
	return {
		posts,
	};
}
