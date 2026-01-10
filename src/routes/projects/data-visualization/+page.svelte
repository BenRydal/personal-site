<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	const projects = [
		{
			name: 'Classroom Visualization',
			description:
				'A 2-minute kindergarten activity visualized five different ways, showcasing multiple visualization techniques to explore classroom interaction in a bilingual kindergarten-first grade classroom.',
			image: '/images/projects/kindergarten-activity.png',
			href: '/projects/data-visualization/classroom'
		},
		{
			name: 'NYC Stop-and-Frisk',
			description:
				'Interactive visualizations exploring patterns of street stop-and-frisk practices in New York City, revealing spatial and temporal patterns in police activity data.',
			image: '/images/projects/stop-frisk-map.png',
			href: '/projects/stop-frisk'
		},
		{
			name: 'Bettering Data',
			description:
				'A collaborative project telling the story of Atlanta arrests through visualization, partnering criminologists and educators with underrepresented youth in computing.',
			image: '/images/projects/atl-visualization.png',
			href: '/projects/bettering-data'
		}
	];
</script>

<svelte:head>
	<title>Data Visualization | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Data visualization projects exploring classroom interaction, policing data, and critical data work."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a href="/projects" class="text-gray-500 hover:text-gray-900 transition-colors">
			&larr; Back to Projects
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Data Visualization</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		Projects using visualization to explore complex social phenomena, from classroom teaching to
		policing practices to community data literacy.
	</p>

	<div class="mt-12 space-y-16">
		{#each projects as project}
			<article class="grid md:grid-cols-3 gap-8 items-start">
				<a href={project.href} class="md:col-span-1 block group">
					<img
						src={project.image}
						alt={project.name}
						class="w-full rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
					/>
				</a>
				<div class="md:col-span-2">
					<a href={project.href} class="group">
						<h2
							class="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors"
						>
							{project.name}
						</h2>
					</a>
					<p class="mt-4 text-gray-600 leading-relaxed">{project.description}</p>
					<a
						href={project.href}
						class="inline-flex items-center mt-4 text-gray-900 font-medium hover:text-gray-600 transition-colors"
					>
						View project
						<ArrowRight class="ml-2 w-4 h-4" />
					</a>
				</div>
			</article>
		{/each}
	</div>
</div>
