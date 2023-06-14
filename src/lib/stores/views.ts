import dayjs from 'dayjs';
import { writable } from 'svelte/store';

type ViewsStore = {
	count: number;
	isViewed: boolean;
};

function createViewsStore(postId: string) {
	const { subscribe, set, update } = writable<ViewsStore>();

	return {
		subscribe,
		init(count: number) {
			set({
				count,
				isViewed: hasBeenViewed(postId),
			});
		},
		markAsViewed() {
			saveAsViewed(postId);
			update((current) => ({ isViewed: true, count: current.count + 1 }));
		},
	};
}

// Checks if a post with the given id has been viewed by retrieving
// from localStorage and comparing its expiry with the current time.
export function hasBeenViewed(id: string) {
	const lsValue = localStorage.getItem(`v:${id}`);

	if (lsValue) {
		const expiryDate = dayjs(Number(lsValue) * 1000);
		const hasExpired = dayjs().isAfter(expiryDate);
		return !hasExpired;
	} else return false;
}

// Saves a post with the given id as viewed in localStorage
// with an expiry of 1 day.
export function saveAsViewed(id: string) {
	const expiry = dayjs().add(1, 'day').unix().toString();
	localStorage.setItem(`v:${id}`, expiry);
}

export default function viewsStore(postId: string) {
	return createViewsStore(postId);
}
