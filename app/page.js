import Image from 'next/image'
import FooterImage from '@/public/image-footer.webp'
import { varta, merriweather, karla } from '@/app/fonts'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'
import { Carousel } from '@/app/ui/landing/carousel'

import { Facebook } from '@/app/ui/icons/facebook'
import { Instagram } from '@/app/ui/icons/instagram'
import { Linkedin } from '@/app/ui/icons/linkedin'
import { Twitter } from './ui/icons/twitter-icon'
import { Hero } from '@/app/ui/landing/hero'
import { HeroPartTwo } from '@/app/ui/landing/hero-part-two'
import { CallToAction } from '@/app/ui/landing/call-to-action'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      {/* hero part two */}
      <HeroPartTwo />
      {/* call to action */}
      <CallToAction />
      {/* carrousel */}
      <Carousel />
      {/* footer */}
      <footer className={`${varta.variable} font-sans bg-[#F3EEE8] text-[#706458]`}>
        <div className='max-w-[1440px] my-0 mx-auto py-[48px] md:py-[70px] px-8 md:px-[150px]'>
          <article className='flex md:flex-row flex-col justify-between gap-10 md:gap-x-16 mb-10 md:mb-12'>
            <h1 className={`${merriweather.variable} text-[#534B42] text-center font-serif text-[34px] font-bold mr-8 tracking-[2px] leading-[25px]`}>antic</h1>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>Products</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Furniture</li>
                <li>Decoration</li>
                <li>Storage</li>
                <li>Baby and child</li>
                <li>Connected home</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>Rooms</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Living room</li>
                <li>Dining room</li>
                <li>Cooked</li>
                <li>Bedroom</li>
                <li>Office</li>
                <li>Laundry</li>
                <li>Garage</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>Services</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Click and collect</li>
                <li>Conception</li>
                <li>Installation</li>
                <li>Advices</li>
                <li>Gift card</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>About</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Our story</li>
                <li>Our stores</li>
                <li>Our partners</li>
              </ul>
            </div>
            <div className='max-w-[243px]'>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>We respect our planet</h3>
              <Image className='mb-[15px]' src={FooterImage} width={243} height={180} alt='footer image' />
              <p className='mb-[15px] opacity-70'>We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.</p>
              <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Learn more <ArrowLightRight /></a>
            </div>
          </article>
          <div className='flex justify-center w-full gap-6 mb-16 md:mb-5'>
            <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
          </div>
          <div className='flex flex-col md:flex-row justify-between md:items-center opacity-70'>
            <span className='order-2 md:order-1'>© 2021 Agence Dnd</span>
            <ul className='flex flex-wrap md:flex-nowrap gap-[30px] order-1 md:order-2 mb-10 md:mb-0 text-lg md:text-base'>
              <li>Privacy policy</li>
              <li>Term of service</li>
              <li>Language</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
