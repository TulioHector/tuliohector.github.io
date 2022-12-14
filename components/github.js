
export async function api(endpoint, token) {
	const response = await fetch(`https://api.github.com/repos/${endpoint}`, {
		headers: token ? {
			Authorization: `Bearer ${token}`
		} : undefined
	});
	return response.json();
}

// Great for downloads with few sub directories on big repos
// Cons: many requests if the repo has a lot of nested dirs
export async function viaContentsApi({
	user,
	repository,
	ref = 'HEAD',
	directory,
	gtoken,
	getFullData = false
}) {
	const files = [];
	const requests = [];
	const contents = await api(`${user}/${repository}/contents/${directory}?ref=${ref}`, gtoken);

	if (contents.message === 'Not Found') {
		return [];
	}

	if (contents.message) {
		throw new Error(contents.message);
	}

	for (const item of contents) {
		if (item.type === 'file') {
			files.push(getFullData ? item : item.path);
		} else if (item.type === 'dir') {
			requests.push(viaContentsApi({
				user,
				repository,
				ref,
				directory: item.path,
				gtoken,
				getFullData
			}));
		}
	}

	return files.concat(...await Promise.all(requests));
}

// Great for downloads with many sub directories
// Pros: one request + maybe doesn't require token
// Cons: huge on huge repos + may be truncated
export async function viaTreesApi({
	user,
	repository,
	ref = 'HEAD',
	directory,
	token,
	getFullData = false
}) {
	if (!directory.endsWith('/')) {
		directory += '/';
	}

	const files = [];
	const contents = await api(`${user}/${repository}/git/trees/${ref}?recursive=1`, token);
	if (contents.message) {
		throw new Error(contents.message);
	}

	for (const item of contents.tree) {
		if (item.type === 'blob' && item.path.startsWith(directory)) {
			files.push(getFullData ? item : item.path);
		}
	}

	files.truncated = contents.truncated;
	return files;
}

export default viaContentsApi;