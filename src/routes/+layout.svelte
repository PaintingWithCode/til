<script lang="ts">
	import 'microns/fonts/microns.css';
	import '@fontsource-variable/inter';
	import '@fontsource/inter-tight/latin-800.css';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import { title } from '$lib/core/config';
	import { Header, Footer } from '$lib/components';

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>{title($page.data?.pageTitle)}</title>
</svelte:head>

<div id="page" class="min-w-screen h-screen overflow-y-auto">
	<Header />
	<main
		class="z-10 mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-2xl flex-col space-y-8 py-10 selection:bg-supernova/50"
	>
		<slot />
	</main>
	<Footer />
</div>
