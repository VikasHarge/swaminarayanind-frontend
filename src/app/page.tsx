import Image from 'next/image'
import heroBg from '../../public/images/hero_background.svg'
import HeroSection from '@/components/HeroSection'
import OurFeatures from '@/components/OurFeatures'
import OurProducts from '@/components/OurProducts'
import WeServe from '@/components/WeServe'
import ContactUsForm from '@/components/ContactUsForm'


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
