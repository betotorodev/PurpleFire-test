import { merriweather, karla } from '@/app/fonts'
import { ArrowLightRight } from '@/app/ui/icons/arrow-light-right'

export const QualificationsTitle = () => {
  return (
    <div>
      <h1 className={`${merriweather.variable} md:w-[458px] font-serif text-[35px] md:text-[55px] text-[#534B42] md:text-[#706458] font-normal md:font-light md:mr-8 mb-8 md:mb-[30px] tracking-[-0.3px] md:tracking-[-0.6px] leading-[40px] md:leading-[60px]`}>We stay by your side to design your projects</h1>
      <a className={`${karla.variable} font-action flex items-center text-[17px] font-bold leading-[25px] tracking-[0.3px] text-[#A06056] cursor-pointer`}>Find out more <ArrowLightRight /></a>
    </div>
  )
}
