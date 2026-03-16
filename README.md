# Chasa Design

Website for Chasa Design, built with React and Vite.

Live domain: `https://www.chasadesign.com`

## Stack

- `React`
- `Vite`
- `React Router`
- `Tailwind CSS`
- `React Leaflet`

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured to publish the built `dist` folder with `gh-pages`.

Deploy:

```bash
npm run deploy
```

That command runs:

- `npm run build`
- `gh-pages -d dist`

## Notes

- Vite is configured with `base: "/"` in `vite.config.js`.
- The site includes an image carousel, service tiles, a contact page, and a Leaflet map section.
