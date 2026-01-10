<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			name: 'DataWorks',
			description:
				'A workplace training program providing data services (cleaning, analysis, annotation) while training young people from underrepresented communities in computing.',
			image: '/images/projects/dataworks.png',
			href: 'https://dataworkforce.gatech.edu',
			linkType: 'external'
		},
		{
			name: 'Mapping Self in Society (MaSelfS)',
			description:
				'A framework teaching personal geography and critical spatial inquiry using open-source tools. Learners collect and visualize physical movement data over thematic maps to explore neighborhood and community relationships.',
			image: '/images/projects/maselfs.png',
			href: 'https://www.maselfs.org',
			linkType: 'external'
		},
		{
			name: 'Learning How to Look & Listen',
			description:
				'A Spencer Foundation-supported resource documenting visual and auditory attention patterns employed by researchers studying social interaction through video.',
			image: '/images/projects/lhll.png',
			href: 'https://www.learninghowtolookandlisten.com',
			linkType: 'external'
		},
		{
			name: 'Learning Spaces Visualization Workshop',
			description:
				'A code repository for an introductory data visualization workshop developed with Teachers College Columbia University, introducing Processing programming and Unfolding Maps Library.',
			image: '/images/projects/learning-spaces.png',
			href: 'https://github.com/BenRydal/Data-Vis-for-Learning-Spaces',
			linkType: 'github'
		}
	];
</script>

<svelte:head>
	<title>Education Projects | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Education research projects including DataWorks, Mapping Self in Society, and Learning How to Look & Listen."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<nav class="mb-8">
		<a href="/projects" class="text-gray-500 hover:text-gray-900 transition-colors">
			&larr; Back to Projects
		</a>
	</nav>

	<h1 class="text-4xl font-bold text-gray-900">Education Projects</h1>

	<p class="mt-6 text-xl text-gray-600 leading-relaxed">
		Collaborative educational initiatives focused on data literacy, computing education, and
		supporting learners in many settings including schools, informal spaces, and the workplace.
	</p>

	<div class="mt-12 space-y-16">
		{#each projects as project}
			<article class="grid md:grid-cols-3 gap-8 items-start">
				<div class="md:col-span-1">
					<img src={project.image} alt={project.name} class="w-full rounded-xl shadow-md" />
				</div>
				<div class="md:col-span-2">
					<h2 class="text-2xl font-bold text-gray-900">{project.name}</h2>
					<p class="mt-4 text-gray-600 leading-relaxed">{project.description}</p>

					<div class="mt-6">
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
						>
							{#if project.linkType === 'github'}
								<Github class="mr-2 w-4 h-4" />
								View Repository
							{:else}
								Visit Project
								<ExternalLink class="ml-2 w-4 h-4" />
							{/if}
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>
