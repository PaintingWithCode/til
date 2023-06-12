<script lang="ts">
	import { onMount } from 'svelte';
	import millify from 'millify';

	import { browser } from '$app/environment';
	import { likesStore, viewsStore } from '$lib/stores';

	export let postId: string;

	const views = viewsStore(postId);
	const likes = likesStore(postId);

	let allInitialized = false;

	onMount(() => {
		if (browser) {
			views.init();
			likes.init();
			allInitialized = true;
		}
	});

	function onLikeClick() {
		if ($likes.isLiked) {
			likes.unlikePost();
		} else {
			likes.likePost();
		}
	}
</script>

{#if allInitialized}
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<i class="mu mu-show mr-1.5 text-2xl leading-none" />
		{millify($views.count, { precision: 2 })}
	</div>
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<button
			type="button"
			on:click={onLikeClick}
			aria-label={$likes.isLiked ? 'Unlike' : 'Like'}
			class="mu mu-heart text-2xl leading-none text-red-600 transition-opacity"
			style={`opacity: ${$likes.isLiked ? 1 : 0.4}`}
		/>
		<span class="ml-1.5 flex flex-grow">{millify($likes.count, { precision: 2 })}</span>
	</div>
{/if}
