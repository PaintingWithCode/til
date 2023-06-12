import dayjs from 'dayjs';

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

// Checks if a post with the given id has been liked by retrieving
// from localStorage and comparing its expiry with the current time.
//
// If the expiry has passed, the post is removed from localStorage.
export function hasBeenLiked(id: string) {
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
export function saveAsLiked(id: string) {
	const expiry = dayjs().add(7, 'day').unix().toString();
	console.log(expiry);
	localStorage.setItem(`l:${id}`, expiry);
}

// Removes the like for the post with the given ID from localStorage.
export function removeLike(id: string) {
	localStorage.removeItem(`l:${id}`);
}
