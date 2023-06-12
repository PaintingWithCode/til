import { error } from '@sveltejs/kit';
import { listPosts } from '$lib/core/posts';

export const prerender = 'auto';

export function load({ params }) {
	const topic = params.topic;
	const pageNumber = Number(params.number);
	const data = listPosts(pageNumber, topic);

	if (!data.posts.length) {
		throw error(404);
	}

	const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

	return { ...data, topic, pageTitle: topicTitle };
}
