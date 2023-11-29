import { Title } from '@/app/ui/landing/hero-part-two/qualifications/title.js'
import { Description } from '@/app/ui/landing/hero-part-two/qualifications/description.js'

export const Qualifications = () => {
  return (
    <article className='flex flex-wrap gap-[30px] pt-[41px] md:pt-5'>
      <div className='w-[259px]'>
        <Title title='Our Advices' />
        <Description description='What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.' />
      </div>
      <div className='w-[259px]'>
        <Title title='Click and Collect' />
        <Description description='Adapted and contactless. Free from € 200 of purchases in stores offering the service.' />
      </div>
      <div className='w-[259px]'>
        <Title title='Conception Service' />
        <Description description='Personalized service with an expert advisor for your interior and exterior decoration or layout projects.' />
      </div>
      <div className='w-[259px]'>
        <Title title='Installation Service' />
        <Description description='Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.' />
      </div>
    </article>
  )
}
