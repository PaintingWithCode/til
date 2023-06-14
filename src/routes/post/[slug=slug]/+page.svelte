<script lang="ts">
	import { onMount } from 'svelte';

	import { Post } from '$lib/components';
	import { registerView } from '$lib/api/post';

	export let data;

	onMount(() => {
		registerView(data.post.metadata.id);
	});
</script>

<Post post={data.post} showCopyLink />
