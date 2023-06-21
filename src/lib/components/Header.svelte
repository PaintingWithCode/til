<script lang="ts">
	export let isGradientDisabled: boolean;
</script>

<header
	class="sticky top-0 z-20 flex h-14 w-full flex-row items-center justify-between border-b border-dune-800/80 bg-gradient-to-b from-raffia-100/80 via-raffia-100/40 to-raffia-100/20 px-4 transition-colors md:h-16 md:px-8"
	class:bg-raffia-100={isGradientDisabled}
>
	<a href="/" aria-label="Home" class="flex flex-row items-center space-x-2">
		<img src="/images/logo.svg" alt="Logo" width="20" height="32" class="h-8 w-5" />
		<p class="text-lg font-extrabold uppercase tracking-wide text-black md:text-xl">
			Today I Learned
		</p>
	</a>
</header>
