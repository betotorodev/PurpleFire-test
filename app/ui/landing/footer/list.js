export const List = ({ children, title }) => {
  return (
    <div>
      <h3 className='text-[25px] font-semibold leading-[30px] tracking-[-0.2px] mb-[23px]'>{title}</h3>
      <ul className='flex flex-col gap-3 text-lg font-normal opacity-70'>
        {children}
      </ul>
    </div>
  )
}
