export function match(param: string) {
	return /^[a-z]+(?:-[a-z]+)*$/.test(param);
}
