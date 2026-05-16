import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import Blobs from '@/components/Blobs'
import { Clients, Work, Team, Mission, CTA, Footer } from '@/components/sections'
export default function Home() {
  return (
    <>
      <Cursor />
      <Blobs />
      <Navbar />
      <Hero />
      <Clients />
      <Work />
      <Team />
      <Mission />
      <CTA />
      <Footer />
    </>
  )
}
