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
	<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 28">
		<path
			d="M23.6,0 C28.2391919,0 32,3.7608081 32,8.4 C32,10.4937282 31.2339853,12.4085441 29.9669229,13.8794807 C29.9771869,13.8821428 29.9885909,13.8849802 30,13.8878201 L16.6473282,27.3832053 C16.2588853,27.7757999 15.6257293,27.7791655 15.2331346,27.3907225 L15.2211057,27.3786159 L15.2211057,27.3786159 L2.78496745,14.6476113 C1.07519722,13.1099495 0,10.8805376 0,8.4 C0,3.7608081 3.7608081,0 8.4,0 C11.7581176,0 14.6559876,1.97055378 16.0003625,4.8184136 C17.3440124,1.97055378 20.2418824,0 23.6,0 Z"
		/>
	</svg>
</label>

<style>
	.heart-switch {
		--duration: 0.4s;
		--fill: #aba59d;
		--fill-active: #dc2626;
		--shadow: rgba(0, 9, 61, 0.5);
		@apply relative cursor-pointer;
		transform: scale(var(--s, 1)) translateZ(0);
		transition: transform 0.2s;
	}
	.heart-switch:active {
		--s: 0.95;
	}
	.heart-switch input {
		@apply pointer-events-none absolute z-[1] m-0 appearance-none rounded-[50%] border-none bg-desert-storm p-0 outline-none drop-shadow-sm;
		left: 1.15px;
		top: 2px;
		width: 7.5px;
		height: 7.5px;
	}
	.heart-switch input + svg {
		@apply block;
		width: 18px;
		height: 18px;
		fill: var(--fill);
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
			transform: rotate(-28deg) translateX(7.5px) translateY(4px);
		}
		50% {
			transform: rotate(28deg) translateX(4.5px) translateY(2px);
		}
		75% {
			transform: rotate(28deg) translateX(3.5px) translateY(1.5px);
		}
		100% {
			transform: rotate(28deg);
		}
	}

	@keyframes check {
		0% {
			transform: rotate(28deg);
		}
		25% {
			transform: rotate(28deg) translateX(3.5px) translateY(1.5px);
		}
		50% {
			transform: rotate(28deg) translateX(4.5px) translateY(2.5px);
		}
		100% {
			transform: rotate(-28deg) translateX(7.5px) translateY(4px);
		}
	}
</style>
