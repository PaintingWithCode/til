import { listPosts } from '$lib/core/posts';

export function load() {
	const data = listPosts();
	return data;
}
