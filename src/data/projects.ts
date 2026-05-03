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
  category: 'ai' | 'general'
  shortDescription: string
  outcome: string
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
  buildTags: string[]
}

export const projects: ProjectRecord[] = [
  {
    id: 1,
    slug: 'cattle-record',
    title: 'Ranch Records App',
    category: 'general',
    shortDescription:
      'A phone-friendly ranch record tool for cattle, sold animals, equipment, and simple reporting.',
    outcome: 'Cuts down paper tracking by giving ranch operators one place to update records from the field.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/cattle-record.png',
    imageAlt: 'Ranch records dashboard showing herd totals, equipment, sync status, and reporting.',
    clientValue:
      'For a ranch client, this means records can be checked and updated from a phone, even when the work is happening away from a desk.',
    screenshots: [
      {
        src: '/project-screenshots/cattle-record.png',
        alt: 'Ranch records summary dashboard showing herd totals and sync status.',
        title: 'Owner dashboard',
        caption: 'A quick owner view of herd totals, equipment, and reporting so the ranch can be understood at a glance.',
      },
      {
        src: '/project-screenshots/cattle-record-inventory.png',
        alt: 'Ranch records inventory table with active cattle records.',
        title: 'Active cattle inventory',
        caption: 'A searchable list of active animals with the details an operator needs during daily work.',
      },
      {
        src: '/project-screenshots/cattle-record-assets.png',
        alt: 'Ranch records equipment and assets screen.',
        title: 'Equipment tracking',
        caption: 'Equipment stays in the same system as animal records, so important assets are not tracked separately.',
      },
    ],
    role: 'Designed and built the ranch workflow, phone-friendly screens, bilingual labels, field use, and reporting views.',
    problem:
      'Ranch records are often split between paper notes, spreadsheets, and memory, which makes it hard to check inventory or sales information when working away from a desk.',
    solution:
      'I built a cattle management app with simple entry, sold-animal history, equipment records, bilingual labels, and owner-friendly reports.',
    impact:
      'The result is a practical ranch tool that keeps records usable from the field and makes reporting easier later.',
    features: [
      'Cattle inventory, sold records, equipment, and activity history',
      'Works from a phone during ranch and field use',
      'Bilingual English and Spanish interface',
      'Simple reporting for accounting and review',
    ],
    buildTags: ['Mobile-friendly records', 'Offline field use', 'Bilingual labels', 'Owner reports'],
  },
  {
    id: 2,
    slug: 'apartments-record',
    title: 'Property Management Dashboard',
    category: 'general',
    shortDescription:
      'A private dashboard for property owners to manage buildings, units, residents, rent, maintenance, and reports.',
    outcome: 'Helps owners stop chasing rental details across notes, texts, and spreadsheets.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/apartments-record.png',
    imageAlt: 'Property management dashboard showing portfolio totals, rent collected, units, residents, and property cards.',
    clientValue:
      'For a property owner, this turns a small portfolio into one clear control panel for the details that matter every week.',
    screenshots: [
      {
        src: '/project-screenshots/apartments-record.png',
        alt: 'Property management portfolio dashboard with rent and property totals.',
        title: 'Portfolio overview',
        caption: 'A management view that shows buildings, units, rent collected, residents, and open maintenance in one place.',
      },
      {
        src: '/project-screenshots/apartments-record-units.png',
        alt: 'Property management units screen for building and unit records.',
        title: 'Unit-level records',
        caption: 'Each unit keeps resident count, contact details, language preference, and building notes easy to find.',
      },
      {
        src: '/project-screenshots/apartments-record-rent.png',
        alt: 'Property management rent tracking screen.',
        title: 'Rent tracking',
        caption: 'Rent status and payment history are easy to review without digging through general notes.',
      },
      {
        src: '/project-screenshots/apartments-record-maintenance.png',
        alt: 'Property management maintenance screen.',
        title: 'Maintenance workflow',
        caption: 'Maintenance work stays tied to the right building or unit, which makes follow-up easier.',
      },
    ],
    role: 'Built the property-management workflow, private access, record screens, and owner reporting views.',
    problem:
      'Small property portfolios can become messy when rent history, resident counts, contacts, and maintenance notes live in separate spreadsheets or messages.',
    solution:
      'I created a private property-management app that organizes buildings, units, contacts, rent entries, maintenance work, language preferences, and reports in one place.',
    impact:
      'The app makes the portfolio easier to scan, update, and explain because the important numbers and property details are visible immediately.',
    features: [
      'Portfolio dashboard with building, unit, resident, rent, and maintenance totals',
      'Unit-level contacts, rent history, preferred language, and resident counts',
      'Building and unit maintenance tracking',
      'Private access and simple reporting',
    ],
    buildTags: ['Private dashboard', 'Rent tracking', 'Maintenance follow-up', 'Owner reports'],
  },
  {
    id: 3,
    slug: 'home-server-infrastructure',
    title: 'Private Server Setup',
    category: 'general',
    shortDescription:
      'A private server setup for hosting internal tools, files, media, monitoring, backups, and secure remote access.',
    outcome:
      'Gives a small team a maintainable place to host private tools, storage, and internal workflows.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/server-topology.svg',
    imageAlt: 'Sanitized diagram of a private server setup with network, compute, storage, and client devices.',
    clientValue:
      'For a business owner, this shows I can think beyond the app: choose the right hardware, connect the pieces, organize the services, and leave behind something maintainable.',
    tourTitle: 'How the setup works',
    tourDescription:
      'These diagrams show the setup at a safe high level without exposing private addresses, passwords, dashboards, or configuration files.',
    screenshots: [
      {
        src: '/project-screenshots/server-topology.svg',
        alt: 'High-level topology diagram showing firewall, managed switch, mini-PC server, NAS node, hard drives, and client devices.',
        title: 'Physical topology',
        caption:
          'The setup includes the core pieces a small business server needs: network protection, switching, compute, storage, and trusted devices.',
      },
      {
        src: '/project-screenshots/server-workloads.svg',
        alt: 'Workload diagram showing media, productivity, automation, monitoring, storage, and private access layers.',
        title: 'Service layout',
        caption:
          'Services are grouped by purpose so files, dashboards, monitoring, automation, and private access are easier to manage.',
      },
      {
        src: '/project-screenshots/server-operations.svg',
        alt: 'Operations diagram showing documentation, manifests, backups, health checks, and incident notes.',
        title: 'Operational discipline',
        caption:
          'The system is documented and monitored so changes, storage, health checks, and fixes are easier to track over time.',
      },
    ],
    role:
      'Planned the physical setup, assembled the hardware, connected storage, organized the services, and documented how to operate it.',
    problem:
      'Small teams often need private files, internal apps, dashboards, automation, backups, and remote access without buying into an oversized IT setup.',
    solution:
      'I built a compact server setup with protected networking, dedicated compute, shared storage, private access, and clear operating notes.',
    impact:
      'The project shows practical setup work: choosing hardware, setting up services, planning storage, keeping access private, and documenting maintenance.',
    features: [
      'Physical install across networking, compute, and storage hardware',
      'Clear organization for files, apps, dashboards, and remote access',
      'Repeatable service setup for ongoing maintenance',
      'Storage planning for app data, media, and backups',
      'Private access that avoids exposing internal services directly',
      'Runbooks and notes so the setup can be maintained',
    ],
    buildTags: ['Private access', 'Shared storage', 'Hosted internal tools', 'Maintenance notes'],
  },
  {
    id: 4,
    slug: 'ai-document-review-queue',
    title: 'AI Document Review Queue',
    category: 'ai',
    shortDescription:
      'A review console that turns incoming contracts, invoices, tax forms, and certificates into scored tasks for staff.',
    outcome:
      'Cuts manual document triage by extracting fields, flagging missing information, and routing follow-up before a human reviewer decides.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/ai-document-review-queue.png',
    imageAlt:
      'AI document review queue showing intake documents, risk scoring, extracted fields, AI summary, and review actions.',
    clientValue:
      'For an office team, this means documents do not sit in email waiting for someone to read every page before knowing what needs attention.',
    tourTitle: 'How the review queue works',
    tourDescription:
      'The demo shows the operational workflow a team would use: intake, extraction, risk review, missing information, and final decision.',
    screenshots: [
      {
        src: '/project-screenshots/ai-document-review-queue.png',
        alt: 'AI document review queue dashboard with document list and extraction panel.',
        title: 'Document intake queue',
        caption:
          'Incoming documents are grouped into a reviewer queue with document type, company, risk, and confidence visible before opening the file.',
      },
      {
        src: '/project-screenshots/ai-document-review-queue.png',
        alt: 'AI summary and extracted fields for a reviewed document.',
        title: 'Extraction and risk flags',
        caption:
          'The selected document shows extracted fields, missing information, risk flags, and an AI summary that helps staff move faster.',
      },
      {
        src: '/project-screenshots/ai-document-review-queue.png',
        alt: 'Document review action controls for approve, reject, and request info.',
        title: 'Human review actions',
        caption:
          'The workflow keeps the final decision with the reviewer while the agent prepares the summary, next task, and routing recommendation.',
      },
    ],
    role:
      'Built the document queue prototype, review workflow, scoring model, missing-information logic, task routing, and polished operator UI.',
    problem:
      'Teams that receive invoices, certificates, contracts, applications, and tax forms often lose time opening every document just to find missing fields or decide who should handle it.',
    solution:
      'I built an AI-style review queue that extracts important fields, scores confidence, flags risk, identifies missing information, and recommends the next task owner.',
    impact:
      'The project demonstrates how AI can reduce manual document triage while still keeping approval, rejection, and request-for-info decisions under human control.',
    features: [
      'Document queue for contracts, invoices, COIs, W-9s, and addenda',
      'AI-style extraction of key business fields',
      'Confidence, risk, and missing-information scoring',
      'Recommended follow-up task and department owner',
      'Reviewer actions for approval, rejection, request info, and reset',
    ],
    buildTags: ['Document intake', 'Risk scoring', 'Missing-info checks', 'Review workflow'],
  },
  {
    id: 5,
    slug: 'ai-client-intake-agent',
    title: 'AI Client Intake Agent',
    category: 'ai',
    shortDescription:
      'A guided intake workflow that asks follow-up questions, scores urgency, summarizes the request, and prepares staff follow-up.',
    outcome:
      'Turns scattered calls and web requests into structured records that are easier for staff to review and prioritize.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/ai-client-intake-agent.png',
    imageAlt:
      'AI client intake agent dashboard with guided conversation, knowledge matches, intake summary, and review queue.',
    clientValue:
      'For a service business, this means fewer vague leads and fewer follow-up calls just to collect the basic details.',
    tourTitle: 'How the intake agent works',
    tourDescription:
      'The demo shows how an intake conversation becomes a structured staff-ready record with urgency, missing details, and next steps.',
    screenshots: [
      {
        src: '/project-screenshots/ai-client-intake-agent.png',
        alt: 'AI client intake dashboard hero and guided conversation.',
        title: 'Guided client conversation',
        caption:
          'The agent collects business context, request details, urgency, and missing information before staff review.',
      },
      {
        src: '/project-screenshots/ai-client-intake-agent.png',
        alt: 'AI client intake knowledge match and structured output panels.',
        title: 'Knowledge match and summary',
        caption:
          'The workflow matches the conversation against a small knowledge base and turns the discussion into a structured review summary.',
      },
      {
        src: '/project-screenshots/ai-client-intake-agent.png',
        alt: 'AI client intake internal dashboard for priority and follow-up.',
        title: 'Internal review queue',
        caption:
          'Staff can see urgency, completeness, request details, and follow-up status instead of reading scattered messages.',
      },
    ],
    role:
      'Built the intake prototype, conversation flow, knowledge matching, structured summary, priority logic, and staff dashboard UI.',
    problem:
      'Many small businesses receive leads through phone calls, forms, texts, and email, then spend extra time asking for the same missing details before work can start.',
    solution:
      'I built a guided intake agent that asks follow-up questions, checks the request against business rules, flags missing details, and prepares a staff-ready record.',
    impact:
      'The project shows how AI can make the first client touchpoint more useful by collecting better information before a human spends time on the lead.',
    features: [
      'Guided intake conversation',
      'RAG-style knowledge-base matching',
      'Structured request summary',
      'Priority and missing-information detection',
      'Internal dashboard for staff review and follow-up',
    ],
    buildTags: ['Client intake', 'Lead summary', 'Follow-up routing', 'Staff dashboard'],
  },
  {
    id: 6,
    slug: 'ai-appointment-scheduling-assistant',
    title: 'AI Appointment Scheduling Assistant',
    category: 'ai',
    shortDescription:
      'A scheduling assistant that collects appointment details, matches availability, confirms slots, and queues reminders.',
    outcome:
      'Helps service businesses book more appointments with less phone tag, fewer missed details, and cleaner staff handoff.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/ai-appointment-scheduling-assistant.png',
    imageAlt:
      'AI appointment scheduling assistant dashboard showing customer conversation, calendar availability, recommended openings, and booking summary.',
    clientValue:
      'For a service business, this means appointment requests can be captured, matched, and prepared for confirmation without repeated back-and-forth.',
    tourTitle: 'How the scheduling assistant works',
    tourDescription:
      'The demo shows a customer request becoming a matched appointment slot, staff-ready booking record, and reminder workflow.',
    screenshots: [
      {
        src: '/project-screenshots/ai-appointment-scheduling-assistant.png',
        alt: 'AI appointment scheduling assistant dashboard with appointment ready summary.',
        title: 'Appointment-ready summary',
        caption:
          'The assistant turns an intake conversation into a clear appointment candidate with technician, time, location, and reminder status.',
      },
      {
        src: '/project-screenshots/ai-appointment-scheduling-assistant.png',
        alt: 'Calendar availability and recommended appointment slots.',
        title: 'Availability matching',
        caption:
          'Openings are scored by technician fit, travel time, service type, and the customer\'s preferred timing.',
      },
      {
        src: '/project-screenshots/ai-appointment-scheduling-assistant.png',
        alt: 'Customer conversation and booking request queue.',
        title: 'Staff booking handoff',
        caption:
          'Staff can see the request, missing details, selected slot, and confirmation path instead of reading scattered messages.',
      },
    ],
    role:
      'Built the scheduling prototype, intake flow, availability matching, calendar strip, booking summary, reminder state, and staff queue UI.',
    problem:
      'Service businesses often lose time booking appointments because calls, web forms, texts, locations, preferred times, and follow-up details arrive in separate places.',
    solution:
      'I built an AI-style scheduling assistant that gathers the required details, recommends the best slot, shows why that slot fits, and prepares confirmation.',
    impact:
      'The project shows how AI can convert a messy appointment request into a staff-ready booking workflow with less manual back-and-forth.',
    features: [
      'Guided service and appointment intake',
      'Calendar availability and technician matching',
      'Travel-time and fit scoring',
      'Appointment-ready confirmation summary',
      'Missing-detail reminders and staff queue',
    ],
    buildTags: ['Appointment intake', 'Availability matching', 'Reminder workflow', 'Staff handoff'],
  },
  {
    id: 7,
    slug: 'ai-operations-report-generator',
    title: 'AI Operations Report Generator',
    category: 'ai',
    shortDescription:
      'A reporting tool that turns weekly calls, tasks, revenue, requests, and follow-up work into an owner-ready operations brief.',
    outcome:
      'Helps owners and managers see wins, risks, trends, and next steps without digging through dashboards or scattered updates.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/ai-operations-report-generator.png',
    imageAlt:
      'AI operations report generator dashboard showing weekly activity, generated owner report, source evidence, risks, opportunities, and action plan.',
    clientValue:
      'For a business owner, this turns messy weekly activity into a plain-English report they can read quickly and act on.',
    tourTitle: 'How the report generator works',
    tourDescription:
      'The demo shows how operational activity becomes a generated owner report, source-backed evidence, risks, opportunities, and next actions.',
    screenshots: [
      {
        src: '/project-screenshots/ai-operations-report-generator.png',
        alt: 'AI operations report generator with generated report and source evidence.',
        title: 'Generated owner report',
        caption:
          'The system produces a plain-English weekly brief with summary, wins, risks, next action, source coverage, and owner handoff controls.',
      },
      {
        src: '/project-screenshots/ai-operations-report-generator-dashboard.png',
        alt: 'AI operations dashboard showing weekly KPIs, risks, opportunities, and action plan.',
        title: 'Operations dashboard',
        caption:
          'Managers can review revenue, completed work, open follow-up, response time, risks, opportunities, and recommended actions in one place.',
      },
      {
        src: '/project-screenshots/ai-operations-report-generator-mobile.png',
        alt: 'Mobile view of AI operations report generator.',
        title: 'Mobile owner review',
        caption:
          'The same report stays readable on a phone so owners can review the week without opening spreadsheets or internal tools.',
      },
    ],
    role:
      'Built the reporting prototype, profile controls, generated report view, source evidence panel, KPI review, risk detection, opportunity detection, and action plan UI.',
    problem:
      'Owners and managers often have activity spread across calls, tasks, calendars, revenue sheets, reviews, and staff updates, which makes weekly reporting slow and inconsistent.',
    solution:
      'I built an AI-style report generator that reviews operational inputs, summarizes the week, explains the evidence behind the summary, and recommends next actions.',
    impact:
      'The project shows how AI can turn daily business activity into management visibility, faster owner updates, and clearer follow-up priorities.',
    features: [
      'Generated owner-ready weekly report',
      'Source evidence explaining risks, wins, and follow-up signals',
      'KPI snapshot for revenue, completed work, open follow-up, and response time',
      'Risk and opportunity detection',
      'Recommended action plan with owner handoff controls',
    ],
    buildTags: ['Owner reports', 'Source evidence', 'Risk detection', 'Action plan'],
  },
  {
    id: 8,
    slug: 'restaurant-order-voice-agent',
    title: 'Restaurant Phone Ordering Assistant',
    category: 'ai',
    shortDescription:
      'A phone-ordering assistant that answers calls, takes menu orders, confirms details, and shows activity in a staff dashboard.',
    outcome: 'Helps restaurants capture phone orders while staff stay focused on in-person customers.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/restaurant-order-voice-agent.png',
    imageAlt: 'Restaurant phone ordering dashboard showing call totals, order totals, success rate, revenue, and top menu items.',
    clientValue:
      'For a restaurant, this means phone orders can be captured while staff stay focused on customers in front of them.',
    screenshots: [
      {
        src: '/project-screenshots/restaurant-order-voice-agent.png',
        alt: 'Restaurant voice agent metrics dashboard.',
        title: 'Call and order overview',
        caption: 'The dashboard shows calls, confirmed orders, success rate, estimated revenue, and the menu items people order most.',
      },
      {
        src: '/project-screenshots/restaurant-order-history.png',
        alt: 'Restaurant voice agent order history screen.',
        title: 'Order history',
        caption: 'Staff can review completed calls, order details, and what the assistant understood from each customer.',
      },
      {
        src: '/project-screenshots/restaurant-menu.png',
        alt: 'Restaurant voice agent menu management screen.',
        title: 'Menu-aware ordering',
        caption: 'The assistant follows the menu, pricing, and options so orders can be checked before they are saved.',
      },
    ],
    role: 'Built the phone-ordering flow, menu logic, order history, and staff dashboard experience.',
    problem:
      'Restaurants often lose time and revenue handling phone orders manually, especially during busy periods when staff need to focus on in-person operations.',
    solution:
      'I created a phone assistant that can answer calls, capture spoken orders, check menu selections, confirm details, and save the order for staff review.',
    impact:
      'This project shows how AI can be connected to a real business process with clear screens for the people who still need to manage the work.',
    features: [
      'Inbound phone calls handled by an assistant',
      'Menu-aware order capture and confirmation',
      'Saved order history for staff review',
      'Dashboard for call activity, orders, and common menu items',
    ],
    buildTags: ['Phone call intake', 'Menu-aware orders', 'Staff dashboard', 'Order history'],
  },
  {
    id: 9,
    slug: 'carrier-sales-agent',
    title: 'Carrier Sales Dashboard',
    category: 'ai',
    shortDescription:
      'A logistics automation dashboard for tracking carrier calls, load activity, negotiation outcomes, and team performance.',
    outcome: 'Turns carrier calls and load activity into follow-up visibility for managers and sales teams.',
    preview: 'screenshot',
    imageSrc: '/project-screenshots/carrier-sales-automation.svg',
    imageAlt: 'Sanitized carrier sales dashboard showing calls, loads, success rate, and negotiation outcomes.',
    clientValue:
      'For a logistics team, this turns carrier outreach and load work into a dashboard managers can understand quickly.',
    screenshots: [
      {
        src: '/project-screenshots/carrier-sales-automation.svg',
        alt: 'Sanitized carrier sales summary dashboard.',
        title: 'Client operations dashboard',
        caption: 'Leadership can see call volume, load coverage, success rate, and negotiation outcomes in one view.',
      },
      {
        src: '/project-screenshots/carrier-sales-loads-client.svg',
        alt: 'Sanitized carrier sales load review screen.',
        title: 'Load review workflow',
        caption: 'The load review view gives teams one place to compare freight opportunities, routes, and carrier fit.',
      },
      {
        src: '/project-screenshots/carrier-sales-calls-client.svg',
        alt: 'Sanitized carrier sales call analytics screen.',
        title: 'Call follow-up',
        caption: 'Call records make follow-up easier by showing who was contacted, what happened, and what should happen next.',
      },
    ],
    role: 'Built the client-facing dashboard and workflow for carrier outreach, load review, call results, and follow-up.',
    problem:
      'Carrier sales teams need quick visibility into calls, loads, carrier checks, and negotiation activity, but that work often lives in disconnected tools.',
    solution:
      'I built a system that brings carrier checks, load review, negotiation support, and call results into one dashboard.',
    impact:
      'The project shows how an AI-assisted workflow can give a logistics team clearer follow-up, better reporting, and less manual tracking.',
    features: [
      'Carrier checks and load review',
      'Negotiation support and follow-up tracking',
      'Call history with dashboard metrics',
      'Secure access and deployment-ready setup',
    ],
    buildTags: ['Call tracking', 'Load review', 'Manager dashboard', 'Private access'],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
