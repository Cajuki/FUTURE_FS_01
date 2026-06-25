import { useState } from 'react';
import T from '../tokens.js';
import { SKILL_CATEGORIES } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

export default function Skills() {
  const [active, setActive] = useState('Systems Design');
  const [ref, vis] = useInView();
  const cat = SKILL_CATEGORIES.find((c) => c.label === active);
  const isLargeSet = cat.skills.length > 12;

  return (
    <section
      id="skills"
      style={{ padding: '100px 0', borderTop: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Skills"
            title="The toolkit."
            sub="Technologies I've used to ship real products."
          />
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {SKILL_CATEGORIES.map((c) => (
            <button
              key={c.label}
              onClick={() => setActive(c.label)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                padding: '8px 16px',
                borderRadius: 6,
                border: `1px solid ${active === c.label ? T.gold : T.border}`,
                background:
                  active === c.label ? `${T.gold}18` : 'transparent',
                color: active === c.label ? T.gold : T.muted,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {c.icon} {c.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Count badge */}
        <div
          style={{
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: '0.6rem',
              color: T.muted,
              letterSpacing: '0.1em',
            }}
          >
            {cat.skills.length} SKILLS IN THIS CATEGORY
          </span>
          {isLargeSet && (
            <span
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: '0.6rem',
                color: T.gold,
                letterSpacing: '0.08em',
                background: `${T.gold}18`,
                border: `1px solid ${T.gold}40`,
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              EXPANDED VIEW
            </span>
          )}
        </div>

        {/* Tag cloud */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            maxHeight: isLargeSet ? 340 : 'none',
            overflowY: isLargeSet ? 'auto' : 'visible',
            paddingRight: isLargeSet ? 8 : 0,
            scrollbarWidth: 'thin',
            scrollbarColor: `${T.gold} ${T.bg}`,
          }}
        >
          {cat.skills.map((skill, i) => (
            <span
              key={skill}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '0.88rem',
                color: T.white,
                background: T.card,
                border: `1px solid ${T.border}`,
                padding: '10px 18px',
                borderRadius: 8,
                animation: vis
                  ? `fadeUp 0.35s ${Math.min(i * 0.03, 0.6)}s ease both`
                  : 'none',
                opacity: vis ? 1 : 0,
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                cursor: 'default',
                whiteSpace: 'nowrap',
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

        {/* Rust callout */}
        {active === 'Systems Design' && (
          <div
            style={{
              marginTop: 32,
              background: T.card,
              border: `1px solid ${T.gold}40`,
              borderLeft: `3px solid ${T.gold}`,
              borderRadius: 8,
              padding: '20px 24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>
              🦀
            </span>
            <div>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: T.gold,
                  marginBottom: 6,
                  letterSpacing: '-0.01em',
                }}
              >
                Rust — Systems Programming
              </h4>
              <p
                style={{
                  fontFamily: "'Space Grotesk'",
                  fontSize: '0.83rem',
                  color: T.muted,
                  lineHeight: 1.7,
                }}
              >
                Applying Rust for performance-critical systems: memory-safe CLI tools,
                concurrent server components, and low-level data processing pipelines.
                Rust's ownership model enables reliable infrastructure without GC pauses
                — exactly what African-scale products demand.
              </p>
            </div>
          </div>
        )}

        {/* DevOps highlights */}
        {active === 'DevOps & Cloud' && (
          <div
            className="devops-highlights"
            style={{
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
            }}
          >
            {cat.highlights.map(({ icon, label, val }) => (
              <div
                key={label}
                style={{
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{icon}</div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono'",
                    fontSize: '0.58rem',
                    color: T.muted,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk'",
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    color: T.gold,
                  }}
                >
                  {val}
                </div>
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
