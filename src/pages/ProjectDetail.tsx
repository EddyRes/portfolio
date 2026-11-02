import { type Project } from '../data/projects'
import { useLayoutEffect, useRef } from 'react'

function PordleCaseStudy() {
  return <>
    <div className="pordle-hero">
      <p className="detail-summary">pordle.io is a daily, mobile-first word-ladder game built to make a classic puzzle feel like a focused daily challenge.</p>
      <div className="pordle-intro">
        <p>Every UTC day, players receive the same four-letter start and target words. They plan a route, change one letter at a time through valid words, and work toward an efficient finish.</p>
        <div className="pordle-links" aria-label="pordle.io project links">
          <a href="https://pordle.io" target="_blank" rel="noopener noreferrer">Visit live site <ExternalArrow /></a>
          <a href="https://github.com/EddyRes/pordle.io" target="_blank" rel="noopener noreferrer">View repository <ExternalArrow /></a>
        </div>
      </div>
    </div>

    <div className="case-study-grid">
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>Daily word puzzles need to be fair, replayable, and easy to understand without giving away the answer or overwhelming players.</p>
      </section>
      <section className="case-study-section">
        <h2>Solution</h2>
        <p>pordle.io gives every player the same daily puzzle and scores each completed route by efficiency, time, and optional hints. Solution paths stay private until the game is complete, preserving the challenge for everyone.</p>
      </section>
      <section className="case-study-section case-study-section--wide">
        <h2>My role &amp; contributions</h2>
        <ul className="case-study-list">
          <li>Configured Vercel’s web/API deployment structure and serverless API entry point.</li>
          <li>Added analytics, public informational pages, privacy content, and app icons.</li>
          <li>Improved completed-game handling and prevented replay of completed daily puzzles.</li>
          <li>Contributed accessibility-focused automated testing and fixes.</li>
        </ul>
      </section>
    </div>

    <section className="case-study-section case-study-section--full">
      <h2>Key features</h2>
      <ul className="feature-list">
        <li><strong>Shared daily puzzle</strong><span>Deterministic four-letter word ladders give every player the same challenge each UTC day.</span></li>
        <li><strong>Focused game flow</strong><span>A five-second planning phase, locked accepted moves, keyboard and on-screen input, and timed play keep each round deliberate.</span></li>
        <li><strong>Scoring that rewards the route</strong><span>Route efficiency, elapsed time, and optional hint penalties shape the score, rank tiers, and local streaks.</span></li>
        <li><strong>Resilient daily play</strong><span>Server-derived hints, spoiler-safe sharing, offline puzzle caching, and refresh-safe local progress support play across interruptions.</span></li>
      </ul>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Technical highlights</h2>
      <div className="technical-notes">
        <p>Daily puzzles are generated from a seeded date and dictionary version. Breadth-first search validates that each puzzle is solvable and measures its true shortest path, keeping default difficulty within a three-to-five-move band.</p>
        <p>The API protects the daily challenge by withholding solution paths during play. It reveals only an optimal move count after completion, while hints are calculated server-side from a canonical or shortest valid route.</p>
        <p>A TypeScript monorepo separates game rules, puzzle generation, dictionary data, shared types, API handlers, and the React client. Browser-local state restores active sessions, completed boards, statistics, and cached same-day puzzles when a network request fails.</p>
      </div>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Tech stack</h2>
      <div className="tech-stack" aria-label="pordle.io technology stack">
        {['React 18', 'TypeScript', 'Vite', 'CSS', 'Node.js HTTP API', 'Vercel serverless functions', 'npm workspaces', 'Vitest', 'Testing Library', 'axe-core', 'ESLint', 'Prettier'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>

    <div className="record-meta"><span>Deployment <strong>Vercel configured</strong></span><span>Persistence <strong>Browser localStorage</strong></span></div>
  </>
}

function NorthStarCaseStudy() {
  return <>
    <div className="pordle-hero northstar-hero">
      <p className="detail-summary">LPL Financial NorthStar is an AI-assisted account-transfer review platform designed to help financial advisors and operations teams prioritize inbound transfers and understand what needs attention.</p>
      <div className="pordle-intro">
        <p>It combines transfer, client, requirement, and interaction data with deterministic risk scoring and retrieval-grounded AI assistance to support clearer case review and advisor-reviewed follow-up drafts.</p>
        <div className="pordle-links" aria-label="LPL Financial NorthStar project links">
          <a href="https://github.com/mattphanm/lpl-financial.git" target="_blank" rel="noopener noreferrer">View repository <ExternalArrow /></a>
        </div>
      </div>
    </div>

    <section className="case-study-section case-study-section--full northstar-event">
      <h2>Event context</h2>
      <p><strong>LPL Financial University Hackathon — Fall 2026</strong></p>
      <p>Built during a virtual, two-day student hackathon on October 2–3, 2026. The event centered on collaboration, real-world financial-services challenges, and connection with industry professionals; NorthStar was developed within that time-constrained setting.</p>
    </section>

    <div className="case-study-grid">
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>Account transfers can stall because documents are missing, cases become inactive, client questions remain unresolved, or internal review is still needed. Advisors need a clearer way to prioritize cases without relying on an LLM alone for operational decisions.</p>
      </section>
      <section className="case-study-section">
        <h2>Solution</h2>
        <p>NorthStar combines DynamoDB transfer records with a deterministic risk engine and retrieval-grounded AI assistance. Its API provides transfer and client details, portfolio reporting, risk explanations, recommended actions, and drafts that require advisor review.</p>
      </section>
      <section className="case-study-section case-study-section--wide">
        <h2>My role &amp; contributions</h2>
        <ul className="case-study-list">
          <li>Implemented AWS Bedrock retrieval and AI services for grounded transfer analysis and follow-up drafting.</li>
          <li>Added structured Zod schemas, JSON validation, and a retry path for malformed model output.</li>
          <li>Built client-detail and portfolio-reporting endpoints using DynamoDB repositories and computed risk results.</li>
          <li>Added an integration test for seeded transfer scenarios and Bedrock response validation.</li>
        </ul>
      </section>
    </div>

    <section className="case-study-section case-study-section--full">
      <h2>Key features</h2>
      <ul className="feature-list">
        <li><strong>Deterministic risk levels</strong><span>LOW, MEDIUM, and HIGH risk scoring considers missing documents, inactivity, unresolved questions, and recent advisor contact.</span></li>
        <li><strong>Transfer and portfolio APIs</strong><span>Transfer, client, and reporting endpoints combine DynamoDB records with computed risk data.</span></li>
        <li><strong>Grounded AI analysis</strong><span>Retrieval-augmented analysis uses synthetic procedure documents and returns source citations.</span></li>
        <li><strong>Structured advisor support</strong><span>Zod-validated responses provide risk explanations, recommended actions, and follow-up drafts for advisor review.</span></li>
      </ul>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Technical highlights</h2>
      <div className="technical-notes">
        <p>Structured DynamoDB facts stay separate from procedure documents retrieved through an Amazon Bedrock Knowledge Base. They are assembled only when the application builds an AI analysis context.</p>
        <p>The rules-based risk engine operates independently of the LLM, so risk levels and their reasons remain deterministic. AI responses are required to be JSON, validated with Zod, and retried once if malformed.</p>
        <p>AI citations are limited to sources retrieved from the Knowledge Base. Generated client communication is designed for advisor review; no email-sending integration is implemented.</p>
      </div>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Tech stack</h2>
      <div className="tech-stack" aria-label="LPL Financial NorthStar technology stack">
        {['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Zod', 'Amazon DynamoDB', 'Amazon Bedrock', 'Amazon S3', 'AWS SDK for JavaScript', 'npm workspaces', 'Node test runner'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>

    <div className="record-meta"><span>Data <strong>Synthetic prototype records</strong></span><span>AI output <strong>Advisor review required</strong></span></div>
  </>
}

function ShpeCaseStudy() {
  return <>
    <div className="pordle-hero shpe-hero">
      <p className="detail-summary">Cal Poly SHPE Website is the public-facing home for the Society of Hispanic Professional Engineers student chapter at California Polytechnic State University, San Luis Obispo.</p>
      <div className="pordle-intro">
        <p>The site brings together chapter information, member resources, officer rosters, events, sponsorship and donation pathways, community outreach, and social content for the Cal Poly SHPE community.</p>
        <div className="pordle-links" aria-label="Cal Poly SHPE Website project links">
          <a href="https://www.calpolyshpe.org/" target="_blank" rel="noopener noreferrer">Visit website <ExternalArrow /></a>
          <a href="https://github.com/Cal-Poly-SHPE/calpolyshpe.org" target="_blank" rel="noopener noreferrer">View repository <ExternalArrow /></a>
        </div>
      </div>
    </div>

    <div className="case-study-grid">
      <section className="case-study-section">
        <h2>Problem / opportunity</h2>
        <p>The chapter needed a clear, maintainable digital home where students, partners, and community members could find timely membership, officer, event, outreach, and involvement information.</p>
      </section>
      <section className="case-study-section">
        <h2>Solution</h2>
        <p>Built with Next.js and React, the site organizes chapter content into responsive, reusable pages and components. An academic-year officer directory, embedded calendar, membership and sponsorship pathways, curated Instagram gallery, and outreach content keep key chapter information accessible.</p>
      </section>
      <section className="case-study-section case-study-section--wide">
        <h2>My role &amp; contributions</h2>
        <p className="contribution-intro">As Cal Poly SHPE Webmaster for the 2025–26 officer year, I maintained the chapter website and Slack community. My work focused on keeping chapter-facing information current rather than building the multi-maintainer site from scratch.</p>
        <ul className="case-study-list">
          <li>Updated the 2025–26 officer roster, photos, and default academic-year experience.</li>
          <li>Added Member Points Program descriptions and updated Member of the Quarter and Member of the Year content.</li>
          <li>Updated chapter-facing links and content, including the Slack migration, homepage group image, and Instagram post set.</li>
          <li>Tracked member points and created general-meeting slides as part of the Webmaster role.</li>
        </ul>
      </section>
    </div>

    <section className="case-study-section case-study-section--full">
      <h2>Key features</h2>
      <ul className="feature-list">
        <li><strong>Responsive chapter pages</strong><span>Public content covers chapter history, values, officers, membership, sponsorship, outreach, and SHPEtinas.</span></li>
        <li><strong>Academic-year officer directory</strong><span>Visitors can switch between 2023–24, 2024–25, and 2025–26 officer rosters in the browser.</span></li>
        <li><strong>Events and community channels</strong><span>An embedded Styled Calendar supports event discovery, while a local-image Instagram gallery links to individual posts.</span></li>
        <li><strong>Paths to participate</strong><span>Membership, sponsorship, and donation calls to action route visitors to the chapter’s external payment and fundraising services.</span></li>
      </ul>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Technical highlights</h2>
      <div className="technical-notes">
        <p>The Next.js Pages Router application uses reusable navigation, footer, hero, content-section, officer-card, and member-card components to keep public pages consistent.</p>
        <p>Officer data lives in a structured local source file. Client-side state switches the displayed roster and hero image by academic year without requiring a database or backend service.</p>
        <p>The site defines page-wide metadata and social-sharing tags in its custom Next.js document, includes a configured <code>/donate</code> redirect, and uses a lightweight client-side access gate for an internal VP route.</p>
      </div>
    </section>

    <section className="case-study-section case-study-section--full shpe-impact">
      <h2>Impact</h2>
      <p>Maintained current 2025–26 chapter information across officer rosters, member-recognition content, the Slack migration, homepage imagery, and Instagram posts.</p>
    </section>

    <section className="case-study-section case-study-section--full">
      <h2>Tech stack</h2>
      <div className="tech-stack" aria-label="Cal Poly SHPE Website technology stack">
        {['Next.js 14', 'React 18', 'JavaScript', 'Tailwind CSS', 'Jotai', 'Headless UI', 'Heroicons', 'React Icons', 'Material Tailwind', 'PostCSS', 'Vercel', 'GitHub'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>

    <div className="record-meta"><span>Site type <strong>Public chapter website</strong></span><span>Content model <strong>Locally maintained</strong></span></div>
  </>
}

function ExternalArrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 14 6M8 6h6v6" /></svg>
}

export function ProjectDetail({ project, index }: { project: Project; index: number }) {
  const detailHeaderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const detailHeader = detailHeaderRef.current
    if (!detailHeader) return

    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
    const targetTop = detailHeader.getBoundingClientRect().top + window.scrollY - headerHeight - 14
    window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: 'auto' })
  }, [project.id])

  return (
    <article className="project-detail">
      <a className="back-link" href="#top">← Back To Homepage</a>
      <div className="detail-topline" ref={detailHeaderRef}><span>Record {String(index + 1).padStart(2, '0')}</span><span>{project.status}</span></div>
      <h1>{project.title}</h1>
      <p className="detail-repository">{project.repository}</p>
      {project.id === 'pordle' ? <PordleCaseStudy /> : project.id === 'lpl-financial-northstar' ? <NorthStarCaseStudy /> : project.id === 'calpoly-shpe' ? <ShpeCaseStudy /> : <>
        <div className="detail-layout">
          <p className="detail-summary">{project.summary}</p>
          <div className="detail-placeholder">
            <p>{project.prompt}</p>
            <p className="placeholder-label">Content placeholder</p>
          </div>
        </div>
        <div className="record-meta"><span>Year <strong>{project.year}</strong></span><span>Documentation <strong>To be added</strong></span></div>
      </>}
    </article>
  )
}
