import CustomButton from "@/components/CustomButton";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { useEffect, useRef } from 'react'
import { useNavigate } from "react-router";

const PaymentConfirmation = () => {
    const confettiRef = useRef<ConfettiRef>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/tracking')
        }, 2000)

        return () => clearTimeout(timeout)
    }, [])

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

export default PaymentConfirmation
