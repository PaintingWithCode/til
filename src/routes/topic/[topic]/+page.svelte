<script>
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { posts, hasNextPage, topic } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
{#if hasNextPage}
	<Pagination {hasNextPage} pathPrefix={`/topic/${topic}/`} />
{/if}
