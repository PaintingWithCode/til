<script>
	import { Feed } from '$lib/components';

	export let data;
	const pathPrefix = `/topic/${data.topic}`;
</script>

<Feed data={{ ...data, pathPrefix }} />
