<script>
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { posts, hasNextPage, hasPreviousPage, topic } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
{#if hasPreviousPage || hasNextPage}
	<Pagination
		{hasNextPage}
		{hasPreviousPage}
		linkPrefix={`/topic/${topic}/page/`}
		firstPageLink={`/topic/${topic}`}
		currentPage={2}
	/>
{/if}
