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
            <p className="project-kicker">Client-Facing Case Study</p>
            <h1>{project.title}</h1>
            <p className="project-summary">{project.shortDescription}</p>
            <p className="project-value">{project.clientValue}</p>
            <div className="project-actions">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="detail-link detail-link-primary">
                  Open App
                </a>
              ) : null}
            </div>
          </div>
          <div className="project-hero-visual">
            <ProjectPreview variant={project.preview} imageSrc={project.imageSrc} imageAlt={project.imageAlt} framed />
          </div>
        </section>

        <section className="project-tour">
          <div className="project-section-heading">
            <p className="project-kicker">Product Tour</p>
            <h2>{project.tourTitle ?? 'What a client is looking at'}</h2>
            <p>
              {project.tourDescription ??
                'These are real screens from the running app. The captions explain the business workflow, not just the technology behind it.'}
            </p>
          </div>

          <div className="screenshot-gallery">
            {project.screenshots.map((screenshot, index) => (
              <article className={`screenshot-card ${index === 0 ? 'featured' : ''}`} key={screenshot.src}>
                <div className="screenshot-frame">
                  <img src={screenshot.src} alt={screenshot.alt} />
                </div>
                <div className="screenshot-copy">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-grid">
          <article className="detail-card full-width case-card">
            <p className="detail-eyebrow">My role</p>
            <h2>What I built</h2>
            <p>{project.role}</p>
          </article>
          <article className="detail-card">
            <p className="detail-eyebrow">Problem</p>
            <h2>The business gap</h2>
            <p>{project.problem}</p>
          </article>
          <article className="detail-card">
            <p className="detail-eyebrow">Solution</p>
            <h2>The product approach</h2>
            <p>{project.solution}</p>
          </article>
          <article className="detail-card">
            <p className="detail-eyebrow">Impact</p>
            <h2>Why it matters</h2>
            <p>{project.impact}</p>
          </article>
          <article className="detail-card">
            <p className="detail-eyebrow">Features</p>
            <h2>What it can do</h2>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card full-width">
            <p className="detail-eyebrow">Build</p>
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
