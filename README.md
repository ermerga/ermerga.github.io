# ermerga.github.io

Personal portfolio site built with React + Vite, deployed on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

**First-time setup:** In the repo's GitHub Settings > Pages, set the Source to **GitHub Actions**.
