<script lang="ts">
	export let checked: boolean;
	export let handleChange: () => void;

	let initialState = true;

	function onChange() {
		initialState = false;
		handleChange();
	}
</script>

<label class="heart-switch" class:animation-disabled={initialState}>
	<input
		type="checkbox"
		{checked}
		on:change={onChange}
		aria-label={`${checked ? 'Unlike' : 'Like'} post`}
	/>
	<svg viewBox="-1 -1 35 25" fill="white">
		<path
			d="M23.5,0.5 C28.4705627,0.5 32.5,4.52943725 32.5,9.5 C32.5,16.9484448 21.46672,22.5 16.5,22.5 C11.53328,22.5 0.5,16.9484448 0.5,9.5 C0.5,4.52952206 4.52943725,0.5 9.5,0.5 C12.3277083,0.5 14.8508336,1.80407476 16.5007741,3.84362242 C18.1491664,1.80407476 20.6722917,0.5 23.5,0.5 Z"
		/>
	</svg>
</label>

<style>
	.heart-switch {
		--duration: 0.4s;
		--stroke: #363430;
		--stroke-active: #b91c1c;
		--fill: #d8d8d9;
		--fill-active: #ef4444;
		--shadow: rgba(0, 9, 61, 0.25);
		cursor: pointer;
		position: relative;
		transform: scale(var(--s, 1)) translateZ(0);
		transition: transform 0.2s;
		-webkit-tap-highlight-color: transparent;
	}
	.heart-switch:active {
		--s: 0.95;
	}
	.heart-switch input {
		appearance: none;
		position: absolute;
		outline: none;
		border: none;
		pointer-events: none;
		z-index: 1;
		margin: 0;
		padding: 0;
		left: 2px;
		top: 1.5px;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: #f8fafc;
		box-shadow: 0 1px 3px 0 var(--shadow);
	}
	.heart-switch input + svg {
		width: 24px;
		height: calc(25px / 1.5);
		fill: var(--fill);
		stroke: var(--stroke);
		stroke-width: 1px;
		stroke-linejoin: round;
		display: block;
		transition: stroke var(--duration), fill var(--duration);
	}
	.heart-switch input:not(:checked) {
		animation: uncheck var(--duration) linear forwards;
	}
	.heart-switch input:checked {
		animation: check var(--duration) linear forwards;
	}
	.heart-switch input:checked + svg {
		--fill: var(--fill-active);
		--stroke: var(--stroke-active);
	}

	.animation-disabled > * {
		animation-duration: 0ms !important;
	}

	@keyframes uncheck {
		0% {
			transform: rotate(-30deg) translateX(9px) translateY(5px);
		}
		50% {
			transform: rotate(30deg) translateX(6px);
		}
		75% {
			transform: rotate(30deg) translateX(3px) scaleX(1.1);
		}
		100% {
			transform: rotate(30deg);
		}
	}

	@keyframes check {
		0% {
			transform: rotate(30deg);
		}
		25% {
			transform: rotate(30deg) translateX(3px) scaleX(1.1);
		}
		50% {
			transform: rotate(30deg) translateX(6px);
		}
		100% {
			transform: rotate(-30deg) translateX(8px) translateY(4.5px);
		}
	}
</style>
