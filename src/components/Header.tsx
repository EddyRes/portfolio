import { useEffect, useState } from 'react'
import { profile } from '../data/projects'

const sections = [
  ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['education', 'Education'], ['interests', 'Interests'], ['contact', 'Contact'],
] as const

export function Header({ isProjectDetail }: { isProjectDetail: boolean }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    if (isProjectDetail) {
      setActive('')
      return
    }

    let frame = 0
    const syncActiveSection = () => {
      frame = 0
      const marker = window.innerHeight * 0.35
      let current: typeof sections[number][0] = sections[0][0]
      sections.forEach(([id]) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) current = id
      })
      setActive(current)
    }
    const requestSync = () => {
      if (!frame) frame = requestAnimationFrame(syncActiveSection)
    }
    requestSync()
    window.addEventListener('scroll', requestSync, { passive: true })
    window.addEventListener('resize', requestSync)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestSync)
      window.removeEventListener('resize', requestSync)
    }
  }, [isProjectDetail])

  return <header className="site-header">
    <a className="wordmark monogram" href="#top" aria-label={`${profile.name} — back to top`} onClick={() => setActive('')}><span aria-hidden="true">ER</span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav id="site-navigation" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {sections.map(([id, label]) => <a className={active === id ? 'is-active' : ''} href={`#${id}`} key={id} onClick={() => { setActive(id); setOpen(false) }}>{label}</a>)}
    </nav>
  </header>
}
