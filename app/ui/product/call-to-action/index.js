import { useState } from 'react'

export const CallToAction = () => {
  const [susbscribe, setSusbscribe] = useState(false)

  return (
    <section className='relative flex flex-col md:flex-row gap-[17px] md:gap-0 md:justify-between px-[20px] md:px-20 py-[36px] md:py-[29px] bg-center backdrop-grayscale' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515940279136-2f419eea8051?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 w-full' />
      <div className='z-10 text-white'>
        <h3 className='text-lg md:text-[28px] font-medium'>Join our newsletter and get offers</h3>
        <h5 className='text-sm md:text-xl'>Sign up our newsletter</h5>
      </div>
      <form className='flex z-10'>
        <input className='w-full md:w-auto h-full text-[10px] md:text-[20px] py-[17px] md:py-[25px] px-[13px] md:pl-[37px] md:pr-[200px]' type='text' placeholder={`${susbscribe ? 'joedoe@gmail.com' : 'Enter your email'}`} />
        <button onClick={(e) => { e.preventDefault(); setSusbscribe(true) }} className={`md:h-full text-xs md:text-[20px] text-white px-[16px] md:px-0 w-[100px] md:w-[268px] ${susbscribe ? 'bg-[#191919]' : 'bg-[#E73C17]'}`}>{susbscribe ? 'SUBSCRIBED!' : 'SUBSCRIBE'}</button>
      </form>
    </section>
  )
}
