import type { SvelteComponent } from 'svelte';

type PostMetadata = {
	title: string;
	date: string;
	topic: string;
	slug: string;
	tags: string[];
	isPublished: boolean;
};

export type Post = {
	default: SvelteComponent;
	metadata: PostMetadata;
};

export async function listPosts(pageNumber = 1) {
	const glob_import = import.meta.glob<Post>('../../posts/*/*.md', {
		eager: true,
	});

	const [startIndex, endIndex] = getSliceRange(pageNumber);

	const posts = Object.entries(glob_import)
		.map(([path, post]) => ({
			...post,
			metadata: {
				...post.metadata,
				slug: getSlugFromPath(path),
			},
		}))
		.filter((post) => post.metadata.isPublished)
		.slice(startIndex, endIndex);

	return posts;
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
		};
	} else {
		throw new Error('Post not published');
	}
}

export function getAllSlugs() {
	const glob_import = import.meta.glob<Post>('../../posts/*/*.md', {
		eager: true,
	});

	return Object.entries(glob_import)
		.map(([path, post]) => (post.metadata.isPublished ? { slug: getSlugFromPath(path) } : null))
		.filter((s): s is { slug: string } => s !== null);
}

function getSlugFromPath(path: string) {
	return path.split('/').at(-1)?.replace('.md', '') ?? '';
}

function getSliceRange(pageNumber: number) {
	const postsPerPage = 10;
	if (pageNumber === 1) {
		return [0, postsPerPage - 1];
	} else {
		const startIndex = (pageNumber - 1) * postsPerPage;
		const endIndex = startIndex + postsPerPage - 1;
		return [startIndex, endIndex];
	}
}
