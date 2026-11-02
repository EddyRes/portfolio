# Eddy Resendiz Portfolio

My personal one-page portfolio, showcasing my background, technical skills, projects, professional experience, education, interests, and contact links.

## Live Site

[https://eddyres.github.io/portfolio/](https://eddyres.github.io/portfolio/)

## Highlights

- Typed landing-page introduction and section headings
- Single-page navigation with smooth scrolling and active-section states
- Technical Skills, Professional Experience, and Education sections
- Interactive project folders with hash-based project detail views
- Interests image carousel with focused image views
- GitHub, LinkedIn, and email contact links
- Responsive layout, keyboard-focus treatments, and reduced-motion support
- GitHub Pages deployment through GitHub Actions

## Featured Projects

- **pordle.io** — A daily, mobile-first word-ladder game designed as a focused daily challenge.
- **LPL Financial NorthStar** — An AI-assisted account-transfer review platform that helps financial advisors and operations teams prioritize inbound transfers and understand what needs attention.
- **Cal Poly SHPE Website** — The public-facing home for the Society of Hispanic Professional Engineers student chapter at Cal Poly San Luis Obispo, with chapter information, member resources, events, and community content.

## Tech Stack

- React, React DOM, TypeScript, and Vite
- CSS and custom interactive UI components
- OGL for the landing-page visual effect
- npm
- GitHub Actions and GitHub Pages

## Local Development

This project uses npm. Node.js 22 matches the version used by the deployment workflow.

1. Clone the repository:

   ```bash
   git clone https://github.com/EddyRes/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the production version:

   ```bash
   npm run build
   ```

5. Preview the production build:

   ```bash
   npm run preview
   ```

## Deployment

GitHub Actions deploys the site to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow runs on pushes to `main` (and can be started manually), uses Node.js 22, runs `npm ci` and `npm run build`, then publishes the generated `dist` directory.

Vite is configured with `base: '/portfolio/'`, which is the correct asset base path for this GitHub Pages project site.

## Project Structure

```text
src/
  components/       Interactive UI components and navigation
  data/projects.ts  Portfolio profile, skills, experience, and project data
  pages/            Home and project-detail views
  App.tsx           Hash-based view selection
  styles.css         Global and responsive styles
public/
  images/           Headshots and interests-carousel images
  resume/           Resume PDF
.github/workflows/
  deploy.yml         GitHub Pages deployment workflow
vite.config.ts       Vite configuration and Pages base path
```

## Contact

- GitHub: [https://github.com/EddyRes](https://github.com/EddyRes)
- LinkedIn: [https://www.linkedin.com/in/eddyres](https://www.linkedin.com/in/eddyres)
- Email: [eduardoresendizmun@gmail.com](mailto:eduardoresendizmun@gmail.com)
