<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import type { Post as PostType } from '$lib/core/types';
	import { Post, Pagination } from '$lib/components';
	import { registerView } from '$lib/api/post';

	export let data: {
		posts: PostType[];
		hasPreviousPage: boolean;
		hasNextPage: boolean;
		currentPage: number;
		pathPrefix?: string;
	};

	const { hasPreviousPage, hasNextPage, currentPage, pathPrefix } = data;

	type IntersectablePosts = Array<PostType & { node?: HTMLElement }>;

	const posts: IntersectablePosts = data.posts.map((p) => ({
		...p,
		node: undefined,
	}));
</script>

{#each posts as post}
	<IntersectionObserver
		once
		element={post.node}
		on:intersect={() => registerView(post.metadata.id)}
		threshold={0.8}
	>
		<div bind:this={post.node}>
			<Post {post} />
		</div>
	</IntersectionObserver>
{/each}
{#if hasNextPage || hasPreviousPage}
	<Pagination {hasNextPage} {hasPreviousPage} {currentPage} {pathPrefix} />
{/if}
