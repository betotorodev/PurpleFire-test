import { Head } from '@/app/ui/product/head'
import { Form } from '@/app/ui/product/form'
import { Menu } from '@/app/ui/product/menu'
import { Banner } from '@/app/ui/product/banner'
import { ProductComponent } from '@/app/ui/product/product-component'
import { ProductDescription } from '@/app/ui/product/product-description'
import { RelatedProducts } from '@/app/ui/product/related-products'
import { CallToAction } from '@/app/ui/landing/call-to-action'
import { Footer } from '@/app/ui/landing/footer'

export default function ProductDetail() {
  return (
    <div className='w-full'>
      <Head />
      <Form />
      <Menu />
      <Banner />
      <ProductComponent />
      <ProductDescription />
      <RelatedProducts />
      <CallToAction />
      <Footer />
    </div>
  )
}
