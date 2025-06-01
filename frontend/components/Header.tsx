'use client'

import { GlassWater } from "lucide-react"
import CustomButton from "./CustomButton"
import { useState } from "react"

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  // const [cookies] = useCookies(['user'])

  // useEffect(() => {
  //   if(!cookies) setUserLoggedIn(true)
  // }, [])

  return (
    <div className="flex justify-between items-center sticky top-0 bg-white p-4 border rounded-full px-10 m-10">
      <div className="flex gap-2 items-center">
        <GlassWater size={20}/>
        <span className="font-semibold text-lg">Mmiri</span>
        </div>
      <div className="flex gap-10">
        <span>Home</span>
        <span>About us</span>
        <span>Contact</span>
      </div>

    {
      userLoggedIn ? (
        <CustomButton label="My Order" />
      ) : (
        <CustomButton label="Get Started" />
      )
    }
    </div>
  )
}

export default Header
