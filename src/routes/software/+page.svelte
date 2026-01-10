<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const software = [
		{
			title: 'Transcript Explorer',
			description:
				'An open-source tool for dynamically visualizing transcripts linked to video using turn charts and word clouds.',
			href: '/software/transcript-explorer',
			image: '/images/software/transcript-explorer.gif'
		},
		{
			title: 'Interaction Geography Slicer (IGS)',
			description:
				'Interactive tool for exploring movement and interaction data in physical spaces like museums and classrooms.',
			href: '/software/igs',
			image: '/images/software/igs.gif'
		},
		{
			title: 'Mondrian Transcription',
			description:
				'An open-source tool for efficiently transcribing movement from video or speculating about movement in space.',
			href: '/software/mondrian',
			image: '/images/software/mondrian.gif'
		},
		{
			title: 'Pointillizer',
			description:
				'An open-source tool to create playful pointillism-inspired animations that visualize images and video in new ways.',
			href: '/software/pointillizer',
			image: '/images/software/pointillizer.gif'
		}
	];
</script>

<svelte:head>
	<title>Software | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Open-source visualization software by Ben Rydal Shapiro for analyzing learning, interaction, and movement."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<div class="max-w-3xl">
		<h1 class="text-4xl font-bold text-gray-900">Software</h1>
		<p class="mt-4 text-lg text-gray-600">
			Open-source tools for visualizing and analyzing learning, interaction, and movement data. All
			tools are freely available for research and educational use.
		</p>
	</div>

	<div class="mt-12 grid md:grid-cols-2 gap-8">
		{#each software as tool}
			<ProjectCard {...tool} />
		{/each}
	</div>
</div>
