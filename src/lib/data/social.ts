export const socialLinks = [
	{ name: 'Email', href: 'mailto:bshapiro@gsu.edu', icon: 'email', color: 'text-highlight' },
	{ name: 'GitHub', href: 'https://github.com/benrydal', icon: 'github', color: 'text-gray-800' },
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/benrydal',
		icon: 'linkedin',
		color: 'text-[#0077B5]'
	}
] as const;

export type SocialLink = (typeof socialLinks)[number];
