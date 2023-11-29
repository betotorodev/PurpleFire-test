import { varta, merriweather, karla } from '@/app/fonts'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'

export const HeroPartTwo = () => (
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
)
