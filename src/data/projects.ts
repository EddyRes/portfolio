export type Project = {
  id: string
  title: string
  repository: string
  year: string
  status: 'Selected work'
  summary: string
  technologies: string
  prompt: string
  links?: { label: string; href: string }[]
}

// Edit portfolio project facts here. Keep unknown facts as placeholders until verified.
export const projects: Project[] = [
  {
    id: 'pordle-io',
    title: 'Pordle.io',
    repository: 'Pordle.io',
    year: '—',
    status: 'Selected work',
    summary: 'Project overview coming soon.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
  },
  {
    id: 'calpolyshpe',
    title: 'calpolyshpe.org',
    repository: 'calpolyshpe/calpolyshpe.org',
    year: '—',
    status: 'Selected work',
    summary: 'Project overview coming soon.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
  },
  {
    id: 'lpl-financial-team-34',
    title: 'lpl-financial-team-34',
    repository: 'mattphanm/lpl-financial-team-34',
    year: '—',
    status: 'Selected work',
    summary: 'Project overview coming soon.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
  },
  {
    id: 'tic-tac-task',
    title: 'Tic-Tac-Task',
    repository: 'Meboy1000/Tic-Tac-Task',
    year: '—',
    status: 'Selected work',
    summary: 'Project overview coming soon.',
    technologies: 'Technologies to be added',
    prompt: 'Project overview coming soon.',
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
    'I’m a first-generation college student from San Diego, CA, pursuing a B.S. in Computer Science at Cal Poly San Luis Obispo. I enjoy building practical technology that makes complicated work easier—from interactive web products to tools that support real operational workflows.',
    'My work spans full-stack development, technical support, and collaborative engineering. I’m especially interested in opportunities where dependable systems, clear communication, and thoughtful user experiences meet.',
  ],
  skills: {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Racket', 'Kotlin'],
    tools: ['React', 'Next.js', 'Node.js', 'Vite', 'Express', 'Supabase', 'AWS', 'Git/GitHub', 'Jira', 'Figma'],
  },
  experience: [
    { organization: 'Cal Poly ITS', detail: 'Technical support for faculty and staff, including device troubleshooting, configuration, deployment, and documentation.' },
    { organization: 'fEMR Global', detail: 'Contributed to work on the formulary feature supporting medication inventory workflows.' },
    { organization: 'Cal Poly SHPE', detail: 'Tech Lead Officer supporting technical improvements to the organization’s website.' },
  ],
}
