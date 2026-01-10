<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Ben Rydal Shapiro - Assistant Professor at Georgia State University. Research in learning sciences, data visualization, and computer science education."
	/>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1 pt-20">
		{@render children()}
	</main>

	<Footer />
</div>
