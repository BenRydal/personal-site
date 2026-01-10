<script lang="ts">
	import { FileText } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Bettering Data | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Bettering Data - A collaborative project exploring Atlanta arrests through data visualization and critical data work."
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

	<h1 class="text-4xl font-bold text-gray-900">Bettering Data</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		A collaboration between criminologists and educators at Georgia State University and DataWorks,
		a Georgia Tech initiative supporting underrepresented youth in computing. This
		visualization-focused video tells the story of Atlanta arrests through symbolic
		imagery—contrasting hands referencing the "Hands up, don't shoot" movement with a 3D space-time
		cube of 2020 arrest data, aiming to spark critical discussion about police-community relations.
	</p>

	<!-- Publication Button -->
	<div class="mt-8">
		<a
			href="https://drive.google.com/file/d/1gWUpUSR472PncKKMseQyJ8h3oZMU9ibD/view"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			<FileText class="mr-2 w-4 h-4" />
			View Publication
		</a>
	</div>

	<!-- Video -->
	<figure class="mt-12 bg-gray-50 rounded-xl overflow-hidden">
		<div class="aspect-video">
			<iframe
				class="w-full h-full"
				src="https://www.youtube.com/embed/RROp5xg59gw?autoplay=1&mute=1"
				title="Bettering Data Visualization"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
		<figcaption class="p-4 text-sm text-gray-600">
			A 3D space-time cube visualization of Atlanta arrest data, with red dots representing
			homicides and black dots for other arrests, overlaid on Atlanta's neighborhoods.
		</figcaption>
	</figure>
</div>
