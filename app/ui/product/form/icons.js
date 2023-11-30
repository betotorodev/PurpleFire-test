import { Cart } from '@/app/ui/icons/cart'
import { SearchMobile } from '@/app/ui/icons/search-mobile'
import { User } from '@/app/ui/icons/user'
import { Like } from '@/app/ui/icons/like'

export const Icons = () => {
  return (
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
  )
}
