<script lang="ts">
	import { Archive } from 'lucide-svelte';

	interface Props {
		title: string;
		description: string;
		href: string;
		image?: string;
		video?: string;
	}

	let { title, description, href, image, video }: Props = $props();
</script>

<a
	{href}
	class="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
>
	{#if video}
		<div class="aspect-video bg-gray-100 overflow-hidden">
			<video
				autoplay
				muted
				loop
				playsinline
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			>
				<source src={video} type="video/mp4" />
			</video>
		</div>
	{:else if image}
		<div class="aspect-video bg-gray-100 overflow-hidden">
			<img
				src={image}
				alt={title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			/>
		</div>
	{:else}
		<div
			class="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
		>
			<div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
				<Archive class="w-8 h-8 text-gray-400" strokeWidth={1.5} />
			</div>
		</div>
	{/if}

	<div class="p-6">
		<h3 class="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
			{title}
		</h3>
		<p class="mt-2 text-gray-600 text-sm line-clamp-2">
			{description}
		</p>
	</div>
</a>
