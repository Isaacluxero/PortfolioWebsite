import '../styles/ProjectPreview.css'

interface ProjectPreviewProps {
  variant: 'inbox' | 'restaurant' | 'carrier' | 'screenshot'
  compact?: boolean
  imageSrc?: string
  imageAlt?: string
}

const ProjectPreview = ({ variant, compact = false, imageSrc, imageAlt }: ProjectPreviewProps) => {
  if (variant === 'screenshot' && imageSrc) {
    return (
      <div className={`project-preview screenshot-preview ${compact ? 'compact' : ''}`}>
        <img src={imageSrc} alt={imageAlt ?? ''} />
      </div>
    )
  }

  return (
    <div className={`project-preview ${variant} ${compact ? 'compact' : ''}`}>
      {variant === 'inbox' ? (
        <>
          <div className="preview-topbar">
            <span className="preview-pill">Inbox Concierge</span>
            <span className="preview-status">Connected</span>
          </div>
          <div className="preview-layout two-column">
            <div className="preview-sidebar">
              <span className="sidebar-item active">Important</span>
              <span className="sidebar-item">Can Wait</span>
              <span className="sidebar-item">Auto-archive</span>
              <span className="sidebar-item">Newsletter</span>
            </div>
            <div className="preview-main">
              <div className="search-row">
                <span className="search-input">Find emails from Sarah about budget last week</span>
              </div>
              <div className="list-card">
                <span className="list-title">Budget review follow-up</span>
                <span className="list-meta">Sarah Kim • Important</span>
              </div>
              <div className="list-card">
                <span className="list-title">Updated Q2 planning spreadsheet</span>
                <span className="list-meta">Finance Team • Can Wait</span>
              </div>
              <div className="chart-strip">
                <span className="chart-bar tall"></span>
                <span className="chart-bar mid"></span>
                <span className="chart-bar short"></span>
                <span className="chart-bar mid"></span>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {variant === 'restaurant' ? (
        <>
          <div className="preview-topbar">
            <span className="preview-pill">Voice Orders</span>
            <span className="preview-status warm">Live Call</span>
          </div>
          <div className="preview-layout stacked">
            <div className="call-card">
              <span className="call-title">Call Transcript</span>
              <div className="speech-line user">Customer: I want two tacos and a horchata.</div>
              <div className="speech-line agent">Agent: Got it. Would you like any add-ons?</div>
              <div className="speech-line user">Customer: Add chips and salsa.</div>
            </div>
            <div className="order-summary">
              <span className="list-title">Order Summary</span>
              <div className="summary-row">
                <span>2x Tacos</span>
                <span>$8.00</span>
              </div>
              <div className="summary-row">
                <span>Horchata</span>
                <span>$3.50</span>
              </div>
              <div className="summary-row">
                <span>Chips & Salsa</span>
                <span>$4.00</span>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {variant === 'carrier' ? (
        <>
          <div className="preview-topbar">
            <span className="preview-pill">Carrier Sales Agent</span>
            <span className="preview-status cool">Dashboard</span>
          </div>
          <div className="preview-layout stacked">
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="metric-label">Calls</span>
                <strong>150</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Success Rate</span>
                <strong>80%</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Loads</span>
                <strong>45</strong>
              </div>
            </div>
            <div className="table-card">
              <div className="table-row header">
                <span>Carrier</span>
                <span>Status</span>
                <span>Rate</span>
              </div>
              <div className="table-row">
                <span>MC 123456</span>
                <span className="ok">Verified</span>
                <span>$2,350</span>
              </div>
              <div className="table-row">
                <span>MC 456789</span>
                <span className="pending">Review</span>
                <span>$2,180</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default ProjectPreview
