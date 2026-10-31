import { Header } from './components/Header'
import { profile, projects } from './data/projects'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { useEffect, useState } from 'react'

function route() {
  return window.location.hash.replace(/^#\/?/, '') || '/'
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [currentRoute, setCurrentRoute] = useState(route)
  const projectId = currentRoute.match(/^projects\/([^/]+)$/)?.[1]
  const projectIndex = projects.findIndex((project) => project.id === projectId)
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(frame)
  }, [currentRoute])

  useEffect(() => {
    const updateRoute = () => setCurrentRoute(route())
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  return (
    <div className={`shell ${loaded ? 'is-ready' : ''}`}>
      <div className="loading-bar" aria-hidden="true" />
      <Header isProjectDetail={Boolean(project)} />
      <main>{project ? <ProjectDetail project={project} index={projectIndex} /> : <Home />}</main>
      <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></footer>
    </div>
  )
}
