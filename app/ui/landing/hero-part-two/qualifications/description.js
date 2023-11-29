import { varta } from '@/app/fonts'

export const Description = ({ description }) => {
  return (
    <p className={`${varta.variable} font-sans font-normal text-[#706458E5] text-lg leading-[25px]`}>{description}</p>
  )
}
