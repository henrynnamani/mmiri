import AuthHeader from '@/components/AuthHeader';
import { Toaster } from '@/components/ui/sonner';
import React from 'react'

const layout = ({ children }: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="p-10">
      {/* <AuthHeader */}
      <AuthHeader />
      { children }
      <Toaster />
    </div>
  )
}

export default layout
