import T from '../tokens.js';
import { FOOTER_LINKS } from '../data.js';

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: '32px 24px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "'JetBrains Mono'",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: T.white,
          }}
        >
          <span style={{ color: T.gold }}>{'>'}</span> fidel.ke
        </div>

        <p
          style={{
            fontFamily: "'JetBrains Mono'",
            fontSize: '0.65rem',
            color: T.muted,
            letterSpacing: '0.06em',
          }}
        >
          © {new Date().getFullYear()} FIDEL CHIMWANI · NAIROBI, KENYA
        </p>

        <div style={{ display: 'flex', gap: 24 }}>
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: '0.65rem',
                color: T.muted,
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
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
