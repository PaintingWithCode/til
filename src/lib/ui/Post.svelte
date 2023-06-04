<script lang="ts">
	import { balancer } from 'svelte-action-balancer';
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
		<time class="font-mono font-semibold text-dune-600" datetime="2023-04-01">
			{'2023-04-01'.replaceAll('-', '/')}
		</time>
		<a href="/post/why-montreal-bagels-are-better">
			<h1
				use:balancer={{ enabled: true, ratio: 0.55 }}
				class="mt-1.5 font-display text-3xl font-extrabold leading-tight text-black underline decoration-desert-storm transition-colors hover:decoration-dune-800"
			>
				Why Montreal bagels are better than NYC ones
			</h1>
		</a>
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
	<div
		class="flex h-10 items-center border-t border-dune-800/80 font-mono font-bold leading-none text-black"
	>
		<div class="flex basis-1/3 items-center justify-center border-r border-dune-800/80 py-3">
			<a
				href="/"
				class="underline decoration-desert-storm decoration-2 underline-offset-4 transition-colors hover:decoration-dune-800"
				>#JOKE</a
			>
		</div>
		<div class="flex basis-1/3 items-center justify-center border-r border-dune-800/80 py-3">
			<a
				href="/post/why-montreal-bagels-are-better"
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
	p {
		@apply mt-5 leading-relaxed text-dune-900;
	}
</style>
