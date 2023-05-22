function responseError(message) {
	console.error(String(message) || 'Something went wrong.');
	return false;
}

function fileChecker({ url, isImage }) {
	if (typeof url === 'undefined') return responseError('uri name from object not found.');
	return isImage ? /\.(jpg|jpeg|png|webp)$/.test(url) : /\.(mp4|avi|mov)$/.test(url);
}

/**
 *
 * This function to validate file.
 * @param {{uri: string, width: number, height: number}} file - object
 * @param {"image" | "video"} type - string
 * @return {boolean} this is the result
 */
function isValidFile(file, type) {
	if (typeof file !== 'object') return responseError('first parameter must be a object.');
	if (typeof type !== 'string') return responseError('second parameter must be a string.');

	if (type === 'image' || type === 'video') return fileChecker({ url: file?.uri, isImage: type === 'image' });

	return false;
}

isValidFile(
	{
		uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg',
		width: 1770,
		height: 1200,
	},
	'image'
);
