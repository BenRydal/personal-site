export const navItems = [
	{
		name: 'Projects',
		href: '/projects',
		children: [
			{ name: 'Interaction Geography', href: '/projects/interaction-geography' },
			{ name: 'Education', href: '/projects/education' },
			{ name: 'Data Visualization', href: '/projects/data-visualization' }
		]
	},
	{ name: 'Teaching', href: '/projects/teaching' },
	{
		name: 'Software',
		href: '/software',
		children: [
			{ name: 'Transcript Explorer', href: '/software/transcript-explorer' },
			{ name: 'Interaction Geography Slicer', href: '/software/igs' },
			{ name: 'Mondrian Transcription', href: '/software/mondrian' },
			{ name: 'Pointillizer', href: '/software/pointillizer' }
		]
	},
	{ name: 'Publications', href: '/publications' },
	{ name: 'About', href: '/about' }
] as const;

export type NavItem = (typeof navItems)[number];
