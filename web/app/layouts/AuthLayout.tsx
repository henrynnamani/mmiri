import AuthHeader from '@/components/AuthHeader'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const AuthLayout = () => {
  return (
    <div className='p-12 max-w-screen'>
      <AuthHeader />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default AuthLayout
