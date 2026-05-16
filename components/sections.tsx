export function Footer() {
  return (
    <footer
      style={{
        padding: '60px 0 40px',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 40,
            flexWrap: 'wrap',
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg,var(--text),#9B6FFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 8,
              }}
            >
              VELOCITE
            </div>

            <div
              style={{
                fontSize: 13,
                color: 'var(--muted2)',
                fontWeight: 300,
              }}
            >
              Direction is everything.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Clients, Work, Team, Mission, CTA, Footer } from '@/components/sections'
