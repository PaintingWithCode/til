import type { Post } from './types';

const POSTS_PER_PAGE = 10;

export function listPosts(pageNumber = 1, topic?: string) {
	const posts = getAllPostFiles()
		.map(([path, post]) => ({
			...post,
			metadata: {
				...post.metadata,
				slug: getSlugFromPath(path),
			},
		}))
		.filter((post) => post.metadata.isPublished && (!topic || post.metadata.topic === topic))
		.sort(
			(first, second) =>
				new Date(second.metadata.date).getTime() - new Date(first.metadata.date).getTime()
		);

	return parsePageFromPosts(posts, pageNumber);
}

export async function getPost(slug: string) {
	const post = await import(`../../posts/${slug}/${slug}.md`);

	if (post.metadata.isPublished) {
		return {
			...post,
			metadata: {
				...post.metadata,
				slug,
			},
		} as Post;
	} else {
		throw new Error('Post not published');
	}
}

export function listAllSlugs() {
	return getAllPostFiles()
		.map(([path, post]) => (post.metadata.isPublished ? { slug: getSlugFromPath(path) } : null))
		.filter((s): s is { slug: string } => s !== null);
}

export function listAllTopics() {
	return getAllPostFiles()
		.filter(([, post]) => post.metadata.isPublished)
		.reduce((topics: Array<{ topic: string }>, [, post]) => {
			const topic = post.metadata.topic;
			if (!topics.includes({ topic })) {
				topics.push({ topic });
			}
			return topics;
		}, []);
}

function getAllPostFiles() {
	const glob_import = import.meta.glob<Post>('../../posts/*/*.md', {
		eager: true,
	});

	return Object.entries(glob_import);
}

function parsePageFromPosts(posts: Post[], pageNumber: number) {
	const [startIndex, endIndex] = getSliceRange(pageNumber);
	const postsForPage = posts.slice(startIndex, endIndex);
	const hasPreviousPage = startIndex >= POSTS_PER_PAGE;
	const hasNextPage = posts.length > endIndex;
	const currentPage = Math.floor(startIndex / POSTS_PER_PAGE) + 1;

	return { posts: postsForPage, hasPreviousPage, hasNextPage, currentPage };
}

function getSlugFromPath(path: string) {
	return path.split('/').at(-1)?.replace('.md', '') ?? '';
}

function getSliceRange(pageNumber: number) {
	if (pageNumber === 1) {
		return [0, POSTS_PER_PAGE];
	} else {
		const startIndex = (pageNumber - 1) * POSTS_PER_PAGE;
		const endIndex = startIndex + POSTS_PER_PAGE - 1;
		return [startIndex, endIndex];
	}
}
