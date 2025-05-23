import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CustomButton from "./CustomButton"

const SelectLocation = () => {
  return (
    <div className='flex flex-col gap-5 border p-10 rounded-lg w-[400px]'>
        <span className="text-sm text-gray-400">Select Location: </span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">HillTop</SelectItem>
              <SelectItem value="dark">Odenigwe</SelectItem>
              <SelectItem value="system">Behind Flat</SelectItem>
            </SelectContent>
           </Select>
           {/*  */}
           <span className="text-sm text-gray-400">Select Lodge: </span>
           <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick lodge" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">St Paris</SelectItem>
              <SelectItem value="dark">Solomon</SelectItem>
              <SelectItem value="system">St Agnes</SelectItem>
            </SelectContent>
           </Select>
           <div className="w-full flex justify-center items-center">
               <CustomButton label="Next" />
           </div>
          </div>
  )
}

export default SelectLocation
