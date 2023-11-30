import { Whatsapp } from '@/app/ui/icons/whatsapp'
import { FacebookTwo } from '@/app/ui/icons/facebook-2'
import { InstagramTwo } from '@/app/ui/icons/instagram-2'
import { Youtube } from '@/app/ui/icons/youtube'
import { Cellphone } from '@/app/ui/icons/cellphone'
import { Location } from '@/app/ui/icons/location'

export const Footer = () => {
  return (
    <footer className='bg-[#2F333A] text-[white]'>
      <div className='max-w-[1440px] my-0 mx-auto px-[32px] py-[39px] md:py-[58px] md:pl-20 md:pr-10'>
        <article className='flex flex-col md:flex-row md:justify-between gap-[18px] md:gap-x-[47px] md:mb-12'>
          <div className='pr-[27px]'>
            <h1 className='text-white text-[10px] md:text-[24px] font-medium md:mb-[29px] underline md:no-underline'>ABOUT US</h1>
            <div className='hidden md:block'>
              <p className='text-lg leading-[30px] mb-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. </p>
              <ul className='flex gap-[10px]'>
                <li><FacebookTwo /></li>
                <li><Whatsapp /></li>
                <li><InstagramTwo /></li>
                <li><Youtube /></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-[10px] md:text-[25px] font-semibold leading-[30px] tracking-[-0.2px] md:mb-[23px] underline md:no-underline'>INFORMATION</h3>
            <div className='hidden md:block'>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>About</li>
                <li>Delivery information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
                <li>EMI Payment</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-[10px] md:text-[25px] font-semibold leading-[30px] tracking-[-0.2px] md:mb-[23px] underline md:no-underline'>ACCOUNT</h3>
            <div className='hidden md:block'>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>My Account</li>
                <li>My Orders</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Wishlist</li>
                <li>Account Details</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-[10px] md:text-[25px] font-semibold leading-[30px] tracking-[-0.2px] md:mb-[23px] underline md:no-underline'>STORE</h3>
            <div className='hidden md:block'>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li>Affiliate</li>
                <li>Discounts</li>
                <li>Sale</li>
                <li>Contact</li>
                <li>All Collections</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-[10px] md:text-[25px] font-semibold leading-[30px] tracking-[-0.2px] md:mb-[23px] underline md:no-underline'>CONTACT US</h3>
            <div className='hidden md:block'>
              <p className='mb-[21px]'>If you have any query, please contact us <a className='text-[#E73C17] font-medium' href='#'>needus24@gmail.com</a></p>
              <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
                <li className='flex items-center gap-1 text-white'><Location /> California, USA</li>
                <li className='flex items-center gap-1 text-white'><Cellphone /> + 12012987481</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className='hidden md:block pl-20'>
        <div className='w-full border opacity-50 border-[#F0F0F0]' />
      </div>
      <div className='flex justify-center items-center text-xs md:text-[15px] md:py-[90px] pb-[127px] md:mb-0'>
        <span>Copyright. 2023 All Right Reserved</span>
      </div>
    </footer>
  )
}
