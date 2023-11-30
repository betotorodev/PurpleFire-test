import Image from 'next/image'
import { MenuMobileTwo } from '@/app/ui/icons/menu-mobile-2'
import Logo from '@/public/Needus.webp'
import { Inputs } from '@/app/ui/product/form/inputs'
import { Icons } from '@/app/ui/product/form/icons'

export const Form = () => {
  return (
    <section className='flex justify-between items-center w-full pt-[27px] pb-[10px] md:py-[37px] px-4 md:pl-[58px] md:pr-[40px]'>
      <div className='block md:hidden bg-[#E73C17] p-[9px]'>
        <MenuMobileTwo />
      </div>
      <div className='relative w-[65px] md:w-[168px] h-[19px] md:h-[50px] ml-16 md:ml-0'>
        <Image src={Logo} alt='Needus logo' fill />
      </div>
      <Inputs />
      <Icons />
    </section>
  )
}
