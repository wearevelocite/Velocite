'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const pills = [
  { label: 'Branding', color: '#9B6FFF', bg: 'rgba(155,111,255,0.08)', border: 'rgba(155,111,255,0.25)' },
  { label: 'Design', color: '#3BE8D4', bg: 'rgba(59,232,212,0.06)', border: 'rgba(59,232,212,0.2)' },
  { label: 'Development', color: '#FF8AC0', bg: 'rgba(255,138,192,0.06)', border: 'rgba(255,138,192,0.2)' },
  { label: 'Conversion', color: '#FFC46B', bg: 'rgba(255,196,107,0.06)', border: 'rgba(255,196,107,0.2)' },
]

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = particlesRef.current
    if (!c) return
    const colors = ['#9B6FFF','#3BE8D4','#FF8AC0','#FFD166']
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 4 + 2
      p.style.cssText = `
        position:absolute; border-radius:50%;
        width:${size}px; height:${size}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        left:${Math.random()*100}%;
        bottom:${Math.random()*40}%;
        box-shadow:0 0 ${size*3}px currentColor;
        animation:floatParticle ${Math.random()*4+5}s linear ${Math.random()*6}s infinite;
        opacity:0;
      `
      c.appendChild(p)
    }
  }, [])

  const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left */}
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fade} transition={{ duration: 0.6 }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(155,111,255,0.07)',
              fontSize: 12, color: '#9B6FFF',
              letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
              marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#9B6FFF', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              Creative Agency — Est. 2024
            </motion.div>

            <motion.h1 variants={fade} transition={{ duration: 0.7 }} style={{
              fontFamily: 'var(--font-head)', fontSize: 'clamp(52px, 6vw, 82px)',
              fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.02em',
              marginBottom: 24,
              background: 'linear-gradient(150deg, #fff 30%, rgba(155,111,255,0.85) 70%, rgba(59,232,212,0.7))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Direction<br/>is everything.
            </motion.h1>

            <motion.p variants={fade} transition={{ duration: 0.6 }} style={{
              fontSize: 18, color: 'var(--muted)', lineHeight: 1.7,
              maxWidth: 480, marginBottom: 32, fontWeight: 300,
            }}>
              We help brands find the right direction through strategic branding, design, development, and conversion-focused experiences.
            </motion.p>

            <motion.div variants={fade} transition={{ duration: 0.5 }} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {pills.map(p => (
                <span key={p.label} style={{
                  padding: '6px 16px', borderRadius: 100,
                  border: `1px solid ${p.border}`,
                  color: p.color, background: p.bg, fontSize: 13, fontWeight: 500,
                  transition: 'all 0.25s', cursor: 'default',
                }}>
                  {p.label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fade} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, flexWrap: 'wrap' }}>
              <a href="#cta" style={{
                padding: '14px 30px', borderRadius: 100,
                background: 'linear-gradient(135deg, #9B6FFF, #6B3FFF)',
                color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none',
                boxShadow: '0 0 30px rgba(155,111,255,0.35)',
                transition: 'all 0.25s', display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(155,111,255,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 30px rgba(155,111,255,0.35)' }}>
                Start a Project
              </a>
              <a href="#work" style={{
                padding: '13px 28px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'var(--text)', fontSize: 15, fontWeight: 400, textDecoration: 'none',
                background: 'transparent', transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)' }}>
                View Work
              </a>
            </motion.div>

            <motion.p variants={fade} transition={{ duration: 0.5 }} style={{
              fontSize: 13, color: 'var(--muted2)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 24, height: 1, background: 'var(--muted2)', display: 'inline-block' }} />
              Trusted by startups, creators, and scaling brands.
            </motion.p>
          </motion.div>

          {/* Right - Orb */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 500 }}>
            <div ref={particlesRef} style={{ position: 'absolute', inset: '-40px', zIndex: 0 }} />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', width: 360, height: 360, zIndex: 1 }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #7B4FFF, #1FCFBC, #FF8AC0, #7B4FFF)',
                filter: 'blur(2px)',
                animation: 'orbSpin 8s linear infinite',
                opacity: 0.85,
              }} />
              <div style={{
                position: 'absolute', inset: 12, borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, #2A1A6E 0%, #05060A 70%)',
                zIndex: 2,
              }} />
              <div style={{
                position: 'absolute', top: '15%', left: '20%',
                width: '35%', height: '25%',
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.25), transparent)',
                borderRadius: '50%', zIndex: 3,
                animation: 'shineMove 4s ease-in-out infinite alternate',
              }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
