<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		{
			title: 'Interaction Geography',
			description:
				'A visual approach to exploring, analyzing, or speculating about how people move and interact over space and time.',
			href: '/projects/interaction-geography',
			video: '/videos/interaction-geography.mp4'
		},
		{
			title: 'Education',
			description: 'DataWorks, Mapping Self in Society, Learning How to Look & Listen, and more.',
			href: '/projects/education',
			image: '/images/projects/dataworks.png'
		},
		{
			title: 'Data Visualization',
			description:
				'Classroom data visualization, NYC Stop-and-Frisk, and critical data visualization.',
			href: '/projects/data-visualization',
			image: '/images/projects/stop-frisk-map.png'
		}
	];
</script>

<svelte:head>
	<title>Projects | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Research projects in learning sciences, data visualization, and education by Ben Rydal Shapiro."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<div class="max-w-3xl">
		<h1 class="text-4xl font-bold text-gray-900">Projects</h1>
		<p class="mt-4 text-lg text-gray-600">
			Research and design projects at the intersection of learning sciences, data visualization, and
			data science/AI education.
		</p>
	</div>

	<div class="mt-12 grid md:grid-cols-2 gap-8">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
