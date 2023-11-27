import Image from 'next/image'
import HeroImage from '@/public/hero-image.jpeg'
import { varta, merriweather } from '@/app/fonts'
import { ArrowBrownDown } from '@/app/ui/icons/arrow-brown-down'

export default function Home() {
  return (
    <main className='w-screen min-h-screen'>
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
        <div className='w-1/2 h-screen overflow-hidden relative'>
          <Image src={HeroImage} alt='Hero' />
        </div>
      </section>
      {/* <section className='w-full'>
        <h1>holii</h1>
      </section> */}
    </main>
  )
}
