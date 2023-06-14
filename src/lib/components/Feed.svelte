<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import type { Post as PostType } from '$lib/core/posts';
	import { Post, Pagination } from '$lib/components';
	import axios from '$lib/api';

	export let data: {
		posts: PostType[];
		hasPreviousPage: boolean;
		hasNextPage: boolean;
		currentPage: number;
		pathPrefix?: string;
	};

	const { hasPreviousPage, hasNextPage, currentPage, pathPrefix } = data;

	const posts: Array<PostType & { node?: HTMLElement }> = data.posts.map((p) => ({
		...p,
		node: undefined,
	}));

	function registerView(postId: string) {
		axios.patch(`/api/posts/${postId}/views`);
	}
</script>

{#each posts as post}
	<IntersectionObserver
		once
		element={post.node}
		on:intersect={(e) => {
			registerView(post.metadata.id);
		}}
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
