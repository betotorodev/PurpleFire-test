import Image from 'next/image'
import HeroImage from '@/public/hero-image.jpeg'
import { varta, merriweather, karla } from '@/app/fonts'
import { ArrowBrownDown } from '@/app/ui/icons/arrow-brown-down'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      {/* hero */}
      <section className='flex w-full'>
        <div className='px-[150px] py-[55px] bg-[#F3EEE8] w-1/2 h-screen'>
          <nav className='flex items-center h-fit'>
            <h1 className={`${merriweather.variable} font-serif text-[34px] font-bold mr-8 tracking-[2px] leading-[25px]`}>antic</h1>
            <ul className={`flex gap-6 ${varta.variable} font-sans text-[#706458]`}>
              <li>Products</li>
              <li>Rooms</li>
              <li>Services</li>
              <li>Inspirations</li>
            </ul>
          </nav>
          <div className='mt-[135px]'>
            <h2 className={`${varta.variable} font-sans text-sm font-bold mb-[50px] leading-[1px]`}>HOME DESIGN</h2>
            <h1 className={`${merriweather.variable} font-serif text-[50px] font-light leading-[70px] mb-[30px]`}>Elegance for Interiors & Exteriors</h1>
            <p className={`${varta.variable} font-sans text-[22px] font-light leading-[30.8px] mb-12 text-[#706458E5]`}>We provide everyone with modern, trendy, quality furniture</p>
            <ArrowBrownDown />
          </div>
        </div>
        <div className='w-full h-screen overflow-hidden relative'>
          <Image src={HeroImage} alt='Hero' />
        </div>
      </section>
      {/* hero part two */}
      <section className='flex gap-12 w-full px-[150px] py-[70px] bg-[#F3EEE8]'>
        <div>
          <h1 className={`${merriweather.variable} w-[458px] font-serif text-[55px] text-[#706458] font-light mr-8 mb-[30px] tracking-[-0.6px] leading-[60px]`}>We stay by your side to design your projects</h1>
          <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Find out more <ArrowLightRight /></a>
        </div>
        <article className='flex flex-wrap gap-y-[30px] pt-5'>
          <div className='w-[259px]'>
            <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3`}>Our Advices</h3>
            <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</p>
          </div>
          <div className='w-[259px]'>
            <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3`}>Click and Collect</h3>
            <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
          </div>
          <div className='w-[259px]'>
            <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3`}>Conception Service</h3>
            <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Personalized service with an expert advisor for your interior and exterior decoration or layout projects.</p>
          </div>
          <div className='w-[259px]'>
            <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3`}>Installation Service</h3>
            <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
          </div>
        </article>
      </section>
      {/* call to action */}
      <section className='flex justify-between items-center px-[150px] py-[70px]'>
        <article>
          <h2 className={`${merriweather.variable} font-serif text-[35px] text-[#121212] font-light mb-[15px] tracking-[-0.3px] leading-[40px]`}>Be aware of the latest trends</h2>
          <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px] mb-[10px]`}>Stay informed of new trends, but also of our various offers.</p>
          <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Learn more <ArrowLightRight /></a>
        </article>
        <article>
          <input className={`${varta.variable} font-sans bg-[#F3EEE84D] pt-[15px] px-[15px] pb-[10px] mr-4 w-[297px] text-lg font-normal leading-[25px] text-[#A06056]`} type='text' placeholder='email@address.com' />
          <button className={`${karla.variable} font-action px-[30px] py-2 text-[17px] text-white bg-[#534B42] font-bold leading-[25px] tracking-[0.3px] h-[50px]`}>Suscribe</button>
        </article>
      </section>
    </main>
  )
}
