<script>
	import { author, authorSiteUrl } from '$lib/core/config';
</script>

<footer
	class="flex h-10 w-full items-center justify-between border-t border-dune-800/80 bg-raffia-100 px-4 text-sm md:px-8"
>
	<div>
		A miniblog by
		<a
			href={authorSiteUrl}
			class="font-semibold decoration-supernova decoration-2 underline-offset-4 hover:underline"
			target="_blank"
			rel="noreferrer"
			aria-label="Author website">{author}</a
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
</footer>
