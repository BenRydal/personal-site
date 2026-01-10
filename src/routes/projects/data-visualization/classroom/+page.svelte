<script lang="ts">
	import { FileText } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Classroom Visualization | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="A 2-minute kindergarten activity visualized five different ways using open-source tools."
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

	<h1 class="text-4xl font-bold text-gray-900">
		A 2-Minute Kindergarten Activity, Visualized Five Ways
	</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		This animation showcases five different visualization techniques used to explore a 2-minute
		video of classroom interaction in a bilingual kindergarten-first grade classroom focusing on
		physics education about matter occupying space. The classroom video originates from Fred
		Erickson and colleagues' collection available through <a
			href="https://www.learninghowtolookandlisten.com"
			target="_blank"
			rel="noopener noreferrer"
			class="text-gray-900 underline hover:no-underline">Learning How to Look and Listen</a
		>.
	</p>

	<!-- Action Buttons -->
	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href="https://doi.org/10.1080/10508406.2025.2537945"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			<FileText class="mr-2 w-4 h-4" />
			View Publication
		</a>
	</div>

	<!-- YouTube Video -->
	<figure class="mt-12 bg-gray-50 rounded-xl overflow-hidden">
		<div class="aspect-video">
			<iframe
				class="w-full h-full"
				src="https://www.youtube.com/embed/AnJvRBeWo2M?autoplay=1&mute=1"
				title="A 2-Minute Kindergarten Activity, Visualized Five Ways"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
		<figcaption class="p-4 text-sm text-gray-600">
			Five visualization techniques applied to a 2-minute classroom activity: movement paths, speech
			patterns, affect mapping, participation tracking, and integrated views.
		</figcaption>
	</figure>
</div>
