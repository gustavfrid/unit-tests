export const hackerSpeak = (words) => {
	const replaceFromArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 's', 'S'];
	const replaceToArray = [4, 4, 3, 3, 1, 1, 0, 0, 5, 5];
	replaceFromArray.forEach((element, index) => {
		words = words.replaceAll(element, replaceToArray[index]);
	});
	return words;
};
