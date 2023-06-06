<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<footer class="sticky bottom-0 z-20 h-10 w-full bg-raffia-100" transition:slide>
	<div
		class="absolute left-0 right-0 top-0 flex h-10 items-center justify-between border-t border-dune-800 border-dune-800/80 px-8 text-sm"
	>
		<div>
			&copy; {new Date().getFullYear()}
			<a
				href="https://aravindmurali.com"
				class="font-semibold decoration-supernova decoration-2 underline-offset-4 hover:underline"
				target="_blank"
				rel="noreferrer"
				aria-label="PaintingWithCode">PaintingWithCode</a
			>
		</div>
		<a
			href="https://github.com/PaintingWithCode/til"
			class="font-mono font-medium decoration-supernova decoration-2 underline-offset-4 hover:underline"
			target="_blank"
			rel="noreferrer"
			aria-label="View source on GitHub"
		>
			SOURCE CODE
		</a>
	</div>
</footer>
