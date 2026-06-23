# bebe-portfolio

Creative portfolio landing page project for Bebe.

## Current status

- Folder created at `/Users/hungnq/Documents/personal/bebe-portfolio`.
- Prototype reference saved at `docs/references/prototype-creative-portfolio.png`.
- Next.js App Router scaffold is in place with TypeScript, Tailwind CSS, Motion for React, Lenis, clsx, tailwind-merge, and lucide-react.
- A polished static landing page MVP has been started with generated placeholder assets under `public/images/generated/`.

## Direction

Build an interactive editorial portfolio inspired by handmade menu tags, bakery packaging, recipe cards, stamps, paper textures, and playful case-study browsing.

## Recommended local-aligned stack

The two nearby portfolio repos both use Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lenis. For this project, the default implementation path should be:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion / Motion for React
- Lenis for smooth scroll
- clsx + tailwind-merge for class utilities
- lucide-react only for small UI icons
- Static local assets first; no CMS/admin in v1

Astro is still a strong alternative for a mostly static creative site, but matching the existing personal repo stack will make deployment and maintenance easier.

## First build target

Create a polished single-page MVP:

- Hero with paper tag centerpiece and product/photo collage
- Portfolio tag menu with 6-8 clickable case-study tags
- Hover states: lift, tilt, tiny paper shadow, service chips
- Case-study modal or routed detail page
- About strip / "behind the baker"
- Contact CTA and footer

## Continue checklist

1. Replace placeholder case-study copy with Bebe's real work.
2. Replace generated placeholder assets with final art direction or real client-safe images.
3. Tune the responsive layout after reviewing desktop and mobile screenshots.
4. Add routed case-study pages only if the work needs SEO or longer narratives.
5. Set up GitHub/Vercel when the first content pass is approved.
