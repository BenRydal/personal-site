<script lang="ts">
	import { Mail } from 'lucide-svelte';

	const links = [
		{ name: 'CV', href: '/CV_Shapiro.pdf' },
		{ name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ben_Shapiro4' },
		{ name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=QIRuWu8AAAAJ&hl' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/benrydalshapiro/' },
		{ name: 'Twitter', href: 'https://twitter.com/Ben_Rydal' },
		{ name: 'GitHub', href: 'https://github.com/BenRydal' }
	];
</script>

<svelte:head>
	<title>About | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="About Ben Rydal Shapiro - Assistant Professor of Learning Technologies at Georgia State University."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<div class="grid lg:grid-cols-3 gap-12 lg:gap-16">
		<div class="lg:sticky lg:top-24 self-start">
			<div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
				<img
					src="/images/about.jpg"
					alt="Ben Rydal Shapiro"
					class="w-full h-full object-cover object-top"
				/>
			</div>

			<a
				href="mailto:bshapiro@gsu.edu"
				class="mt-6 flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
			>
				<Mail class="w-5 h-5" />
				bshapiro@gsu.edu
			</a>

			<div class="mt-8">
				<h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Links</h3>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each links as link}
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
						>
							{link.name}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="lg:col-span-2">
			<h1 class="text-4xl font-bold text-gray-900">About Me</h1>

			<p class="mt-8 text-lg text-gray-600 leading-relaxed text-justify">
				I am an Assistant Professor of Learning Technologies in the Department of Learning Sciences
				at Georgia State University. I previously held a postdoctoral fellowship at Georgia Tech's
				School of Interactive Computing and earned my Ph.D. in Learning Sciences from Vanderbilt
				University's Peabody College, where I was part of the Space, Learning & Mobility Lab. My
				work combines learning sciences, information visualization, and computer science to examine
				how people learn in relation to the physical environment and advance AI/data science
				education. Current initiatives address visualization tool design, data literacy pathways,
				civic data engagement, technology ethics instruction, and teacher professional development.
				My work has received awards from the computer-supported collaborative learning (CSCL),
				computer-human interaction (CHI) and learning sciences communities. A California native and
				father of two, I hold a B.A. in Architectural Studies from Middlebury College and an M.Ed.
				from Vanderbilt.
			</p>
		</div>
	</div>
</div>
