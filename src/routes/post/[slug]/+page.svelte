<script lang="ts">
	import { Post } from '$lib/ui';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} • Today I Learned</title>
</svelte:head>

<div class="py-8">
	<Post post={data} />
</div>
