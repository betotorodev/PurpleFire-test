import { varta } from '@/app/fonts'

export const Title = ({ title }) => {
  return (
    <h3 className={`${varta.variable} font-sans font-semibold text-[#A06056] text-[25px] mb-3 leading-[30px]`}>{title}</h3>
  )
}
