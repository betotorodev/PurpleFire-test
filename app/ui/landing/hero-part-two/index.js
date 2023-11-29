import { Qualifications } from '@/app/ui/landing/hero-part-two/qualifications'
import { QualificationsTitle } from '@/app/ui/landing/hero-part-two/qualifications-title'

export const HeroPartTwo = () => (
  <section className='w-full bg-[#F3EEE8]' id='hero-section-two'>
    <div className='max-w-[1440px] my-0 mx-auto block md:flex gap-12 px-8 md:px-[150px] py-[48px] md:py-[70px]'>
      <QualificationsTitle />
      <Qualifications />
    </div>
  </section>
)
