<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pointillizer | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Pointillizer - an open-source tool to create playful pointillism-inspired animations that visualize images and video in new ways."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a href="/software" class="text-gray-500 hover:text-gray-900 transition-colors">
			&larr; Back to Software
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Pointillizer</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		An open-source tool to create playful pointillism-inspired animations that visualize images and
		video in new ways.
	</p>

	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href="https://www.pointillizer.org"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			Launch App
			<ExternalLink class="ml-2 w-4 h-4" />
		</a>
		<a
			href="https://github.com/BenRydal/pointillizer"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
		>
			<Github class="mr-2 w-4 h-4" />
			View Source
		</a>
	</div>

	<!-- Demo GIF -->
	<div class="mt-10">
		<img
			src="/images/software/pointillizer.gif"
			alt="Pointillizer Demo"
			class="w-full rounded-xl shadow-lg"
		/>
	</div>
</div>
