<script lang="ts">
	import { socialLinks } from '$lib/data/social';
	import { Mail, Github, Linkedin } from 'lucide-svelte';

	const icons = { email: Mail, github: Github, linkedin: Linkedin } as const;
</script>

<footer class="bg-gray-50 border-t border-gray-100">
	<div class="max-w-6xl mx-auto px-6 py-12">
		<div class="flex flex-col md:flex-row justify-between items-center gap-6">
			<div class="text-center md:text-left">
				<p class="text-gray-600 text-sm">Ben Rydal Shapiro</p>
				<p class="text-gray-500 text-sm">Assistant Professor, Georgia State University</p>
			</div>

			<div class="flex items-center gap-6">
				{#each socialLinks as link}
					<a
						href={link.href}
						class="{link.color} hover:opacity-70 transition-opacity"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.name}
					>
						<svelte:component this={icons[link.icon]} class="w-5 h-5" />
					</a>
				{/each}
			</div>
		</div>

		<div class="mt-8 pt-8 border-t border-gray-200 text-center">
			<p class="text-gray-400 text-sm">
				&copy; {new Date().getFullYear()} Ben Rydal Shapiro. All rights reserved.
			</p>
		</div>
	</div>
</footer>
