import CustomButton from '@/components/CustomButton'
import { useNavigate } from 'react-router'

const PaymentSummary = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-8 justify-center items-center pt-20'>
      <span className='text-lg font-semibold'>Payment Summary</span>
      <div className='flex flex-col gap-5 w-[300px]'>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Number of Gallon</span>
            <span>7</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Charge per gallon</span>
            <span>NGN250</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Service charge</span>
            <span>NGN100</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Total amount</span>
            <span className='font-semibold'>NGN1550</span>
        </div>
      </div>
      <CustomButton label='Pay' onClick={() => navigate('/confirmation')}/>
    </div>
  )
}

export default PaymentSummary
