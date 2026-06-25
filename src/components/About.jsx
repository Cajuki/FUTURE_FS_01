import T from '../tokens.js';
import { ABOUT_JSON_ROWS } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  const [ref, vis] = useInView();

  return (
    <section
      id="about"
      style={{ padding: '100px 0', borderTop: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={ref}
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* Left: bio */}
          <div
            style={{
              animation: vis ? 'fadeUp 0.6s ease both' : 'none',
              opacity: vis ? 1 : 0,
            }}
          >
            <SectionHeader
              eyebrow="About Me"
              title={
                <>
                  Engineer.<br />
                  Builder.<br />
                  <span style={{ color: T.gold }}>Co-Founder.</span>
                </>
              }
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                "I'm a Full-Stack, Backend & Software Engineer based in Nairobi, Kenya. I co-founded Medithrex Medical Solutions and have shipped production systems across healthcare, mobility, productivity, and nonprofit verticals.",
                "My engineering philosophy: build things that actually work in the environments they're deployed in. For Africa, that means M-Pesa integrations, offline-first mobile architecture, SMS fallbacks, and low-bandwidth performance.",
                "5+ years of freelance and startup engineering, currently open to full-time remote roles and strategic collaborations globally.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Space Grotesk'",
                    fontSize: '0.95rem',
                    color: T.muted,
                    lineHeight: 1.8,
                    animation: vis ? `fadeUp 0.6s ${0.1 + i * 0.1}s ease both` : 'none',
                    opacity: vis ? 1 : 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right: JSON card */}
          <div
            style={{
              animation: vis ? 'fadeUp 0.6s 0.2s ease both' : 'none',
              opacity: vis ? 1 : 0,
            }}
          >
            <div
              style={{
                background: T.card,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                overflow: 'hidden',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <div
                style={{
                  padding: '12px 20px',
                  background: T.surface,
                  borderBottom: `1px solid ${T.border}`,
                  fontSize: '0.65rem',
                  color: T.gold,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                fidel.json
              </div>

              <div style={{ padding: '8px 0' }}>
                {ABOUT_JSON_ROWS.map(([key, val], i) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      gap: 8,
                      padding: '8px 20px',
                      borderBottom:
                        i < ABOUT_JSON_ROWS.length - 1
                          ? `1px solid ${T.dim}`
                          : 'none',
                      fontSize: '0.72rem',
                    }}
                  >
                    <span style={{ color: '#7DD3FC', minWidth: 120 }}>
                      "{key}"
                    </span>
                    <span style={{ color: T.muted }}>:</span>
                    <span
                      style={{
                        color:
                          val === 'true'
                            ? '#86EFAC'
                            : val.startsWith('"')
                            ? '#FCD34D'
                            : '#FCA5A5',
                      }}
                    >
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
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
