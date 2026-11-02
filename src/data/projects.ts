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

export type Experience = {
  organization: string
  role: string
  dates: string
  location: string
  current?: boolean
  description: string
  highlights: string[]
  href: string
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
  resume: `${import.meta.env.BASE_URL}resume/Eddy-Resendiz-Resume.pdf`,
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
    {
      organization: 'Cal Poly Information Technology Services',
      role: 'ITS Student Assistant',
      dates: 'June 2026 – Present',
      location: 'San Luis Obispo, CA',
      current: true,
      description: 'Deliver frontline technical support for Cal Poly faculty and staff while helping configure, image, and deploy Windows and Apple computers, laptops, and printers for campus offices and labs. The role supports a campus IT environment where faculty and staff can request assistance through ITS’s Support Center.',
      highlights: [
        'Configure, image, and deploy Windows and Apple devices and printers.',
        'Troubleshoot technical issues for faculty and staff.',
        'Maintain accurate Jira service tickets and technical documentation in departmental Wiki and SharePoint resources.',
      ],
      href: 'https://tech.calpoly.edu',
    },
    {
      organization: 'Team fEMR Global',
      role: 'Software Engineer',
      dates: 'August 2026 – December 2026',
      location: 'San Luis Obispo, CA',
      description: 'Worked on fEMR Global’s formulary feature to improve medication-data access and inventory workflows for medical providers supporting international deployments. Team fEMR provides a free, open-source electronic medical records system for transient medical teams in low-resource settings.',
      highlights: [
        'Collaborated with a team of four engineers to implement CSV import/export and prior-trip inventory workflows.',
        'Helped reduce manual formulary setup for medical mission deployments.',
        'Tested and debugged 20+ formulary updates for accurate inventory tracking, out-of-stock prescription prevention, and pharmacist fulfillment workflows.',
        'Contributed to a product used across 11 countries, 60 deployments, and 37,500+ patients.',
      ],
      href: 'https://femr.global',
    },
    {
      organization: 'Cal Poly SHPE',
      role: 'Tech Lead Officer',
      dates: 'May 2024 – May 2026',
      location: 'San Luis Obispo, CA',
      description: 'Led technical improvements for Cal Poly SHPE’s chapter website, focusing on maintaining the existing JavaScript and React codebase while improving the member experience. The chapter helps connect Hispanic/Latinx STEM majors with companies and professional networks.',
      highlights: [
        'Took ownership of ongoing chapter website enhancements.',
        'Maintained and optimized the JavaScript and React codebase.',
        'Refreshed content and user experience through analytics-driven updates.',
        'Contributed to a 30% increase in new member sign-ups and a 20% increase in sponsorships.',
      ],
      href: 'https://www.calpolyshpe.org',
    },
  ] satisfies Experience[],
}
