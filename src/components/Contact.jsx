import { useState } from 'react';
import T from '../tokens.js';
import { CONTACT_LINKS } from '../data.js';
import { useInView } from '../hooks.js';
import SectionHeader from './SectionHeader.jsx';

export default function Contact() {
  const [ref, vis] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.88rem',
    width: '100%',
    background: T.bg,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    padding: '12px 16px',
    color: T.white,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: T.muted,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{ padding: '100px 0', borderTop: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Contact"
            title="Let's work together."
            sub="Open to full-time roles, freelance contracts, and co-founder conversations."
          />
        </div>

        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}
        >
          {/* Left: contact info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              animation: vis ? 'fadeUp 0.6s ease both' : 'none',
              opacity: vis ? 1 : 0,
            }}
          >
            {CONTACT_LINKS.map(({ label, val, href }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono'",
                    fontSize: '0.6rem',
                    color: T.muted,
                    letterSpacing: '0.12em',
                  }}
                >
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Grotesk'",
                      fontSize: '0.82rem',
                      color: T.gold,
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = 'underline')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = 'none')
                    }
                  >
                    {val}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "'Space Grotesk'",
                      fontSize: '0.82rem',
                      color: T.white,
                      fontWeight: 500,
                    }}
                  >
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              padding: '28px',
              animation: vis ? 'fadeUp 0.6s 0.15s ease both' : 'none',
              opacity: vis ? 1 : 0,
            }}
          >
            {sent ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  padding: '40px 0',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✓</div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk'",
                    fontWeight: 700,
                    color: T.white,
                    fontSize: '1.1rem',
                    marginBottom: 8,
                  }}
                >
                  Message sent.
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk'",
                    color: T.muted,
                    fontSize: '0.85rem',
                  }}
                >
                  I'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { field: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name' },
                  { field: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={labelStyle}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) =>
                        setForm({ ...form, [field]: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = T.gold)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = T.border)
                      }
                    />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = T.gold)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = T.border)
                    }
                  />
                </div>
                <button
                  onClick={handleSend}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: T.bg,
                    background: T.gold,
                    border: 'none',
                    padding: '14px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                    transition: 'opacity 0.2s, transform 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
