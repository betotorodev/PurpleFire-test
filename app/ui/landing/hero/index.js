import Image from 'next/image'
import HeroImage from '@/public/hero-image.webp'
import { Contact } from '@/app/ui/icons/contact'
import { Header } from '@/app/ui/landing/hero/header'
import { HeroDescription } from '@/app/ui/landing/hero/hero-description'

export const Hero = () => {
  return (
    <section className='w-full bg-[#F3EEE8]'>
      <div className='relative flex flex-col md:flex-row max-w-[1440px] my-0 mx-auto'>
        <div className='absolute z-10 md:relative order-2 md:order-1 px-[31px] md:px-[150px] py-[51px] md:py-[55px] md:w-1/2 h-screen'>
          <Header />
          <HeroDescription />
        </div>
        <div className='order-1 md:order-2 w-full h-[667px] md:h-screen overflow-hidden relative'>
          <div className='hidden md:block absolute right-[40px] top-[40px]'>
            <Contact />
          </div>
          <Image src={HeroImage} alt='Hero' priority fill />
        </div>
      </div>
    </section>
  )
}
