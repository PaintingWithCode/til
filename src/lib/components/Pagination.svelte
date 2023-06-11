<script lang="ts">
	export let hasPreviousPage = false;
	export let hasNextPage = false;
	export let currentPage = 1;
	export let linkPrefix = '/page/';
	export let firstPageLink = '/';

	const previousLink = currentPage === 2 ? firstPageLink : `${linkPrefix}${currentPage - 1}`;
	const nextLink = `${linkPrefix}${currentPage + 1}`;
</script>

<div class="flex flex-row justify-between text-dune-700">
	{#if hasPreviousPage}
		<a
			href={previousLink}
			class="group flex flex-row items-center space-x-2 font-mono font-bold uppercase leading-none"
		>
			<i class="mu mu-arrow-left text-xl" />
			<span
				class="underline decoration-raffia-100 decoration-2 underline-offset-4 transition-colors group-hover:decoration-dune-700"
				>Newer posts</span
			>
		</a>
	{/if}
	{#if hasNextPage}
		<a
			href={nextLink}
			class="group float-right ml-auto flex flex-row items-center space-x-2 font-mono font-bold uppercase leading-none"
		>
			<span
				class="underline decoration-raffia-100 decoration-2 underline-offset-4 transition-colors group-hover:decoration-dune-700"
				>Older posts</span
			>
			<i class="mu mu-arrow-right text-xl" />
		</a>
	{/if}
</div>
