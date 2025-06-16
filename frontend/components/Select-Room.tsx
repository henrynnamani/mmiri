import { Input } from "./ui/input"


const SelectRoom = () => {
  return (
    <div className='flex flex-col gap-5 p-10 rounded-lg w-full'>
        <span className="text-sm text-gray-400">Room: </span>
            <Input type="text" placeholder="e.g 45, A6" />
           {/*  */}
           <span className="text-sm text-gray-400">Number of Gallon: </span>
           <Input type="number" placeholder="e.g 10" />
          </div>
  )
}

export default SelectRoom
