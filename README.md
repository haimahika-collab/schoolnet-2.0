# Schoolnet India website redesign

Production-oriented redesign foundation for Schoolnet India's public website. The first phase includes the application structure, design system, responsive header and solutions mega-menu, and redesigned homepage. Persona portals are intentionally deferred.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Information architecture

The public experience is organised around clear audience and outcome paths:

- Solutions: Geneo, LMS, Smart Classrooms, KYAN, Interactive Panels, ICT Labs and Teacher Development
- Schools: the primary commercial journey
- Students: the high-engagement product experience
- Impact: public-sector programmes and evidence
- Resources: insights and case studies
- About: organisation and corporate information

The dedicated `/about` route presents Schoolnet's verified company story, leadership, advisory group, culture, scale, SDG commitments and impact summaries using official Schoolnet imagery. Future phases will add mock Student, Teacher and School Admin experiences. The current header labels Login as a later-phase feature rather than sending users to an incomplete route.

## Design system

- **Typography:** Manrope-preferred system stack, with large compact headings and highly legible body copy
- **Core colours:** Schoolnet navy `#10295D`, primary blue `#0667DB`, student orange `#F5793B`, enablement green `#11A579`
- **Surfaces:** white, warm student cream, soft interface grey and enterprise navy
- **Spacing:** 8px-derived rhythm with generous 78–112px section spacing
- **Components:** reusable buttons, audience cards, solution cards, data previews, evidence callouts, header, mega-menu and footer
- **Responsive rules:** desktop mega-menu becomes a touch-friendly accordion menu; grids reduce from four/three columns to one; dashboard previews preserve readable stacking
- **Accessibility:** semantic regions, keyboard-accessible native links/details, visible text labels, reduced-motion support and AA-oriented contrast

## Content accuracy

Verified metrics and their source metadata live in `src/data/site-content.ts`. The current homepage uses public information from Schoolnet India's official Geneo, LMS, Smart Classroom and About pages, checked on 13 August 2026. Illustrative dashboard information is explicitly labelled as mock data. Partner logos are withheld pending approved brand assets.

## Deployment direction

The application deploys to Cloudflare Workers through vinext and Cloudflare's
Vite plugin. The production build generates the Worker entry point, static
assets and Wrangler deployment configuration.

```bash
npm run deploy:dry-run
npm run deploy
```

For automatic deployments, connect this repository to Cloudflare Workers
Builds with `main` as the production branch, `npm run build` as the build
command and `npx wrangler deploy` as the deploy command. The Worker name is
`schoolnet-india-redesign`.
