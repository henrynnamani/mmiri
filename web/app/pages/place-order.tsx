import SelectLocation from '@/components/Select-Location'
import SelectRoom from '@/components/Select-Room'

const PlaceOrder = () => {
  return (
    <div className='pt-20 flex flex-col gap-10 items-center justify-center'>
      <div className='flex gap-5'>
        <div className='h-1 w-10 rounded-full bg-black'></div>
        <div className='h-1 w-10 rounded-full bg-gray-400'></div>
        <div className='h-1 w-10 rounded-full bg-gray-400'></div>
        <div className='h-1 w-10 rounded-full bg-gray-400'></div>
        <div className='h-1 w-10 rounded-full bg-gray-400'></div>
        <div className='h-1 w-10 rounded-full bg-gray-400'></div>
      </div>
      <SelectRoom />
    </div>
  )
}

export default PlaceOrder
