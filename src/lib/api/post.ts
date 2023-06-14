import axios from './client';

type PostStats = { views: number; likes: number };

export function getStats(postId: string) {
	return axios.get<PostStats>(`/api/post/${postId}`, { id: postId }).then((result) => result.data);
}

export function registerView(postId: string) {
	axios.patch(`/api/post/${postId}/views`);
}

export function likePost(postId: string) {
	axios.patch(`/api/post/${postId}/like`);
	resetCache(postId);
}

export function unlikePost(postId: string) {
	axios.patch(`/api/post/${postId}/unlike`);
	resetCache(postId);
}

function resetCache(postId: string) {
	axios.storage.remove(postId);
}
