import { useEffect, useState } from 'react'
import { profile } from '../data/projects'

const sections = [
  ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['about-me', 'About Me'], ['education', 'Education'], ['contact', 'Contact'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.3] })
    sections.forEach(([id]) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [])

  return <header className="site-header">
    <a className="wordmark monogram" href="#top" aria-label={`${profile.name} — back to top`}><span aria-hidden="true">ER</span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav id="site-navigation" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {sections.map(([id, label]) => <a className={active === id ? 'is-active' : ''} href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>
}
