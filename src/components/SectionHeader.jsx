import T from '../tokens.js';

export default function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: T.gold,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        — {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: T.white,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: sub ? 16 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "'Space Grotesk'",
            color: T.muted,
            fontSize: '1rem',
            maxWidth: 500,
            lineHeight: 1.7,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
