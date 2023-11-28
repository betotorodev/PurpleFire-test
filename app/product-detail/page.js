import Image from 'next/image'
import Logo from '@/public/Needus.webp'
import Contact from '@/public/contact.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Search } from '../ui/icons/search'
import { Like } from '../ui/icons/like'
import { Cart } from '../ui/icons/cart'
import { Menu } from '../ui/icons/menu'

export default function ProductDetail() {
  return (
    <div className='w-full'>
      {/* head */}
      <nav className='flex justify-between w-full bg-[#2F333A] py-5 pl-20 pr-10 text-white'>
        <h6 className='font-light'>Welcome to Needus & Get the best product</h6>
        <div className='flex'>
          <span className='flex gap-1 mr-[23px] pr-[18px] border-r-2 font-light'>ENG <ArrowLightDown /></span>
          <span className='flex gap-1 font-light'>USG <ArrowLightDown /></span>
        </div>
      </nav>
      {/* form */}
      <section className='flex justify-between items-center w-full py-[37px] pl-[58px] pr-[40px]'>
        <div className='relative w-[168px] h-[50px]'>
          <Image src={Logo} alt='Needus logo' fill />
        </div>
        <form className='flex'>
          <div className='flex items-center border-2'>
            <input className='pl-[45px] py-[26px]' type='text' placeholder='Search Products' />
            <button className='py-[21px] px-5 mr-[5px] bg-[#2F333A]'><Search /></button>
          </div>
          <div className='flex justify-between items-center gap-[131px] border-2 py-[26px] px-[28px]'>
            <span className='flex justify-between items-center'>All Categories <ArrowLightDown color='black' /></span>
            <div className='flex'>
              <a className='pr-2 mr-2 border-r-2' href='#'>Login</a>
              <a href='#'>Signup</a>
            </div>
          </div>
        </form>
        <div className='flex gap-[17px]'>
          <Like />
          <div className='relative'>
            <Cart />
            <div class='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-3 -end-3'>8</div>
          </div>
        </div>
      </section>
      {/* menu */}
      <header className='flex justify-between bg-[#2F333A] w-full h-[76px]'>
        <span className='flex items-center bg-[#E73C17] pl-[58px] pr-[48px] text-white gap-[17px] text-2xl font-medium'><Menu /> All Categories <ArrowLightDown width='30' height='30' /></span>
        <nav className='flex border-r-2 border-white'>
          <ul className='flex gap-[21px] text-white pl-[129px] py-[28px] pr-[88px]'>
            <li className='flex items-center gap-2'>HOME <ArrowLightDown /></li>
            <li className='flex items-center gap-2'>ABOUT <ArrowLightDown /></li>
            <li className='flex items-center gap-2 text-[#E73C17]'>PRODUCT <ArrowLightDown /></li>
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
      {/* banner */}
      <section className='flex flex-col justify-center items-center w-full bg-[#F4F5F8] py-20'>
        <h1 className='text-[40px] font-medium text-[#191919]'>TV COLLECTION</h1>
        <h2 className='text-lg font-light tracking-[3.6px] leading-[32px] text-[#191919]'>HOME / PRODUCT / TV / COLLECTION</h2>
      </section>
    </div>
  )
}
