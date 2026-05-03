import '../styles/Contact.css'

interface ContactLink {
  icon: string
  label: string
  href: string
}

const Contact = () => {
  const contactLinks: ContactLink[] = [
    { icon: '✉', label: 'Email', href: 'mailto:isaacluxero@gmail.com' },
    { icon: '☎', label: '(702) 768-9609', href: 'tel:+17027689609' },
    { icon: '⚡', label: 'GitHub', href: 'https://github.com/Isaacluxero' },
    { icon: '◆', label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-lucero-073563185/' },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Start A Conversation</h2>
        <p className="section-subtitle">
          Have a process you want automated or cleaned up? Send me a short description and I will tell you what I would build first.
        </p>

        <div className="contact-links">
          {contactLinks.map((link, index) => {
            const opensNewTab = link.href.startsWith('http')

            return (
              <a
                key={index}
                href={link.href}
                className="contact-link"
                target={opensNewTab ? '_blank' : undefined}
                rel={opensNewTab ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
