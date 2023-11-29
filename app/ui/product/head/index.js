import { ArrowLightDown } from '@/app/ui/icons/arrow-light-down'

export const Head = () => {
  return (
    <nav className='hidden md:flex justify-between w-full bg-[#2F333A] py-5 pl-20 pr-10 text-white'>
      <h6 className='font-light'>Welcome to Needus & Get the best product</h6>
      <div className='flex'>
        <span className='flex gap-1 mr-[23px] pr-[18px] border-r-2 font-light'>ENG <ArrowLightDown /></span>
        <span className='flex gap-1 font-light'>USG <ArrowLightDown /></span>
      </div>
    </nav>
  )
}
