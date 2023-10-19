export const getLimit = (str: string) => {
	return str.length >= 30 ? str.slice(0, 30) + '...' : str;
}