<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	let isOpen = false;
	let value = '';

	$: if (!isOpen) {
		value = '';
	}

	function toggleOpen() {
		if (!isOpen) {
			isOpen = true;
			return;
		}

		if (value) {
			value = '';
			setTimeout(() => {
				isOpen = false;
			}, 125);
			return;
		}

		isOpen = false;
	}
</script>

<div class="mt-3.5 rounded-sm bg-raffia-400/20 py-4">
	<div
		class="relative mx-auto flex h-12 w-fit items-center justify-center border-x border-dune-800 bg-white/50 text-2xl transition-colors hover:bg-white/70"
		class:open={isOpen}
	>
		<button
			type="button"
			aria-label="Open search"
			class="mu mu-search h-12 w-12 leading-none text-dune-800"
			on:click={toggleOpen}
		/>
		{#if isOpen}
			<div transition:slide={{ axis: 'x' }} class="flex w-36 items-center md:w-48">
				<input
					in:fade={{ delay: 250, duration: 150 }}
					out:fade={{ duration: 50 }}
					class="max-w-full bg-transparent text-lg font-medium text-dune-900 focus-visible:outline-none"
					placeholder="Type here"
					bind:value
				/>
			</div>
			{#if value}
				<div
					transition:slide={{ axis: 'x' }}
					class="absolute left-full top-0 flex h-12 w-12 items-center justify-center bg-dune-800 text-white"
				>
					<i
						in:fade={{ duration: 150, delay: 150 }}
						out:fade={{ duration: 50 }}
						class="mu mu-arrow-right cursor-not-allowed"
					/>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
	.open {
		@apply bg-white/70;
	}
	.open button:hover::before {
		content: '\e741';
	}
</style>
