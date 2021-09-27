export const isEmpty = (stringArrayOrObject) => {
	const type = typeof stringArrayOrObject;

	if (type === 'string' || Array.isArray(stringArrayOrObject)) {
		return stringArrayOrObject.length === 0;
	} else {
		return JSON.stringify(stringArrayOrObject) === '{}';
	}
};
