<script lang="ts">
	import { dev } from '$app/environment';
	import { PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN } from '$env/static/public';
</script>

<svelte:head>
	{#if !dev && PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}
		<script
			defer
			src="https://static.cloudflareinsights.com/beacon.min.js"
			data-cf-beacon={`{"token": ${PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}}`}
		>
		</script>
	{/if}
</svelte:head>
