import Image from 'next/image'

import MainTv from '@/public/main-tv.webp'
import TvOne from '@/public/tv-1.webp'
import TvTwo from '@/public/tv-2.webp'
import TvThree from '@/public/tv-3.webp'
import TvFour from '@/public/tv-4.webp'

import { ArrowMobileRight } from '@/app/ui/icons/arrow-mobile-right'
import { ArrowMobileLeft } from '@/app/ui/icons/arrow-mobile-left'

export const ProductShowcase = () => {
  return (
    <>
      <ul className='order-2 md:order-1 flex items-center flex-row md:flex-col gap-3 md:gap-[30px] mt-[11px] md:mt-0'>
        <div className='block md:hidden p-[2px] bg-[#D9D9D9] mr-[9px]'>
          <ArrowMobileLeft />
        </div>
        <div className='hidden md:block relative bg-white border w-[152px] h-[115px]'>
          <Image src={TvOne} alt='tv one' />
        </div>
        <div className='relative flex items-center bg-white border w-[83px] h-[89px] md:w-[152px] md:h-[115px]'>
          <Image src={TvTwo} alt='tv two' />
        </div>
        <div className='relative flex items-center bg-white border w-[83px] h-[89px] md:w-[152px] md:h-[115px]'>
          <Image src={TvThree} alt='tv three' />
        </div>
        <div className='relative flex items-center bg-white border w-[83px] h-[89px] md:w-[152px] md:h-[115px]'>
          <Image src={TvFour} alt='tv four' />
        </div>
        <div className='block md:hidden p-[2px] bg-[#E73C17] ml-[9px]'>
          <ArrowMobileRight />
        </div>
      </ul>
      <div className='order-1 md:order-2 relative flex justify-center items-center md:bg-[#F1F1F1]  w-[300px] md:w-[528px] md:h-[548px]'>
        <div className='hidden md:block'>
          <Image src={MainTv} alt='Main Tv' />
        </div>
        <div className='block md:hidden'>
          <Image src={TvOne} alt='Main Tv' />
        </div>
        <span className='absolute -bottom-7 md:-bottom-14 left-[17%] md:left-0 text-[10px] md:text-[15px] text-[#6F6F6F] font-light'>*LG C2 42 (106cm) 4K Smart OLED evo TV</span>
      </div>
    </>
  )
}
