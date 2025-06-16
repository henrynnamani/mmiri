import type { ICustomButton } from '@/types/component'

const CustomButton = ({ label, onClick }: ICustomButton) => {
  return (
    <button onClick={onClick} className='p-2 border px-6 rounded-md bg-primary w-fit cursor-pointer'>
      <span className='text-white font-semibold'>{label}</span>
    </button>
  )                             
}

export default CustomButton
