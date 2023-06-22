<script lang="ts">
	import './styles.css';

	import { balancer } from 'svelte-action-balancer';

	import { page } from '$app/stores';
	import type { Post, CustomComponent } from '$lib/core/types';
	import PostStats from './PostStats.svelte';

	export let post: Post;
	export let showCopyLink = false;

	$: content = post.default as unknown as CustomComponent;

	const { id, date, title, slug, topic } = post.metadata;

	let copyText = 'COPY LINK';

	function onCopyClick() {
		navigator.clipboard.writeText($page.url.href);
		copyText = 'COPIED';

		setTimeout(() => {
			copyText = 'COPY LINK';
		}, 800);
	}
</script>

<article class="z-10 rounded-sm border border-dune-800/80 bg-desert-storm">
	<div class="px-6 py-8 sm:px-10">
		<time class="font-mono text-sm font-semibold text-dune-600 sm:text-base" datetime={date}>
			{date.replaceAll('-', '/')}
		</time>
		<h1
			use:balancer={{ enabled: true, ratio: 0.5 }}
			class="mt-1.5 font-display text-2xl font-extrabold leading-tight text-black sm:text-3xl"
		>
			<a
				href={`/post/${slug}`}
				class="underline decoration-desert-storm decoration-3 underline-offset-1.5 transition-colors hover:decoration-dune-800"
				>{title}</a
			>
		</h1>
		<svelte:component this={content} />
	</div>
	<div
		class="flex h-10 items-center border-t border-dune-800/80 font-mono text-sm font-bold uppercase leading-none text-black sm:text-base"
	>
		<div class="flex h-10 basis-1/3 items-center justify-center border-r border-dune-800/80">
			<a
				href={`/topic/${topic}`}
				class="underline decoration-desert-storm decoration-2 underline-offset-4 transition-colors hover:decoration-dune-800"
				>#{topic}</a
			>
		</div>
		<div class="flex h-10 basis-1/3 items-center justify-center border-r border-dune-800/80">
			{#if showCopyLink}
				<button type="button" aria-label="Copy Link" on:click={() => onCopyClick()}
					>{copyText}</button
				>
			{:else}
				<a
					href={`/post/${slug}`}
					class="underline decoration-desert-storm decoration-2 underline-offset-4 transition-colors hover:decoration-dune-800"
					>PERMALINK</a
				>
			{/if}
		</div>
		<div class="basis-1/3 font-medium text-dune-900">
			<PostStats postId={id} />
		</div>
	</div>
</article>
