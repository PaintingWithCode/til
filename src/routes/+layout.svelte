<script lang="ts">
	import '../app.css';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import { title } from '$lib/core/config';
	import { Header, Footer } from '$lib/components';

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});

	type ScrollEvent = UIEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	let isHeaderGradientDisabled = false;

	function onContainerScroll(event: ScrollEvent) {
		const scrollY = event.currentTarget.scrollTop;

		if (scrollY >= 32) {
			isHeaderGradientDisabled = true;
		} else {
			isHeaderGradientDisabled = false;
		}
	}
</script>

<svelte:head>
	<title>{title($page.data?.pageTitle)}</title>
</svelte:head>

<div id="page" class="min-w-screen h-screen overflow-y-auto" on:scroll={onContainerScroll}>
	<Header isGradientDisabled={isHeaderGradientDisabled} />
	<div class="z-10 min-h-[calc(100vh-6.5rem)]">
		<div class="bg-grid" />
		<main class="mx-auto flex max-w-2xl flex-col space-y-8 py-10">
			<slot />
		</main>
	</div>
	<Footer />
</div>

<style>
	.bg-grid {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		opacity: 0.1;
		background-image: url('/images/grid.svg');
	}
</style>
