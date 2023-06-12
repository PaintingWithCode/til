import { error } from '@sveltejs/kit';
import { listAllTopics, listPosts } from '$lib/core/posts';

export function entries() {
	const topics = listAllTopics();
	return topics;
}

export function load({ params }) {
	const topic = params.topic;
	const data = listPosts(1, params.topic);

	if (!data.posts.length) {
		throw error(404, { message: 'No such topic' });
	}

	const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

	return { ...data, topic, pageTitle: topicTitle };
}
