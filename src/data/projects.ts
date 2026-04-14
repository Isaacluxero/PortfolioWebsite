export interface ProjectRecord {
  id: number
  slug: string
  title: string
  shortDescription: string
  outcome: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  preview: 'inbox' | 'restaurant' | 'carrier'
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
    slug: 'inbox-concierge',
    title: 'Inbox Concierge',
    shortDescription:
      'AI-powered email management platform with Google OAuth, Gmail sync, automatic classification, and natural-language hybrid search.',
    outcome: 'Shows full-stack product work across auth, backend APIs, data modeling, and AI search.',
    tags: ['React', 'Express', 'PostgreSQL', 'Prisma', 'OpenAI'],
    repoUrl: 'https://github.com/Isaacluxero/InboxConcierge',
    liveUrl: 'https://inboxconcierge-production.up.railway.app/login',
    preview: 'inbox',
    role: 'Designed and built a full-stack product experience around inbox organization and AI-powered retrieval.',
    problem:
      'Email is noisy, and most inbox tools still make users manually sort, search, and revisit messages that should be easy to retrieve with natural language.',
    solution:
      'I built a Gmail-connected platform that classifies messages into buckets, syncs account data, and chooses between structured, semantic, or hybrid search depending on the query.',
    impact:
      'The result is a more product-ready AI workflow that combines real auth, data pipelines, search infrastructure, and a usable front-end instead of just a standalone demo.',
    features: [
      'Google OAuth authentication with Gmail syncing',
      'AI classification into customizable inbox buckets',
      'Semantic and structured search combined in one query flow',
      'Analytics views for volume trends and email behavior',
    ],
    stack: ['React', 'TanStack Query', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI', 'Railway'],
  },
  {
    id: 2,
    slug: 'restaurant-order-voice-agent',
    title: 'Restaurant Order Voice Agent',
    shortDescription:
      'Voice ordering system that answers restaurant calls, handles conversational ordering, validates menu items, and stores order history in a dashboard.',
    outcome: 'Demonstrates AI workflow automation with telephony, backend orchestration, and persistent order tracking.',
    tags: ['FastAPI', 'Twilio', 'React', 'PostgreSQL', 'OpenAI'],
    repoUrl: 'https://github.com/Isaacluxero/RestaurantOrderVoiceAgent',
    preview: 'restaurant',
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
    id: 3,
    slug: 'carrier-sales-agent',
    title: 'Carrier Sales Agent',
    shortDescription:
      'Carrier operations platform for FMCSA verification, load search, negotiation workflows, call analytics, and a metrics dashboard.',
    outcome: 'Highlights TypeScript backend architecture, API design, security controls, and logistics-focused business logic.',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Railway'],
    repoUrl: 'https://github.com/Isaacluxero/CarrierSalesAgent',
    preview: 'carrier',
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
