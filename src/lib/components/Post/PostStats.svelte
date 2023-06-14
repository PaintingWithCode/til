<script lang="ts">
	import { onMount } from 'svelte';
	import millify from 'millify';

	import { browser } from '$app/environment';
	import likesStore from '$lib/stores/likes';
	import * as postsApi from '$lib/api/post';
	import HeartSwitch from './HeartSwitch.svelte';

	export let postId: string;

	const likes = likesStore(postId);
	let views = 1;
	let isLoaded = false;

	onMount(async () => {
		if (browser) {
			const stats = await postsApi.getStats(postId);
			if (stats) {
				views = stats.views;
				likes.init(stats.likes);
				isLoaded = true;
			}
		}
	});

	function onLikeClick() {
		if ($likes.isLiked) {
			likes.unlikePost();
			postsApi.unlikePost(postId);
		} else {
			likes.likePost();
			postsApi.likePost(postId);
		}
	}
</script>

{#if isLoaded}
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<i class="mu mu-show mr-1.5 text-2xl leading-none" />
		{millify(views, { precision: 2 })}
	</div>
	<div class="flex basis-1/2 items-center justify-center leading-none">
		<HeartSwitch checked={$likes.isLiked} handleChange={onLikeClick} />
		<span class="ml-1.5 flex flex-grow">{millify($likes.count, { precision: 2 })}</span>
	</div>
{/if}
