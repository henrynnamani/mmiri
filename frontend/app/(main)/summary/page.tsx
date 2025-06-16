'use client'

import CustomButton from '@/components/CustomButton'
import api from '@/constants'
import useOrderStore from '@/store/order'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const Summary = () => {
  const { orderDetail } = useOrderStore()
  const SERVICE_CHARGE = 100;
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(orderDetail.location.price * orderDetail.noOfGallon + SERVICE_CHARGE)
  }, [])

  const makePayment = async () => {
    const orderPayload = {
      noOfGallons: Number(orderDetail?.noOfGallon),
      roomNumber: orderDetail?.roomNumber,
      lodgeId: orderDetail?.lodgeId
    }

    try {
      const response = await api.post('orders', orderPayload)

      window.open(response.data?.data?.data.authorization_url, '_blank')
    } catch {
      toast("Payment Initiation Error", {
        position: 'top-center'
      })
    }
  }
  
  return (
    <div className='flex flex-col gap-8 justify-center items-center pt-20'>
      <span className='text-lg font-semibold'>Payment Summary</span>
      <div className='flex flex-col gap-5 w-[300px]'>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Number of Gallon</span>
            <span>{orderDetail?.noOfGallon}</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Charge per gallon</span>
            <span>NGN{orderDetail?.location?.price}</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Service charge</span>
            <span>NGN{SERVICE_CHARGE}</span>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span className='font-medium'>Total amount</span>
            <span className='font-semibold'>NGN{totalAmount}</span>
        </div>
      </div>
      <CustomButton label='Pay' onClick={makePayment}/>
    </div>
  )
}

export default Summary
