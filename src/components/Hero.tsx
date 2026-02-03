import '../styles/Hero.css'

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
      <div className="hero-content">
        <h1 className="hero-title">Isaac Lucero</h1>
        <p className="hero-subtitle">Software Engineer</p>
        <p className="hero-description">Building elegant solutions to complex problems</p>
        <a href="#work" className="cta-button" onClick={handleClick}>
          View My Work
        </a>
      </div>
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
