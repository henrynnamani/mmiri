import AuthHeader from '@/components/AuthHeader'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='p-12 max-w-screen'>
      <AuthHeader />
      <Outlet />
    </div>
  )
}

export default AuthLayout
