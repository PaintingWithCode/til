<script>
	import { page } from '$app/stores';

	const topic = $page.params.topic;
</script>

<h2 class="-my-2 font-mono text-lg font-bold uppercase leading-none text-dune-900/60">
	Topics / <span class="text-dune-900">{topic}</span>
</h2>
<slot />
