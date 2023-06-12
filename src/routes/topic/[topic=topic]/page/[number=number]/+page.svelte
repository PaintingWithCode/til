<script>
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { posts, hasNextPage, hasPreviousPage, currentPage, topic } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
<Pagination {hasNextPage} {hasPreviousPage} {currentPage} pathPrefix={`/topic/${topic}`} />
