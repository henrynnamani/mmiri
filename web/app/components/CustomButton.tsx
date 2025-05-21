import type { ICustomButton } from '@/types/component'

const CustomButton = ({ label }: ICustomButton) => {
  return (
    <div className='p-2 border px-6 rounded-md bg-primary w-fit'>
      <span className='text-white font-semibold'>{label}</span>
    </div>
  )                             
}

export default CustomButton
