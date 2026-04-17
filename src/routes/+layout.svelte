<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<title>Pablo | Backend Developer</title>
	<meta name="description" content="Backend developer especializado en APIs y sistemas." />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		min-height: 100vh;
		background: #0b0b0b;
		color: white;
		font-family: system-ui, -apple-system, sans-serif;
	}
</style>