import { cn } from '@/app/lib/utils'
import Marquee from '@/app/ui/landing/carousel/carousel-component/marquee'
import Image from 'next/image'
import ImageOne from '@/public/image-1.webp'
import ImageTwo from '@/public/image-2.webp'
import ImageThree from '@/public/image-3.webp'
import ImageFour from '@/public/image-4.webp'
import ImageFive from '@/public/image-5.webp'
import ImageSix from '@/public/image-6.webp'

const logos = [
  {
    name: 'image one',
    img: ImageOne
  },
  {
    name: 'Image Two',
    img: ImageTwo
  },
  {
    name: 'Image Three',
    img: ImageThree
  },
  {
    name: 'Image Four',
    img: ImageFour
  },
  {
    name: 'Image Five',
    img: ImageFive
  },
  {
    name: 'Image Six',
    img: ImageSix
  }
]

const Logo = ({ name, img }) => {
  return (
    <div className={cn('cursor-pointer relative w-[250px] h-[400px]')}>
      <Image className='rounded-[20px]' src={img} alt={name} fill />
    </div>
  )
}

export const CarouselComponent = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden'>
      <Marquee className='[--gap:20px]'>
        {logos.map((logo, idx) => (
          <Logo key={idx} {...logo} />
        ))}
      </Marquee>
    </div>
  )
}
