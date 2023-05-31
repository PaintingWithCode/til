<script lang="ts">
	import 'microns/fonts/microns.css';
	import '../app.css';

	import { Header, Footer } from '$lib/ui';

	let scrollY = 0;
	let showFooter = true;
	let headerBgOpacity = 0;

	type ScrollEvent = UIEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	function onContainerScroll(event: ScrollEvent) {
		const newScrollY = event.currentTarget.scrollTop;
		headerBgOpacity = Math.max(0, Math.min(1, newScrollY / 32));

		if (newScrollY === 0 || newScrollY < scrollY) {
			showFooter = true;
		} else {
			showFooter = false;
		}

		scrollY = newScrollY;
	}
</script>

<div id="container" class="min-w-screen h-screen overflow-y-scroll" on:scroll={onContainerScroll}>
	<div id="paper-texture" />
	<Header {headerBgOpacity} />
	<main class="mx-auto min-h-[calc(100vh-6.5rem)] max-w-2xl selection:bg-supernova/50">
		<slot />
	</main>
	{#if showFooter}
		<Footer />
	{/if}
</div>

<style>
	#container {
		background-image: linear-gradient(
			170deg,
			hsl(42deg 56% 96%) 0%,
			hsl(40deg 60% 96%) 19%,
			hsl(40deg 55% 96%) 27%,
			hsl(43deg 58% 95%) 34%,
			hsl(44deg 56% 95%) 41%,
			hsl(42deg 59% 94%) 47%,
			hsl(42deg 55% 94%) 53%,
			hsl(41deg 58% 94%) 59%,
			hsl(42deg 56% 93%) 66%,
			hsl(44deg 58% 93%) 73%,
			hsl(44deg 55% 92%) 81%,
			hsl(42deg 57% 92%) 100%
		);
	}

	#paper-texture {
		opacity: 0.25;
		z-index: 1;
		background-image: url('images/paper.png');
		background-size: auto;
		position: absolute;
		top: 0%;
		bottom: 0%;
		left: 0%;
		right: 0%;
		mix-blend-mode: multiply;
		pointer-events: none;
		will-change: transform;
	}
</style>
