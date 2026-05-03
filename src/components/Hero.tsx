import '../styles/Hero.css'

const heroScreens = [
  {
    src: '/project-screenshots/cattle-record.png',
    alt: 'Ranch records operations dashboard.',
  },
  {
    src: '/project-screenshots/apartments-record.png',
    alt: 'Property management dashboard.',
  },
  {
    src: '/project-screenshots/inbox-concierge-inbox.png',
    alt: 'AI email assistant triage dashboard.',
  },
  {
    src: '/project-screenshots/carrier-sales-automation.svg',
    alt: 'Carrier sales logistics dashboard.',
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
        <p className="hero-subtitle">AI automations and custom tools for messy business workflows.</p>
        <p className="hero-description">
          If your process is stuck in spreadsheets, phone calls, inboxes, or disconnected tools, I can turn it into something your team can actually use.
        </p>
        <a href="#work" className="cta-button" onClick={handleClick}>
          View Previous Work
        </a>
        <div className="hero-proof" aria-label="Portfolio highlights">
          <span>Real client work</span>
          <span>Clear dashboards</span>
          <span>Private workflows</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
