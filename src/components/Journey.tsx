import { useEffect, useRef } from 'react'
import '../styles/Journey.css'

interface TimelineItem {
  id: number
  date: string
  title: string
  institution: string
  description: string
}

const Journey = () => {
  const itemsRef = useRef<HTMLDivElement>(null)

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: 'Year - Year',
      title: 'Degree Name',
      institution: 'Institution Name',
      description: 'Description of your studies, achievements, or focus areas.',
    },
    {
      id: 2,
      date: 'Year - Year',
      title: 'Degree Name',
      institution: 'Institution Name',
      description: 'Description of your studies, achievements, or focus areas.',
    },
    {
      id: 3,
      date: 'Year',
      title: 'Certification or Achievement',
      institution: 'Institution or Program Name',
      description: 'Brief description of the certification or achievement.',
    },
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

    const items = itemsRef.current?.querySelectorAll('.timeline-item')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">Education & milestones</p>

        <div className="journey-timeline" ref={itemsRef}>
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
