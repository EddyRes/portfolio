export type Project = {
  id: string
  title: string
  repository: string
  year: string
  status: 'Selected work'
  summary: string
  technologies: string
  prompt: string
  folderDescription: string
  links?: { label: string; href: string }[]
}

// Edit portfolio project facts here. Keep unknown facts as placeholders until verified.
export const projects: Project[] = [
  {
    id: 'pordle',
    title: 'pordle.io',
    repository: 'pordle.io',
    year: '—',
    status: 'Selected work',
    summary: 'A daily word-ladder game that turns word puzzles into a quick, repeatable challenge.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
    folderDescription: 'A daily word-ladder game that turns word puzzles into a quick, repeatable challenge.',
  },
  {
    id: 'lpl-financial-northstar',
    title: 'LPL Financial NorthStar',
    repository: 'LPL Financial NorthStar',
    year: '—',
    status: 'Selected work',
    summary: 'An AI-assisted account-transfer tool that prioritizes stalled transfers and recommends next actions for financial advisors.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
    folderDescription: 'An AI-assisted account-transfer tool that prioritizes stalled transfers and recommends next actions for financial advisors.',
  },
  {
    id: 'calpoly-shpe',
    title: 'Cal Poly SHPE Website',
    repository: 'Cal Poly SHPE Website',
    year: '—',
    status: 'Selected work',
    summary: 'Maintained and improved the chapter’s React website through content, UX, and analytics-driven updates that supported membership and sponsorship growth.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
    folderDescription: 'Maintained and improved the chapter’s React website through content, UX, and analytics-driven updates that supported membership and sponsorship growth.',
  },
]

export const profile = {
  name: 'Eddy Resendiz',
  role: 'Computer Science Student | IT & Software Professional',
  location: 'San Diego, California',
  email: 'eduardoresendizmun@gmail.com',
  github: 'https://github.com/EddyRes',
  phone: '+1 (619) 586-9259',
  resume: '/resume/Eddy-Resendiz-Resume.pdf',
  links: [
    { label: 'GitHub', href: 'https://github.com/EddyRes' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eddyres' },
  ],
  intro: 'I’m a first-generation Computer Science student at Cal Poly San Luis Obispo from San Diego, California. I build thoughtful, user-focused technology across software development, IT support, data systems, and technical infrastructure.',
  availability: 'Seeking Spring 2027 opportunities in software engineering, IT, cloud infrastructure, data engineering, data architecture, and related technical roles.',
  education: 'B.S. in Computer Science, California Polytechnic State University, San Luis Obispo. Expected graduation: May 2027.',
  about: [
    'I’m a first-generation college student from San Diego, CA, pursuing a B.S. in Computer Science at Cal Poly San Luis Obispo. I enjoy building projects I’m passionate about, whether that means creating an AI-assisted advisor tool that helps financial advisors prioritize stalled account transfers and identify next steps, or creating pordle.io, a daily word-ladder game designed to make solving word puzzles a fun daily challenge.',
    'I enjoy full-stack development, with a particular interest in data engineering and related technical areas. I currently work in IT, an experience that has expanded my perspective on the technology industry and encouraged me to explore career opportunities across IT, cloud infrastructure, data, and software development.',
  ],
  skills: {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Racket', 'Kotlin'],
    tools: ['React', 'Next.js', 'Node.js', 'Vite', 'Express', 'Supabase', 'AWS', 'Git/GitHub', 'Jira', 'Figma'],
    llmsAndAgents: ['ChatGPT', 'Codex', 'AWS Kiro', 'Claude', 'Intent', 'Impeccable', 'Gemini', 'Cursor'],
  },
  experience: [
    { organization: 'Cal Poly ITS', detail: 'Technical support for faculty and staff, including device troubleshooting, configuration, deployment, and documentation.' },
    { organization: 'fEMR Global', detail: 'Contributed to work on the formulary feature supporting medication inventory workflows.' },
    { organization: 'Cal Poly SHPE', detail: 'Tech Lead Officer supporting technical improvements to the organization’s website.' },
  ],
}
