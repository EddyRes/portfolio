import { useEffect, useRef, useState } from 'react'
import GradientASCII from '../components/GradientASCII'
import Folder from '../components/Folder'
import FlexCarousel from '../components/FlexCarousel'
import { profile, projects } from '../data/projects'

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg> }
function GitHubIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.67c-2.66.58-3.22-1.13-3.22-1.13-.44-1.1-1.07-1.39-1.07-1.39-.87-.59.07-.58.07-.58.97.07 1.47.98 1.47.98.86 1.45 2.26 1.03 2.81.79.09-.61.34-1.03.61-1.27-2.12-.24-4.35-1.05-4.35-4.68 0-1.03.38-1.87.99-2.53-.1-.24-.43-1.2.09-2.51 0 0 .81-.25 2.62.97a9.2 9.2 0 0 1 4.77 0c1.81-1.22 2.62-.97 2.62-.97.52 1.31.19 2.27.09 2.51.62.66.99 1.5.99 2.53 0 3.64-2.23 4.43-4.36 4.67.34.29.65.84.65 1.7v2.51c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" /></svg> }
function LinkedInIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.4H3.2V21h3.1V8.4ZM4.75 3A1.8 1.8 0 1 0 4.7 6.6 1.8 1.8 0 0 0 4.75 3ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.7 2v-1.8H9.5V21h3.1v-6.2c0-1.6.3-3.1 2.3-3.1 1.9 0 1.9 1.8 1.9 3.2V21H21v-7.2Z" /></svg> }
function EmailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm.7.7 7.8 6.1 7.8-6.1M4 18l5.9-5.8M20 18l-5.9-5.8" /></svg> }
function DownArrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6.5 13.5 12 19l5.5-5.5" /></svg> }
function ExternalLinkIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8.5 8.5M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" /></svg> }
function GraduationCapIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-4 9 4-9 4-9-4Zm4 2.2V16c1.4 1.2 3.1 1.8 5 1.8s3.6-.6 5-1.8v-4.8M21 9v5" /></svg> }
function ShpeIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6.5" r="2.5" /><circle cx="5.5" cy="17" r="2.5" /><circle cx="18.5" cy="17" r="2.5" /><path d="m10 8.2-3 6.1m7-6.1 3 6.1M8 17h8" /></svg> }
function ScholarsIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2 4.5 4.9.6-3.6 3.4.9 4.8-4.2-2.4-4.2 2.4.9-4.8L5.1 8.1l4.9-.6L12 3Z" /><path d="M5 19.5h14" /></svg> }
function ColorStackIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-4 5 4 5m8-10 4 5-4 5M13.5 5 10.5 19" /><path d="M7 3.5h10" /></svg> }

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

const interestItems = [
  { src: '/images/interests/madonna-sunset.webp', alt: 'Sunset view from a mountain overlook above San Luis Obispo', title: 'Madonna Mountain Hike', caption: 'One of the best parts of Cal Poly is having so many beautiful hikes nearby. Madonna Mountain is easily one of my favorites.', rotateOnFocus: true },
  { src: '/images/interests/forest-overlook.webp', alt: 'Eddy standing on a rocky overlook surrounded by a pine forest', title: 'IdyllWild', caption: 'Went on a recent camping trip to IdyllWild with my family. My older brother shot this one on film, which makes it even cooler.', rotateOnFocus: false },
  { src: '/images/interests/redwood-camping.webp', alt: 'Tents set up beneath towering redwood trees', title: 'Redwood Camping', caption: 'One of my favorite camping trips was setting up in the middle of the Redwoods. Nothing beats waking up surrounded by trees like that.', rotateOnFocus: true },
  { src: '/images/interests/blood-orange-live.webp', alt: 'Blood Orange performing onstage at a live music event', title: 'Blood Orange Live', caption: 'Got to see one of my favorite artists ever, Blood Orange, at Camp Flog Gnaw ’24. Definitely a core memory.', rotateOnFocus: true },
  { src: '/images/interests/music-festival.webp', alt: 'Crowd gathered at an outdoor music festival at dusk', title: 'CRSSD Festival', caption: 'I loveee EDM, especially techno and trance. CRSSD is easily the best festival I’ve been to so far, but there are definitely more to come.', rotateOnFocus: true },
  { src: '/images/interests/nite-harts.webp', alt: 'Eddy and a friend at a nighttime live music event', title: 'NITEHARTS', caption: 'Got to see some of my favorite EDM artists, ISOxo and Knock2, in my own hometown. Dancing in the rain was actually crazy.', rotateOnFocus: false },
  { src: '/images/interests/friends-night-out.webp', alt: 'Eddy with friends during a social night out', title: 'Friends', caption: 'My friends are what make college worth it. You can usually catch us sipping a Pacifico at my favorite SLO bar, Frog and Peach.', rotateOnFocus: true },
  { src: '/images/interests/beach-sunset.webp', alt: 'Sunset over a rocky beach with people by the water', title: 'Windansea Beach', caption: 'Windansea is one of my favorite beaches in San Diego. I spent most of my summer here throwing a frisbee around and hanging out with friends.', rotateOnFocus: true },
  { src: '/images/interests/eggslut.webp', alt: 'Egg sandwiches, hash browns, and bread served on a wooden table', title: 'EGGSLUT', caption: 'I’m a huge foodie and love trying new spots. I’m a sucker for breakfast sandwiches, and honestly, nothing has topped Eggslut for me yet.', rotateOnFocus: true },
  { src: '/images/interests/vietnamese-food.webp', alt: 'Vietnamese noodles, dumplings, and herbs served at a table', title: 'Pho Time', caption: 'Pho is my comfort food, so I’m probably eating it at least once a week. Mr. Noods in Arroyo Grande has been my go-to pho spot in SLO.', rotateOnFocus: true },
  { src: '/images/interests/philadelphia.webp', alt: 'Eddy with fellow students at a SHPE conference in Philadelphia', title: 'SHPE 2026', caption: 'At the 2026 SHPE National Convention in Philadelphia, my team competed in the National Cybersecurity Challenge from 8 AM to 4 PM. We competed against chapters from all over the country and got to bond with students from the University of Illinois Chicago.', rotateOnFocus: true },
  { src: '/images/interests/mexico-library.webp', alt: 'Interior of the Biblioteca Vasconcelos library in Mexico City', title: 'Mexico City Library', caption: 'Whenever I get the chance, I make sure to travel. My solo trip to Mexico City changed my life, and visiting La Biblioteca Vasconcelos really sparked my interest in interior design.', rotateOnFocus: true },
]

// The upstream JavaScript component leaves several optional lens props untyped.
const FlexCarouselComponent = FlexCarousel as any

export function Home() {
  const [typedLength, setTypedLength] = useState(0)
  const [aboutTypedLength, setAboutTypedLength] = useState(0)
  const [previewedProjectId, setPreviewedProjectId] = useState<string | null>(null)
  const [selectedInterestIndex, setSelectedInterestIndex] = useState<number | null>(null)
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
    if (selectedInterestIndex === null) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedInterestIndex(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedInterestIndex])

  const selectedInterest = selectedInterestIndex === null ? null : interestItems[selectedInterestIndex]

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
    <section className="section experience-section" id="experience" aria-labelledby="experience-heading"><TypedSectionTitle sectionId="experience" title="Professional Experience" reducedMotion={reducedMotion} /><ol className="experience-list">{profile.experience.map((item) => <li key={item.organization}><article className="experience-card"><header className="experience-card-header"><div className="experience-heading-group"><div className="experience-role-line"><p className="experience-role">{item.role}</p>{item.current && <span className="current-role">Current role</span>}</div><h3>{item.organization}</h3></div><dl className="experience-meta"><div><dt>Dates</dt><dd>{item.dates}</dd></div><div><dt>Location</dt><dd>{item.location}</dd></div></dl></header><p className="experience-description">{item.description}</p><div className="experience-highlights"><h4>Highlights</h4><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><a className="organization-link" href={item.href} target="_blank" rel="noopener noreferrer">Visit Organization <ExternalLinkIcon /></a></article></li>)}</ol></section>
    <section className="section education-section" id="education" aria-labelledby="education-heading"><TypedSectionTitle sectionId="education" title="Education" reducedMotion={reducedMotion} /><article className="education-card" tabIndex={0}><header className="education-card-header"><div className="education-heading-group"><span className="education-icon"><GraduationCapIcon /></span><div><h3>California Polytechnic State University, San Luis Obispo</h3><p className="education-degree">Bachelor of Science in Computer Science</p></div></div><dl className="education-meta"><div><dt>Attendance</dt><dd>September 2023 – May 2027</dd></div><div><dt>Graduation</dt><dd>May 2027</dd></div></dl></header><div className="education-details"><section className="education-coursework" aria-labelledby="coursework-heading"><h4 id="coursework-heading">Relevant Coursework</h4><ul><li>Data Structures &amp; Algorithms</li><li>Object Oriented Programming</li><li>Systems Programming</li><li>Privacy &amp; Security</li><li>Database Systems</li><li>Programming Languages</li><li>Operating Systems</li></ul></section><section className="education-involvement" aria-labelledby="involvement-heading"><h4 id="involvement-heading">Campus Involvement</h4><ul><li className="involvement-item involvement-feature"><span className="involvement-icon"><ShpeIcon /></span><div className="involvement-content"><div className="involvement-title"><h5>Cal Poly SHPE</h5><p>Tech Lead Officer <span>·</span> May 2024 – May 2026</p></div><p className="involvement-description">Led technical improvements across Cal Poly SHPE’s online presence, owning the chapter website and maintaining its JavaScript and React codebase. Refreshed website content and user experience through analytics-driven updates.</p><ul className="involvement-highlights"><li>Contributed to a 30% increase in new-member sign-ups and a 20% increase in sponsorships.</li><li>Helped host bi-weekly professional meetings with major engineering companies.</li><li>Participated in local community outreach supporting SHPE’s mission to connect Hispanic/Latinx students with STEM, professional development, and community opportunities.</li></ul></div></li><li className="involvement-item"><span className="involvement-icon"><ScholarsIcon /></span><div className="involvement-content"><div className="involvement-title"><h5>Cal Poly Scholars</h5><p>Cal Poly Scholar</p></div><p className="involvement-description">A university-wide scholarship and support program for high-achieving students from California schools with low-income backgrounds. It provides financial, academic, and community support through a network of campus resources; Scholars are selected through Cal Poly’s financial-aid process and maintain academic progress and program commitments.</p></div></li><li className="involvement-item"><span className="involvement-icon"><ColorStackIcon /></span><div className="involvement-content"><div className="involvement-title"><h5>ColorCoded by ColorStack</h5><p>Active Member</p></div><p className="involvement-description">Active member of ColorCoded by ColorStack at Cal Poly, a community supporting underrepresented students in tech through mentorship, professional development, workshops, networking, and career resources.</p></div></li></ul></section></div></article></section>
    <section className="section interests-section" id="interests" aria-labelledby="interests-heading"><TypedSectionTitle sectionId="interests" title="The Interesting Side Of Me" reducedMotion={reducedMotion} /><div className="interests-copy"><p>Beyond work and school, I value the experiences that shaped my work ethic and perspective. Growing up, I worked hands-on jobs as a busser and line cook, where I learned the importance of consistency, perseverance, teamwork, and taking pride in the details. Those experiences continue to influence how I approach technical work, collaboration, and personal goals today.</p><p>Outside of school and work, I live an active and social lifestyle. I enjoy going to the gym and spending time outdoors whenever I can. I played soccer throughout my life and volleyball in high school, and I still enjoy staying active. On any given weekend, I am probably at a live music event—whether that is a music festival or a more intimate show.</p></div><div className={`interests-carousel${selectedInterest ? ' is-image-focused' : ''}`}><FlexCarouselComponent items={interestItems} preset="liquid" intro="rise" fit="portrait" cardHeight={0.52} gap={12} radius={8} squeeze={0.2} focusOnClick={false} captions onItemClick={(index: number) => setSelectedInterestIndex(index)} />{selectedInterest && <div className="interest-focus-overlay" role="dialog" aria-modal="false" aria-label={`${selectedInterest.title} photo`}><button className="interest-focus-backdrop" type="button" onClick={() => setSelectedInterestIndex(null)} aria-label="Close focused photo" /><article className="interest-focus-card"><button className="interest-focus-close" type="button" onClick={() => setSelectedInterestIndex(null)} aria-label="Close focused photo"><span aria-hidden="true">×</span></button><div className="interest-focus-copy"><p>Picture {String(selectedInterestIndex! + 1).padStart(2, '0')}/12</p><h3>{selectedInterest.title}</h3><p>{selectedInterest.caption}</p></div><div className={`interest-focus-media${selectedInterest.rotateOnFocus ? ' is-rotated' : ''}`}><img src={selectedInterest.src} alt={selectedInterest.alt} /></div></article></div>}</div></section>
    <section className="contact-section" id="contact" aria-labelledby="contact-heading"><TypedSectionTitle sectionId="contact" title="Let’s Connect" reducedMotion={reducedMotion} /><p className="contact-intro">I’m always open to chatting about the projects I’ve built, anything tech related, and new ideas. I’m also actively interested in discussing Spring/Summer/Fall 2027 career opportunities across software, IT, cloud infrastructure, and data-focused roles. Feel free to reach out!</p><div className="landing-socials contact-socials" aria-label="Contact links"><a href="https://github.com/EddyRes" target="_blank" rel="noreferrer" aria-label="GitHub" data-label="GitHub"><GitHubIcon /></a><a href="https://www.linkedin.com/in/eddyres" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-label="LinkedIn"><LinkedInIcon /></a><a href="mailto:eduardoresendizmun@gmail.com" aria-label="Email Eddy Resendiz" data-label="Email"><EmailIcon /></a></div></section>
  </>
}
