<script lang="ts">
	import { FileText } from 'lucide-svelte';
</script>

<svelte:head>
	<title>NYC Stop-and-Frisk Visualization | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Exploring patterns of street stop-and-frisk practices in New York City through interactive data visualization."
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

	<h1 class="text-4xl font-bold text-gray-900">NYC Stop-and-Frisk Visualization</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		This project uses the Interaction Geography Slicer to visualize all recorded street stops
		collected by the NYPD from 2006-2015, revealing spatial and temporal patterns across race,
		geography, and time—including how stop-and-frisk activity changed dramatically following the
		August 12, 2013 court ruling against the program.
	</p>

	<!-- Publication Button -->
	<div class="mt-8">
		<a
			href="https://www.researchgate.net/publication/320409543_Using_the_Interaction_Geography_Slicer_to_Visualize_New_York_City_Stop_Frisk"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			<FileText class="mr-2 w-4 h-4" />
			View Publication
		</a>
	</div>

	<!-- Images Gallery -->
	<div class="mt-12 space-y-12">
		<!-- Figure 1 -->
		<figure class="bg-gray-50 rounded-xl overflow-hidden">
			<img
				src="/images/projects/stop-frisk-map.png"
				alt="Stop and Frisk Spatial-Temporal Distribution"
				class="w-full"
			/>
			<figcaption class="p-4 text-sm text-gray-600">
				<span class="font-medium text-gray-900">Figure 1:</span> All recorded stops collected by the NYPD
				from 2006-2015. Dot size corresponds to the number of stops in a location and color indicates
				race. The dual-view shows geographic distribution (left) and temporal change (right), revealing
				an abrupt decline following the August 12, 2013 court ruling.
			</figcaption>
		</figure>

		<!-- Figure 2 -->
		<figure class="bg-gray-50 rounded-xl overflow-hidden">
			<img
				src="/images/projects/stop-frisk-felonies.png"
				alt="Felonies Comparison Visualization"
				class="w-full"
			/>
			<figcaption class="p-4 text-sm text-gray-600">
				<span class="font-medium text-gray-900">Figure 2:</span> New York City felonies recorded by the
				NYPD at the same scales and dot conventions as stops in Figure 1. Felonies remained relatively
				stable from 2006-2015, contrasting sharply with dramatic fluctuations in stop activity, supporting
				research suggesting stop-and-frisk practices may not directly influence crime rates.
			</figcaption>
		</figure>

		<!-- Figure 3 -->
		<figure class="bg-gray-50 rounded-xl overflow-hidden">
			<img
				src="/images/projects/stop-frisk-broadway.png"
				alt="Broadway Street Analysis"
				class="w-full"
			/>
			<figcaption class="p-4 text-sm text-gray-600">
				<span class="font-medium text-gray-900">Figure 3:</span> Stops and murders along Broadway Street,
				one of the oldest North-South thoroughfares in Manhattan. This visualization facilitates discussion
				about how policing responds differently to violent crime across neighborhoods.
			</figcaption>
		</figure>
	</div>
</div>
