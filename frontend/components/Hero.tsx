'use client'

import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { WordRotate } from './magicui/word-rotate'

const Hero = () => {
  const router = useRouter()

  return (
    <div className='w-full pt-20 text-center gap-5 flex flex-col'>
      <div className='md:text-5xl w-full text-center font-medium -z-10 text-2xl'>Order Gallons of Water From <WordRotate words={["Mmiri", "Your Sure Plug"]} /></div>
      <div>
        <span className='md:text-md text-sm text-gray-500'>Mmiri is here to ease you the stress of getting your water.</span>
      </div>                                                                                                                
      <div className='w-full flex justify-center items-center'>
          <CustomButton label='Order Now' onClick={() => router.push('/order')}/>
      </div>
    </div>
  )
}

export default Hero
