<script lang="ts">
	import millify from 'millify';

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
		<time class="font-mono font-semibold text-dune-600" datetime="2023-04-01"
			>{'2023-04-01'.replaceAll('-', '/')}</time
		>
		<a href="/"><h1>Why Montreal bagels are better</h1></a>
		<p>
			Montreal bagels are a delicacy renowned for their unique texture and flavor. Unlike New
			York-style bagels, Montreal bagels are hand-rolled, boiled in honey water, and baked in a
			wood-fired oven, giving them a crispy exterior and a chewy interior. They are also smaller and
			denser than their New York counterparts, making them the perfect snack to grab on the go.
			Additionally, Montreal bagels are often made with malt, which gives them a slightly sweet
			taste that pairs well with savory toppings like cream cheese and smoked salmon.
		</p>
		<p>
			On the other hand, New York-style bagels are known for their larger size and softer texture.
			While some may prefer this, others argue that the softness comes at the cost of flavor and
			authenticity. New York bagels are typically made with salt water, which can overpower the
			other ingredients, resulting in a less nuanced taste. Moreover, many New York bagels are
			machine-made, which makes them less unique and more mass-produced.
		</p>
		<p>
			In contrast, Montreal bagels are still made by hand, using traditional techniques that have
			been passed down through generations, which gives them a sense of history and cultural
			significance. Overall, while both Montreal and New York bagels have their own distinct
			qualities, Montreal bagels are often seen as the superior choice for those who value
			authenticity, tradition, and taste.
		</p>
	</div>
	<div class="flex h-10 items-center border-t border-dune-800/80 font-mono text-dune-700">
		<a
			href="/"
			class="basis-1/3 border-r border-dune-800/80 py-3 text-center font-bold leading-none transition-colors hover:text-black"
			>#JOKE</a
		>
		<a
			href="/"
			class="basis-1/3 space-x-2 border-r border-dune-800/80 py-3 text-center font-bold leading-none transition-colors hover:text-black"
			>PERMALINK</a
		>
		<div
			class="flex basis-1/3 items-center justify-center space-x-4 py-3 pl-6 pr-4 font-medium text-dune-900"
		>
			<div class="flex basis-1/2 items-center justify-center leading-none">
				<i class="mu mu-show mr-1.5 text-2xl leading-none" />
				{millify(views, { precision: 2 })}
			</div>
			<button
				type="button"
				class="flex basis-1/2 items-center justify-center leading-none"
				on:click={onLikeClick}
			>
				<i
					class="mu mu-heart mr-1.5 text-2xl leading-none text-red-600 transition-opacity"
					style={`opacity: ${hasBeenLiked ? 1 : 0.4}`}
				/>
				<span class="flex flex-grow">{millify(likes, { precision: 2 })}</span>
			</button>
		</div>
	</div>
</article>

<style>
	article {
		--shadow-color: 43deg 17% 71%;
		box-shadow: 0.2px 0.5px 0.7px hsl(var(--shadow-color) / 0.17),
			0.4px 0.9px 1.3px -0.6px hsl(var(--shadow-color) / 0.29),
			0.9px 2px 2.9px -1.2px hsl(var(--shadow-color) / 0.4);
	}

	h1 {
		@apply mt-1.5 text-3xl font-extrabold leading-tight tracking-tight text-black;
	}

	p {
		@apply mt-5 leading-relaxed text-dune-900;
	}
</style>
