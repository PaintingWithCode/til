import { listPostsByTopic } from '$lib/core/posts';

export async function load({ params }) {
	const topic = params.topic;
	const pageNumber = Number(params.number);
	const data = await listPostsByTopic(topic, pageNumber);

	return { ...data, topic };
}
