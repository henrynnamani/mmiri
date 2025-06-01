import { GlassWater } from "lucide-react"
import CustomButton from "./CustomButton"

const AuthHeader = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 p-10">
      <div className="flex gap-2 items-center">
        <GlassWater size={20}/>
        <span className="font-semibold text-lg">Mmiri</span>
        </div>
      <CustomButton label="Sign up"/>
    </div>
  )
}

export default AuthHeader
