import { relatedProducts } from '@/lib/const'
import { Cart } from '../ui/icons/cart'

export const RelatedProducts = () => {
  const relatedProductsMobile = relatedProducts.slice(0, 2)

  return (
    <section className='flex flex-col items-center mt-[10px] md:mt-[135px]'>
      <h1 className='text-lg md:text-[32px] font-medium text-[#191919] mb-4 md:mb-[66px]'>Realted products</h1>
      <ul className='hidden md:flex flex-col md:flex-row justify-between w-full px-[80px] gap-[28px]'>
        {
          relatedProducts.map((product, index) => {
            return (
              <li className='flex flex-col' key={index}>
                <div className='relative pb-[47px] pt-[22px] px-[23px] mb-[38px] bg-[#F1F1F1]'>
                  {product.like && <product.like />}
                  <span className={`${product.badgeColor} rounded-full py-[5px] px-[20px] text-xs text-white`}>{product.badge}</span>
                  <div className='flex items-center relative h-[249px]'>
                    <Image src={product.image} alt={product.title} width={249} height={249} />
                  </div>
                  <button className='flex gap-6 my-0 mx-auto py-[15px] px-[31px] bg-white'><Cart width='18' height='18' /> Add to cart</button>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-[20px]'>{product.title}</h3>
                  <div className='flex'>
                    {product.discountPrice && <span className='text-[20px] font-bold mr-[11px]'>{product.discountPrice}</span>}
                    <span className={`${product.discount && 'text-[#D9D9D9] line-through'} text-[20px] font-bold`}>{product.price}</span>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <ul className='flex md:hidden md:flex-row justify-center w-full gap-[36px] md:gap-[28px]'>
        {
          relatedProductsMobile.map((product, index) => {
            return (
              <li className='flex flex-col' key={index}>
                <div className='relative pb-[20px] md:pb-[47px] pt-[2px] px-[8px] md:px-[23px] mb-[38px] bg-[#F1F1F1]'>
                  <product.like width='10' height='10' color='#D7D7D7' />
                  <span className={`${product.badgeColor} rounded-full py-[5px] px-[9px] text-[6px] text-white`}>{product.badge}</span>
                  <div className='flex items-center relative h-[106px] w-[121px]'>
                    <Image src={product.image} alt={product.title} fill />
                  </div>
                  <button className='w-full flex gap-6 text-[8px] py-2 px-[18px] bg-white'><Cart width='10' height='10' /> Add to cart</button>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-[11px]'>{product.title}</h3>
                  <div className='flex'>
                    {product.discountPrice && <span className='text-[11px] font-bold mr-[6px]'>{product.discountPrice}</span>}
                    <span className={`${product.discount && 'text-[#D9D9D9] line-through'} text-[11px] font-bold`}>{product.price}</span>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='flex justify-center gap-3 md:gap-2 w-full my-[28px] md:my-[53px]'>
        <div className='w-[6px] md:w-[14px] h-[6px] md:h-[14px] bg-[#E73C17] rounded-full' />
        <div className='w-[6px] md:w-[14px] h-[6px] md:h-[14px] bg-[#F4F5F8] rounded-full' />
        <div className='w-[6px] md:w-[14px] h-[6px] md:h-[14px] bg-[#F4F5F8] rounded-full' />
        <div className='w-[6px] md:w-[14px] h-[6px] md:h-[14px] bg-[#F4F5F8] rounded-full' />
      </div>
    </section>
  )
}
