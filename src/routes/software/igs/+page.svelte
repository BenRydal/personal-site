<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Interaction Geography Slicer | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="IGS - Interactive tool for exploring movement and interaction data in physical spaces."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a href="/software" class="text-gray-500 hover:text-gray-900 transition-colors">
			&larr; Back to Software
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Interaction Geography Slicer (IGS)</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		An interactive visualization tool for exploring movement and interaction data in physical spaces
		like museums, classrooms, and other learning environments.
	</p>

	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href="https://slicer.interactiongeography.org"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			Launch App
			<ExternalLink class="ml-2 w-4 h-4" />
		</a>
		<a
			href="https://github.com/BenRydal/igs"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
		>
			<Github class="mr-2 w-4 h-4" />
			View Source
		</a>
	</div>

	<!-- Main demo -->
	<div class="mt-10">
		<video
			autoplay
			muted
			loop
			playsinline
			class="w-full rounded-xl shadow-lg"
		>
			<source src="/videos/igs.mp4" type="video/mp4" />
		</video>
	</div>
</div>
