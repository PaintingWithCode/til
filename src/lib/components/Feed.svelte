<script lang="ts">
	import type { Post as PostType } from '$lib/core/posts';
	import { Post, Pagination } from '$lib/components';

	export let data: {
		posts: PostType[];
		hasPreviousPage: boolean;
		hasNextPage: boolean;
		currentPage: number;
		pathPrefix?: string;
	};

	const { posts, hasPreviousPage, hasNextPage, currentPage, pathPrefix } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
{#if hasNextPage || hasPreviousPage}
	<Pagination {hasNextPage} {hasPreviousPage} {currentPage} {pathPrefix} />
{/if}
