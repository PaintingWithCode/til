<script lang="ts">
	import 'microns/fonts/microns.css';
	import '@fontsource-variable/inter';
	import '@fontsource/inter-tight/latin-800.css';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';

	import { Header, Footer } from '$lib/ui';

	let scrollY = 0;
	let showFooter = true;

	type ScrollEvent = UIEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	const SCROLL_THRESHOLD = 10;

	function onContainerScroll(event: ScrollEvent) {
		const container = event.currentTarget;
		const newScrollY = container.scrollTop;

		if (newScrollY === 0 || newScrollY < scrollY - SCROLL_THRESHOLD) {
			showFooter = true;
		} else if (newScrollY > scrollY && newScrollY >= SCROLL_THRESHOLD) {
			showFooter = false;
		}

		scrollY = newScrollY;
	}

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});
</script>

<div id="page" class="min-w-screen h-screen overflow-y-auto" on:scroll={onContainerScroll}>
	<Header />
	<main class="z-10 mx-auto min-h-[calc(100vh-6.5rem)] max-w-2xl selection:bg-supernova/50">
		<slot />
	</main>
	{#if showFooter}
		<Footer />
	{/if}
</div>
