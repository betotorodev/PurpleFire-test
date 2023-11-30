'use client'
import { useState } from 'react'
import { Details } from '@/app/lib/const.js'

export const ProductDescription = () => {
  const [detail, showDetail] = useState(Details.DESCRIPTION)

  return (
    <section className='w-full'>
      <nav className='mb-[15px]'>
        <ul className='flex justify-around px-[20px] md:px-[160px] border-b'>
          <li onClick={() => showDetail(Details.DESCRIPTION)} className={`cursor-pointer text-[12px] md:text-[22px] font-medium pb-[7px] md:pb-[15px] border-b ${detail === Details.DESCRIPTION && 'border-b-[#E73C17]'}`}>Description</li>
          <li onClick={() => showDetail(Details.SPECIFICATION)} className={`cursor-pointer text-[12px] md:text-[22px] font-medium pb-[7px] md:pb-[15px] border-b ${detail === Details.SPECIFICATION && 'border-b-[#E73C17]'}`}>Specification</li>
          <li onClick={() => showDetail(Details.REVIEWS)} className={`cursor-pointer text-[12px] md:text-[22px] font-medium pb-[7px] md:pb-[15px] border-b ${detail === Details.REVIEWS && 'border-b-[#E73C17]'}`}>Reviews</li>
        </ul>
      </nav>
      {detail === Details.DESCRIPTION &&
        <p className='text-[10px] md:text-lg px-[20px] md:px-[192px]'>
          The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.
          *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
          **65C2 Stand model is at a minimum 39% lighter than the C1 series.
          <span className='text-[#E73C17]'>More...</span>
        </p>}
      {detail === Details.SPECIFICATION &&
        <p className='text-[10px] md:text-lg px-[20px] md:px-[192px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.
        </p>}
      {detail === Details.REVIEWS &&
        <p className='text-[10px] md:text-lg px-[20px] md:px-[192px]'>
          Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.
        </p>}
    </section>
  )
}
