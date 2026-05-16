// components/Blobs.tsx
'use client'
export default function Blobs() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #7B4FFF, transparent 70%)', filter: 'blur(80px)', opacity: 0.18, top: -100, left: -150, animation: 'floatBlob 22s linear infinite' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #1FCFBC, transparent 70%)', filter: 'blur(80px)', opacity: 0.18, top: '30%', right: -100, animation: 'floatBlob 28s linear -10s infinite' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, #9B6FFF, transparent 70%)', filter: 'blur(80px)', opacity: 0.18, bottom: '10%', left: '30%', animation: 'floatBlob 18s linear -5s infinite' }} />
    </div>
  )
}
