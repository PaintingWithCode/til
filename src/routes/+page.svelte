<script lang="ts">
	import { Post, Pagination } from '$lib/components';

	export let data;
	const { hasNextPage, hasPreviousPage, posts } = data;
</script>

<div class="flex flex-col space-y-8 py-10">
	{#each posts as post}
		<Post {post} />
	{/each}
	{#if hasPreviousPage || hasNextPage}
		<Pagination {hasNextPage} {hasPreviousPage} />
	{/if}
</div>
