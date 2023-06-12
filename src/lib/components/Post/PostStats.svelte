<script lang="ts">
	import { onMount } from 'svelte';
	import millify from 'millify';

	import { browser } from '$app/environment';
	import { hasBeenLiked, saveAsLiked, removeLike, hasBeenViewed } from '$lib/core/stats';

	export let postId: string;
	let views = 123;
	let likes = 99;

	let isLiked: boolean | undefined;
	let isViewed: boolean | undefined;
	$: allLoaded = isLiked !== undefined && isViewed !== undefined;

	onMount(() => {
		if (browser) {
			isLiked = hasBeenLiked(postId);
			isViewed = hasBeenViewed(postId);
		}
	});

	function onLikeClick() {
		if (isLiked) {
			likes -= 1;
			isLiked = false;
			removeLike(postId);
		} else {
			likes += 1;
			isLiked = true;
			saveAsLiked(postId);
		}
	}
</script>

{#if allLoaded}
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<i class="mu mu-show mr-1.5 text-2xl leading-none" />
		{millify(views, { precision: 2 })}
	</div>
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<button
			type="button"
			on:click={onLikeClick}
			aria-label={isLiked ? 'Unlike' : 'Like'}
			class="mu mu-heart text-2xl leading-none text-red-600 transition-opacity"
			style={`opacity: ${isLiked ? 1 : 0.4}`}
		/>
		<span class="ml-1.5 flex flex-grow">{millify(likes, { precision: 2 })}</span>
	</div>
{/if}
