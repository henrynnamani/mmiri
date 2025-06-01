'use client'

import { GlassWater } from "lucide-react"
import CustomButton from "./CustomButton"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"

const Header = () => {
  const router = useRouter()
  const [cookie] = useCookies(['access_token'])


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
      cookie?.access_token ? (
        <CustomButton label="My Order" />
      ) : (
        <CustomButton label="Get Started" onClick={() => router.push('/auth/login')} />
      )
    }
    </div>
  )
}

export default Header
