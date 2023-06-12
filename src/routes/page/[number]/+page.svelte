<script lang="ts">
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { posts, hasNextPage, hasPreviousPage, currentPage } = data;
</script>

{#each posts as post}
	<Post {post} />
{/each}
<Pagination {hasNextPage} {hasPreviousPage} {currentPage} />
