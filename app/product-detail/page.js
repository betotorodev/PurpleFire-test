'use client'

import Image from 'next/image'
import Logo from '@/public/Needus.webp'
import Contact from '@/public/contact.webp'
import MainTv from '@/public/main-tv.webp'
import TvOne from '@/public/tv-1.webp'
import TvTwo from '@/public/tv-2.webp'
import TvThree from '@/public/tv-3.webp'
import TvFour from '@/public/tv-4.webp'
import RelatedOne from '@/public/related-1.webp'
import RelatedTwo from '@/public/related-2.webp'
import RelatedThree from '@/public/related-3.webp'
import RelatedFour from '@/public/related-4.webp'
import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'
import { Search } from '../ui/icons/search'
import { Like } from '../ui/icons/like'
import { Cart } from '../ui/icons/cart'
import { Menu } from '../ui/icons/menu'
import { StarEmpty } from '../ui/icons/star-empty'
import { StarFill } from '../ui/icons/star-fill'
import { LikeFill } from '../ui/icons/like-fill'
import { Whatsapp } from '../ui/icons/whatsapp'
import { FacebookTwo } from '../ui/icons/facebook-2'
import { InstagramTwo } from '../ui/icons/instagram-2'
import { Youtube } from '../ui/icons/youtube'
import { Cellphone } from '../ui/icons/cellphone'
import { Location } from '../ui/icons/location'
import { useState } from 'react'
import { MenuMobileTwo } from '../ui/icons/menu-mobile-2'
import { ArrowMobileRight } from '../ui/icons/arrow-mobile-right'
import { ArrowMobileLeft } from '../ui/icons/arrow-mobile-left'

const relatedProducts = [
  {
    badge: 'NEW',
    badgeColor: 'bg-[#12A05C]',
    image: RelatedOne,
    title: 'Sony BRAVIA XR Android Tv',
    price: '$1000.66',
    discount: true,
    discountPrice: '$800.22',
    like: LikeFill
  },
  {
    badge: '-10%',
    badgeColor: 'bg-[#E73C17]',
    image: RelatedTwo,
    title: 'Mi P1 Smart Android HD TV',
    price: '$400.00',
    discount: false
  },
  {
    badge: 'HOT',
    badgeColor: 'bg-[#FF9900]',
    image: RelatedThree,
    title: 'Konka OLED Android Tv',
    price: '$700.00',
    discount: false
  },
  {
    badge: '2 Years Warranty',
    badgeColor: 'bg-[#7F7CF6]',
    image: RelatedFour,
    title: 'TCL Roku Android Tv',
    price: '$800.00',
    discount: false
  }
]

const Details = {
  DESCRIPTION: 'description',
  SPECIFICATION: 'specification',
  REVIEWS: 'reviews'
}

export default function ProductDetail() {
  const [showModal, setShowModal] = useState(false)
  const [detail, showDetail] = useState(Details.DESCRIPTION)
  const [susbscribe, setSusbscribe] = useState(false)
  return (
    <div className='w-full'>
      {/* head */}
      <nav className='hidden md:flex justify-between w-full bg-[#2F333A] py-5 pl-20 pr-10 text-white'>
        <h6 className='font-light'>Welcome to Needus & Get the best product</h6>
        <div className='flex'>
          <span className='flex gap-1 mr-[23px] pr-[18px] border-r-2 font-light'>ENG <ArrowLightDown /></span>
          <span className='flex gap-1 font-light'>USG <ArrowLightDown /></span>
        </div>
      </nav>
      {/* form */}
      <section className='flex justify-between items-center w-full pt-[27px] pb-[10px] md:py-[37px] px-4 md:pl-[58px] md:pr-[40px]'>
        <div className='block md:hidden bg-[#E73C17] p-[9px]'>
          <MenuMobileTwo />
        </div>
        <div className='relative w-[65px] md:w-[168px] h-[19px] md:h-[50px]'>
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
        <div className='flex gap-[17px]'>
          <Like />
          <div className='relative'>
            <Cart />
            <div class='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-3 -end-3'>8</div>
          </div>
        </div>
      </section>
      {/* menu */}
      <header className='hidden md:flex justify-between bg-[#2F333A] w-full h-[76px]'>
        <span className='flex items-center bg-[#E73C17] pl-[58px] pr-[48px] text-white gap-[17px] text-2xl font-medium'><Menu /> All Categories <ArrowLightDown width='30' height='30' /></span>
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
      {/* banner */}
      <section className='flex flex-col justify-center items-center w-full bg-[#F4F5F8] py-4 md:py-20'>
        <h1 className='text-lg md:text-[40px] font-medium text-[#191919]'>TV COLLECTION</h1>
        <h2 className='text-[10px] md:text-lg font-light md:tracking-[3.6px] md:leading-[32px] text-[#191919]'>HOME / PRODUCT / TV / COLLECTION</h2>
      </section>
      {/* Product */}
      <section className='flex flex-col md:flex-row gap-[18px] md:gap-[35px] px-[19px] py-[10px] md:pl-[50px] md:pt-[82px] md:pr-[113px] md:pb-[104px]'>
        <article className='flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-3'>
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
        </article>
        <article className='flex flex-col gap-2 md:gap-5'>
          <div className='flex flex-col gap-[5px] md:gap-[13px]'>
            <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Brand:</span> LG</small>
            <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Model:</span> OLED42C2PSA</small>
            <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Availability:</span> Only 2 in Stock</small>
          </div>
          <h1 className='text-sm md:text-[32px] md:leading-[40px] text-[#191919] font-medium'>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</h1>
          <div class='hidden md:flex items-center gap-[10px] ml-4'>
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarEmpty />
          </div>
          <div class='flex md:hidden items-center gap-[10px] md:ml-4'>
            <StarFill width='10' height='10' />
            <StarFill width='10' height='10' />
            <StarFill width='10' height='10' />
            <StarFill width='10' height='10' />
            <StarEmpty width='10' height='10' />
          </div>
          <ul className='list-disc ml-4 md:ml-8 text-[11px] md:text-base'>
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
          </ul>
          <div className='w-full border border-[#F0F0F0] my-[7px]' />
          <div className='flex flex-wrap gap-4 md:grid md:grid-cols-3 md:grid-rows-2'>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#E73C17] border border-[#E73C17]'>106 cm (42)</span>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
            <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          </div>
          <div className='w-full border border-[#F0F0F0] my-[7px]' />
          <div className='fixed md:relative left-0 bottom-0 w-full px-[21px] md:px-0 py-[10px] md:py-0 bg-white z-20'>
            <section className='flex w-full justify-between items-center md:mb-[23px]'>
              <div>
                <small className='text-[10px] md:text-base mb-[5px] md:mb-[13px]'>USD(incl. of all taxes)</small>
                <div>
                  <span className='text-lg md:text-[32px] font-normal mr-3'>$600.72</span>
                  <span className='text-base md:text-2xl text-[#D9D9D9]'>$800.00</span>
                </div>
              </div>
              <div className='flex h-[21px] md:h-[60px] border'>
                <button className='border-r h-full flex items-center justify-center px-[3px] md:px-[21px]'>-</button>
                <span className='h-full flex items-center justify-center px-[3px] md:px-[21px]'>1</span>
                <button className='border-l h-full flex items-center justify-center px-[3px] md:px-[21px]'>+</button>
              </div>
            </section>
            <div className='flex w-full justify-between items-center'>
              <button className='w-[120px] md:w-[202px] py-[5px] md:py-[19px] bg-[#E73C17] text-white'>Buy Now</button>
              <button className='w-[120px] md:w-[202px] py-[5px] md:py-[19px] border text-[#E73C17] border-[#E73C17]'>Add to Cart</button>
            </div>
          </div>
        </article>
      </section>
      {/* product description */}
      <section className='w-full'>
        <nav className='mb-[15px]'>
          <ul className='flex justify-around px-[160px] border-b'>
            <li onClick={() => showDetail(Details.DESCRIPTION)} className={`cursor-pointer text-[22px] font-medium pb-[15px] border-b ${detail === Details.DESCRIPTION && 'border-b-[#E73C17]'}`}>Description</li>
            <li onClick={() => showDetail(Details.SPECIFICATION)} className={`cursor-pointer text-[22px] font-medium pb-[15px] border-b ${detail === Details.SPECIFICATION && 'border-b-[#E73C17]'}`}>Specification</li>
            <li onClick={() => showDetail(Details.REVIEWS)} className={`cursor-pointer text-[22px] font-medium pb-[15px] border-b ${detail === Details.REVIEWS && 'border-b-[#E73C17]'}`}>Reviews</li>
          </ul>
        </nav>
        {detail === Details.DESCRIPTION &&
          <p className='px-[192px]'>
            The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.
            *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
            **65C2 Stand model is at a minimum 39% lighter than the C1 series.
            <span className='text-[#E73C17]'>More...</span>
          </p>}
        {detail === Details.SPECIFICATION &&
          <p className='px-[192px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.
          </p>}
        {detail === Details.REVIEWS &&
          <p className='px-[192px]'>
            Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.
          </p>}
      </section>
      {/* related products */}
      <section className='flex flex-col items-center mt-[135px]'>
        <h1 className='text-[32px] font-medium text-[#191919] mb-[66px]'>Realted products</h1>
        <ul className='flex flex-col md:flex-row justify-between w-full px-[80px] gap-[28px]'>
          {
            relatedProducts.map((product, index) => {
              return (
                <li className='flex flex-col' key={index}>
                  <div className='relative pb-[47px] pt-[22px] px-[23px] mb-[38px] bg-[#F1F1F1]'>
                    {product.like && <product.like />}
                    <span className={`${product.badgeColor} rounded-full py-[5px] px-[20px] text-xs text-white`}>{product.badge}</span>
                    <div className='flex items-center relative h-[249px]'>
                      <Image src={product.image} alt={product.title} width={249} height={249} />
                    </div>
                    <button className='flex gap-6 my-0 mx-auto py-[15px] px-[31px] bg-white'><Cart width='18' height='18' /> Add to cart</button>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h3 className='text-[20px]'>{product.title}</h3>
                    <div className='flex'>
                      {product.discountPrice && <span className='text-[20px] font-bold mr-[11px]'>{product.discountPrice}</span>}
                      <span className={`${product.discount && 'text-[#D9D9D9] line-through'} text-[20px] font-bold`}>{product.price}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className='flex justify-center gap-2 w-full my-[53px]'>
          <div className='w-[14px] h-[14px] bg-[#E73C17] rounded-full' />
          <div className='w-[14px] h-[14px] bg-[#F4F5F8] rounded-full' />
          <div className='w-[14px] h-[14px] bg-[#F4F5F8] rounded-full' />
          <div className='w-[14px] h-[14px] bg-[#F4F5F8] rounded-full' />
        </div>
      </section>
      {/* Join to the news letter */}
      <section className='relative flex flex-col md:flex-row justify-between md:px-20 py-[29px] bg-center backdrop-grayscale' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515940279136-2f419eea8051?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 w-full' />
        <div className='z-10 text-white'>
          <h3 className='text-[28px] font-medium'>Join our newsletter and get offers</h3>
          <h5 className='text-xl '>Sign up our newsletter</h5>
        </div>
        <form className='flex z-10'>
          <input className='h-full text-[20px] mdpy-[25px] md:pl-[37px] md:pr-[200px]' type='text' placeholder={`${susbscribe ? 'joedoe@gmail.com' : 'Enter your email'}`} />
          <button onClick={(e) => { e.preventDefault(); setSusbscribe(true) }} className={`h-full text-[20px] text-white md:w-[268px] ${susbscribe ? 'bg-[#191919]' : 'bg-[#E73C17]'}`}>{susbscribe ? 'SUBSCRIBED!' : 'SUBSCRIBE'}</button>
        </form>
      </section>
      {/* footer */}
      <footer className='bg-[#2F333A] text-[white]'>
        <div className='max-w-[1440px] my-0 mx-auto py-[58px] pl-20 pr-10'>
          <article className='flex flex-col md:flex-row justify-between gap-x-[47px] mb-12'>
            <div className='pr-[27px]'>
              <h1 className='text-white text-[24px] font-medium mb-[29px]'>ABOUT US</h1>
              <p className='text-lg leading-[30px] mb-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. </p>
              <ul className='flex gap-[10px]'>
                <li><FacebookTwo /></li>
                <li><Whatsapp /></li>
                <li><InstagramTwo /></li>
                <li><Youtube /></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>INFORMATION</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>About</li>
                <li>Delivery information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
                <li>EMI Payment</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>ACCOUNT</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>My Account</li>
                <li>My Orders</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Wishlist</li>
                <li>Account Details</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>STORE</h3>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Affiliate</li>
                <li>Discounts</li>
                <li>Sale</li>
                <li>Contact</li>
                <li>All Collections</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>CONTACT US</h3>
              <p className='mb-[21px]'>If you have any query, please contact us <a className='text-[#E73C17] font-medium' href='#'>needus24@gmail.com</a></p>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li className='flex items-center gap-1 text-white'><Location /> California, USA</li>
                <li className='flex items-center gap-1 text-white'><Cellphone /> + 12012987481</li>
              </ul>
            </div>
          </article>
        </div>
        <div className='pl-20'>
          <div className='w-full border opacity-50 border-[#F0F0F0]' />
        </div>
        <div className='flex justify-center items-center text-[15px] py-[90px]'>
          <span>Copyright. 2023 All Right Reserved</span>
        </div>
      </footer>
    </div>
  )
}
