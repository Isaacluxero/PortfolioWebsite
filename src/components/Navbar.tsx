import { useEffect, useState } from 'react'
import '../styles/Navbar.css'

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, 'home')}>
          IL
        </a>
        <ul className="nav-menu">
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'work')}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#journey"
              className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'journey')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
