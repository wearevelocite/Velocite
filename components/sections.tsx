// components/Clients.tsx
'use client'
import { useEffect, useRef } from 'react'

const logos = ['Novaform','Arkline','Zenex','Pulsar','Orbico','Solaris','Kairo','Vertex','Nimbus','Axure']

export function Clients() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="clients" ref={ref} style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <p className="fade-up" style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 40 }}>
          Clients &amp; Partners — Brands we've helped move faster.
        </p>
        <div className="fade-up delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
          {logos.map(name => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 20px', border: '1px solid var(--border)', transition: 'all 0.25s', cursor: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; (e.currentTarget.querySelector('span') as HTMLElement).style.color = 'var(--text)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; (e.currentTarget.querySelector('span') as HTMLElement).style.color = 'rgba(240,238,248,0.2)' }}>
              <span style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(240,238,248,0.2)', transition: 'all 0.25s' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/Work.tsx
const projects = [
  { name: 'Nova Skincare', cat: 'Branding + Shopify Experience', desc: 'Complete brand identity and e-commerce experience for a premium skincare label. Conversion rate doubled within 60 days.', bg: 'linear-gradient(135deg,#0E0820,#1E0D40)', orb: 'radial-gradient(circle,#9B6FFF,#4A00E0 50%,transparent)' },
  { name: 'Orbit Media', cat: 'Website + Conversion System', desc: 'Full website rebuild with an integrated lead capture system and A/B-tested landing flows for a growing media brand.', bg: 'linear-gradient(135deg,#040D1A,#0A2233)', orb: 'radial-gradient(circle,#3BE8D4,#008080 50%,transparent)' },
  { name: 'Lumen Studio', cat: 'Visual Identity + Web Design', desc: 'Brand system and portfolio website for a boutique creative studio. Clean, editorial, and instantly recognizable.', bg: 'linear-gradient(135deg,#0A0A1E,#1A0E2E)', orb: 'radial-gradient(circle,#FF8AC0,#8B0057 50%,transparent)' },
  { name: 'Vertex AI', cat: 'Landing Page + Product UI', desc: 'High-converting product landing page and dashboard UI for an early-stage AI tool. From zero to launch in three weeks.', bg: 'linear-gradient(135deg,#0E1808,#1A2E0E)', orb: 'radial-gradient(circle,#FFD166,#E76F51 50%,transparent)' },
]

export function Work() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" ref={ref} style={{ padding: '120px 0', position: 'relative', zIndex: 1, background: 'linear-gradient(180deg,transparent,rgba(155,111,255,0.04) 50%,transparent)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="fade-up" style={{ marginBottom: 64 }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 16 }}>Selected Work</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Projects that <span style={{ background: 'linear-gradient(135deg,#9B6FFF,#3BE8D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>shaped direction.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 17, fontWeight: 300, maxWidth: 500 }}>A curated selection of work where strategy meets execution.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {projects.map((p, i) => (
            <div key={p.name} className={`fade-up delay-${i+1}`} style={{
              border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden',
              background: 'var(--surface)', backdropFilter: 'blur(20px)',
              transition: 'all 0.35s cubic-bezier(.4,0,.2,1)', cursor: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,111,255,0.35)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(155,111,255,0.15)'; (e.currentTarget.querySelector('.thumb-inner') as HTMLElement).style.transform = 'scale(1.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; (e.currentTarget.querySelector('.thumb-inner') as HTMLElement).style.transform = 'scale(1)' }}>
              <div style={{ height: 240, background: p.bg, position: 'relative', overflow: 'hidden' }}>
                <div className="thumb-inner" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)' }}>
                  <div style={{ width: 160, height: 160, borderRadius: '50%', background: p.orb, filter: 'blur(30px)', opacity: 0.7 }} />
                </div>
              </div>
              <div style={{ padding: 28 }}>
                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--purple)', fontWeight: 500, marginBottom: 8 }}>{p.cat}</p>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.01em' }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20, fontWeight: 300 }}>{p.desc}</p>
                <a href="#" style={{ fontSize: 13, color: 'var(--purple)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'gap 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '8px')}>
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/Team.tsx
const team = [
  { name: 'Aashan Khan', role: 'Creative Director', initials: 'AK', grad: 'linear-gradient(135deg,#9B6FFF,#3BE8D4)' },
  { name: 'Sara Malik', role: 'Brand Strategist', initials: 'SM', grad: 'linear-gradient(135deg,#FF8AC0,#FF6B6B)' },
  { name: 'Hassan Raza', role: 'Web Developer', initials: 'HR', grad: 'linear-gradient(135deg,#3BE8D4,#00B4D8)' },
  { name: 'Amna Sheikh', role: 'UI/UX Designer', initials: 'AS', grad: 'linear-gradient(135deg,#FFD166,#FFC46B)' },
]

export function Team() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="team" ref={ref} style={{ padding: '120px 0', position: 'relative', zIndex: 1, background: 'linear-gradient(180deg,transparent,rgba(59,232,212,0.03) 50%,transparent)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="fade-up" style={{ marginBottom: 64, textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 16 }}>The Team</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
            The people behind <span style={{ background: 'linear-gradient(135deg,#9B6FFF,#3BE8D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Velocite.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 17, fontWeight: 300, margin: '0 auto' }}>Small team. Big execution.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {team.map((m, i) => (
            <div key={m.name} className={`fade-up delay-${i+1}`} style={{
              border: '1px solid var(--border)', borderRadius: 20, padding: '32px 24px',
              background: 'var(--surface)', backdropFilter: 'blur(20px)', textAlign: 'center',
              cursor: 'none', transition: 'all 0.3s cubic-bezier(.4,0,.2,1)', position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: -2, borderRadius: '50%', background: 'conic-gradient(from 0deg,#9B6FFF,#3BE8D4,#9B6FFF)', animation: 'orbSpin 4s linear infinite' }} />
                <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', background: '#0E0B1E' }} />
                <span style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, background: m.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.initials}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{m.name}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300 }}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/Mission.tsx
export function Mission() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="mission" ref={ref} style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(155,111,255,0.1),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="fade-up" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 16 }}>Our Mission</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg,#9B6FFF,#3BE8D4)', margin: '0 auto 36px', borderRadius: 2 }} />
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(42px,5vw,68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 32, background: 'linear-gradient(150deg,var(--text),rgba(155,111,255,0.9) 60%,rgba(59,232,212,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Moving brands<br/>with clarity.
          </h2>
          <p style={{ fontSize: 19, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>
            Velocite exists to help brands move with clarity. We combine strategic thinking, bold design, and modern development to create experiences that feel premium and perform even better.
          </p>
        </div>
      </div>
    </section>
  )
}

// components/CTA.tsx
export function CTA() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cta" ref={ref} style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(155,111,255,0.06),rgba(59,232,212,0.04))', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse,rgba(155,111,255,0.12),transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 16 }}>Start Today</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Ready to build something<br/>that feels <span style={{ background: 'linear-gradient(135deg,#9B6FFF,#3BE8D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>unstoppable?</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 44, fontWeight: 300 }}>
            Let's craft your brand's next direction with clarity, speed, and impact.
          </p>
          <a href="mailto:hello@velocite.studio" style={{
            padding: '16px 36px', borderRadius: 100,
            background: 'linear-gradient(135deg,#9B6FFF,#6B3FFF)',
            color: '#fff', fontSize: 16, fontWeight: 500, textDecoration: 'none',
            boxShadow: '0 0 30px rgba(155,111,255,0.35)', display: 'inline-block',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(155,111,255,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 30px rgba(155,111,255,0.35)' }}>
            Book a Free Strategy Call
          </a>
          <p style={{ marginTop: 20, fontSize: 13, color: 'var(--muted2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3BE8D4', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Response time: within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

// components/Footer.tsx
export function Footer() {
  return (
    <footer style={{ padding: '60px 0 40px', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 800, letterSpacing: '0.08em', background: 'linear-gradient(135deg,var(--text),#9B6FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>VELOCITE</div>
            <div style={{ fontSize: 13, color: 'var(--muted2)', fontWeight: 300 }}>Direction is everything.</div>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {['#clients:Clients','#work:Work','#team:Team','#mission:Mission'].map(item => {
              const [href, label] = item.split(':')
              return <a key={label} href={href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>{label}</a>
            })}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <a href="mailto:hello@velocite.studio" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#3BE8D4')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>hello@velocite.studio</a>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Instagram','Behance','LinkedIn'].map(s => (
                <a key={s} href="#" title={s} style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', textDecoration: 'none', fontSize: 11, fontWeight: 600, letterSpacing: '0.02em', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#9B6FFF'; e.currentTarget.style.color = '#9B6FFF'; e.currentTarget.style.background = 'rgba(155,111,255,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'var(--muted2)' }}>© 2025 Velocite Studio. All rights reserved.</div>
          <div style={{ fontSize: 13, color: 'var(--muted2)' }}>Crafted with <span style={{ color: '#9B6FFF' }}>◆</span> by Velocite</div>
        </div>
      </div>
    </footer>
  )
}
