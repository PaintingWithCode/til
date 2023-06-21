<script lang="ts">
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';

	import { browser } from '$app/environment';
	import type { CustomComponent } from '$lib/core/types';

	let LottiePlayer: CustomComponent;

	onMount(async () => {
		if (browser) {
			const module = await import('@lottiefiles/svelte-lottie-player');
			LottiePlayer = module.LottiePlayer;
		}
	});
</script>

<MetaTags title="404" titleTemplate="%s • Today I Learned" noindex />
<div class="mx-auto max-w-4xl">
	{#if LottiePlayer}
		<LottiePlayer
			src="/images/404.json"
			autoplay={true}
			loop={true}
			controls={false}
			renderer="svg"
			background="transparent"
			style={{
				marginTop: 200,
			}}
		/>
	{/if}
</div>
