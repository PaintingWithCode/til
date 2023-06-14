<script lang="ts">
	import { onMount } from 'svelte';
	import millify from 'millify';

	import { browser } from '$app/environment';
	import { likesStore, viewsStore } from '$lib/stores';
	import axios from '$lib/api';

	export let postId: string;

	type PostStats = { views: number; likes: number };

	const views = viewsStore(postId);
	const likes = likesStore(postId);

	let storesInitialized = false;

	onMount(async () => {
		if (browser) {
			const stats = await axios
				.get<PostStats, PostStats>(`/api/posts/${postId}`, { id: postId })
				.then((result) => result.data);
			if (stats) {
				views.init(stats.views);
				likes.init(stats.likes);
				storesInitialized = true;
			}
		}
	});

	function onLikeClick() {
		if ($likes.isLiked) {
			likes.unlikePost();
			axios.patch(`/api/posts/${postId}/unlike`);
		} else {
			likes.likePost();
			axios.patch(`/api/posts/${postId}/like`);
		}
		axios.storage.remove(postId);
	}
</script>

{#if storesInitialized}
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
