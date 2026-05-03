import '../styles/Services.css'

const services = [
  {
    title: 'AI call and intake workflows',
    text: 'Turn missed calls, repeated questions, and manual intake into a guided workflow that captures the details your team needs.',
  },
  {
    title: 'Dashboards from messy operations',
    text: 'Replace scattered spreadsheets, notes, and status updates with one place to see what is happening and what needs attention.',
  },
  {
    title: 'Private business tools',
    text: 'Build internal apps for the way your team actually works, with access kept private when the workflow or client data is sensitive.',
  },
  {
    title: 'AI search and triage',
    text: 'Make email, records, or internal information easier to sort and search using plain-language questions.',
  },
  {
    title: 'Client-ready reporting',
    text: 'Create clean views owners and managers can use to review activity, follow up faster, and make better decisions.',
  },
  {
    title: 'Reliable internal setup',
    text: 'Set up the servers, storage, access, and documentation needed to keep private tools maintainable after launch.',
  },
]

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-heading">
          <h2>Ways I Help</h2>
          <p>
            I work best where a business process is important but still too manual, scattered, or hard to see clearly.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="privacy-note">
          <span>Privacy-aware delivery</span>
          <p>
            I treat client work as private by default. Public portfolio pages show sanitized workflows and outcomes, not private apps, credentials, customer data, or internal links.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
