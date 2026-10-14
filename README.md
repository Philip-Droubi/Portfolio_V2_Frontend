# Philip Droubi – Portfolio

Personal portfolio of **Philip Droubi**, Software Engineer & Backend Developer.
It shows my projects, work experience, skills and certificates, in **English and Arabic**.

**Live site:** https://philip-droubi.github.io/Philip_Droubi_portfolio/

![Philip Droubi – Software Engineer & Backend Developer](public/og-image.png)

## Features

- Projects & experience with filters, pagination and a details dialog (images, description, tech stack)
- Every project has its own link, for example `/projects/alburaq-group/`
- Certificates page grouped by source
- English / Arabic with full RTL support (`?lang=ar` opens the Arabic version)
- Download CV button
- Animated, responsive UI

## Tech Stack

React 19 · TypeScript · Vite · Material UI · Tailwind CSS · React Router · TanStack Query · Zustand · i18next · Framer Motion

## SEO

GitHub Pages only serves files, so a normal React app gets a 404 status on every page except the home page.
`scripts/seo-pages.mjs` runs after `vite build` and fixes that:

- writes a real `index.html` for `/projects/`, `/certificates/` and every project page
- gives each page its own title, description, Open Graph / Twitter preview and hreflang (English / Arabic) links
- adds JSON-LD structured data (Person, WebSite, ProfilePage, breadcrumbs)
- adds a `<noscript>` copy of the content for crawlers that don't run JavaScript
- writes `sitemap.xml` and a `noindex` `404.html`

Page titles and descriptions live in [`src/assets/json/seo.json`](src/assets/json/seo.json).
Project data comes from [`src/assets/json/data.json`](src/assets/json/data.json) (my portfolio API response) and is only read.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The `dist/` folder is ready to upload to GitHub Pages.

## Contact

- LinkedIn: https://www.linkedin.com/in/philip-droubi
- GitHub: https://github.com/Philip-Droubi
- Email: philipdroubi@gmail.com
