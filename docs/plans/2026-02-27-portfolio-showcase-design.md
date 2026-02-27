# Portfolio Showcase Design

**Date:** 2026-02-27
**Status:** Approved

## Goal

Add a portfolio showcase to hexAIgon.gr — top 3 projects on the landing page + a dedicated `/projects` page showing all projects.

## Data Model

```typescript
type Project = {
  slug: string;           // unique ID
  title: string;          // project name
  desktopImage: string;   // /projects/slug-desktop.png
  mobileImage: string;    // /projects/slug-mobile.png
  url: string;            // live site URL
};
```

- Data stored in `lib/data/projects.ts` as a typed array
- Images stored in `/public/projects/` (manual uploads)
- Two images per project: desktop and mobile mockups

## Landing Page Section

- Positioned between Services and How We Work
- Shows first 3 projects from the array
- 3-column grid (1 col on mobile)
- Each card: desktop image with mobile image overlaid bottom-right
- Glass card style matching existing sections
- "View All Projects" button links to `/[locale]/projects`

## Dedicated Projects Page

- Route: `app/[locale]/projects/page.tsx`
- Reuses Navbar + Footer from landing page
- Full grid of all projects (2-3 columns)
- Same ProjectCard component as landing page

## Files

| File | Purpose |
|---|---|
| `lib/data/projects.ts` | Project data + type export |
| `components/project-card.tsx` | Reusable card with stacked device mockups |
| `components/portfolio-section.tsx` | Landing page section (top 3 + "View All" link) |
| `app/[locale]/projects/page.tsx` | Dedicated all-projects page |
| `messages/en.json` | Add Portfolio/Projects translation keys |
| `messages/el.json` | Add Greek translations |
| `app/[locale]/page.tsx` | Insert PortfolioSection between Services and HowWeWork |
