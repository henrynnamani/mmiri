'use client'

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { useEffect, useRef } from 'react'
import { useRouter } from "next/navigation";

const Confirmation = () => {
    const confettiRef = useRef<ConfettiRef>(null);
    const router = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/tracking')
        }, 2000)

        return () => clearTimeout(timeout)
    }, [router])

  return (
    <>
         <Confetti
                    ref={confettiRef}
                    className="absolute left-0 top-0 z-0 size-full"
                    onMouseEnter={() => {
                      confettiRef.current?.fire({});
                    }}
                />
    <div className="flex justify-center items-center h-[50vh] flex-col gap-8">
      <span className="text-2xl font-semibold text-center">Your order has been placed</span>
    </div>
    </>
  )
}

export default Confirmation
