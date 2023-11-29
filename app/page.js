import Image from 'next/image'
import HeroImage from '@/public/hero-image.webp'
import FooterImage from '@/public/image-footer.webp'
import { varta, merriweather, karla } from '@/app/fonts'
import { ArrowBrownDown } from '@/app/ui/icons/arrow-brown-down'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'
import { Carousel } from '@/app/ui/carousel'
import { ArrowBrownRight } from '@/app/ui/icons/arrow-brown-right'
import { ArrowBrownLeft } from '@/app/ui/icons/arrow-brown-left'
import { Facebook } from '@/app/ui/icons/facebook'
import { Instagram } from '@/app/ui/icons/instagram'
import { Linkedin } from '@/app/ui/icons/linkedin'
import { Twitter } from '@/app/ui/icons/twitter'
import { Contact } from './ui/icons/contact'
import { MenuMobile } from './ui/icons/menu-mobile'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      {/* hero */}
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
      {/* hero part two */}
      <section className='w-full bg-[#F3EEE8]' id='hero-section-two'>
        <div className='max-w-[1440px] my-0 mx-auto block md:flex gap-12 px-8 md:px-[150px] py-[48px] md:py-[70px]'>
          <div>
            <h1 className={`${merriweather.variable} md:w-[458px] font-serif text-[35px] md:text-[55px] text-[#534B42] md:text-[#706458] font-normal md:font-light md:mr-8 mb-8 md:mb-[30px] tracking-[-0.3px] md:tracking-[-0.6px] leading-[40px] md:leading-[60px]`}>We stay by your side to design your projects</h1>
            <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Find out more <ArrowLightRight /></a>
          </div>
          <article className='flex flex-wrap gap-y-[30px] pt-[41px] md:pt-5'>
            <div className='w-[259px]'>
              <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3 leading-[30px]`}>Our Advices</h3>
              <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</p>
            </div>
            <div className='w-[259px]'>
              <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3 leading-[30px]`}>Click and Collect</h3>
              <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
            </div>
            <div className='w-[259px]'>
              <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3 leading-[30px]`}>Conception Service</h3>
              <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Personalized service with an expert advisor for your interior and exterior decoration or layout projects.</p>
            </div>
            <div className='w-[259px]'>
              <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3 leading-[30px]`}>Installation Service</h3>
              <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
            </div>
          </article>
        </div>
      </section>
      {/* call to action */}
      <section className='max-w-[1440px] my-0 mx-auto block md:flex justify-between items-center px-8 md:px-[150px] py-[48px] md:py-[70px]'>
        <article className='mb-8 md:mb-0'>
          <h2 className={`${merriweather.variable} font-serif text-[35px] text-[#121212] font-light mb-4 md:mb-[15px] tracking-[-0.3px] leading-[40px]`}>Be aware of the latest trends</h2>
          <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px] mb-4 md:mb-[10px]`}>Stay informed of new trends, but also of our various offers.</p>
          <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Learn more <ArrowLightRight /></a>
        </article>
        <article>
          <input className={`${varta.variable} font-sans bg-[#F3EEE84D] pt-[15px] px-[15px] pb-[10px] md:mr-4 mb-4 md:mb-0 w-full md:w-[297px] text-lg font-normal leading-[25px] text-[#A06056]`} type='text' placeholder='email@address.com' />
          <button className={`${karla.variable} w-full md:w-fit font-action px-[30px] py-2 text-[17px] text-white bg-[#534B42] font-bold leading-[25px] tracking-[0.3px] h-[50px]`}>Suscribe</button>
        </article>
      </section>
      {/* carrousel */}
      <section className='flex flex-col md:pt-16 pb-[30px] md:pb-[70px]'>
        <div className='order-2 md:order-1'>
          <Carousel />
        </div>
        <article className='order-1 md:order-2 md:max-w-[1440px] md:my-0 block md:flex justify-between px-8 md:px-[150px] pb-[48px] md:pb-0 md:mt-[40px] md:mb-16'>
          <div className='block md:flex gap-[30px]'>
            <h2 className={`${merriweather.variable} font-serif text-[35px] w-[360px] text-[#121212] font-light mb-[15px] tracking-[-0.3px] leading-[40px]`}>Inspirations</h2>
            <p className={`${varta.variable} font-sans font-normal w-[359px] text-[#706458E5] text-lg leading-[25px]`}>Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
          </div>
          <div className='hidden md:block'>
            <div className='flex gap-[11px] mb-5'>
              <ArrowBrownLeft />
              <ArrowBrownRight />
            </div>
            <span className={`${varta.variable} font-sans font-normal text-[#706458] opacity-50 text-lg leading-[25px]`}>01/06</span>
          </div>
        </article>
      </section>
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
