<script lang="ts">
	import 'microns/fonts/microns.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/inter-tight';
	import '../app.css';

	import { Header, Footer } from '$lib/ui';

	let scrollY = 0;
	let showFooter = true;

	type ScrollEvent = UIEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	function onContainerScroll(event: ScrollEvent) {
		const newScrollY = event.currentTarget.scrollTop;

		if (newScrollY === 0 || newScrollY < scrollY) {
			showFooter = true;
		} else {
			showFooter = false;
		}

		scrollY = newScrollY;
	}
</script>

<div class="min-w-screen h-screen overflow-y-scroll" on:scroll={onContainerScroll}>
	<Header />
	<main class="z-10 mx-auto min-h-[calc(100vh-6.5rem)] max-w-2xl selection:bg-supernova/50">
		<slot />
	</main>
	{#if showFooter}
		<Footer />
	{/if}
</div>
