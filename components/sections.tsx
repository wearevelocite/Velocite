// components/sections.tsx

'use client'

import { useEffect, useRef } from 'react'

const logos = [
  'Novaform',
  'Arkline',
  'Zenex',
  'Pulsar',
  'Orbico',
]

const projects = [
  {
    name: 'Nova Skincare',
    cat: 'Branding + Shopify',
    desc: 'Premium skincare identity and ecommerce experience.',
  },
  {
    name: 'Orbit Media',
    cat: 'Website + Funnels',
    desc: 'High-converting website system for a media brand.',
  },
]

const team = [
  {
    name: 'Aashan Khan',
    role: 'Creative Director',
  },
  {
    name: 'Sara Malik',
    role: 'Brand Strategist',
  },
]

function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    ref.current
      ?.querySelectorAll('.fade-up')
      .forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [ref])
}

export function Clients() {
  const ref = useRef<HTMLElement>(null)

  useReveal(ref)

  return (
    <section
      id="clients"
      ref={ref}
      style={{ padding: '80px 0' }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <h2 className="fade-up">Clients</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: 16,
            marginTop: 30,
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="fade-up"
              style={{
                border: '1px solid var(--border)',
                padding: 20,
                textAlign: 'center',
                borderRadius: 12,
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work() {
  const ref = useRef<HTMLElement>(null)

  useReveal(ref)

  return (
    <section
      id="work"
      ref={ref}
      style={{ padding: '100px 0' }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <h2 className="fade-up">Selected Work</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 20,
            marginTop: 40,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className="fade-up"
              style={{
                border: '1px solid var(--border)',
                padding: 24,
                borderRadius: 16,
              }}
            >
              <p>{p.cat}</p>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Team() {
  const ref = useRef<HTMLElement>(null)

  useReveal(ref)

  return (
    <section
      id="team"
      ref={ref}
      style={{ padding: '100px 0' }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <h2 className="fade-up">Team</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 20,
            marginTop: 40,
          }}
        >
          {team.map((m) => (
            <div
              key={m.name}
              className="fade-up"
              style={{
                border: '1px solid var(--border)',
                padding: 24,
                borderRadius: 16,
              }}
            >
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Mission() {
  const ref = useRef<HTMLElement>(null)

  useReveal(ref)

  return (
    <section
      id="mission"
      ref={ref}
      style={{ padding: '120px 0' }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
        }}
      >
        <h2 className="fade-up">
          Moving brands with clarity.
        </h2>

        <p className="fade-up">
          Velocite helps brands grow through design,
          strategy, and development.
        </p>
      </div>
    </section>
  )
}

export function CTA() {
  const ref = useRef<HTMLElement>(null)

  useReveal(ref)

  return (
    <section
      id="cta"
      ref={ref}
      style={{ padding: '120px 0' }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
        }}
      >
        <h2 className="fade-up">
          Ready to build something great?
        </h2>

        <a
          href="mailto:hello@velocite.studio"
          style={{
            display: 'inline-block',
            marginTop: 24,
            padding: '14px 28px',
            borderRadius: 999,
            background: '#9B6FFF',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      style={{
        padding: '60px 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <h3>VELOCITE</h3>

        <p
          style={{
            color: 'var(--muted)',
          }}
        >
          © 2025 Velocite Studio
        </p>
      </div>
    </footer>
  )
}
