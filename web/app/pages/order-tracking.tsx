import Stepper from '@/components/stepper'

const OrderTracking = () => {
  return (
    <div className='h-[50vh] items-center justify-center flex flex-col gap-8'>
        <span className='font-medium text-xl'>Please wait, while your order is been delivered</span>
      <Stepper />
    </div>
  )
}

export default OrderTracking
