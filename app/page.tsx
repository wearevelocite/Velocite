import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import Blobs from '@/components/Blobs'

import Clients from '@/components/Clients'
import Work from '@/components/Work'
import Team from '@/components/Team'
import Mission from '@/components/Mission'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

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
