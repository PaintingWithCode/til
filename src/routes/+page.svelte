<script lang="ts">
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { posts, hasNextPage } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
{#if hasNextPage}
	<Pagination {hasNextPage} />
{/if}
