<script>
	import { Post } from '$lib/ui';
</script>

<svelte:head>
	<title>PaintingWithCode • Today I Learned</title>
</svelte:head>

<div class="flex flex-col space-y-8 py-8">
	{#each Array(5) as _}
		<Post />
	{/each}
</div>
