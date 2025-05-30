import SelectLocation from '@/components/Select-Location'
import SelectRoom from '@/components/Select-Room'

const PlaceOrder = () => {
  return (
    <div className='pt-20 flex flex-col gap-10 items-center justify-center'>
      <SelectLocation />
    </div>
  )
}

export default PlaceOrder
