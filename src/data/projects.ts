export interface ProjectRecord {
  id: number
  slug: string
  title: string
  shortDescription: string
  outcome: string
  tags: string[]
  liveUrl?: string
  preview: 'inbox' | 'restaurant' | 'carrier' | 'screenshot'
  imageSrc?: string
  imageAlt?: string
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
    tags: ['Offline App', 'Ranch Operations', 'Inventory', 'Reports', 'PWA'],
    liveUrl: 'https://cattle-record.vercel.app',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/cattle-record.png',
    imageAlt: 'CattleRecord dashboard showing herd totals, equipment, sync status, and Google Sheets reporting.',
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
    tags: ['Property Management', 'Rent Tracking', 'Maintenance', 'Reports', 'Private App'],
    preview: 'screenshot',
    imageSrc: '/project-screenshots/apartments-record.png',
    imageAlt: 'ApartmentRecord dashboard showing portfolio totals, rent collected, units, residents, and property cards.',
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
    slug: 'inbox-concierge',
    title: 'Inbox Concierge',
    shortDescription:
      'An AI email assistant that connects to Gmail, sorts messages, and lets users search their inbox with everyday language.',
    outcome: 'Shows how AI can be wrapped into a real business workflow instead of staying a standalone demo.',
    tags: ['AI Assistant', 'Email Workflow', 'Search', 'Gmail', 'Analytics'],
    liveUrl: 'https://inboxconcierge-production.up.railway.app/login',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/inbox-concierge.png',
    imageAlt: 'Inbox Concierge sign-in screen for an AI-powered email management product.',
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
    id: 4,
    slug: 'restaurant-order-voice-agent',
    title: 'Restaurant Order Voice Agent',
    shortDescription:
      'A phone-ordering assistant that can answer calls, understand menu requests, confirm orders, and show activity in a staff dashboard.',
    outcome: 'Demonstrates practical AI automation for a business that still depends on phone calls.',
    tags: ['AI Phone Agent', 'Restaurant Ops', 'Orders', 'Dashboard', 'Automation'],
    preview: 'screenshot',
    imageSrc: '/project-screenshots/restaurant-order-voice-agent.png',
    imageAlt: 'Voice Agent Dashboard showing call totals, order totals, success rate, revenue, and top menu items.',
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
    id: 5,
    slug: 'carrier-sales-agent',
    title: 'Carrier Sales Agent',
    shortDescription:
      'A logistics dashboard for carrier verification, load activity, call outcomes, negotiation metrics, and sales performance.',
    outcome: 'Shows how custom software can turn operational calls and load activity into clear management visibility.',
    tags: ['Logistics', 'Operations', 'Sales Dashboard', 'Calls', 'Compliance'],
    preview: 'screenshot',
    imageSrc: '/project-screenshots/carrier-sales-agent.png',
    imageAlt: 'Carrier Sales Agent dashboard showing calls, loads, success rate, sentiment, outcomes, and load distribution.',
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
