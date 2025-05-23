import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CustomButton from "./CustomButton"
import { Input } from "./ui/input"

const SelectRoom = () => {
  return (
    <div className='flex flex-col gap-5 border p-10 rounded-lg w-[400px]'>
        <span className="text-sm text-gray-400">Room: </span>
            <Input type="text" placeholder="e.g 45, A6" />
           {/*  */}
           <span className="text-sm text-gray-400">Number of Gallon: </span>
           <Input type="number" placeholder="e.g 10" />
           <div className="w-full flex justify-center items-center">
               <CustomButton label="Next" />
           </div>
          </div>
  )
}

export default SelectRoom
