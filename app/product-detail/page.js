import Image from 'next/image'
import Logo from '@/public/Needus.webp'
import Contact from '@/public/contact.webp'
import MainTv from '@/public/main-tv.webp'
import TvOne from '@/public/tv-1.webp'
import TvTwo from '@/public/tv-2.webp'
import TvThree from '@/public/tv-3.webp'
import TvFour from '@/public/tv-4.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Search } from '../ui/icons/search'
import { Like } from '../ui/icons/like'
import { Cart } from '../ui/icons/cart'
import { Menu } from '../ui/icons/menu'
import { StarEmpty } from '../ui/icons/star-empty'
import { StarFill } from '../ui/icons/star-fill'

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
      {/* Product */}
      <section className='flex gap-[35px] pl-[50px] pt-[82px] pr-[113px] pb-[104px]'>
        <article className='flex gap-3'>
          <ul className='flex flex-col gap-[30px]'>
            <div className='relative bg-white border w-[152px] h-[115px]'>
              <Image src={TvOne} alt='tv one' />
            </div>
            <div className='relative bg-white border w-[152px] h-[115px]'>
              <Image src={TvTwo} alt='tv two' />
            </div>
            <div className='relative bg-white border w-[152px] h-[115px]'>
              <Image src={TvThree} alt='tv three' />
            </div>
            <div className='relative bg-white border w-[152px] h-[115px]'>
              <Image src={TvFour} alt='tv four' />
            </div>
          </ul>
          <div className='relative flex justify-center items-center bg-[#F1F1F1] w-[528px] h-[548px]'>
            <Image src={MainTv} alt='Main Tv' />
            <span className='absolute -bottom-14 left-0 text-[15px] text-[#6F6F6F] font-light'>*LG C2 42 (106cm) 4K Smart OLED evo TV</span>
          </div>
        </article>
        <article className='flex flex-col gap-5'>
          <div className='flex flex-col gap-[13px]'>
            <span>Brand: LG</span>
            <span>Model: OLED42C2PSA</span>
            <span>Availability: Only 2 in Stock</span>
          </div>
          <h1 className='text-[32px] text-[#191919] font-medium'>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</h1>
          <div class='flex items-center gap-[10px] ml-4'>
            <StarFill />
            <StarFill />
            <StarFill />
            <StarEmpty />
          </div>
          <ul className='list-disc ml-8'>
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
          </ul>
          <div className='w-full border border-[#F0F0F0] my-[7px]' />
          <div className='grid grid-cols-3 grid-rows-2'>
            <span className='py-[19px] px-12 text-lg font-normal text-[#E73C17] border border-[#E73C17]'>106 cm (42)</span>
            <span className='py-[19px] px-12 text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-[19px] px-12 text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-[19px] px-12 text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-[19px] px-12 text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-[19px] px-12 text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          </div>
          <div className='w-full border border-[#F0F0F0] my-[7px]' />
          <section className='flex w-full justify-between items-center'>
            <div>
              <small className='text-base mb-[13px]'>USD(incl. of all taxes)</small>
              <div>
                <span className='text-[32px] font-normal mr-3'>$600.72</span>
                <span className='text-2xl text-[#D9D9D9]'>$800.00</span>
              </div>
            </div>
            <div className='flex h-[60px] border'>
              <button className='border-r h-full flex items-center justify-center px-[21px]'>-</button>
              <span className='h-full flex items-center justify-center px-[21px]'>1</span>
              <button className='border-l h-full flex items-center justify-center px-[21px]'>+</button>
            </div>
          </section>
          <div className='flex w-full justify-between items-center'>
            <button className='w-[202px] py-[19px] bg-[#E73C17] text-white'>Buy Now</button>
            <button className='w-[202px] py-[19px] border text-[#E73C17] border-[#E73C17]'>Add to Cart</button>
          </div>
        </article>
      </section>
    </div>
  )
}
