import T from '../tokens.js';
import { TICKER_ITEMS } from '../data.js';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        background: T.surface,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          animation: 'ticker 28s linear infinite',
          width: 'max-content',
          padding: '10px 0',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: i % 2 === 0 ? T.gold : T.muted,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {item}
            <span style={{ color: T.border, fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
