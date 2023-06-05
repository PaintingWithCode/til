<script>
	import { Post } from '$lib/ui';
	export let data;
</script>

<svelte:head>
	<title>PaintingWithCode • Today I Learned</title>
</svelte:head>

<div class="flex flex-col space-y-8 pb-12 pt-8">
	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>
