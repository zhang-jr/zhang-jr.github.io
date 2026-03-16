# zhang-jr.github.io

Personal portfolio site built with [Astro](https://astro.build), hosted on GitHub Pages.

## Tech Stack

- **Framework**: Astro 4 (static output)
- **Deployment**: GitHub Pages via GitHub Actions
- **Fonts**: Syne + DM Mono (Google Fonts)

## Project Structure

```
src/
├── data/
│   └── site.ts        # All content lives here
├── components/        # Nav, Hero, About, Skills, Projects, Contact, Footer
├── layouts/
│   └── Layout.astro   # Base HTML shell
├── pages/
│   └── index.astro    # Entry point
└── styles/
    └── global.css
```

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
```

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.
Configure under **Settings → Pages → Source: GitHub Actions**.
