<script lang="ts">
	import { Post } from '$lib/components';

	export let data;
</script>

<Post post={data.post} showCopyLink />
