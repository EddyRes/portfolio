import { useEffect, useRef, useState } from 'react'
import GradientASCII from '../components/GradientASCII'
import Folder from '../components/Folder'
import { profile, projects } from '../data/projects'

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg> }
function GitHubIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.67c-2.66.58-3.22-1.13-3.22-1.13-.44-1.1-1.07-1.39-1.07-1.39-.87-.59.07-.58.07-.58.97.07 1.47.98 1.47.98.86 1.45 2.26 1.03 2.81.79.09-.61.34-1.03.61-1.27-2.12-.24-4.35-1.05-4.35-4.68 0-1.03.38-1.87.99-2.53-.1-.24-.43-1.2.09-2.51 0 0 .81-.25 2.62.97a9.2 9.2 0 0 1 4.77 0c1.81-1.22 2.62-.97 2.62-.97.52 1.31.19 2.27.09 2.51.62.66.99 1.5.99 2.53 0 3.64-2.23 4.43-4.36 4.67.34.29.65.84.65 1.7v2.51c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" /></svg> }
function LinkedInIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.4H3.2V21h3.1V8.4ZM4.75 3A1.8 1.8 0 1 0 4.7 6.6 1.8 1.8 0 0 0 4.75 3ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.7 2v-1.8H9.5V21h3.1v-6.2c0-1.6.3-3.1 2.3-3.1 1.9 0 1.9 1.8 1.9 3.2V21H21v-7.2Z" /></svg> }
function EmailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm.7.7 7.8 6.1 7.8-6.1M4 18l5.9-5.8M20 18l-5.9-5.8" /></svg> }
function DownArrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6.5 13.5 12 19l5.5-5.5" /></svg> }

function ProjectFolder({ project, index, isPreviewed, onPreview }: { project: typeof projects[number]; index: number; isPreviewed: boolean; onPreview: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const openDetail = () => { window.location.hash = `/projects/${project.id}` }
  const openDetailFromLink = (event: React.MouseEvent<HTMLAnchorElement>) => { if (!isPreviewed) { event.preventDefault(); return }; event.preventDefault(); event.stopPropagation(); openDetail() }
  const openDetailFromKey = (event: React.KeyboardEvent<HTMLAnchorElement>) => { if (event.key === ' ' && isPreviewed) { event.preventDefault(); event.stopPropagation(); openDetail() } }
  return <div className="project-folder" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} onFocusCapture={() => setIsOpen(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false) }}><Folder label={project.title} items={[{ content: <article className={`folder-project${isPreviewed ? ' is-previewed' : ''}`}><span>Project {String(index + 1).padStart(2, '0')}</span><p className="folder-project-description">{project.folderDescription}</p><h3>{project.title}</h3><a href={`#/projects/${project.id}`} aria-label={`View ${project.title} project`} aria-disabled={!isPreviewed} tabIndex={isPreviewed ? 0 : -1} onClick={openDetailFromLink} onKeyDown={openDetailFromKey}>View Project <Arrow /></a></article> }]} mode="flap" variant="glass" color="#d9ff3f" paperColor="#f1f0eb" theme="dark" layout="spread" size={1.28} open={isOpen} onOpenChange={setIsOpen} onItemClick={onPreview} openOn="hover" draggable={false} zoomOnClick peek bounce={0.48} /></div>
}

function TypedSectionTitle({ sectionId, title, reducedMotion }: { sectionId: string; title: string; reducedMotion: boolean }) {
  const [typedLength, setTypedLength] = useState(reducedMotion ? title.length : 0)
  const started = useRef(false)

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section || started.current) return
    const startTyping = () => {
      if (started.current) return
      started.current = true
      if (reducedMotion) {
        setTypedLength(title.length)
        return
      }
      const timer = window.setInterval(() => setTypedLength((length) => {
        if (length >= title.length) {
          window.clearInterval(timer)
          return length
        }
        return length + 1
      }), 62)
    }
    if (reducedMotion) {
      startTyping()
      return
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        startTyping()
        observer.disconnect()
      }
    }, { threshold: 0.25 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [reducedMotion, sectionId, title])

  return <h2 id={`${sectionId}-heading`} className="section-typed" aria-label={title}><span aria-hidden="true">{reducedMotion ? title : title.slice(0, typedLength)}</span><b aria-hidden="true" /></h2>
}

export function Home() {
  const [typedLength, setTypedLength] = useState(0)
  const [aboutTypedLength, setAboutTypedLength] = useState(0)
  const [previewedProjectId, setPreviewedProjectId] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const aboutTypeStarted = useRef(false)
  useEffect(() => {
    if (reducedMotion) { setTypedLength(profile.name.length); return }
    const timer = window.setInterval(() => setTypedLength((length) => {
      if (length >= profile.name.length) { window.clearInterval(timer); return length }
      return length + 1
    }), 135)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  useEffect(() => {
    const section = document.getElementById('about')
    if (!section || aboutTypeStarted.current) return
    const startTyping = () => {
      if (aboutTypeStarted.current) return
      aboutTypeStarted.current = true
      if (reducedMotion) {
        setAboutTypedLength('About Me'.length)
        return
      }
      const timer = window.setInterval(() => setAboutTypedLength((length) => {
        if (length >= 'About Me'.length) {
          window.clearInterval(timer)
          return length
        }
        return length + 1
      }), 105)
    }
    if (reducedMotion) {
      startTyping()
      return
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        startTyping()
        observer.disconnect()
      }
    }, { threshold: 0.25 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return <>
    <section className="landing" id="top" aria-labelledby="intro-heading"><div className="hero-gradient-background" aria-hidden="true"><GradientASCII colors={['#113d1c', '#41b84f', '#d9ff3f', '#f6fff0']} shape="horizon" characters=" =+xX0S8#@" cellSize={15} density={.9} glyphOpacity={.92} gradientOpacity={.8} glow={.35} /></div><div className="landing-center"><h1 id="intro-heading" className="typed-name" aria-label={profile.name}><span aria-hidden="true">{profile.name.slice(0, typedLength)}</span><b aria-hidden="true" /></h1><p className="landing-subheader"><span className="subheader-item">B.S. in Computer Science <i aria-hidden="true">|</i></span><span className="subheader-item">IT &amp; SWE Professional <i aria-hidden="true">|</i></span><span className="subheader-item">Cal Poly</span></p><div className="landing-socials" aria-label="Professional links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-label="GitHub"><GitHubIcon /></a><a href="https://www.linkedin.com/in/eddyres" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-label="LinkedIn"><LinkedInIcon /></a><a href={`mailto:${profile.email}`} aria-label="Email Eddy Resendiz" data-label="Email"><EmailIcon /></a></div></div><a className="scroll-cue" href="#about"><span>Scroll down for more</span><DownArrow /></a></section>
    <section className="section about-section" id="about" aria-labelledby="about-heading"><div className="about-profile"><h2 id="about-heading" className="about-typed" aria-label="About Me"><span aria-hidden="true">{reducedMotion ? 'About Me' : 'About Me'.slice(0, aboutTypedLength)}</span><b aria-hidden="true" /></h2><div className="about-content"><div className="about-portrait-wrap"><img className="about-portrait" src="/images/eddy-headshot-circular.jpg" alt="Eddy Resendiz" /></div><div className="about-single">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></div></section>
    <section className="section skills-section" id="skills" aria-labelledby="skills-heading"><TypedSectionTitle sectionId="skills" title="Technical Skills" reducedMotion={reducedMotion} /><div className="skill-groups"><div className="skill-group"><h3 tabIndex={0}>Languages</h3><ul>{profile.skills.languages.map((skill) => <li key={skill} tabIndex={0}>{skill}</li>)}</ul></div><div className="skill-group"><h3 tabIndex={0}>Frameworks &amp; Tools</h3><ul>{profile.skills.tools.map((skill) => <li key={skill} tabIndex={0}>{skill}</li>)}</ul></div><div className="skill-group"><h3 tabIndex={0}>LLMs and Agents</h3><ul>{profile.skills.llmsAndAgents.map((skill) => <li key={skill} tabIndex={0}>{skill}</li>)}</ul></div></div></section>
    <section className="section work-section" id="projects" aria-labelledby="projects-heading"><TypedSectionTitle sectionId="projects" title="Some Stuff I’ve Worked On..." reducedMotion={reducedMotion} /><div className="project-folder-wrap"><p className="project-folder-note">Hover or focus a folder to preview it. Select a folder to view the project.</p><div className="project-folder-grid">{projects.map((project, index) => <ProjectFolder project={project} index={index} isPreviewed={previewedProjectId === project.id} onPreview={() => setPreviewedProjectId(project.id)} key={project.id} />)}</div></div></section>
    <section className="section experience-section" id="experience" aria-labelledby="experience-heading"><TypedSectionTitle sectionId="experience" title="Professional Experience" reducedMotion={reducedMotion} /><ol className="experience-list">{profile.experience.map((item) => <li key={item.organization}><h3>{item.organization}</h3><p>{item.detail}</p></li>)}</ol></section>
    <section className="section education-section" id="education" aria-labelledby="education-heading"><TypedSectionTitle sectionId="education" title="Education" reducedMotion={reducedMotion} /><p className="education-copy">{profile.education}</p></section>
    <section className="section interests-section" id="interests" aria-labelledby="interests-heading"><TypedSectionTitle sectionId="interests" title="The Interesting Side Of Me" reducedMotion={reducedMotion} /><div className="about-layout"><div className="about-copy"><p>{profile.about[1]}</p></div><aside className="beyond-code"><h3>Outside of work</h3><ul><li>Live music</li><li>Travel</li><li>Interior design</li></ul></aside></div></section>
    <section className="contact-section" id="contact" aria-labelledby="contact-heading"><TypedSectionTitle sectionId="contact" title="Let’s Connect" reducedMotion={reducedMotion} /><div className="contact-grid"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href="tel:+16195869259">{profile.phone}</a><a href="https://www.linkedin.com/in/eddyres" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a className="resume-button" href={profile.resume} target="_blank" rel="noreferrer">Resume</a></div></section>
  </>
}
