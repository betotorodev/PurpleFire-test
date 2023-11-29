import { Facebook } from '@/app/ui/icons/facebook'
import { Instagram } from '@/app/ui/icons/instagram'
import { Linkedin } from '@/app/ui/icons/linkedin'
import { Twitter } from '@/app/ui/icons/twitter-icon'

export const Socials = () => {
  return (
    <div className='flex justify-center w-full gap-6 mb-16 md:mb-5'>
      <Facebook />
      <Instagram />
      <Linkedin />
      <Twitter />
    </div>
  )
}
