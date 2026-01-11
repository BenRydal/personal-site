<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { ArrowRight } from 'lucide-svelte';

	const featuredProjects = [
		{
			title: 'Interaction Geography',
			description:
				'Visualizing how people move and interact in physical spaces like museums and classrooms.',
			href: '/projects/interaction-geography',
			image: '/images/software/igs.gif'
		},
		{
			title: 'NYC Stop-and-Frisk',
			description:
				'Exploring patterns of street stop-and-frisk practices through interactive visualization.',
			href: '/projects/stop-frisk',
			image: '/images/projects/stop-frisk-hero.png'
		},
		{
			title: 'DataWorks',
			description:
				'Workplace training program providing data services while training young people in computing.',
			href: '/projects/education',
			image: '/images/projects/dataworks.png'
		}
	];
</script>

<svelte:head>
	<title>Ben Rydal Shapiro | Learning Sciences & Data Visualization</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[90vh] flex items-center overflow-hidden">
	<!-- Background Video -->
	<video
		autoplay
		muted
		loop
		playsinline
		class="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
	>
		<source src="/videos/hero-bg.mp4" type="video/mp4" />
	</video>

	<!-- White Overlay -->
	<div class="absolute inset-0 bg-white/75"></div>

	<!-- Content -->
	<div class="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
		<div class="max-w-3xl">
			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight drop-shadow"
			>
				Ben Rydal Shapiro
			</h1>

			<p class="mt-6 text-xl md:text-2xl text-gray-900 leading-relaxed drop-shadow-sm">
				I design data visualization tools to see learning, teaching, and spatial interaction in new ways.
			</p>

			<p class="mt-6 text-lg text-gray-800 drop-shadow-sm">
				Assistant Professor of Learning Technologies at Georgia State University
			</p>

			<div class="mt-10 flex flex-wrap gap-4">
				<a
					href="/about"
					class="inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
				>
					About Me
					<ArrowRight class="ml-2 w-4 h-4" />
				</a>
				<a
					href="mailto:bshapiro@gsu.edu"
					class="inline-flex items-center px-6 py-3 border border-highlight/30 text-gray-900 font-medium rounded-lg hover:bg-highlight/10 transition-colors"
				>
					Get in Touch
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Work Section -->
<section class="bg-gray-50 py-20">
	<div class="max-w-6xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900">Featured Work</h2>
			<p class="mt-4 text-gray-600 max-w-2xl mx-auto">
				Research and tools at the intersection of learning sciences, data visualization, and data
				science/AI education.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each featuredProjects as project}
				<ProjectCard {...project} />
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/projects"
				class="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
			>
				View all projects
				<ArrowRight class="ml-2 w-4 h-4" />
			</a>
		</div>
	</div>
</section>

<!-- Availability Section -->
<section class="py-20">
	<div class="max-w-6xl mx-auto px-6">
		<div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
			<h2 class="text-2xl md:text-3xl font-bold text-white">Available for Collaboration</h2>
			<p class="mt-4 text-gray-300 max-w-2xl mx-auto">
				I'm open to collaborative research projects, design partnerships, and consulting engagements
				in learning technologies, data visualization, and AI/data science education.
			</p>
			<a
				href="mailto:bshapiro@gsu.edu"
				class="mt-8 inline-flex items-center px-6 py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-colors"
			>
				Let's Connect
				<ArrowRight class="ml-2 w-4 h-4" />
			</a>
		</div>
	</div>
</section>
