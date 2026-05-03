import { useEffect, useRef } from 'react'
import ProjectPreview from './ProjectPreview'
import { projects } from '../data/projects'
import '../styles/Work.css'

interface WorkProps {
  onNavigate: (path: string) => void
}

const Work = ({ onNavigate }: WorkProps) => {
  const workRef = useRef<HTMLDivElement>(null)
  const aiProjects = projects.filter((project) => project.category === 'ai')
  const generalProjects = projects.filter((project) => project.category === 'general')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const cards = workRef.current?.querySelectorAll('.work-card')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="work" className="work-section">
      <div className="container" ref={workRef}>
        <h2 className="section-title">AI Automations</h2>
        <p className="section-subtitle">Examples of tools that answer calls, organize email, track work, and give teams a clearer view of what is happening.</p>

        <div className="work-grid">
          {aiProjects.map((project) => (
            <article key={project.id} className="work-card">
              <div className="work-image-placeholder">
                <ProjectPreview variant={project.preview} imageSrc={project.imageSrc} imageAlt={project.imageAlt} compact />
              </div>
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <p className="work-outcome">{project.outcome}</p>
                <div className="work-links">
                  <button className="work-link work-link-primary" onClick={() => onNavigate(`/projects/${project.slug}`)}>
                    View Project
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-secondary">
          <div className="work-secondary-heading">
            <h3>General Dev Work</h3>
            <p>Other custom software and setup work for teams that need reliable tools, not another spreadsheet.</p>
          </div>

          <div className="work-grid work-grid-secondary">
            {generalProjects.map((project) => (
              <article key={project.id} className="work-card work-card-secondary">
                <div className="work-image-placeholder">
                  <ProjectPreview variant={project.preview} imageSrc={project.imageSrc} imageAlt={project.imageAlt} compact />
                </div>
                <div className="work-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <p className="work-outcome">{project.outcome}</p>
                  <div className="work-links">
                    <button className="work-link work-link-primary" onClick={() => onNavigate(`/projects/${project.slug}`)}>
                      View Project
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
