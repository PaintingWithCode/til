<script lang="ts">
	import { onMount } from 'svelte';

	import axios from '$lib/api';
	import { Post } from '$lib/components';

	export let data;

	onMount(() => {
		axios.patch(`/api/posts/${data.post.metadata.id}/views`);
	});
</script>

<Post post={data.post} showCopyLink />
