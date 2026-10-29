# Engineering Project Archive

A static React + Vite + TypeScript personal portfolio designed as a focused engineering project archive.

## Edit content

Update your name, links, bio, skills, and all project information in [`src/data/projects.ts`](src/data/projects.ts). The initial project copy is intentionally placeholder-only so no unverified claims ship.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite reports. Build a production version with:

```bash
npm run build
npm run preview
```

## Project routes

This site uses hash-based routes so direct project links work on GitHub Pages without server-side rewrites:

- `#/projects/pordle-io`
- `#/projects/calpolyshpe`
- `#/projects/lpl-financial-team-34`
- `#/projects/tic-tac-task`

## Deploy to GitHub Pages

1. Push this repository to GitHub and ensure the deployment branch is named `main` (or adjust `.github/workflows/deploy.yml`).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` (or run the workflow manually from the Actions tab). The workflow builds the static site and publishes it.

The Vite configuration automatically uses `/<repository-name>/` as the asset base when GitHub Actions builds it, while retaining `/` for local development.
