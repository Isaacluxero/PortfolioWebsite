import { useEffect, useRef } from 'react'
import '../styles/Work.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
}

const Work = () => {
  const cardsRef = useRef<HTMLDivElement>(null)

  const placeholderProjects: Project[] = [
    { id: 1, title: 'Project Title', description: 'Project description will appear here', tags: ['Coming Soon'] },
    { id: 2, title: 'Project Title', description: 'Project description will appear here', tags: ['Coming Soon'] },
    { id: 3, title: 'Project Title', description: 'Project description will appear here', tags: ['Coming Soon'] },
    { id: 4, title: 'Project Title', description: 'Project description will appear here', tags: ['Coming Soon'] },
  ]

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
        <p className="section-subtitle">Projects and creations coming soon</p>

        <div className="work-grid" ref={cardsRef}>
          {placeholderProjects.map((project) => (
            <div key={project.id} className="work-card placeholder">
              <div className="work-image-placeholder">
                <span className="placeholder-icon">{String(project.id).padStart(2, '0')}</span>
              </div>
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
