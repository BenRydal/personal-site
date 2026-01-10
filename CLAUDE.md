# CLAUDE.md

This is Ben Rydal Shapiro's personal portfolio website showcasing research, projects, software, and publications.

## Tech Stack

- **Framework:** SvelteKit 2.x with Svelte 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide Svelte
- **Deployment:** Vercel

## Commands

```bash
yarn dev        # Start dev server
yarn build      # Production build
yarn preview    # Preview production build
yarn check      # TypeScript/Svelte type checking
```

## Project Structure

```
src/
├── routes/                    # SvelteKit file-based routing
│   ├── +page.svelte          # Home/landing page
│   ├── +layout.svelte        # Root layout (Header + Footer)
│   ├── about/
│   ├── projects/             # Project pages with sub-routes
│   ├── software/             # Software tool pages
│   └── publications/
├── lib/
│   ├── components/           # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   └── ProjectCard.svelte
│   └── data/                 # Static data
│       ├── navigation.ts
│       └── social.ts
├── app.css                   # Global styles & Tailwind theme
└── app.html                  # HTML template
static/
├── images/                   # Project and software images
└── videos/                   # Hero and demo videos
```

## Design System

### Colors (defined in `app.css`)

| Name        | Hex       | Usage                                 |
| ----------- | --------- | ------------------------------------- |
| `highlight` | `#e8630a` | Primary CTAs, buttons (orange)        |
| `accent`    | `#0f3460` | Links, secondary elements (deep blue) |
| `primary`   | `#1a1a2e` | Dark backgrounds                      |
| `secondary` | `#16213e` | Dark background gradients             |

### Fonts

- **Sans (body):** Inter
- **Serif (display):** Playfair Display

### Component Patterns

- **Page width:** `max-w-6xl mx-auto px-6` for all pages
- **Primary buttons:** `bg-highlight text-white rounded-lg hover:bg-highlight/90`
- **Secondary buttons:** `border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50`
- **Back navigation:** `text-gray-500 hover:text-gray-900` with `← Back to X`

## Conventions

- Software pages are minimal: title, description, CTA buttons, demo GIF
- Project pages link to external project sites where available
- No tags on project/software cards (removed for simplicity)
- Footer social icons use brand colors (GitHub: gray, LinkedIn: blue, Email: orange)

## SEO

The site includes comprehensive SEO optimizations:

- **Meta tags:** Open Graph and Twitter Card meta tags in root layout
- **Canonical URLs:** Dynamic canonical URLs based on current page path
- **Sitemap:** Auto-generated at `/sitemap.xml` (prerendered)
- **Structured Data:** JSON-LD schemas for Person (sitewide) and ScholarlyArticle (publications)
- **Prerendering:** All pages are prerendered for faster crawling

### Required: Social Share Image

Create an OG image for social media previews:

- **Path:** `static/images/og-image.png`
- **Dimensions:** 1200 x 630 pixels
- **Content:** Branded image with name, title, and visual identity
- **Used by:** Facebook, LinkedIn, Twitter, and other platforms when sharing links

The image is referenced in the layout's Open Graph and Twitter Card meta tags.
