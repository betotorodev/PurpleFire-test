import Image from 'next/image'
import Contact from '@/public/contact.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Menu as MenuIcon } from '../ui/icons/menu'

export const Menu = () => {
  return (
    <header className='hidden md:flex justify-between bg-[#2F333A] w-full h-[76px]'>
      <span className='flex items-center bg-[#E73C17] pl-[58px] pr-[48px] text-white gap-[17px] text-2xl font-medium'><MenuIcon /> All Categories <ArrowLightDown width='30' height='30' /></span>
      <nav className='flex border-r-2 border-white'>
        <ul className='flex gap-[21px] text-white pl-[129px] py-[28px] pr-[88px]'>
          <li className='flex items-center gap-2'>HOME <ArrowLightDown /></li>
          <li className='flex items-center gap-2'>ABOUT <ArrowLightDown /></li>
          <li className='flex items-center gap-2 text-[#E73C17]'>PRODUCT <ArrowLightDown color='#E73C17' /></li>
          <li className='flex items-center gap-2'>PAGES <ArrowLightDown /></li>
          <li className='flex items-center gap-2'>CONTACT <ArrowLightDown /></li>
        </ul>
      </nav>
      <div className='flex items-center gap-[25px] pr-20 pl-5 text-white'>
        <Image src={Contact} alt='Contact' />
        <div className='flex flex-col'>
          <span>Contact Us 24/7</span>
          <span>+ 12012987481</span>
        </div>
      </div>
    </header>
  )
}
