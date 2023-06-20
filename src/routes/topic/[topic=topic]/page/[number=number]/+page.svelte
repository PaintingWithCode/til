<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { Feed } from '$lib/components';

	export let data;
	const pathPrefix = `/topic/${data.topic}`;
</script>

<MetaTags noindex />

<Feed data={{ ...data, pathPrefix }} />
