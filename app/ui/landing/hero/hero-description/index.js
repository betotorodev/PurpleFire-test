import { varta, merriweather } from '@/app/fonts'
import { ArrowBrownDown } from '@/app/ui/icons/arrow-brown-down'

export const HeroDescription = () => {
  return (
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
  )
}
