<script>
	import { page } from '$app/stores';
	import { Post } from '$lib/ui';

	export let data;

	const topic = $page.params.topic;
	const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);
</script>

<svelte:head>
	{#if data.posts.length > 0}
		<title>{topicTitle} • Today I Learned</title>
	{/if}
</svelte:head>

<div class="flex flex-col space-y-8 pb-12 pt-8">
	<h2 class="-mb-2 font-mono text-lg font-bold uppercase leading-none text-black">
		Topics / {topic}
	</h2>
	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>
