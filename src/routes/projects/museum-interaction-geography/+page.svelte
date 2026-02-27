<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Museum Interaction Geography | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="An interactive visualization exploring how people move and interact in museum spaces over time."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a
			href="/projects/data-visualization"
			class="text-gray-500 hover:text-gray-900 transition-colors"
		>
			&larr; Back to Data Visualization
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Museum Interaction Geography</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		See how 4 families explore 3 gallery spaces in a cultural heritage museum. Explore how they
		move, talk, and curate their experience through phones and social media.
	</p>

	<!-- Action Button -->
	<div class="mt-8">
		<a
			href="https://museum-interaction-geography.vercel.app"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			<ExternalLink class="mr-2 w-4 h-4" />
			Explore the Visualization
		</a>
	</div>

	<a
		href="https://museum-interaction-geography.vercel.app"
		target="_blank"
		rel="noopener noreferrer"
		class="block mt-12 rounded-xl overflow-hidden"
	>
		<img
			src="/images/projects/museum-visualization.png"
			alt="Museum Interaction Geography Visualization"
			class="w-full hover:opacity-90 transition-opacity"
		/>
	</a>
</div>
