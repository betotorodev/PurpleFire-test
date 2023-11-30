import { varta, merriweather } from '@/app/fonts'
import { CarouselComponent } from '@/app/ui/landing/carousel/carousel-component'
import { ArrowBrownRight } from '@/app/ui/icons/arrow-brown-right'
import { ArrowBrownLeft } from '@/app/ui/icons/arrow-brown-left'

export const Carousel = () => {
  return (
    <section className='flex flex-col md:pt-16 pb-[30px] md:pb-[70px]'>
      <div className='order-2 md:order-1'>
        <CarouselComponent />
      </div>
      <article className='order-1 md:order-2 md:max-w-[1440px] md:mx-auto md:my-0 block md:flex justify-between px-8 md:px-[150px] pb-[48px] md:pb-0 md:mt-[40px] md:mb-16'>
        <div className='block md:flex gap-[30px]'>
          <h2 className={`${merriweather.variable} font-serif text-[35px] w-[360px] text-[#121212] font-light mb-[15px] tracking-[-0.3px] leading-[40px]`}>Inspirations</h2>
          <p className={`${varta.variable} font-sans font-normal w-[359px] text-[#706458E5] text-lg leading-[25px]`}>Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
        </div>
        <div className='hidden md:block md:ml-[30px]'>
          <div className='flex gap-[11px] mb-5'>
            <ArrowBrownLeft />
            <ArrowBrownRight />
          </div>
          <span className={`${varta.variable} font-sans font-normal text-[#706458] opacity-50 text-lg leading-[25px]`}>01/06</span>
        </div>
      </article>
    </section>
  )
}
