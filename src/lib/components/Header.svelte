<script lang="ts">
	import { navItems } from '$lib/data/navigation';
	import { Menu, X, ChevronDown } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
>
	<nav class="max-w-6xl mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="text-2xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
			>
				Rydal
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					{#if 'children' in item}
						<div class="relative group">
							<a
								href={item.href}
								class="inline-flex items-center gap-1 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
							>
								{item.name}
								<ChevronDown class="w-4 h-4 transition-transform group-hover:rotate-180" />
							</a>
							<div
								class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
							>
								<div
									class="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]"
								>
									{#each item.children as child}
										<a
											href={child.href}
											class="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
										>
											{child.name}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{:else}
						<a
							href={item.href}
							class="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
						>
							{item.name}
						</a>
					{/if}
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 text-gray-600 hover:text-gray-900"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden pt-4 pb-2">
				{#each navItems as item}
					<a
						href={item.href}
						class="block py-2 text-gray-600 hover:text-gray-900"
						onclick={() => (mobileMenuOpen = false)}
					>
						{item.name}
					</a>
					{#if 'children' in item}
						{#each item.children as child}
							<a
								href={child.href}
								class="block py-2 pl-4 text-sm text-gray-500 hover:text-gray-900"
								onclick={() => (mobileMenuOpen = false)}
							>
								{child.name}
							</a>
						{/each}
					{/if}
				{/each}
			</div>
		{/if}
	</nav>
</header>
