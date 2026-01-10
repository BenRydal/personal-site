import type { RequestHandler } from './$types';
import { siteUrl } from '$lib/config';

const lastModified = new Date().toISOString().split('T')[0];

const pages = [
	'',
	'/about',
	'/projects',
	'/projects/bettering-data',
	'/projects/data-visualization',
	'/projects/data-visualization/classroom',
	'/projects/education',
	'/projects/interaction-geography',
	'/projects/stop-frisk',
	'/projects/teaching',
	'/projects/teaching/cs4001',
	'/projects/teaching/cs4460',
	'/projects/teaching/cs4660',
	'/publications',
	'/software',
	'/software/igs',
	'/software/mondrian-transcription',
	'/software/pointillizer',
	'/software/transcript-explorer'
];

export const GET: RequestHandler = async () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.split('/').length <= 2 ? '0.8' : '0.6'}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
