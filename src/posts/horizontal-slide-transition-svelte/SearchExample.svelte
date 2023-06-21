<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	let isOpen = false;
	let value = '';
	$: if (!isOpen) {
		value = '';
	}
</script>

<div
	class="relative mx-auto mt-2.5 flex h-12 w-fit items-center justify-center border-x border-orange-600 bg-orange-100/40 text-2xl transition-colors hover:bg-orange-100/60"
	class:open={isOpen}
>
	<button
		class="mu mu-search w-12 leading-none text-orange-600"
		on:click={() => (isOpen = !isOpen)}
	/>
	{#if isOpen}
		<div transition:slide={{ axis: 'x' }} class="flex w-36 items-center md:w-48">
			<!-- svelte-ignore a11y-autofocus -->
			<input
				autofocus
				out:fade={{ duration: 100 }}
				class="max-w-full bg-transparent text-lg font-medium text-orange-600 focus-visible:outline-none"
				bind:value
			/>
		</div>
		{#if value.length}
			<div
				transition:slide={{ axis: 'x' }}
				class="absolute left-full top-0 flex h-12 w-12 items-center justify-center bg-orange-600 text-orange-100"
			>
				<i
					in:fade={{ duration: 150, delay: 150 }}
					out:fade={{ duration: 100 }}
					class="mu mu-arrow-right cursor-not-allowed"
				/>
			</div>
		{/if}
	{/if}
</div>

<style lang="postcss">
	.open {
		@apply bg-orange-100/60;
	}
	.open button:hover::before {
		content: '\e741';
	}
</style>
