import Image from 'next/image'
import { varta, merriweather } from '@/app/fonts'
import HeroImage from '@/public/hero-image.webp'
import { ArrowBrownDown } from '@/app/ui/icons/arrow-brown-down'
import { MenuMobile } from '@/app/ui/icons/menu-mobile'
import { Contact } from '@/app/ui/icons/contact'

export const Hero = () => {
  return (
    <section className='w-full bg-[#F3EEE8]'>
      <div className='relative flex flex-col md:flex-row max-w-[1440px] my-0 mx-auto'>
        <div className='absolute z-10 md:relative order-2 md:order-1 px-[31px] md:px-[150px] py-[51px] md:py-[55px] md:w-1/2 h-screen'>
          <nav className='flex items-center justify-between md:justify-normal h-fit'>
            <h1 className={`${merriweather.variable} font-serif text-[34px] text-white md:text-[#A06056] font-bold mr-8 tracking-[2px] leading-[25px]`}>antic</h1>
            <div className='block md:hidden'>
              <MenuMobile />
            </div>
            <ul className={`hidden md:flex gap-6 ${varta.variable} font-sans text-[#706458]`}>
              <li>Products</li>
              <li>Rooms</li>
              <li>Services</li>
              <li>Inspirations</li>
            </ul>
          </nav>
          <div className='mt-[91px] md:mt-[135px] text-center md:text-left'>
            <h2 className={`${varta.variable} font-sans text-sm text-white md:text-[#A06056] font-bold mb-6 md:mb-[50px] leading-[1px]`}>HOME DESIGN</h2>
            <h1 className={`${merriweather.variable} font-serif text-[35px] md:text-[50px] text-white md:text-[#A06056] font-light leading-[40px] md:leading-[70px] mb-6 md:mb-[30px]`}>Elegance for Interiors & Exteriors</h1>
            <p className={`${varta.variable} font-sans text-lg md:text-[22px] font-light leading-[25px] md:leading-[30.8px] mb-6 md:mb-12 text-white md:text-[#706458E5]`}>We provide everyone with modern, trendy, quality furniture</p>
            <a href='#hero-section-two' className='flex justify-center md:hidden'>
              <ArrowBrownDown color='white' />
            </a>
            <a href='#hero-section-two' className='hidden md:block'>
              <ArrowBrownDown />
            </a>
          </div>
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
