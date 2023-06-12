import dayjs from 'dayjs';

export function hasBeenViewed(id: string) {
	const lsValue = localStorage.getItem(`v:${id}`);

	if (lsValue) {
		return dayjs().isBefore(lsValue);
	}
}

export function saveAsViewed(id: string) {
	const expiry = dayjs().add(1, 'day').unix().toString();
	localStorage.setItem(`v:${id}`, expiry);
}
