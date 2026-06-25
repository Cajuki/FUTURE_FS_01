import { useState, useEffect } from 'react';
import T from '../tokens.js';
import { NAV_LINKS } from '../data.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,15,30,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '1rem',
            color: T.white,
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: T.gold }}>{'>'}</span> fidel.ke
        </div>

        {/* Desktop links */}
        <ul
          className="desktop-only"
          style={{ display: 'flex', gap: 32, listStyle: 'none' }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: T.muted,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = T.gold)}
                onMouseLeave={(e) => (e.target.style.color = T.muted)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: CTA + hamburger */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a
            href="mailto:fidelchimwani@gmail.com"
            className="desktop-only"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.8rem',
              color: T.bg,
              background: T.gold,
              padding: '8px 20px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="mobile-only"
            style={{
              background: 'none',
              border: `1px solid ${T.border}`,
              borderRadius: 6,
              padding: '6px 10px',
              cursor: 'pointer',
              color: T.white,
              fontSize: '1rem',
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: T.surface,
            borderTop: `1px solid ${T.border}`,
            padding: '8px 0',
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.9rem',
                color: T.white,
                padding: '12px 24px',
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ padding: '12px 24px' }}>
            <a
              href="mailto:fidelchimwani@gmail.com"
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                color: T.bg,
                background: T.gold,
                padding: '10px',
                borderRadius: 6,
                textDecoration: 'none',
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
