<script lang="ts">
	import { Post } from '$lib/components';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
	const { posts, hasNextPage, hasPreviousPage } = data;
</script>

<div class="flex flex-col space-y-8 py-10">
	{#each posts as post}
		<Post {post} />
	{/each}
	<Pagination {hasNextPage} {hasPreviousPage} currentPage={2} />
</div>
