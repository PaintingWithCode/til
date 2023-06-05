import { listPostsByTopic } from '$lib/core/posts';

export async function load({ params }) {
	const posts = await listPostsByTopic(params.topic);
	return {
		posts,
	};
}
