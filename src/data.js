// ── Portfolio Data ────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  'React 18', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL',
  'Docker', 'AWS Lambda', 'GPT-4o', 'M-Pesa API', 'Android (Java)',
  'Tailwind CSS', 'Redis', 'Kubernetes', 'JWT / RBAC', 'WebSockets',
  'Claude AI', 'CI/CD', 'Spring Boot', 'PHP Laravel', 'MongoDB',
  'Rust', 'Systems Design', 'Microservices', 'Load Balancing',
  'Terraform', 'Prometheus', 'Grafana', 'Message Queues', 'Event-Driven',
];

export const NAV_LINKS = [
  { label: 'Work',    id: 'work'    },
  { label: 'About',   id: 'about'   },
  { label: 'Skills',  id: 'skills'  },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];

export const CONSOLE_LINES = [
  { label: 'STATUS',     value: 'Available for hire',       color: '#22C55E' },
  { label: 'LOCATION',   value: 'Nairobi, Kenya 🇰🇪',        color: '#F59E0B' },
  { label: 'REMOTE',     value: 'US / EU / Global ✓',       color: '#64748B' },
  { label: 'STACK',      value: 'Full-Stack + Backend + AI', color: '#F59E0B' },
  { label: 'EXPERIENCE', value: '5+ Years',                  color: '#F59E0B' },
  { label: 'FOCUS',      value: 'African markets',           color: '#64748B' },
];

export const HERO_STATS = [
  ['7+', 'Apps Shipped'],
  ['5+', 'Years'],
  ['10+', 'Tech Stack'],
];

export const PROJECTS = [
  {
    id: '01',
    title: 'Medithrex Medical Supplies',
    category: 'E-Commerce · Healthtech',
    desc: 'Kenyan medical & laboratory equipment platform. M-Pesa Daraja payments, Africa\'s Talking SMS, strict black/yellow brand identity, and a 20-feature roadmap.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'M-Pesa', 'Neon DB', 'REST API'],
    accent: '#F59E0B',
    github: 'https://github.com/Cajuki',
    live: 'https://medithrex.site',
  },
  {
    id: '02',
    title: 'ClinicFlow AI',
    category: 'SaaS · Healthcare · AI',
    desc: 'Multi-tenant healthcare SaaS for USA, UK, Canada & Africa. GPT-4o AI features, Stripe, Twilio, full RBAC, guided CSV onboarding, and OTP patient portal.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'GPT-4o', 'Stripe', 'Twilio'],
    accent: '#06B6D4',
    github: 'https://github.com/Cajuki',
    live: '#',
  },
  {
    id: '03',
    title: 'Plan&Play Life OS',
    category: 'SaaS · Productivity · AI',
    desc: 'Dual-user AI life operating system with 12 modules: Calendar, Focus, Wellness, Habits, Finance, Travel & more. Sage AI assistant powered by GPT-4o.',
    tags: ['React 18', 'TypeScript', 'FastAPI', 'Redis', 'PostgreSQL', 'GPT-4o'],
    accent: '#7C3AED',
    github: 'https://github.com/Cajuki',
    live: '#',
  },
  {
    id: '04',
    title: 'GariYako Hub',
    category: 'Marketplace · Automotive',
    desc: 'Full-stack Kenyan vehicle listing marketplace with advanced search, seller auth, and server-side pagination. Architecture supports 10,000+ concurrent listings.',
    tags: ['React', 'Tailwind', 'Node.js', 'PostgreSQL', 'JWT'],
    accent: '#22C55E',
    github: 'https://github.com/Cajuki',
    live: '#',
  },
  {
    id: '05',
    title: 'Charity Homes Tracker',
    category: 'Nonprofit · Dashboard',
    desc: 'Donation management platform with multi-role auth (admin, donor, manager), real-time fund tracking dashboard, CSRF protection, and zero security incidents.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'JWT', 'RBAC'],
    accent: '#EC4899',
    github: 'https://github.com/Cajuki',
    live: '#',
  },
  {
    id: '06',
    title: 'Digital Library Platform',
    category: 'Mobile · Offline-First',
    desc: 'Cross-platform digital library: Android frontend + PHP REST API. Offline-first architecture, 50% payload reduction via compression, reached 3× more users.',
    tags: ['Android', 'Java', 'PHP', 'MySQL', 'REST API', 'Offline-First'],
    accent: '#F97316',
    github: 'https://github.com/Cajuki',
    live: '#',
  },
];

export const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    icon: '◈',
    skills: ['React 18', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    label: 'Backend',
    icon: '◉',
    skills: ['Node.js', 'Express', 'FastAPI', 'PHP Laravel', 'Java Spring Boot', 'Python', 'WebSockets', 'REST API'],
  },
  {
    label: 'Database',
    icon: '◆',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Neon DB', 'Redis', 'Query Optimization', 'Schema Design'],
  },
  {
    label: 'AI & LLMs',
    icon: '◇',
    skills: ['GPT-4o', 'Claude API', 'Gemini', 'LLM Prompting', 'RAG Pipelines', 'Chain-of-Thought', 'AI Agents', 'Function Calling'],
  },
  {
    label: 'DevOps & Cloud',
    icon: '◈',
    skills: [
      'Docker', 'Docker Compose', 'Kubernetes (K8s)', 'Helm Charts',
      'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS', 'AWS IAM',
      'AWS CloudWatch', 'AWS ECS / Fargate', 'AWS API Gateway',
      'Terraform', 'AWS CDK',
      'GitHub Actions', 'GitLab CI', 'CircleCI',
      'Prometheus', 'Grafana', 'Datadog', 'Sentry',
      'Nginx', 'Cloudflare', 'SSL/TLS', 'VPC / Subnets', 'Rate Limiting',
      'Linux (Ubuntu/Debian)', 'Bash Scripting', 'Vercel', 'Railway',
    ],
    highlights: [
      { icon: '🐳', label: 'Container Stack', val: 'Docker · K8s · Helm' },
      { icon: '☁️', label: 'Cloud Provider',  val: 'AWS (8+ services)'  },
      { icon: '📊', label: 'Observability',   val: 'Prometheus · Grafana' },
      { icon: '⚙️', label: 'IaC',             val: 'Terraform · AWS CDK' },
    ],
  },
  {
    label: 'Systems Design',
    icon: '⬡',
    skills: [
      'Rust',
      'Microservices Architecture', 'Event-Driven Design', 'CQRS', 'Saga Pattern',
      'Horizontal Scaling', 'Load Balancing', 'CDN Strategy', 'Caching Layers',
      'Message Queues (RabbitMQ)', 'Apache Kafka', 'Pub/Sub',
      'RESTful API Design', 'GraphQL', 'gRPC', 'API Versioning',
      'Circuit Breakers', 'Rate Limiting', 'Graceful Degradation',
      'Database Sharding', 'Read Replicas', 'Data Partitioning',
      'System Architecture Diagrams', 'Capacity Planning', 'SLAs / SLOs',
    ],
  },
  {
    label: 'Mobile & Payments',
    icon: '◉',
    skills: ['Android Java/Kotlin', 'M-Pesa Daraja', 'Offline-First', 'Africa\'s Talking', 'Stripe', 'Twilio', 'Push Notifications', 'JWT Auth'],
  },
];

export const JOURNEY = [
  {
    year: '2022',
    title: 'Enrolled — Zetech University',
    org: 'BSc Software Engineering',
    desc: 'Built strong foundations in algorithms, systems design, and mobile/web development.',
    type: 'edu',
  },
  {
    year: '2022',
    title: 'Freelance Full-Stack Engineer',
    org: 'Nairobi, Kenya · Remote',
    desc: 'Shipped first production apps: Charity Homes Tracker, Digital Library, POS system. Zero-to-prod, solo.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'AI Integration Specialist',
    org: 'Self-Directed · Remote',
    desc: 'Integrated GPT-4 / Claude APIs into SaaS products. Built prompt pipelines accelerating feature delivery by ~30%.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Co-Founded Medithrex Medical Solutions',
    org: 'Nairobi, Kenya',
    desc: 'Built a Kenyan medical e-commerce platform from scratch. M-Pesa, SMS, full admin panel. Shipped to production at medithrex.site.',
    type: 'work',
  },
  {
    year: '2025',
    title: 'BSc Software Engineering — Graduate',
    org: 'Zetech University, Nairobi',
    desc: 'Completed degree with a portfolio of enterprise SaaS: ClinicFlow AI, Plan&Play, Medithrex. Open to global roles.',
    type: 'edu',
  },
];

export const SERVICES = [
  { icon: '⬡', title: 'Full-Stack Web',    desc: 'Scalable SPAs and server-rendered apps from wireframe to deployment.' },
  { icon: '⬡', title: 'AI Integration',    desc: 'GPT-4o / Claude / Gemini APIs, RAG pipelines, and LLM prompt systems.' },
  { icon: '⬡', title: 'API Architecture',  desc: 'RESTful APIs with JWT auth, RBAC, rate limiting, and OpenAPI docs.' },
  { icon: '⬡', title: 'Database Design',   desc: 'Optimized PostgreSQL / MySQL schemas with indexing and analytics queries.' },
  { icon: '⬡', title: 'Mobile (Android)',  desc: 'Offline-first Android apps with REST API backends and M-Pesa payments.' },
  { icon: '⬡', title: 'SaaS Products',     desc: 'End-to-end SaaS: multi-tenancy, billing, onboarding, and dashboards.' },
];

export const ABOUT_JSON_ROWS = [
  ['name',        '"Fidel Chimwani"'],
  ['role',        '"Full-Stack · Backend · Software Engineer"'],
  ['company',     '"Medithrex Medical Solutions"'],
  ['degree',      '"BSc Software Engineering"'],
  ['university',  '"Zetech University, Nairobi"'],
  ['email',       '"fidelchimwani@gmail.com"'],
  ['github',      '"github.com/Cajuki"'],
  ['phone',       '"+254 790 080 903"'],
  ['experience',  '"5+ Years"'],
  ['openToWork',  'true'],
  ['remoteReady', 'true'],
];

export const CONTACT_LINKS = [
  { label: 'EMAIL',        val: 'fidelchimwani@gmail.com',  href: 'mailto:fidelchimwani@gmail.com' },
  { label: 'PHONE',        val: '+254 790 080 903',          href: 'tel:+254790080903' },
  { label: 'GITHUB',       val: 'github.com/Cajuki',         href: 'https://github.com/Cajuki' },
  { label: 'LOCATION',     val: 'Nairobi, Kenya 🇰🇪',         href: null },
  { label: 'AVAILABILITY', val: 'Remote · US / EU / Global', href: null },
];

export const FOOTER_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Cajuki' },
  { label: 'Email',    href: 'mailto:fidelchimwani@gmail.com' },
  { label: 'LinkedIn', href: '#' },
];
