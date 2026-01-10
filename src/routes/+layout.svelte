<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { siteUrl } from '$lib/config';

	let { children } = $props();

	const canonicalUrl = $derived(`${siteUrl}${$page.url.pathname}`);
</script>

<svelte:head>
	<title>Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Ben Rydal Shapiro - Assistant Professor at Georgia State University. Research in learning sciences, data visualization, and computer science education."
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ben Rydal Shapiro" />
	<meta property="og:title" content="Ben Rydal Shapiro" />
	<meta
		property="og:description"
		content="Ben Rydal Shapiro - Assistant Professor at Georgia State University. Research in learning sciences, data visualization, and computer science education."
	/>
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content="https://benrydal.com/images/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Ben_Rydal" />
	<meta name="twitter:title" content="Ben Rydal Shapiro" />
	<meta
		name="twitter:description"
		content="Ben Rydal Shapiro - Assistant Professor at Georgia State University. Research in learning sciences, data visualization, and computer science education."
	/>
	<meta name="twitter:image" content="https://benrydal.com/images/og-image.png" />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ben Rydal Shapiro",
		"givenName": "Ben",
		"familyName": "Shapiro",
		"jobTitle": "Assistant Professor of Learning Technologies",
		"worksFor": {
			"@type": "Organization",
			"name": "Georgia State University",
			"department": "Department of Learning Sciences"
		},
		"url": "https://benrydal.com",
		"email": "bshapiro@gsu.edu",
		"image": "https://benrydal.com/images/about.jpg",
		"description": "Assistant Professor at Georgia State University researching learning sciences, data visualization, and computer science education.",
		"alumniOf": [
			{
				"@type": "CollegeOrUniversity",
				"name": "Vanderbilt University"
			},
			{
				"@type": "CollegeOrUniversity",
				"name": "Middlebury College"
			}
		],
		"sameAs": [
			"https://github.com/BenRydal",
			"https://www.linkedin.com/in/benrydalshapiro/",
			"https://twitter.com/Ben_Rydal",
			"https://scholar.google.com/citations?user=QIRuWu8AAAAJ",
			"https://www.researchgate.net/profile/Ben_Shapiro4"
		],
		"knowsAbout": [
			"Learning Sciences",
			"Data Visualization",
			"Computer Science Education",
			"Human-Computer Interaction",
			"Data Science Education"
		]
	}
	</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1 pt-20">
		{@render children()}
	</main>

	<Footer />
</div>
