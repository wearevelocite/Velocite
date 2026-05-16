'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Clients', href: '#clients' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Mission', href: '#mission' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 0' : '20px 0',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        background: scrolled ? 'rgba(5,6,10,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{
            fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 800,
            letterSpacing: '0.08em', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--text), var(--purple))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>VELOCITE</a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {l.label}
              </a>
            ))}
            <a href="#cta" style={{
              padding: '9px 22px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.14)',
              color: 'var(--text)', fontSize: 13, fontWeight: 500, textDecoration: 'none',
              background: 'rgba(155,111,255,0.08)', transition: 'all 0.25s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(155,111,255,0.2)'
                e.currentTarget.style.borderColor = 'rgba(155,111,255,0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(155,111,255,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(155,111,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              Book a Call
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(true)} style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'none', padding: 4 }} className="flex md:hidden">
            {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 1.5, background: 'var(--muted)', display: 'block' }} />)}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(5,6,10,0.97)',
              zIndex: 999, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 32,
              backdropFilter: 'blur(20px)',
            }}>
            <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--muted)', fontSize: 28, cursor: 'none' }}>✕</button>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
