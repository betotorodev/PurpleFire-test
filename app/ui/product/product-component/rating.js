import { StarEmpty } from '@/app/ui/icons/star-empty'
import { StarFill } from '@/app/ui/icons/star-fill'

export const Rating = () => {
  return (
    <>
      <div class='flex md:hidden items-center gap-[10px] md:ml-4'>
        <StarFill width='10' height='10' />
        <StarFill width='10' height='10' />
        <StarFill width='10' height='10' />
        <StarFill width='10' height='10' />
        <StarEmpty width='10' height='10' />
      </div>
      <div class='hidden md:flex items-center gap-[10px] ml-4'>
        <StarFill />
        <StarFill />
        <StarFill />
        <StarFill />
        <StarEmpty />
      </div>
    </>
  )
}
