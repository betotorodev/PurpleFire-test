'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MenuMobileTwo } from '@/app/ui/icons/menu-mobile-2'
import { SearchMobile } from '@/app/ui/icons/search-mobile'
import { User } from '@/app/ui/icons/user'
import { Search } from '@/app/ui/icons/search'
import { Like } from '@/app/ui/icons/like'
import Logo from '@/public/Needus.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Cart } from '@/app/ui/icons/cart'

export const Form = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className='flex justify-between items-center w-full pt-[27px] pb-[10px] md:py-[37px] px-4 md:pl-[58px] md:pr-[40px]'>
      <div className='block md:hidden bg-[#E73C17] p-[9px]'>
        <MenuMobileTwo />
      </div>
      <div className='relative w-[65px] md:w-[168px] h-[19px] md:h-[50px] ml-16 md:ml-0'>
        <Image src={Logo} alt='Needus logo' fill />
      </div>
      <form className='hidden md:flex'>
        <div className='flex items-center border-2'>
          <input className='pl-[45px] py-[26px]' type='text' placeholder='Search Products' />
          <button className='py-[21px] px-5 mr-[5px] bg-[#2F333A]'><Search /></button>
        </div>
        <div className='relative flex justify-between items-center gap-[131px] border-2 py-[26px] px-[28px]'>
          <span className='flex justify-between items-center' onClick={() => setShowModal(!showModal)}>All Categories <ArrowLightDown color='black' /></span>
          <div className='flex'>
            <a className='pr-2 mr-2 border-r-2' href='#'>Login</a>
            <a href='#'>Signup</a>
          </div>
          {/* dropdown */}
          <div className={`${showModal ? '' : 'hidden'} absolute top-full shadow-2xl left-0 p-[25px] bg-white min-h-[253px]`}>
            <ul className='w-[203px] text-[20px]'>
              <li className='border-b pb-[18px] pt-[18px] font-light'>Category 1</li>
              <li className='border-b pb-[18px] pt-[18px] font-light'>Category 2</li>
              <li className='border-b pb-[18px] pt-[18px] font-light'>Category 3</li>
              <li className='border-b pb-[18px] pt-[18px] font-light'>Category 4</li>
              <li className='pb-[18px] pt-[18px] font-light'>Category 5</li>
            </ul>
          </div>
        </div>
      </form>
      <div className='flex gap-[6px] md:gap-[17px]'>
        <div className='flex gap-[6px] md:hidden'>
          <SearchMobile />
          <User />
        </div>
        <div className='block md:hidden'>
          <Like width='20' height='20' />
        </div>
        <div className='hidden md:block'>
          <Like />
        </div>
        <div className='relative'>
          <div className='block md:hidden'>
            <Cart width='20' height='20' />
          </div>
          <div className='hidden md:block'>
            <Cart />
          </div>
          <div class='absolute inline-flex items-center justify-center w-3 md:w-6 h-3 md:h-6 text-[7px] md:text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-1 md:-top-3 -end-1 md:-end-3'>8</div>
        </div>
      </div>
    </section>
  )
}
