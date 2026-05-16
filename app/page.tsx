'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Work from '@/components/Work'
import Team from '@/components/Team'
import Mission from '@/components/Mission'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import Blobs from '@/components/Blobs'

export default function Home() {
  return (
    <>
      <Cursor />
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <div className="glow-sep" style={{height:'1px',background:'linear-gradient(90deg,transparent,#9B6FFF,#3BE8D4,transparent)',opacity:0.3}} />
        <Clients />
        <div className="glow-sep" style={{height:'1px',background:'linear-gradient(90deg,transparent,#9B6FFF,#3BE8D4,transparent)',opacity:0.3}} />
        <Work />
        <div className="glow-sep" style={{height:'1px',background:'linear-gradient(90deg,transparent,#9B6FFF,#3BE8D4,transparent)',opacity:0.3}} />
        <Team />
        <div className="glow-sep" style={{height:'1px',background:'linear-gradient(90deg,transparent,#9B6FFF,#3BE8D4,transparent)',opacity:0.3}} />
        <Mission />
        <div className="glow-sep" style={{height:'1px',background:'linear-gradient(90deg,transparent,#9B6FFF,#3BE8D4,transparent)',opacity:0.3}} />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
