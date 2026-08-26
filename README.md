# Chasa Design

A refreshed editorial architecture portfolio for Chasa Design, built with React, Vite, React Router and Tailwind CSS.

Live domain: `https://www.chasadesign.com`

## Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Structure

- `src/data/projects.js` is the single source of truth for project names, locations, categories, descriptions and imagery.
- `src/data/site.js` centralises contact details, services, methodology, regions and Labs capabilities.
- `src/components/` contains the shared navigation, footer, project, reveal, diagram and page-heading systems.
- `src/pages/` contains Home, Projects, dynamic Project Detail, Studio, Labs, Contact and 404 routes.

## Deployment

The existing `gh-pages` workflow and `www.chasadesign.com` custom domain are retained. `public/404.html` restores direct React routes on GitHub Pages, and Cloudflare Web Analytics loads only on the production domain.

```bash
npm run deploy
```

## Content confirmations

Inline `TODO` comments in `src/data/projects.js` mark source-repository conflicts that require owner confirmation, including Hillview’s location wording, legacy Village Gate render labels, the Tswana Fuel placeholder, and Kalahari Arms’ secondary image.
