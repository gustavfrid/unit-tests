export const hashtags = (text) => {
	let result = text.split(' ');
	return result.filter((element) => element.includes('#'));
};
