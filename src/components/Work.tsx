import { useEffect, useRef } from 'react'
import ProjectPreview from './ProjectPreview'
import { projects } from '../data/projects'
import '../styles/Work.css'

interface WorkProps {
  onNavigate: (path: string) => void
}

const Work = ({ onNavigate }: WorkProps) => {
  const cardsRef = useRef<HTMLDivElement>(null)

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

    const cards = cardsRef.current?.querySelectorAll('.work-card')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">A few projects that show the kind of product and automation work I can build for clients.</p>

        <div className="work-grid" ref={cardsRef}>
          {projects.map((project) => (
            <article key={project.id} className="work-card">
              <div className="work-image-placeholder">
                <ProjectPreview variant={project.preview} imageSrc={project.imageSrc} imageAlt={project.imageAlt} compact />
              </div>
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <p className="work-outcome">{project.outcome}</p>
                <div className="work-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  <button className="work-link work-link-primary" onClick={() => onNavigate(`/projects/${project.slug}`)}>
                    View Project
                  </button>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="work-link">
                      Open App
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
