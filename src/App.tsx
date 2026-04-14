import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { getProjectBySlug } from './data/projects'
import './App.css'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [activeSection, setActiveSection] = useState('home')

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setPathname(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const handleScroll = () => {
      const sections = ['home', 'work', 'journey', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  if (pathname.startsWith('/projects/')) {
    const slug = pathname.replace('/projects/', '')
    const project = getProjectBySlug(slug)

    if (project) {
      return <ProjectDetail project={project} onNavigate={navigate} />
    }

    return (
      <main className="project-detail-page">
        <div className="project-detail-shell">
          <button className="back-link" onClick={() => navigate('/')}>
            Back to portfolio
          </button>
          <section className="detail-card">
            <h2>Project not found</h2>
            <p>The page you tried to open does not exist.</p>
          </section>
        </div>
      </main>
    )
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Work onNavigate={navigate} />
      <Journey />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
