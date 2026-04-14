import '../styles/Contact.css'

interface ContactLink {
  icon: string
  label: string
  href: string
}

const Contact = () => {
  const contactLinks: ContactLink[] = [
    { icon: '✉', label: 'Email', href: 'mailto:isaacluxero@gmail.com' },
    { icon: '⚡', label: 'GitHub', href: 'https://github.com/Isaacluxero' },
    { icon: '◆', label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-lucero-073563185/' },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something together</p>

        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="contact-link"
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
