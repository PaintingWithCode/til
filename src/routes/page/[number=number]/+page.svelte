<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { Feed } from '$lib/components';

	export let data;
</script>

<MetaTags noindex />

<Feed {data} />
