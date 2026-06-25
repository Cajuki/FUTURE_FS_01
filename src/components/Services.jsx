import { useState } from 'react';
import T from '../tokens.js';
import { SERVICES } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

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
        padding: '28px 24px',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        animation: vis ? `fadeUp 0.5s ${i * 0.08}s ease both` : 'none',
        opacity: vis ? 1 : 0,
        cursor: 'default',
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono'",
          fontSize: '1.5rem',
          color: T.gold,
          marginBottom: 16,
        }}
      >
        {s.icon}
      </div>
      <h3
        style={{
          fontFamily: "'Space Grotesk'",
          fontWeight: 700,
          fontSize: '0.95rem',
          color: T.white,
          marginBottom: 10,
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          fontFamily: "'Space Grotesk'",
          fontSize: '0.83rem',
          color: T.muted,
          lineHeight: 1.7,
        }}
      >
        {s.desc}
      </p>
    </div>
  );
}

export default function Services() {
  const [ref, vis] = useInView();

  return (
    <section
      id="services"
      style={{ padding: '100px 0', borderTop: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}>
          <SectionHeader eyebrow="Services" title="What I build." />
        </div>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
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
