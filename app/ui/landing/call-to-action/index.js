import { varta, merriweather, karla } from '@/app/fonts'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'

export const CallToAction = () => {
  return (
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
  )
}
