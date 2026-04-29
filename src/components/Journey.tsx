import { useEffect, useRef } from 'react'
import '../styles/Journey.css'

interface TimelineItem {
  id: number
  category: 'Experience'
  date: string
  title: string
  institution: string
  logoSrc: string
  logoAlt: string
  logoClass?: string
  location?: string
  description: string
  highlights?: string[]
}

const LogoMark = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <span className={`logo-mark ${className ?? ''}`}>
    <img src={src} alt={alt} />
  </span>
)

const Journey = () => {
  const itemsRef = useRef<HTMLDivElement>(null)

  const education = {
    school: 'University of California, Berkeley',
    logoSrc: '/company-logos/berkeley.svg',
    logoAlt: 'UC Berkeley logo',
    logoClass: 'logo-cal',
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
      logoSrc: '/company-logos/innovaccer.svg',
      logoAlt: 'Innovaccer logo',
      logoClass: 'logo-innovaccer',
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
      logoSrc: '/company-logos/c3ai.svg',
      logoAlt: 'C3 AI logo',
      logoClass: 'logo-c3',
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
      logoSrc: '/company-logos/ec2.png',
      logoAlt: 'ec2 Software logo',
      logoClass: 'logo-ec2',
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
      date: 'April 2021 - August 2021',
      title: 'Launch',
      institution: 'EY',
      logoSrc: '/company-logos/ey.svg',
      logoAlt: 'EY logo',
      logoClass: 'logo-ey',
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
      date: 'Jun 2022 - Aug 2022',
      title: 'Software Engineer',
      institution: 'Salesforce',
      logoSrc: '/company-logos/salesforce.svg',
      logoAlt: 'Salesforce logo',
      logoClass: 'logo-salesforce',
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
          <div className="education-content">
            <div className="institution-row">
              <LogoMark src={education.logoSrc} alt={education.logoAlt} className={education.logoClass} />
              <p className="education-school">{education.school}</p>
            </div>
            <h3>{education.degree}</h3>
            <p>{education.description}</p>
          </div>
        </div>

        <div className="clearance-panel">
          <span className="education-label">Clearance</span>
          <div>
            <h3>Active TS/SCI clearance</h3>
            <p>Available for government, defense, and cleared technical work where trusted access matters.</p>
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
                <div className="institution-row">
                  <LogoMark src={item.logoSrc} alt={item.logoAlt} className={item.logoClass} />
                  <p className="timeline-institution">{item.institution}</p>
                </div>
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
