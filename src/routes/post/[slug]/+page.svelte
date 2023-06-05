<script lang="ts">
	import type { Post as PostType } from '$lib/core/posts';
	import { Post } from '$lib/ui';

	export let data: PostType;
</script>

<div class="py-8">
	<Post post={data} />
</div>
