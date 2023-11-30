import RelatedOne from '@/public/related-1.webp'
import RelatedTwo from '@/public/related-2.webp'
import RelatedThree from '@/public/related-3.webp'
import RelatedFour from '@/public/related-4.webp'

import { LikeFill } from '../ui/icons/like-fill'

export const Details = {
  DESCRIPTION: 'description',
  SPECIFICATION: 'specification',
  REVIEWS: 'reviews'
}

export const RelatedProducts = [
  {
    badge: 'NEW',
    badgeColor: 'bg-[#12A05C]',
    image: RelatedOne,
    title: 'Sony BRAVIA XR Android Tv',
    price: '$1000.66',
    discount: true,
    discountPrice: '$800.22',
    like: LikeFill
  },
  {
    badge: '-10%',
    badgeColor: 'bg-[#E73C17]',
    image: RelatedTwo,
    title: 'Mi P1 Smart Android HD TV',
    price: '$400.00',
    discount: false,
    like: LikeFill
  },
  {
    badge: 'HOT',
    badgeColor: 'bg-[#FF9900]',
    image: RelatedThree,
    title: 'Konka OLED Android Tv',
    price: '$700.00',
    discount: false
  },
  {
    badge: '2 Years Warranty',
    badgeColor: 'bg-[#7F7CF6]',
    image: RelatedFour,
    title: 'TCL Roku Android Tv',
    price: '$800.00',
    discount: false
  }
]
