import '../styles/Hero.css'

const heroScreens = [
  {
    src: '/project-screenshots/cattle-record.png',
    alt: 'CattleRecord ranch operations dashboard.',
  },
  {
    src: '/project-screenshots/apartments-record.png',
    alt: 'ApartmentRecord property management dashboard.',
  },
  {
    src: '/project-screenshots/inbox-concierge-inbox.png',
    alt: 'Inbox Concierge email triage dashboard.',
  },
  {
    src: '/project-screenshots/carrier-sales-agent.png',
    alt: 'Carrier Sales Agent logistics dashboard.',
  },
]

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-showcase" aria-hidden="true">
        {heroScreens.map((screen, index) => (
          <div className={`hero-screen hero-screen-${index + 1}`} key={screen.src}>
            <img src={screen.src} alt={screen.alt} />
          </div>
        ))}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Isaac Lucero</h1>
        <p className="hero-subtitle">Software Engineer for client-ready products, dashboards, and AI workflows.</p>
        <p className="hero-description">
          I build practical software that turns messy business processes into clear, usable tools people can understand quickly.
        </p>
        <a href="#work" className="cta-button" onClick={handleClick}>
          View Previous Work
        </a>
        <div className="hero-proof" aria-label="Portfolio highlights">
          <span>Real apps</span>
          <span>Business workflows</span>
          <span>AI automation</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
