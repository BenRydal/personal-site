<script lang="ts">
	import { ExternalLink, FileText } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Interaction Geography | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Interaction Geography - visualizing how people move and interact in physical spaces like museums and classrooms."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a href="/projects" class="text-gray-500 hover:text-gray-900 transition-colors">
			&larr; Back to Projects
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Interaction Geography</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		A methodology and set of visualization tools for exploring, analyzing, or speculating about how
		people move and interact over space and time.
	</p>

	<!-- Action Buttons -->
	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href="https://www.interactiongeography.org"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
		>
			<ExternalLink class="mr-2 w-4 h-4" />
			Explore the Project
		</a>
		<a
			href="https://par.nsf.gov/servlets/purl/10074100"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
		>
			<FileText class="mr-2 w-4 h-4" />
			View Publication
		</a>
	</div>

	<!-- Video -->
	<figure class="mt-12 bg-gray-50 rounded-xl overflow-hidden">
		<video autoplay muted loop playsinline class="w-full">
			<source src="/videos/interaction-geography.mp4" type="video/mp4" />
		</video>
		<figcaption class="p-4 text-sm text-gray-600">
			IGS animation showing the movement of six teachers in six different classrooms across
			different countries. Movement is shown as a purple path over a floor plan and upwards in a
			space-time view where the z-axis is time and the x/y dimensions correspond to the floor plan.
			Data from the TIMSS 1999 Video Study.
		</figcaption>
	</figure>
</div>
