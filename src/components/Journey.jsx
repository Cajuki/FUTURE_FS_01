import { useState } from 'react';
import T from '../tokens.js';
import { JOURNEY } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

function JourneyRow({ item, i, vis }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 24px 1fr',
        gap: '0 24px',
        alignItems: 'stretch',
        borderBottom: i < JOURNEY.length - 1 ? `1px solid ${T.dim}` : 'none',
        padding: '28px 0',
        animation: vis ? `fadeUp 0.5s ${i * 0.1}s ease both` : 'none',
        opacity: vis ? 1 : 0,
      }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'flex-end', paddingRight:8, paddingTop:4 }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem', fontWeight:700, color: hov ? T.gold : T.muted, transition:'color 0.2s' }}>
          {item.year}
        </span>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ width:10, height:10, borderRadius:'50%', background: item.type==='edu' ? '#06B6D4' : T.gold, marginTop:4, flexShrink:0, boxShadow: hov ? `0 0 12px ${item.type==='edu'?'#06B6D4':T.gold}` : 'none', transition:'box-shadow 0.3s' }} />
        {i < JOURNEY.length - 1 && <div style={{ flex:1, width:1, background:T.dim, marginTop:8 }} />}
      </div>
      <div>
        <div style={{ fontFamily:"'JetBrains Mono'", fontSize:'0.6rem', color: item.type==='edu' ? '#06B6D4' : T.gold, letterSpacing:'0.1em', marginBottom:6, textTransform:'uppercase' }}>
          {item.type === 'edu' ? '● Education' : '● Career'}
        </div>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'1rem', color:T.white, marginBottom:4 }}>{item.title}</h3>
        <div style={{ fontFamily:"'JetBrains Mono'", fontSize:'0.65rem', color:T.muted, letterSpacing:'0.06em', marginBottom:8 }}>{item.org}</div>
        <p style={{ fontFamily:"'Space Grotesk'", fontSize:'0.85rem', color:T.muted, lineHeight:1.65 }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function Journey() {
  const [ref, vis] = useInView();
  return (
    <section id="journey" style={{ padding:'100px 0', borderTop:`1px solid ${T.border}` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div ref={ref}><SectionHeader eyebrow="Journey" title="How I got here." /></div>
        <div>{JOURNEY.map((item,i) => <JourneyRow key={i} item={item} i={i} vis={vis} />)}</div>
      </div>
    </section>
  );
}
