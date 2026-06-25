import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "./main";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
   Navy-charcoal bg + amber-gold accent
   Space Grotesk display · JetBrains Mono util
───────────────────────────────────────────── */
const T = {
  bg:      "#0A0F1E",
  surface: "#111827",
  card:    "#141D2F",
  border:  "#1E293B",
  gold:    "#F59E0B",
  goldLo:  "#78350F",
  white:   "#F8FAFC",
  muted:   "#64748B",
  dim:     "#1E293B",
};

/* ─── Google Fonts injection ─── */
function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

/* ─── useInView ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─── useCounter ─── */
function useCounter(target, duration = 1200, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

/* ─── Ticker ─── */
const TICKER_ITEMS = [
  "React 18", "TypeScript", "Node.js", "FastAPI", "PostgreSQL",
  "Docker", "AWS Lambda", "GPT-4o", "M-Pesa API", "Android (Java)",
  "Tailwind CSS", "Redis", "Kubernetes", "JWT / RBAC", "WebSockets",
  "Claude AI", "CI/CD", "Spring Boot", "PHP Laravel", "MongoDB",
  "Rust", "Systems Design", "Microservices", "Load Balancing",
  "Terraform", "Prometheus", "Grafana", "Message Queues", "Event-Driven",
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="overflow-hidden border-y"
      style={{
        borderColor: T.border,
        background: T.surface,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          animation: "ticker 28s linear infinite",
          width: "max-content",
          padding: "10px 0",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: i % 2 === 0 ? T.gold : T.muted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {item}
            <span style={{ color: T.border, fontSize: "0.5rem" }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(245,158,11,0); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(245,158,11,0.3); }
          50% { border-color: rgba(245,158,11,0.8); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0F1E; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0F1E; }
        ::-webkit-scrollbar-thumb { background: #F59E0B; border-radius: 2px; }
      `}</style>
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Journey", id: "journey" },
    { label: "Contact", id: "contact" },
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: "1rem",
            color: T.white,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: T.gold }}>{">"}</span> fidel.ke
        </div>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none" }} className="desktop-nav">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: T.muted,
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = T.gold)}
                onMouseLeave={(e) => (e.target.style.color = T.muted)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href="mailto:fidelchimwani@gmail.com"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              color: T.bg,
              background: T.gold,
              padding: "8px 20px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Hire Me
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-only"
            style={{
              background: "none",
              border: `1px solid ${T.border}`,
              borderRadius: 6,
              padding: "6px 10px",
              cursor: "pointer",
              color: T.white,
              fontSize: "1rem",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: T.surface,
            borderTop: `1px solid ${T.border}`,
            padding: "8px 0",
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
                color: T.white,
                padding: "12px 24px",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-only { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const lines = [
    { label: "STATUS", value: "Available for hire", color: "#22C55E" },
    { label: "LOCATION", value: "Nairobi, Kenya 🇰🇪", color: T.gold },
    { label: "REMOTE", value: "US / EU / Global ✓", color: T.muted },
    { label: "STACK", value: "Full-Stack + Backend + AI", color: T.gold },
    { label: "EXPERIENCE", value: "5+ Years", color: T.gold },
    { label: "FOCUS", value: "African markets", color: T.muted },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 40,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scanline shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.015) 2px, rgba(245,158,11,0.015) 4px)",
          zIndex: 0,
        }}
      />

      <Ticker />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 40px",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: 48,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div
          style={{
            animation: mounted ? "fadeUp 0.8s ease forwards" : "none",
            opacity: mounted ? 1 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: T.gold,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                animation: "pulse-gold 2s ease infinite",
              }}
            />
            Full-Stack Engineer · Backend Engineer · Software Engineer · AI Builder · Co-Founder
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: T.white,
              lineHeight: 1.0,
              marginBottom: 8,
              letterSpacing: "-0.03em",
            }}
          >
            Fidel
          </h1>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: T.gold,
              lineHeight: 1.0,
              marginBottom: 32,
              letterSpacing: "-0.03em",
            }}
          >
            Chimwani
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.05rem",
              color: T.muted,
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 40,
            }}
          >
            I architect production-grade SaaS platforms, AI-integrated backends,
            and mobile-first experiences — built for the realities of African
            markets and the ambitions of global clients.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: T.bg,
                background: T.gold,
                border: "none",
                padding: "14px 28px",
                borderRadius: 8,
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View Projects →
            </button>
            <a
              href="#"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: T.white,
                background: "transparent",
                border: `1px solid ${T.border}`,
                padding: "14px 28px",
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "border-color 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ⬇ Download CV
            </a>
          </div>
        </div>

        {/* Right: Console card */}
        <div
          style={{
            animation: mounted ? "fadeUp 0.8s 0.2s ease both" : "none",
            opacity: 0,
          }}
        >
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              overflow: "hidden",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                background: T.surface,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <span style={{ fontSize: "0.65rem", color: T.muted, marginLeft: 8, letterSpacing: "0.08em" }}>
                fidel@nairobi:~$ status
              </span>
            </div>

            {/* Console body */}
            <div style={{ padding: "20px 20px" }}>
              {lines.map((l, i) => (
                <div
                  key={l.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "7px 0",
                    borderBottom: i < lines.length - 1 ? `1px solid ${T.dim}` : "none",
                    animation: mounted ? `fadeIn 0.4s ${0.3 + i * 0.1}s ease both` : "none",
                    opacity: 0,
                  }}
                >
                  <span style={{ fontSize: "0.65rem", color: T.muted, letterSpacing: "0.12em" }}>
                    {l.label}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: l.color, fontWeight: 500 }}>
                    {l.value}
                  </span>
                </div>
              ))}

              {/* Blinking cursor line */}
              <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: "0.65rem", color: T.gold }}>$</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 14,
                    background: T.gold,
                    animation: "borderGlow 1s step-end infinite",
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mini stats below console */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 16,
            }}
          >
            {[["7+", "Apps Shipped"], ["5+", "Years"], ["10+", "Tech Stack"]].map(([n, l]) => (
              <div
                key={l}
                style={{
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "1.5rem", color: T.gold }}>{n}</div>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.6rem", color: T.muted, letterSpacing: "0.08em", marginTop: 2 }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 3fr 2fr !important; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Section header ─── */
function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: T.gold,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        — {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: T.white,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: sub ? 16 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily: "'Space Grotesk'", color: T.muted, fontSize: "1rem", maxWidth: 500, lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Projects() {
  const scrollRef = useRef(null);
  const [ref, vis] = useInView();

  return (
    <section id="work" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects that shipped."
            sub="Production-grade systems built end-to-end — design, architecture, deployment."
          />
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: `linear-gradient(to right, ${T.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: `linear-gradient(to left, ${T.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            padding: "8px 80px 24px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} vis={vis} />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ textAlign: "center", marginTop: 8 }}>
        <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.65rem", color: T.muted, letterSpacing: "0.1em" }}>
          ← SCROLL TO EXPLORE →
        </span>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, i, vis }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: 320,
        maxWidth: 360,
        flex: "0 0 340px",
        scrollSnapAlign: "start",
        background: T.card,
        border: `1px solid ${hov ? p.accent : T.border}`,
        borderRadius: 12,
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov ? `0 16px 48px -8px ${p.accent}30` : "none",
        animation: vis ? `fadeUp 0.5s ${i * 0.08}s ease both` : "none",
        opacity: vis ? 1 : 0,
        cursor: "default",
      }}
    >
      {/* Accent bar */}
      <div style={{ height: 3, background: hov ? p.accent : T.border, transition: "background 0.3s" }} />

      <div style={{ padding: "24px" }}>
        {/* ID + category */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.65rem", color: p.accent, letterSpacing: "0.1em" }}>
            {p.id}
          </span>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.6rem", color: T.muted, letterSpacing: "0.08em" }}>
            {p.category.toUpperCase()}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: T.white,
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          {p.title}
        </h3>

        <p
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "0.82rem",
            color: T.muted,
            lineHeight: 1.7,
            marginBottom: 20,
          }}
        >
          {p.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {p.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: "0.6rem",
                color: T.muted,
                background: T.bg,
                border: `1px solid ${T.border}`,
                padding: "3px 8px",
                borderRadius: 4,
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={p.live}
            style={{
              flex: 1,
              display: "block",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontWeight: 600,
              fontSize: "0.78rem",
              color: T.bg,
              background: p.accent,
              padding: "9px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "opacity 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Live Demo
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "block",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontWeight: 600,
              fontSize: "0.78rem",
              color: T.white,
              background: "transparent",
              border: `1px solid ${T.border}`,
              padding: "9px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "border-color 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = p.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.border)}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── About ─── */
function About() {
  const [ref, vis] = useInView();

  return (
    <section id="about" style={{ padding: "100px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div style={{ animation: vis ? "fadeUp 0.6s ease both" : "none", opacity: vis ? 1 : 0 }}>
            <SectionHeader
              eyebrow="About Me"
              title={<>Engineer.<br />Builder.<br /><span style={{ color: T.gold }}>Co-Founder.</span></>}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "I'm a self-taught Full-Stack Engineer and AI Builder based in Nairobi, Kenya. I co-founded Medithrex Medical Solutions and have shipped production systems across healthcare, mobility, productivity, and nonprofit verticals.",
                "My engineering philosophy is simple: build things that actually work in the environments they're deployed in. For Africa, that means M-Pesa integrations, offline-first mobile architecture, SMS fallbacks, and low-bandwidth performance.",
                "Currently completing my BSc in Software Engineering at Zetech University while building enterprise-grade SaaS products and exploring AI-native product development.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Space Grotesk'",
                    fontSize: "0.95rem",
                    color: T.muted,
                    lineHeight: 1.8,
                    animation: vis ? `fadeUp 0.6s ${0.1 + i * 0.1}s ease both` : "none",
                    opacity: vis ? 1 : 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right: info table */}
          <div style={{ animation: vis ? "fadeUp 0.6s 0.2s ease both" : "none", opacity: vis ? 1 : 0 }}>
            <div
              style={{
                background: T.card,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                overflow: "hidden",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  padding: "12px 20px",
                  background: T.surface,
                  borderBottom: `1px solid ${T.border}`,
                  fontSize: "0.65rem",
                  color: T.gold,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                fidel.json
              </div>

              <div style={{ padding: "8px 0" }}>
                {[
                  ["name", '"Fidel Chimwani"'],
                  ["role", '"Full-Stack · Backend · Software Engineer"'],
                  ["company", '"Medithrex Medical Solutions"'],
                  ["degree", '"BSc Software Engineering"'],
                  ["university", '"Zetech University, Nairobi"'],
                  ["email", '"fidelchimwani@gmail.com"'],
                  ["github", '"github.com/fidelchimwani"'],
                  ["phone", '"+254 790 080 903"'],
                  ["experience", '"5+ Years"'],
                  ["remoteReady", "true"],
                ].map(([key, val], i) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      gap: 8,
                      padding: "8px 20px",
                      borderBottom: i < 9 ? `1px solid ${T.dim}` : "none",
                      fontSize: "0.72rem",
                    }}
                  >
                    <span style={{ color: "#7DD3FC", minWidth: 120 }}>"{key}"</span>
                    <span style={{ color: T.muted }}>:</span>
                    <span style={{ color: val === "true" ? "#86EFAC" : "#FCA5A5" === val ? "#FCA5A5" : "#FCD34D" }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ─── Skills tag cloud ─── */
const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    icon: "◈",
    skills: ["React 18", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    label: "Backend",
    icon: "◉",
    skills: ["Node.js", "Express", "FastAPI", "PHP Laravel", "Java Spring Boot", "Python", "WebSockets", "REST API"],
  },
  {
    label: "Database",
    icon: "◆",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Neon DB", "Redis", "Query Optimization", "Schema Design"],
  },
  {
    label: "AI & LLMs",
    icon: "◇",
    skills: ["GPT-4o", "Claude API", "Gemini", "LLM Prompting", "RAG Pipelines", "Chain-of-Thought", "AI Agents", "Function Calling"],
  },
  {
    label: "DevOps & Cloud",
    icon: "◈",
    skills: [
      // Containerisation & Orchestration
      "Docker", "Docker Compose", "Kubernetes (K8s)", "Helm Charts",
      // Cloud — AWS
      "AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS IAM",
      "AWS CloudWatch", "AWS ECS / Fargate", "AWS API Gateway",
      // Infrastructure as Code
      "Terraform", "AWS CDK",
      // CI/CD
      "GitHub Actions", "GitLab CI", "CircleCI",
      // Observability
      "Prometheus", "Grafana", "Datadog", "Sentry",
      // Networking & Security
      "Nginx", "Cloudflare", "SSL/TLS", "VPC / Subnets", "Rate Limiting",
      // Misc
      "Linux (Ubuntu/Debian)", "Bash Scripting", "Vercel", "Railway",
    ],
  },
  {
    label: "Systems Design",
    icon: "⬡",
    skills: [
      // Language
      "Rust",
      // Architecture patterns
      "Microservices Architecture", "Event-Driven Design", "CQRS", "Saga Pattern",
      // Scalability
      "Horizontal Scaling", "Load Balancing", "CDN Strategy", "Caching Layers",
      // Messaging
      "Message Queues (RabbitMQ)", "Apache Kafka", "Pub/Sub",
      // API Design
      "RESTful API Design", "GraphQL", "gRPC", "API Versioning",
      // Reliability
      "Circuit Breakers", "Rate Limiting", "Graceful Degradation",
      // Data
      "Database Sharding", "Read Replicas", "Data Partitioning",
      // General
      "System Architecture Diagrams", "Capacity Planning", "SLAs / SLOs",
    ],
  },
  {
    label: "Mobile & Payments",
    icon: "◉",
    skills: ["Android Java/Kotlin", "M-Pesa Daraja", "Offline-First", "Africa's Talking", "Stripe", "Twilio", "Push Notifications", "JWT Auth"],
  },
];

function Skills() {
  const [active, setActive] = useState("Systems Design");
  const [ref, vis] = useInView();
  const cat = SKILL_CATEGORIES.find((c) => c.label === active);

  // Group skills for DevOps (by blank-line-separated comment blocks) and Systems Design
  const isLargeSet = cat.skills.length > 12;

  return (
    <section id="skills" style={{ padding: "100px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref}>
          <SectionHeader eyebrow="Skills" title="The toolkit." sub="Technologies I've used to ship real products." />
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {SKILL_CATEGORIES.map((c) => (
            <button
              key={c.label}
              onClick={() => setActive(c.label)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                padding: "8px 16px",
                borderRadius: 6,
                border: `1px solid ${active === c.label ? T.gold : T.border}`,
                background: active === c.label ? `${T.gold}18` : "transparent",
                color: active === c.label ? T.gold : T.muted,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {c.icon} {c.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Count badge */}
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "'JetBrains Mono'",
            fontSize: "0.6rem",
            color: T.muted,
            letterSpacing: "0.1em",
          }}>
            {cat.skills.length} SKILLS IN THIS CATEGORY
          </span>
          {isLargeSet && (
            <span style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: "0.6rem",
              color: T.gold,
              letterSpacing: "0.08em",
              background: `${T.gold}18`,
              border: `1px solid ${T.gold}40`,
              padding: "2px 8px",
              borderRadius: 4,
            }}>
              EXPANDED VIEW
            </span>
          )}
        </div>

        {/* Tag cloud — scrollable for large sets */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            maxHeight: isLargeSet ? 340 : "none",
            overflowY: isLargeSet ? "auto" : "visible",
            paddingRight: isLargeSet ? 8 : 0,
            scrollbarWidth: "thin",
            scrollbarColor: `${T.gold} ${T.bg}`,
          }}
        >
          {cat.skills.map((skill, i) => (
            <span
              key={skill}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "0.88rem",
                color: T.white,
                background: T.card,
                border: `1px solid ${T.border}`,
                padding: "10px 18px",
                borderRadius: 8,
                animation: vis ? `fadeUp 0.35s ${Math.min(i * 0.03, 0.6)}s ease both` : "none",
                opacity: vis ? 1 : 0,
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
                cursor: "default",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.gold;
                e.currentTarget.style.color = T.gold;
                e.currentTarget.style.background = `${T.gold}0F`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.color = T.white;
                e.currentTarget.style.background = T.card;
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Rust callout for Systems Design */}
        {active === "Systems Design" && (
          <div
            style={{
              marginTop: 32,
              background: T.card,
              border: `1px solid ${T.gold}40`,
              borderLeft: `3px solid ${T.gold}`,
              borderRadius: 8,
              padding: "20px 24px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.8rem", lineHeight: 1, flexShrink: 0 }}>🦀</span>
            <div>
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: T.gold,
                marginBottom: 6,
                letterSpacing: "-0.01em",
              }}>
                Rust — Systems Programming
              </h4>
              <p style={{
                fontFamily: "'Space Grotesk'",
                fontSize: "0.83rem",
                color: T.muted,
                lineHeight: 1.7,
              }}>
                Learning and applying Rust for performance-critical systems: memory-safe CLI tools, concurrent server components, and low-level data processing pipelines. Attracted to Rust's ownership model for building reliable infrastructure that African scale demands — zero-cost abstractions without garbage collection pauses.
              </p>
            </div>
          </div>
        )}

        {/* DevOps callout */}
        {active === "DevOps & Cloud" && (
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
            className="devops-highlights"
          >
            {[
              { icon: "🐳", label: "Container Stack", val: "Docker · K8s · Helm" },
              { icon: "☁️", label: "Cloud Provider", val: "AWS (8+ services)" },
              { icon: "📊", label: "Observability", val: "Prometheus · Grafana" },
              { icon: "⚙️", label: "IaC", val: "Terraform · AWS CDK" },
            ].map(({ icon, label, val }) => (
              <div
                key={label}
                style={{
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{icon}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono'",
                  fontSize: "0.58rem",
                  color: T.muted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}>{label}</div>
                <div style={{
                  fontFamily: "'Space Grotesk'",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  color: T.gold,
                }}>{val}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
        .devops-highlights { grid-template-columns: repeat(4,1fr) !important; }
        @media (max-width: 900px) { .devops-highlights { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .devops-highlights { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ─── Journey (horizontal numbered steps) ─── */
const JOURNEY = [
  {
    year: "2022",
    title: "Enrolled — Zetech University",
    desc: "BSc Software Engineering. Built foundations in algorithms, systems design, and mobile/web development.",
    type: "edu",
  },
  {
    year: "2022",
    title: "Freelance Engineer",
    desc: "Shipped first production apps: Charity Homes Tracker, Digital Library, POS system. Zero-to-prod, solo.",
    type: "work",
  },
  {
    year: "2023",
    title: "AI Integration Specialist",
    desc: "Integrated GPT-4 / Claude APIs into SaaS products. Built prompt pipelines accelerating delivery by ~30%.",
    type: "work",
  },
  {
    year: "2024",
    title: "Co-Founded Medithrex",
    desc: "Built a Kenyan medical e-commerce platform from scratch. M-Pesa, SMS, full admin panel. Shipped to production.",
    type: "work",
  },
  {
    year: "2025",
    title: "BSc Graduate",
    desc: "Completed degree with a portfolio of enterprise SaaS: ClinicFlow AI, Plan&Play, Medithrex. Open to global roles.",
    type: "edu",
  },
];

function Journey() {
  const [ref, vis] = useInView();

  return (
    <section id="journey" style={{ padding: "100px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref}>
          <SectionHeader eyebrow="Journey" title="How I got here." />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {JOURNEY.map((item, i) => (
            <JourneyRow key={i} item={item} i={i} vis={vis} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyRow({ item, i, vis }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1px 1fr",
        gap: "0 32px",
        alignItems: "stretch",
        borderBottom: i < JOURNEY.length - 1 ? `1px solid ${T.dim}` : "none",
        padding: "28px 0",
        animation: vis ? `fadeUp 0.5s ${i * 0.1}s ease both` : "none",
        opacity: vis ? 1 : 0,
        transition: "background 0.2s",
      }}
      className="journey-row"
    >
      {/* Year */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 24 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: hov ? T.gold : T.muted,
            transition: "color 0.2s",
          }}
        >
          {item.year}
        </span>
      </div>

      {/* Divider dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: item.type === "edu" ? "#06B6D4" : T.gold,
            marginTop: 4,
            flexShrink: 0,
            boxShadow: hov ? `0 0 12px ${item.type === "edu" ? "#06B6D4" : T.gold}` : "none",
            transition: "box-shadow 0.3s",
          }}
        />
        {i < JOURNEY.length - 1 && (
          <div style={{ flex: 1, width: 1, background: T.dim, marginTop: 8 }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingLeft: 8 }}>
        <div
          style={{
            display: "inline-block",
            fontFamily: "'JetBrains Mono'",
            fontSize: "0.6rem",
            color: item.type === "edu" ? "#06B6D4" : T.gold,
            letterSpacing: "0.1em",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          {item.type === "edu" ? "● Education" : "● Career"}
        </div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: T.white,
            marginBottom: 6,
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontFamily: "'Space Grotesk'", fontSize: "0.85rem", color: T.muted, lineHeight: 1.65 }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Services ─── */
const SERVICES = [
  { icon: "⬡", title: "Full-Stack Web", desc: "Scalable SPAs and server-rendered apps from wireframe to deployment." },
  { icon: "⬡", title: "AI Integration", desc: "GPT-4o / Claude / Gemini APIs, RAG pipelines, and LLM prompt systems." },
  { icon: "⬡", title: "API Architecture", desc: "RESTful APIs with JWT auth, RBAC, rate limiting, and OpenAPI docs." },
  { icon: "⬡", title: "Database Design", desc: "Optimized PostgreSQL / MySQL schemas with indexing and analytics queries." },
  { icon: "⬡", title: "Mobile (Android)", desc: "Offline-first Android apps with REST API backends and M-Pesa payments." },
  { icon: "⬡", title: "SaaS Products", desc: "End-to-end SaaS: multi-tenancy, billing, onboarding, and dashboards." },
];

function Services() {
  const [ref, vis] = useInView();
  return (
    <section id="services" style={{ padding: "100px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref}>
          <SectionHeader eyebrow="Services" title="What I build." />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} vis={vis} />
          ))}
        </div>
      </div>
      <style>{`
        .services-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ s, i, vis }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.card,
        border: `1px solid ${hov ? T.gold : T.border}`,
        borderRadius: 12,
        padding: "28px 24px",
        transition: "border-color 0.3s, transform 0.3s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        animation: vis ? `fadeUp 0.5s ${i * 0.08}s ease both` : "none",
        opacity: vis ? 1 : 0,
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono'",
          fontSize: "1.5rem",
          color: T.gold,
          marginBottom: 16,
        }}
      >
        {s.icon}
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "0.95rem", color: T.white, marginBottom: 10 }}>
        {s.title}
      </h3>
      <p style={{ fontFamily: "'Space Grotesk'", fontSize: "0.83rem", color: T.muted, lineHeight: 1.7 }}>
        {s.desc}
      </p>
    </div>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [ref, vis] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.88rem",
    width: "100%",
    background: T.bg,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    padding: "12px 16px",
    color: T.white,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.65rem",
    color: T.muted,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section id="contact" style={{ padding: "100px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Contact"
            title="Let's work together."
            sub="Open to full-time roles, freelance contracts, and co-founder conversations."
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="contact-grid">
          {/* Left: links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, animation: vis ? "fadeUp 0.6s ease both" : "none", opacity: vis ? 1 : 0 }}>
            {[
              { label: "EMAIL", val: "fidelchimwani@gmail.com", href: "mailto:fidelchimwani@gmail.com" },
              { label: "PHONE", val: "+254 790 080 903", href: "tel:+254790080903" },
              { label: "GITHUB", val: "github.com/Cajuki", href: "https://github.com/Cajuki" },
              { label: "LOCATION", val: "Nairobi, Kenya 🇰🇪", href: null },
              { label: "AVAILABILITY", val: "Remote · US / EU / Global", href: null },
            ].map(({ label, val, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.6rem", color: T.muted, letterSpacing: "0.12em" }}>
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Space Grotesk'",
                      fontSize: "0.82rem",
                      color: T.gold,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    {val}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Space Grotesk'", fontSize: "0.82rem", color: T.white, fontWeight: 500 }}>
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              padding: "28px",
              animation: vis ? "fadeUp 0.6s 0.15s ease both" : "none",
              opacity: vis ? 1 : 0,
            }}
          >
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, color: T.white, fontSize: "1.1rem", marginBottom: 8 }}>Message sent.</h3>
                <p style={{ fontFamily: "'Space Grotesk'", color: T.muted, fontSize: "0.85rem" }}>I'll respond within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { field: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { field: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={labelStyle}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = T.gold)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = T.border)}
                    />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = T.gold)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = T.border)}
                  />
                </div>
                <button
                  onClick={handleSend}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: T.bg,
                    background: T.gold,
                    border: "none",
                    padding: "14px",
                    borderRadius: 8,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "opacity 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .contact-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${T.border}`,
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ fontFamily: "'JetBrains Mono'", fontWeight: 700, fontSize: "0.95rem", color: T.white }}>
          <span style={{ color: T.gold }}>{">"}</span> fidel.ke
        </div>
        <p style={{ fontFamily: "'JetBrains Mono'", fontSize: "0.65rem", color: T.muted, letterSpacing: "0.06em" }}>
          © {new Date().getFullYear()} FIDEL CHIMWANI · NAIROBI, KENYA
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub", href: "https://github.com/Cajuki" },
            { label: "Email", href: "mailto:fidelchimwani@gmail.com" },
            { label: "LinkedIn", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: "0.65rem",
                color: T.muted,
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = T.muted)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <div
      style={{
        background: T.bg,
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <FontLoader />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Journey />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}