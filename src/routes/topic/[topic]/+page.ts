import { listPostsByTopic } from '$lib/core/posts';

export async function load({ params }) {
	const topic = params.topic;
	const data = await listPostsByTopic(params.topic);

	return { ...data, topic };
}
