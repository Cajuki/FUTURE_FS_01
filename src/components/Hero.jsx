import { useState, useEffect } from 'react';
import T from '../tokens.js';
import { CONSOLE_LINES, HERO_STATS } from '../data.js';
import Ticker from './Ticker.jsx';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* CRT scanline overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.015) 2px, rgba(245,158,11,0.015) 4px)',
          zIndex: 0,
        }}
      />

      <Ticker />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px 40px',
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
        className="hero-grid"
      >
        {/* ── Left: intro copy ── */}
        <div
          style={{
            animation: mounted ? 'fadeUp 0.8s ease forwards' : 'none',
            opacity: mounted ? 1 : 0,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: T.gold,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22C55E',
                flexShrink: 0,
                animation: 'pulseGold 2s ease infinite',
              }}
            />
            Full-Stack Engineer · Backend Engineer · Software Engineer · AI Builder · Co-Founder
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: T.white,
              lineHeight: 1.0,
              marginBottom: 8,
              letterSpacing: '-0.03em',
            }}
          >
            Fidel
          </h1>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: T.gold,
              lineHeight: 1.0,
              marginBottom: 32,
              letterSpacing: '-0.03em',
            }}
          >
            Chimwani
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
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

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() =>
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                color: T.bg,
                background: T.gold,
                border: 'none',
                padding: '14px 28px',
                borderRadius: 8,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                transition: 'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Projects →
            </button>
            <a
              href="/Fidel_Chimwani_CV.pdf"
              download
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                color: T.white,
                background: 'transparent',
                border: `1px solid ${T.border}`,
                padding: '14px 28px',
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.gold;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ⬇ Download CV
            </a>
          </div>
        </div>

        {/* ── Right: console card ── */}
        <div
          style={{
            animation: mounted ? 'fadeUp 0.8s 0.2s ease both' : 'none',
            opacity: 0,
          }}
        >
          {/* Terminal window */}
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              overflow: 'hidden',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                background: T.surface,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                {['#EF4444', '#F59E0B', '#22C55E'].map((c) => (
                  <div
                    key={c}
                    style={{ width: 10, height: 10, borderRadius: '50%', background: c }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: T.muted,
                  marginLeft: 8,
                  letterSpacing: '0.08em',
                }}
              >
                fidel@nairobi:~$ status
              </span>
            </div>

            {/* Console body */}
            <div style={{ padding: '20px' }}>
              {CONSOLE_LINES.map((l, i) => (
                <div
                  key={l.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '7px 0',
                    borderBottom:
                      i < CONSOLE_LINES.length - 1
                        ? `1px solid ${T.dim}`
                        : 'none',
                    animation: mounted
                      ? `fadeIn 0.4s ${0.3 + i * 0.1}s ease both`
                      : 'none',
                    opacity: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: T.muted,
                      letterSpacing: '0.12em',
                    }}
                  >
                    {l.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: l.color,
                      fontWeight: 500,
                    }}
                  >
                    {l.value}
                  </span>
                </div>
              ))}

              {/* Blinking cursor */}
              <div
                style={{
                  marginTop: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span style={{ fontSize: '0.65rem', color: T.gold }}>$</span>
                <span
                  className="cursor-blink"
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 14,
                    background: T.gold,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              marginTop: 16,
            }}
          >
            {HERO_STATS.map(([n, l]) => (
              <div
                key={l}
                style={{
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: '14px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk'",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: T.gold,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono'",
                    fontSize: '0.6rem',
                    color: T.muted,
                    letterSpacing: '0.08em',
                    marginTop: 2,
                  }}
                >
                  {l.toUpperCase()}
                </div>
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
