import { varta, merriweather } from '@/app/fonts'
import { MenuMobile } from '@/app/ui/icons/menu-mobile'

export const Header = () => {
  return (
    <nav className='flex items-center justify-between md:justify-normal h-fit'>
      <h1 className={`${merriweather.variable} font-serif text-[34px] text-white md:text-[#A06056] font-bold mr-8 tracking-[2px] leading-[25px]`}>antic</h1>
      <div className='block md:hidden'>
        <MenuMobile />
      </div>
      <ul className={`hidden md:flex gap-6 ${varta.variable} font-sans text-[#706458]`}>
        <li>Products</li>
        <li>Rooms</li>
        <li>Services</li>
        <li>Inspirations</li>
      </ul>
    </nav>
  )
}
