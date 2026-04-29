import { useEffect, useRef } from 'react'
import '../styles/Journey.css'

interface TimelineItem {
  id: number
  category: 'Experience'
  date: string
  title: string
  institution: string
  location?: string
  description: string
  highlights?: string[]
}

const Journey = () => {
  const itemsRef = useRef<HTMLDivElement>(null)

  const education = {
    school: 'University of California, Berkeley',
    degree: 'B.A. Data Science, Minor in Computer Science',
    description:
      'Coursework in machine learning, AI, computer security, cloud computing, data science, and systems fundamentals.',
  }

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      category: 'Experience',
      date: 'April 2026 - Present',
      title: 'Forward Deployed Engineer',
      institution: 'Innovaccer',
      description:
        'Building and deploying client-facing healthcare technology solutions that connect product engineering with real operational workflows.',
      highlights: [
        'Work directly with implementation context to translate customer needs into usable product behavior.',
        'Bridge engineering, data, and stakeholder requirements in forward-deployed environments.',
      ],
    },
    {
      id: 2,
      category: 'Experience',
      date: 'Jun 2024 - Feb 2026',
      title: 'Full Stack Engineer II',
      institution: 'C3.ai via Paradyme Management',
      location: 'Redwood City, CA',
      description:
        'Worked on the Property Appraisal team building product experiences around AI and ML-driven property valuation workflows.',
      highlights: [
        'Built and improved React and Redux interfaces to make appraisal workflows faster and easier to use.',
        'Designed backend APIs and optimized algorithms to surface ML model outputs reliably in the product.',
      ],
    },
    {
      id: 3,
      category: 'Experience',
      date: 'Apr 2024 - Jun 2024',
      title: 'Software Developer',
      institution: 'ec2 Software',
      location: 'Las Vegas, NV',
      description:
        'Shipped product improvements for radiopharmaceutical management software used to track inventory and patient administration.',
      highlights: [
        'Redesigned core React and Redux interfaces for NMIS and RMIS.',
        'Improved usability enough to contribute to a 15% increase in customer satisfaction scores.',
      ],
    },
    {
      id: 4,
      category: 'Experience',
      date: 'April - August',
      title: 'Launch Intern',
      institution: 'EY',
      description:
        'Worked through EY Launch, developing professional consulting fundamentals across client communication, business analysis, and team-based delivery.',
      highlights: [
        'Built early experience translating business context into structured project work.',
        'Collaborated in a professional services environment with an emphasis on client readiness.',
      ],
    },
    {
      id: 5,
      category: 'Experience',
      date: 'Jan 2023 - Apr 2023',
      title: 'Software Engineer Intern',
      institution: 'Duffl',
      location: 'Berkeley, CA',
      description:
        'Worked across backend systems and integrations for a high-usage delivery product serving more than 100,000 active users.',
      highlights: [
        'Implemented authentication improvements in Python and Django.',
        'Added WebSocket-based real-time synchronization to reduce average data load time by 35%.',
      ],
    },
    {
      id: 6,
      category: 'Experience',
      date: 'Jun 2022 - Aug 2022',
      title: 'Software Engineer Intern',
      institution: 'Salesforce',
      location: 'San Francisco, CA',
      description:
        'Contributed to Cloud Atlas, a globally replicated data repository used for tenant routing and connection metadata.',
      highlights: [
        'Reduced lookup times for global task functions by 20% and eliminated timeout issues.',
        'Explored large-scale storage architecture and data movement across data centers and AWS.',
      ],
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
        <p className="section-subtitle">Product engineering, client-facing delivery, and technical foundations.</p>

        <div className="education-panel">
          <span className="education-label">Education</span>
          <div>
            <h3>{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <p>{education.description}</p>
          </div>
        </div>

        <div className="journey-timeline" ref={itemsRef}>
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-category">{item.category}</span>
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                {item.location ? <p className="timeline-location">{item.location}</p> : null}
                <p className="timeline-description">{item.description}</p>
                {item.highlights?.length ? (
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
