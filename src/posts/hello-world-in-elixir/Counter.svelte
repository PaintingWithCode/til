<script lang="ts">
	let count = 0;

	const increment = () => (count += 1);
</script>

<button type="button" on:click={increment}>
	{count}
</button>
