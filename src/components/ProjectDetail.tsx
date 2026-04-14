import { ProjectRecord } from '../data/projects'
import ProjectPreview from './ProjectPreview'
import '../styles/ProjectDetail.css'

interface ProjectDetailProps {
  project: ProjectRecord
  onNavigate: (path: string) => void
}

const ProjectDetail = ({ project, onNavigate }: ProjectDetailProps) => {
  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <button className="back-link" onClick={() => onNavigate('/')}>
          Back to portfolio
        </button>

        <section className="project-hero-panel">
          <div className="project-hero-copy">
            <p className="project-kicker">Project Deep Dive</p>
            <h1>{project.title}</h1>
            <p className="project-summary">{project.shortDescription}</p>
            <p className="project-role">{project.role}</p>
            <div className="project-actions">
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="detail-link">
                View Code
              </a>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="detail-link detail-link-primary">
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
          <div className="project-hero-visual">
            <ProjectPreview variant={project.preview} />
          </div>
        </section>

        <section className="project-detail-grid">
          <article className="detail-card">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>
          <article className="detail-card">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </article>
          <article className="detail-card">
            <h2>Impact</h2>
            <p>{project.impact}</p>
          </article>
          <article className="detail-card">
            <h2>Key Features</h2>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card full-width">
            <h2>Tech Stack</h2>
            <div className="detail-tags">
              {project.stack.map((item) => (
                <span key={item} className="detail-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export default ProjectDetail
