<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/ui';
</script>

<div class="min-w-screen h-full">
	<Header />
	<main class="mx-auto max-w-2xl">
		<slot />
	</main>
</div>
