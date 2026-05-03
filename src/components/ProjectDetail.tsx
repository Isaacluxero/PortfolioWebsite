import { ProjectRecord } from '../data/projects'
import ProjectPreview from './ProjectPreview'
import '../styles/ProjectDetail.css'

interface ProjectDetailProps {
  project: ProjectRecord
  onNavigate: (path: string) => void
}

const ProjectDetail = ({ project, onNavigate }: ProjectDetailProps) => {
  const projectKicker = project.category === 'ai' ? 'AI Automation Demo' : 'Client Work'

  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <button className="back-link" onClick={() => onNavigate('/')}>
          Back to portfolio
        </button>

        <section className="project-hero-panel">
          <div className="project-hero-copy">
            <p className="project-kicker">{projectKicker}</p>
            <h1>{project.title}</h1>
            <p className="project-summary">{project.shortDescription}</p>
            <p className="project-value">{project.outcome}</p>
          </div>
          <div className="project-hero-visual">
            <ProjectPreview variant={project.preview} imageSrc={project.imageSrc} imageAlt={project.imageAlt} framed />
          </div>
        </section>

        <section className="project-story">
          <div className="story-lead">
            <p className="project-kicker">Why it mattered</p>
            <h2>{project.clientValue}</h2>
          </div>
          <div className="story-body">
            <div>
              <span>Before</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span>After</span>
              <p>{project.solution}</p>
            </div>
            <div>
              <span>Value</span>
              <p>{project.impact}</p>
            </div>
          </div>
        </section>

        <section className="project-tour">
          <div className="project-section-heading">
            <p className="project-kicker">Workflow</p>
            <h2>{project.tourTitle ?? 'What this looks like in practice'}</h2>
            <p>
              {project.tourDescription ??
                'These screens show the parts of the workflow a client or team would actually use day to day.'}
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

        <section className="project-wrapup">
          <article className="client-takeaway">
            <p className="project-kicker">Client takeaway</p>
            <h2>What this gave the user</h2>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="builder-note">
            <p className="project-kicker">My part</p>
            <h2>I handled the product thinking and the build.</h2>
            <p>{project.role}</p>
            <div className="detail-tags">
              {project.buildTags.map((item) => (
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
