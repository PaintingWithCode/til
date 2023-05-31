<script lang="ts">
	export let headerBgOpacity: number;
</script>

<header
	class="sticky top-0 z-20 flex h-16 w-full flex-row items-center justify-between border-b border-dune-800 border-dune-800/80 px-8"
	style={`background-color: rgba(251, 248, 241, ${headerBgOpacity});`}
>
	<a href="/" class="flex flex-row items-center space-x-2">
		<img src="/images/logo.svg" alt="Logo" width="20" height="32" class="h-8 w-5" />
		<p class="text-xl font-extrabold uppercase tracking-wide text-black">Today I Learned</p>
	</a>
</header>
