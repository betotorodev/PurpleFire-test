import { ProductShowcase } from '@/app/ui/product/product-component/product-showcase'
import { Rating } from '@/app/ui/product/product-component/rating'

export const ProductComponent = () => {
  return (
    <section className='flex flex-col md:flex-row gap-[18px] md:gap-[35px] px-[19px] py-[10px] md:pl-[50px] md:pt-[82px] md:pr-[113px] md:pb-[104px]'>
      <article className='flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-3'>
        <ProductShowcase />
      </article>
      <article className='flex flex-col gap-2 md:gap-5'>
        <div className='flex flex-col gap-[5px] md:gap-[13px]'>
          <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Brand:</span> LG</small>
          <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Model:</span> OLED42C2PSA</small>
          <small className='text-[10px] md:text-lg font-light'><span className='font-normal'>Availability:</span> Only 2 in Stock</small>
        </div>
        <h1 className='text-sm md:text-[32px] md:leading-[40px] text-[#191919] font-medium'>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</h1>
        <Rating />
        <ul className='list-disc ml-4 md:ml-8 text-[11px] md:text-base'>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
          <li>Hands-free Voice Control, Always Ready</li>
          <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
          <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
        </ul>
        <div className='w-full border border-[#F0F0F0] my-[7px]' />
        <div className='flex flex-wrap gap-4 md:grid md:grid-cols-3 md:grid-rows-2'>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#E73C17] border border-[#E73C17]'>106 cm (42)</span>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
          <span className='py-1 md:py-[19px] px-1 md:px-12 text-[11px] md:text-lg font-normal text-[#6F6F6F]'>106 cm (42)</span>
        </div>
        <div className='w-full border border-[#F0F0F0] my-[7px]' />
        <div className='fixed md:relative left-0 bottom-0 w-full px-[21px] md:px-0 py-[10px] md:py-0 bg-white z-20'>
          <section className='flex w-full justify-between items-center md:mb-[23px]'>
            <div>
              <small className='text-[10px] md:text-base mb-[5px] md:mb-[13px]'>USD(incl. of all taxes)</small>
              <div>
                <span className='text-lg md:text-[32px] font-normal mr-3'>$600.72</span>
                <span className='text-base md:text-2xl text-[#D9D9D9]'>$800.00</span>
              </div>
            </div>
            <div className='flex h-[21px] md:h-[60px] border'>
              <button className='border-r h-full flex items-center justify-center px-[3px] md:px-[21px]'>-</button>
              <span className='h-full flex items-center justify-center px-[3px] md:px-[21px]'>1</span>
              <button className='border-l h-full flex items-center justify-center px-[3px] md:px-[21px]'>+</button>
            </div>
          </section>
          <div className='flex w-full justify-between items-center'>
            <button className='w-[120px] md:w-[202px] py-[5px] md:py-[19px] bg-[#E73C17] text-white'>Buy Now</button>
            <button className='w-[120px] md:w-[202px] py-[5px] md:py-[19px] border text-[#E73C17] border-[#E73C17]'>Add to Cart</button>
          </div>
        </div>
      </article>
    </section>
  )
}
