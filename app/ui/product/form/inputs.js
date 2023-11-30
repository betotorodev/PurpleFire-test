'use client'
import { useState } from 'react'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Search } from '@/app/ui/icons/search'

export const Inputs = () => {
  const [showModal, setShowModal] = useState(false)
  return (
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
  )
}
