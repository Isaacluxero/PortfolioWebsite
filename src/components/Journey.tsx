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
      'Studied data, AI, security, cloud systems, and the software foundations behind reliable products.',
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
        'Building healthcare software with the people who use it, turning real operational needs into product improvements.',
      highlights: [
        'Work directly with customer context so the software fits real workflows.',
        'Connect product, data, and stakeholder needs during hands-on delivery.',
      ],
    },
    {
      id: 2,
      category: 'Experience',
      date: 'Jun 2024 - Feb 2026',
      title: 'Full Stack Engineer II',
      institution: 'C3.ai',
      logoSrc: '/company-logos/c3ai.svg',
      logoAlt: 'C3 AI logo',
      logoClass: 'logo-c3',
      location: 'Redwood City, CA',
      description:
        'Built tools that helped property appraisal teams review AI-assisted valuation work more clearly.',
      highlights: [
        'Improved product screens so appraisal work was faster and easier to review.',
        'Helped make model results easier for users to find, trust, and act on.',
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
        'Improved software used by medical teams to manage inventory and patient administration.',
      highlights: [
        'Redesigned key screens used in daily operations.',
        'Helped improve usability and customer satisfaction.',
      ],
    },
    {
      id: 4,
      category: 'Experience',
      date: 'Jun 2022 - Aug 2022',
      title: 'Software Engineer',
      institution: 'Salesforce',
      logoSrc: '/company-logos/salesforce.svg',
      logoAlt: 'Salesforce logo',
      logoClass: 'logo-salesforce',
      location: 'San Francisco, CA',
      description:
        'Worked on internal cloud systems that helped Salesforce route customer data reliably.',
      highlights: [
        'Helped make data lookups faster and more reliable.',
        'Worked with large-scale cloud systems across data centers and AWS.',
      ],
    },
    {
      id: 5,
      category: 'Experience',
      date: 'April 2021 - August 2021',
      title: 'Client Consulting Fellow',
      institution: 'EY',
      logoSrc: '/company-logos/ey.svg',
      logoAlt: 'EY logo',
      logoClass: 'logo-ey',
      description:
        'Developed early consulting experience around client communication, business analysis, and team delivery.',
      highlights: [
        'Learned how to turn business context into structured project work.',
        'Worked in a professional services environment focused on client readiness.',
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
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">A mix of client-facing delivery, product engineering, and practical software work.</p>

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
