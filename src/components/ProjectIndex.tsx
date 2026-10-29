import { projects } from '../data/projects'

export function ProjectIndex() {
  return (
    <div className="project-index">
      {projects.map((project, index) => (
        <a className="project-row" href={`#/projects/${project.id}`} key={project.id}>
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-name">{project.title}</span>
          <span className="project-repo">{project.repository}</span>
          <span className="project-open" aria-label={`Open ${project.title}`}>↗</span>
        </a>
      ))}
    </div>
  )
}
