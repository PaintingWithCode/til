export function match(param: string) {
	return /^[a-z\d]+(?:-[a-z\d]+)*$/.test(param);
}
