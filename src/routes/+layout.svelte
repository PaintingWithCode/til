<script lang="ts">
	import '../app.css';
	import { MetaTags } from 'svelte-meta-tags';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib/components';
	import { author, description, ogImageUrl, siteUrl } from '$lib/core/config';

	type ScrollEvent = UIEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	let isHeaderGradientDisabled = false;

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});

	function onContainerScroll(event: ScrollEvent) {
		const scrollY = event.currentTarget.scrollTop;

		if (scrollY >= 32) {
			isHeaderGradientDisabled = true;
		} else {
			isHeaderGradientDisabled = false;
		}
	}
</script>

{#if !$page.error}
	<MetaTags
		title={$page.data?.meta?.title ?? author}
		titleTemplate="%s • Today I Learned"
		{description}
		canonical={$page.data?.meta?.url ?? siteUrl}
		openGraph={$page.data?.meta?.openGraph ?? {
			url: siteUrl,
			type: 'website',
			title: 'Today I Learned',
			images: [{ url: ogImageUrl }],
		}}
		twitter={$page.data?.meta?.twitter ?? {
			cardType: 'summary_large_image',
			title: 'Today I Learned',
			image: ogImageUrl,
		}}
	/>
{/if}

<div id="page" class="min-w-screen h-screen overflow-y-auto" on:scroll={onContainerScroll}>
	<Header isGradientDisabled={isHeaderGradientDisabled} />
	<div class="z-10 min-h-[calc(100vh-6.5rem)]">
		<div class="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-grid-pattern opacity-10" />
		{#if $page.error}
			<slot />
		{:else}
			<main class="mx-auto flex max-w-2xl flex-col space-y-8 px-2 py-10 md:px-2 lg:px-0">
				<slot />
			</main>
		{/if}
	</div>
	<Footer />
</div>
