import { useState, useRef } from 'react';
import T from '../tokens.js';
import { PROJECTS } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

function ProjectCard({ project: p, i, vis }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: 320,
        maxWidth: 360,
        flex: '0 0 340px',
        scrollSnapAlign: 'start',
        background: T.card,
        border: `1px solid ${hov ? p.accent : T.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hov ? `0 16px 48px -8px ${p.accent}30` : 'none',
        animation: vis ? `fadeUp 0.5s ${i * 0.08}s ease both` : 'none',
        opacity: vis ? 1 : 0,
        cursor: 'default',
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          height: 3,
          background: hov ? p.accent : T.border,
          transition: 'background 0.3s',
        }}
      />

      <div style={{ padding: '24px' }}>
        {/* ID + Category */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: '0.65rem',
              color: p.accent,
              letterSpacing: '0.1em',
            }}
          >
            {p.id}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: '0.6rem',
              color: T.muted,
              letterSpacing: '0.08em',
            }}
          >
            {p.category.toUpperCase()}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
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
            fontSize: '0.82rem',
            color: T.muted,
            lineHeight: 1.7,
            marginBottom: 20,
          }}
        >
          {p.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {p.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: '0.6rem',
                color: T.muted,
                background: T.bg,
                border: `1px solid ${T.border}`,
                padding: '3px 8px',
                borderRadius: 4,
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href={p.live}
            target={p.live !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'block',
              textAlign: 'center',
              fontFamily: "'Space Grotesk'",
              fontWeight: 600,
              fontSize: '0.78rem',
              color: T.bg,
              background: p.accent,
              padding: '9px',
              borderRadius: 6,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Live Demo
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'block',
              textAlign: 'center',
              fontFamily: "'Space Grotesk'",
              fontWeight: 600,
              fontSize: '0.78rem',
              color: T.white,
              background: 'transparent',
              border: `1px solid ${T.border}`,
              padding: '9px',
              borderRadius: 6,
              textDecoration: 'none',
              transition: 'border-color 0.2s',
              letterSpacing: '0.02em',
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

export default function Projects() {
  const scrollRef = useRef(null);
  const [ref, vis] = useInView();

  return (
    <section id="work" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects that shipped."
            sub="Production-grade systems built end-to-end — design, architecture, deployment."
          />
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: `linear-gradient(to right, ${T.bg}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: `linear-gradient(to left, ${T.bg}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={scrollRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: 20,
            overflowX: 'auto',
            padding: '8px 80px 24px',
            scrollSnapType: 'x mandatory',
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} vis={vis} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono'",
            fontSize: '0.65rem',
            color: T.muted,
            letterSpacing: '0.1em',
          }}
        >
          ← SCROLL TO EXPLORE →
        </span>
      </div>
    </section>
  );
}
