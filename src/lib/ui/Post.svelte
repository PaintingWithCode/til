<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';
	import { balancer } from 'svelte-action-balancer';
	import { millify } from 'millify';
	import type { Post } from '$lib/core/posts';

	export let post: Post;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type C = typeof SvelteComponentTyped<any, any, any>;
	$: content = post.default as unknown as C;

	const { date, title, slug, topic } = post.metadata;

	let views = 123;
	let hasBeenLiked = false;
	let likes = 99;

	function onLikeClick() {
		if (hasBeenLiked) {
			likes -= 1;
			hasBeenLiked = false;
		} else {
			likes += 1;
			hasBeenLiked = true;
		}
	}
</script>

<article class="z-10 border border-dune-800/80 bg-desert-storm">
	<div class="px-10 py-8">
		<time class="font-mono font-semibold text-dune-600" datetime={date}>
			{date.replaceAll('-', '/')}
		</time>
		<a href={`/post/${slug}`}>
			<h1
				use:balancer={{ enabled: true, ratio: 0.55 }}
				class="mt-1.5 font-display text-3xl font-extrabold leading-tight text-black underline decoration-desert-storm transition-colors hover:decoration-dune-800"
			>
				{title}
			</h1>
		</a>
		<svelte:component this={content} />
	</div>
	<div
		class="flex h-10 items-center border-t border-dune-800/80 font-mono font-bold uppercase leading-none text-black"
	>
		<div class="flex basis-1/3 items-center justify-center border-r border-dune-800/80 py-3">
			<a
				href={`/topic/${topic}`}
				class="underline decoration-desert-storm decoration-2 underline-offset-4 transition-colors hover:decoration-dune-800"
				>#{topic}</a
			>
		</div>
		<div class="flex basis-1/3 items-center justify-center border-r border-dune-800/80 py-3">
			<a
				href={`/post/${slug}`}
				class="underline decoration-desert-storm decoration-2 underline-offset-4 transition-colors hover:decoration-dune-800"
				>PERMALINK</a
			>
		</div>
		<div
			class="flex basis-1/3 items-center justify-center space-x-4 py-3 pl-6 pr-4 font-medium text-dune-900"
		>
			<div class="flex basis-1/2 items-center justify-center leading-none">
				<i class="mu mu-show mr-1.5 text-2xl leading-none" />
				{millify(views, { precision: 2 })}
			</div>
			<div class="flex basis-1/2 items-center justify-center leading-none">
				<button
					type="button"
					on:click={onLikeClick}
					class="mu mu-heart text-2xl leading-none text-red-600 transition-opacity"
					style={`opacity: ${hasBeenLiked ? 1 : 0.4}`}
				/>
				<span class="ml-1.5 flex flex-grow">{millify(likes, { precision: 2 })}</span>
			</div>
		</div>
	</div>
</article>

<style>
	:global(article p) {
		@apply mt-5 leading-relaxed text-dune-900;
	}

	:global(article p code) {
		@apply bg-[#232137] px-1.5 py-0.5 font-medium text-[#F6C177];
	}

	:global(article pre) {
		@apply my-2.5 px-5 py-3.5 font-medium;
	}
</style>
