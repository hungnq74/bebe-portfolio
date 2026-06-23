# Tech Stack Quick Check

Date: 2026-06-23

## Repos checked

### `/Users/hungnq/Documents/personal/portfolio`

Observed stack:

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- Vercel Analytics / Speed Insights
- npm with `package-lock.json`

Useful patterns:

- Simple landing-page structure in `src/app/page.tsx`.
- Section components split into `Hero`, `StickyStack`, `HorizontalTimeline`, `Footer`.
- Motion kept close to the component that owns the interaction.
- Smooth scroll via a shared Lenis provider.

### `/Users/hungnq/Documents/personal/tam-portfolio`

Observed stack:

- Next.js 16 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- lucide-react
- Vercel Blob
- Vitest and Playwright
- npm with `package-lock.json`

Useful patterns:

- Stronger content model and route-state handling for project detail pages.
- Tailwind theme tokens for paper/ink/clay/moss/gold style systems.
- Tests for admin/API behavior.
- Vercel deployment workflow already proven in this family.

What not to copy into v1:

- Admin login.
- Blob upload.
- Dynamic portfolio snapshot loading.
- Heavy route-state restoration.

## Recommended `bebe-portfolio` v1 architecture

Use the simpler `portfolio` repo shape, with selected polish from `tam-portfolio`:

- `src/app/page.tsx` as the single landing page.
- `src/components/*` for visual sections.
- `src/data/cases.ts` for portfolio tag content.
- `src/lib/utils.ts` for `cn`.
- `public/` for tag artwork, textures, stamps, and case imagery.
- `docs/references/` for source prototypes and art-direction notes.

Initial components:

- `HeroBakeryScene`
- `PortfolioTagMenu`
- `CaseTagCard`
- `CaseStudyDrawer`
- `IngredientMarquee`
- `BehindBaker`
- `ContactPanel`
- `Footer`

Interaction plan:

- CSS masks or SVG clip paths for custom tag silhouettes.
- Framer Motion for hover, tilt, reveal, and modal transitions.
- GSAP ScrollTrigger only if scroll choreography becomes too complex for Motion.
- Avoid CSS-only scroll timelines as the primary solution until browser support is fully dependable.

Asset plan:

- Export tag silhouettes as SVG masks.
- Export paper/photo objects as transparent PNG or WebP.
- Keep subtle repeating paper/noise textures small.
- Use Next image formats AVIF/WebP once the scaffold exists.
