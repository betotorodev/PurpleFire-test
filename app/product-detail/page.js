import Image from 'next/image'
import Logo from '@/public/Needus.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Search } from '../ui/icons/search'
import { Like } from '../ui/icons/like'
import { Cart } from '../ui/icons/cart'

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
    </div>
  )
}
