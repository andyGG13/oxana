import Hero from '@/components/Hero'
import HeroMobileVariant2 from '@/components/HeroMobileVariant2'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import WhyUs from '@/components/WhyUs'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* Hero: Mobil = Variante 1, Desktop = Standard */}
      <div className="block md:hidden">
        <HeroMobileVariant2 />
      </div>
      <div className="hidden md:block">
        <Hero />
      </div>
      <Services />
      <Gallery />
      <WhyUs />
      <Reviews />
      <Location />
      <Contact />
    </>
  )
}
