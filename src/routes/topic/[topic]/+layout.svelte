<script>
	import { page } from '$app/stores';

	const topic = $page.params.topic;
	const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);
</script>

<svelte:head>
	<title>{topicTitle} • Today I Learned</title>
</svelte:head>

<div class="flex flex-col space-y-8 py-8 pb-10">
	<h2 class="-mb-2 font-mono text-lg font-bold uppercase leading-none text-dune-900/60">
		Topics / <span class="text-dune-900">{topic}</span>
	</h2>
	<slot />
</div>
