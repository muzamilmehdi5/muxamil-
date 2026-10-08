# Diligent Technologies: landing page

React + TypeScript + Tailwind CSS v4 on Vite. Single-page, section-anchored site.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview
```

## Edit content
Everything lives in `src/content.ts`: contact details, nav, services, projects, process, FAQ, testimonials.
- **Projects** are labelled "Concept preview" (`concept: true`). Replace with real case studies when available.
- **Testimonials** is empty, so the Client Voices section is not rendered. Add only genuine quotes with a `sourceUrl`.
- **Logo**: `public/diligent-logo.png` (the supplied file, unmodified). The page has no `og:image` yet; add one when a social image exists.

## Contact form integration
`src/lib/submit.ts` → `submitInquiry()`. Without a backend the form runs in **demo mode**: it validates, sends nothing,
says so, and offers a pre-filled `mailto:` draft. To go live, copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT`
to any endpoint accepting a JSON POST (`name, email, service, details, budget`). "Sent" is only shown on a 2xx response.

## Not included (needs real info)
Client logos, ratings, certifications, testimonials, privacy/legal links, office locations, US-hours overlap claims.
