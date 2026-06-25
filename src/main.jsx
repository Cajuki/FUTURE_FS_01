import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)/* ─── Projects (horizontal scroll) ─── */
export const PROJECTS = [
  {
    id: "01",
    title: "Medithrex Medical Supplies",
    category: "E-Commerce · Healthtech",
    desc: "Kenyan medical & laboratory equipment platform. M-Pesa Daraja payments, Africa's Talking SMS, strict black/yellow brand identity, and a 20-feature roadmap.",
    tags: ["React", "Node.js", "PostgreSQL", "M-Pesa", "Neon DB", "REST API"],
    accent: "#F59E0B",
    github: "https://github.com/Cajuki",
    live: "https://medithrex.site",
  },
  {
    id: "02",
    title: "ClinicFlow AI",
    category: "SaaS · Healthcare · AI",
    desc: "Multi-tenant healthcare SaaS for USA, UK, Canada & Africa. GPT-4o AI features, Stripe, Twilio, full RBAC, guided CSV onboarding, and OTP patient portal.",
    tags: ["React", "FastAPI", "PostgreSQL", "GPT-4o", "Stripe", "Twilio"],
    accent: "#06B6D4",
    github: "https://github.com/Cajuki",
    live: "#",
  },
  {
    id: "03",
    title: "Plan&Play Life OS",
    category: "SaaS · Productivity · AI",
    desc: "Dual-user AI life operating system with 12 modules: Calendar, Focus, Wellness, Habits, Finance, Travel & more. Sage AI assistant powered by GPT-4o.",
    tags: ["React 18", "TypeScript", "FastAPI", "Redis", "PostgreSQL", "GPT-4o"],
    accent: "#7C3AED",
    github: "https://github.com/Cajuki",
    live: "#",
  },
  {
    id: "04",
    title: "GariYako Hub",
    category: "Marketplace · Automotive",
    desc: "Full-stack Kenyan vehicle listing marketplace with advanced search, seller auth, and server-side pagination. Architecture supports 10,000+ concurrent listings.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL", "JWT"],
    accent: "#22C55E",
    github: "https://github.com/Cajuki",
    live: "#",
  },
  {
    id: "05",
    title: "Charity Homes Tracker",
    category: "Nonprofit · Dashboard",
    desc: "Donation management platform with multi-role auth (admin, donor, manager), real-time fund tracking dashboard, CSRF protection, and zero security incidents.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "JWT", "RBAC"],
    accent: "#EC4899",
    github: "https://github.com/Cajuki",
    live: "#",
  },
  {
    id: "06",
    title: "Digital Library Platform",
    category: "Mobile · Offline-First",
    desc: "Cross-platform digital library: Android frontend + PHP REST API. Offline-first architecture, 50% payload reduction via compression, reached 3× more users.",
    tags: ["Android", "Java", "PHP", "MySQL", "REST API", "Offline-First"],
    accent: "#F97316",
    github: "https://github.com/Cajuki",
    live: "#",
  },
];

