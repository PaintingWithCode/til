import dayjs from 'dayjs';
import { writable } from 'svelte/store';

type LikesStore = {
	count: number;
	isLiked: boolean;
};

function createLikesStore(postId: string) {
	const { subscribe, set, update } = writable<LikesStore>();

	return {
		subscribe,
		init() {
			set({
				count: 99,
				isLiked: hasBeenLiked(postId),
			});
		},
		likePost() {
			saveAsLiked(postId);
			update((current) => ({ isLiked: true, count: current.count + 1 }));
		},
		unlikePost() {
			removeLike(postId);
			update((current) => ({ isLiked: false, count: current.count - 1 }));
		},
	};
}

// Checks if a post with the given id has been liked by retrieving
// from localStorage and comparing its expiry with the current time.
//
// If the expiry has passed, the post is removed from localStorage.
function hasBeenLiked(id: string) {
	const lsValue = localStorage.getItem(`l:${id}`);

	if (lsValue) {
		const expiryDate = dayjs(Number(lsValue) * 1000);
		const hasExpired = dayjs().isAfter(expiryDate);

		if (hasExpired) {
			removeLike(id);
		}
		return !hasExpired;
	} else return false;
}

// Saves a post with the given id as liked in localStorage
// with an expiry of 7 days
function saveAsLiked(id: string) {
	const expiry = dayjs().add(7, 'day').unix().toString();
	localStorage.setItem(`l:${id}`, expiry);
}

// Removes the like for the post with the given ID from localStorage.
function removeLike(id: string) {
	localStorage.removeItem(`l:${id}`);
}

export default function likesStore(postId: string) {
	return createLikesStore(postId);
}
