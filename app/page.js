import { Hero } from '@/app/ui/landing/hero'
import { HeroPartTwo } from '@/app/ui/landing/hero-part-two'
import { CallToAction } from '@/app/ui/landing/call-to-action'
import { Carousel } from '@/app/ui/landing/carousel'
import { Footer } from '@/app/ui/landing/footer'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <HeroPartTwo />
      <CallToAction />
      <Carousel />
      <Footer />
    </main>
  )
}
