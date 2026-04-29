export interface ProjectScreenshot {
  src: string
  alt: string
  title: string
  caption: string
}

export interface ProjectRecord {
  id: number
  slug: string
  title: string
  shortDescription: string
  outcome: string
  liveUrl?: string
  preview: 'inbox' | 'restaurant' | 'carrier' | 'screenshot'
  imageSrc?: string
  imageAlt?: string
  screenshots: ProjectScreenshot[]
  clientValue: string
  tourTitle?: string
  tourDescription?: string
  role: string
  problem: string
  solution: string
  impact: string
  features: string[]
  stack: string[]
}

export const projects: ProjectRecord[] = [
  {
    id: 1,
    slug: 'cattle-record',
    title: 'CattleRecord',
    shortDescription:
      'A field-ready ranch record system for tracking cattle, sold animals, equipment, and reporting from a phone or browser.',
    outcome: 'Gives ranch operators a clean, offline-capable way to manage records without depending on spreadsheets in the field.',
    liveUrl: 'https://cattle-record.vercel.app',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/cattle-record.png',
    imageAlt: 'CattleRecord dashboard showing herd totals, equipment, sync status, and Google Sheets reporting.',
    clientValue:
      'For a ranch client, this is the difference between scattered paper records and a phone-friendly operating system that still works when there is no signal.',
    screenshots: [
      {
        src: '/project-screenshots/cattle-record.png',
        alt: 'CattleRecord summary dashboard showing herd totals and sync status.',
        title: 'Owner dashboard',
        caption: 'A quick summary of herd totals, sync state, and the Google Sheets report link so the operator can understand the ranch at a glance.',
      },
      {
        src: '/project-screenshots/cattle-record-inventory.png',
        alt: 'CattleRecord inventory table with active cattle records.',
        title: 'Active cattle inventory',
        caption: 'The working inventory view for tags, sex, descriptions, entry type, weights, and searchable ranch records.',
      },
      {
        src: '/project-screenshots/cattle-record-assets.png',
        alt: 'CattleRecord equipment and assets screen.',
        title: 'Equipment tracking',
        caption: 'Assets are tracked alongside animals so equipment value, identifiers, and locations stay connected to the operation.',
      },
    ],
    role: 'Built the product, data model, bilingual interface, offline storage, sync flow, and reporting workflow.',
    problem:
      'Ranch records are often split between paper notes, spreadsheets, and memory, which makes it hard to check inventory or sales information when working away from a desk.',
    solution:
      'I built an offline-first cattle management app with simple inventory entry, sold-animal tracking, equipment records, bilingual labels, and a reporting mirror for Google Sheets.',
    impact:
      'The result is a practical operations tool that can keep working on a phone without signal, then sync and report when the user is back online.',
    features: [
      'Cattle inventory, sold records, equipment, and activity history',
      'Offline-first browser storage for ranch and field use',
      'Bilingual English and Spanish interface',
      'Google Sheets reporting mirror for accounting and review',
    ],
    stack: ['React', 'TypeScript', 'IndexedDB', 'Dexie', 'PostgreSQL', 'Google Sheets', 'Vercel'],
  },
  {
    id: 2,
    slug: 'apartments-record',
    title: 'ApartmentRecord',
    shortDescription:
      'A private property-management dashboard for buildings, units, residents, rent status, maintenance, and owner reports.',
    outcome: 'Turns scattered rental notes into one clear operating view for property owners and managers.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/apartments-record.png',
    imageAlt: 'ApartmentRecord dashboard showing portfolio totals, rent collected, units, residents, and property cards.',
    clientValue:
      'For a property owner, this turns a small portfolio into a clean control panel for rent, residents, maintenance, and reporting.',
    screenshots: [
      {
        src: '/project-screenshots/apartments-record.png',
        alt: 'ApartmentRecord portfolio dashboard with rent and property totals.',
        title: 'Portfolio overview',
        caption: 'A management view that surfaces buildings, units, resident count, rent collected, and open maintenance in one place.',
      },
      {
        src: '/project-screenshots/apartments-record-units.png',
        alt: 'ApartmentRecord units screen for building and unit management.',
        title: 'Unit-level records',
        caption: 'Each unit can hold resident count, preferred language, contact details, and building-specific context.',
      },
      {
        src: '/project-screenshots/apartments-record-rent.png',
        alt: 'ApartmentRecord rent tracking screen.',
        title: 'Rent tracking',
        caption: 'Rent status and payment history are separated from general notes so owners can review cash flow quickly.',
      },
      {
        src: '/project-screenshots/apartments-record-maintenance.png',
        alt: 'ApartmentRecord maintenance screen.',
        title: 'Maintenance workflow',
        caption: 'Building and unit maintenance are tracked in the same app, which keeps operational work tied to the right property.',
      },
    ],
    role: 'Built the full management workflow, private login, database-backed records, seeded portfolio, and reporting views.',
    problem:
      'Small property portfolios can become messy when rent history, resident counts, contacts, and maintenance notes live in separate spreadsheets or messages.',
    solution:
      'I created a private apartment-management app that organizes buildings, units, contacts, rent entries, maintenance work, language preferences, and report exports in one place.',
    impact:
      'The app makes the portfolio easier to scan, update, and explain because the important business numbers and property details are visible immediately.',
    features: [
      'Portfolio dashboard with building, unit, resident, rent, and maintenance totals',
      'Unit-level contacts, rent history, preferred language, and resident counts',
      'Building and unit maintenance tracking',
      'Private session-based access and Google Sheets reporting',
    ],
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Google Sheets', 'Vercel'],
  },
  {
    id: 3,
    slug: 'home-server-infrastructure',
    title: 'Server & Homelab Infrastructure',
    shortDescription:
      'A private infrastructure buildout with a dedicated firewall, managed switching, compute, NAS storage, service hosting, monitoring, and secure remote access.',
    outcome:
      'Demonstrates the kind of practical systems work needed to install and operate internal servers for a small or mid-size business.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/server-topology.svg',
    imageAlt: 'Sanitized diagram of a private infrastructure setup with firewall, switch, compute, NAS, and storage.',
    clientValue:
      'For a business owner, this shows I can think beyond the app: plan the physical install, segment the network, choose hardware, wire storage correctly, and leave behind something maintainable.',
    tourTitle: 'How the infrastructure is put together',
    tourDescription:
      'These sanitized diagrams explain the physical setup and operating model without exposing private addresses, credentials, internal dashboards, or configuration files.',
    screenshots: [
      {
        src: '/project-screenshots/server-topology.svg',
        alt: 'High-level topology diagram showing firewall, managed switch, mini-PC server, NAS node, hard drives, and client devices.',
        title: 'Physical topology',
        caption:
          'The build is anchored by real infrastructure components: a firewall at the edge, a managed switch, a primary compute server, a NAS/media node, hard-drive-backed storage, and trusted client devices.',
      },
      {
        src: '/project-screenshots/server-workloads.svg',
        alt: 'Workload diagram showing media, productivity, automation, monitoring, storage, and private access layers.',
        title: 'Service layout',
        caption:
          'Services are organized by responsibility so media, files, automation, dashboards, monitoring, storage, and private access are easier to operate and troubleshoot.',
      },
      {
        src: '/project-screenshots/server-operations.svg',
        alt: 'Operations diagram showing documentation, manifests, backups, health checks, and incident notes.',
        title: 'Operational discipline',
        caption:
          'The system is treated like real infrastructure: documented topology, repeatable deployments, health checks, storage planning, incident notes, and a backlog for improvements.',
      },
    ],
    role:
      'Designed the physical layout, assembled the hardware stack, installed Linux, configured the container platform, connected storage, organized services, and documented the operating model.',
    problem:
      'Small teams often need private files, internal apps, dashboards, automation, backups, and remote access, but they do not need an oversized enterprise IT footprint to get there.',
    solution:
      'I built a compact infrastructure stack around a firewall, managed switch, mini-PC compute server, NAS-style node, hard-drive-backed storage, container orchestration, private networking, and clear operating documentation.',
    impact:
      'The project demonstrates practical infrastructure judgment: hardware selection, network design, Linux administration, service hosting, storage planning, remote access, documentation, and ongoing maintenance.',
    features: [
      'Physical install spanning firewall, managed switch, compute server, NAS/media node, and hard-drive-backed storage',
      'Clear networking, compute, storage, service hosting, and remote access responsibilities',
      'Lightweight Kubernetes orchestration for repeatable service deployment',
      'Persistent storage planning for app data, media libraries, and backup-oriented workflows',
      'Private access pattern designed to avoid exposing internal services directly',
      'Runbooks, inventory notes, and incident documentation for maintainability',
    ],
    stack: ['Linux', 'k3s', 'Docker', 'Kubernetes', 'Longhorn', 'NFS', 'Tailscale', 'Monitoring'],
  },
  {
    id: 4,
    slug: 'inbox-concierge',
    title: 'Inbox Concierge',
    shortDescription:
      'An AI email assistant that connects to Gmail, sorts messages, and lets users search their inbox with everyday language.',
    outcome: 'Shows how AI can be wrapped into a real business workflow instead of staying a standalone demo.',
    liveUrl: 'https://inboxconcierge-production.up.railway.app/login',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/inbox-concierge.png',
    imageAlt: 'Inbox Concierge sign-in screen for an AI-powered email management product.',
    clientValue:
      'For a busy operator, this shows how AI can remove inbox triage work and make old messages searchable by intent instead of exact keywords.',
    screenshots: [
      {
        src: '/project-screenshots/inbox-concierge.png',
        alt: 'Inbox Concierge login screen.',
        title: 'Secure Gmail entry point',
        caption: 'The product starts with Google login because the workflow depends on real inbox access, not manual file upload.',
      },
      {
        src: '/project-screenshots/inbox-concierge-inbox.png',
        alt: 'Inbox Concierge bucketed inbox view.',
        title: 'AI-sorted inbox',
        caption: 'Messages are grouped into useful buckets so a user can immediately separate important work from noise.',
      },
      {
        src: '/project-screenshots/inbox-concierge-search.png',
        alt: 'Inbox Concierge natural-language search results.',
        title: 'Natural-language search',
        caption: 'The user can ask for messages by topic, sender, and timeframe instead of remembering the exact subject line.',
      },
      {
        src: '/project-screenshots/inbox-concierge-insights.png',
        alt: 'Inbox Concierge email insights dashboard.',
        title: 'Email insights',
        caption: 'Analytics show volume, sender patterns, and inbox behavior so the product feels like a business tool, not just a search box.',
      },
    ],
    role: 'Designed and built a full-stack product experience around inbox organization and AI-powered retrieval.',
    problem:
      'Email gets noisy fast, and most inbox tools still force people to manually sort, search, and re-open messages that should be easy to find.',
    solution:
      'I built a Gmail-connected product that classifies messages, syncs account data, and chooses the right search strategy for each natural-language question.',
    impact:
      'The result is a more product-ready AI workflow that combines real login, data pipelines, search infrastructure, and a usable front end.',
    features: [
      'Google OAuth authentication with Gmail syncing',
      'AI classification into customizable inbox buckets',
      'Semantic and structured search combined in one query flow',
      'Analytics views for volume trends and email behavior',
    ],
    stack: ['React', 'TanStack Query', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI', 'Railway'],
  },
  {
    id: 5,
    slug: 'restaurant-order-voice-agent',
    title: 'Restaurant Order Voice Agent',
    shortDescription:
      'A phone-ordering assistant that can answer calls, understand menu requests, confirm orders, and show activity in a staff dashboard.',
    outcome: 'Demonstrates practical AI automation for a business that still depends on phone calls.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/restaurant-order-voice-agent.png',
    imageAlt: 'Voice Agent Dashboard showing call totals, order totals, success rate, revenue, and top menu items.',
    clientValue:
      'For a restaurant, this is a phone assistant that captures orders while staff stay focused on customers in front of them.',
    screenshots: [
      {
        src: '/project-screenshots/restaurant-order-voice-agent.png',
        alt: 'Restaurant voice agent metrics dashboard.',
        title: 'Call and revenue metrics',
        caption: 'The dashboard shows calls, confirmed orders, success rate, estimated revenue, and the menu items people order most.',
      },
      {
        src: '/project-screenshots/restaurant-order-history.png',
        alt: 'Restaurant voice agent order history screen.',
        title: 'Order history',
        caption: 'Staff can review completed calls, transcripts, and what the system understood from each customer conversation.',
      },
      {
        src: '/project-screenshots/restaurant-menu.png',
        alt: 'Restaurant voice agent menu management screen.',
        title: 'Menu-aware automation',
        caption: 'The agent is connected to a real menu structure, which matters because orders need validation, pricing, and modifiers.',
      },
    ],
    role: 'Built the backend orchestration, menu-driven voice flow, and dashboard experience for a phone-based ordering workflow.',
    problem:
      'Restaurants often lose time and revenue handling phone orders manually, especially during busy periods when staff need to focus on in-person operations.',
    solution:
      'I created a voice agent that can answer calls, capture spoken orders, validate menu selections, confirm the order with the customer, and persist order history for staff review.',
    impact:
      'This project shows how I approach practical AI automation: connecting voice infrastructure, business rules, persistence, and a dashboard into a product that could operate in a real workflow.',
    features: [
      'Twilio-powered inbound voice handling',
      'Speech-to-text, LLM intent parsing, and text-to-speech responses',
      'Menu validation and order persistence',
      'React dashboard for reviewing calls, transcripts, and order history',
    ],
    stack: ['FastAPI', 'Python', 'Twilio', 'React', 'TypeScript', 'PostgreSQL', 'OpenAI'],
  },
  {
    id: 6,
    slug: 'carrier-sales-agent',
    title: 'Carrier Sales Agent',
    shortDescription:
      'A logistics dashboard for carrier verification, load activity, call outcomes, negotiation metrics, and sales performance.',
    outcome: 'Shows how custom software can turn operational calls and load activity into clear management visibility.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/carrier-sales-agent.png',
    imageAlt: 'Carrier Sales Agent dashboard showing calls, loads, success rate, sentiment, outcomes, and load distribution.',
    clientValue:
      'For a logistics team, this turns calls, carrier checks, load searches, and negotiation outcomes into a management dashboard.',
    screenshots: [
      {
        src: '/project-screenshots/carrier-sales-agent.png',
        alt: 'Carrier Sales Agent summary dashboard.',
        title: 'Operations dashboard',
        caption: 'Leadership can see total calls, load volume, success rate, call outcomes, and equipment distribution without digging through logs.',
      },
      {
        src: '/project-screenshots/carrier-sales-loads.png',
        alt: 'Carrier Sales Agent available loads screen.',
        title: 'Available loads',
        caption: 'The load search view gives teams a focused place to review freight opportunities and route details.',
      },
      {
        src: '/project-screenshots/carrier-sales-calls.png',
        alt: 'Carrier Sales Agent call logs screen.',
        title: 'Call visibility',
        caption: 'Call records make the sales workflow measurable, including carrier identity, call outcome, duration, and sentiment.',
      },
    ],
    role: 'Built a logistics-focused internal platform that ties together backend services, dashboards, and operational workflows.',
    problem:
      'Carrier sales teams need quick visibility into compliance, loads, calls, and negotiation activity, but the workflow is often split across disconnected internal tools.',
    solution:
      'I built a full-stack system that centralizes carrier verification, load management, negotiation logic, and call analytics behind a secure TypeScript API and dashboard.',
    impact:
      'The project demonstrates stronger systems thinking: API boundaries, auth, rate limiting, migrations, containerization, and product-level visibility into operational metrics.',
    features: [
      'FMCSA carrier verification and compliance checks',
      'Load search and negotiation workflow tooling',
      'Call logging with analytics and metrics dashboards',
      'Secure REST APIs with API keys, rate limiting, and deployment support',
    ],
    stack: ['TypeScript', 'Express', 'PostgreSQL', 'Docker', 'React', 'Railway'],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
