import Image from 'next/image'
import heroBg from '../../public/images/hero_background.svg'
import HeroSection from '@/components/HeroSection'
import OurFeatures from '@/components/OurFeatures'
import OurProducts from '@/components/OurProducts'
import WeServe from '@/components/WeServe'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurFeatures />
      <OurProducts />
      <WeServe />
    </main>
  )
}
