import { type Project } from '../data/projects'

export function ProjectDetail({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-detail">
      <a className="back-link" href="#top">← Back To Homepage</a>
      <div className="detail-topline"><span>Record {String(index + 1).padStart(2, '0')}</span><span>{project.status}</span></div>
      <h1>{project.title}</h1>
      <p className="detail-repository">{project.repository}</p>
      <div className="detail-layout">
        <p className="detail-summary">{project.summary}</p>
        <div className="detail-placeholder">
          <p>{project.prompt}</p>
          <p className="placeholder-label">Content placeholder</p>
        </div>
      </div>
      <div className="record-meta"><span>Year <strong>{project.year}</strong></span><span>Documentation <strong>To be added</strong></span></div>
    </article>
  )
}
