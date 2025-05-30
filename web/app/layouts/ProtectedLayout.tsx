import useAuth from '@/hooks/auths'
import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedLayout = () => {
    const {isAuthenticated} = useAuth()

    // console.log(isAuthenticated)

    if(!isAuthenticated) {
        return <Navigate to='/auths/login' replace />
    }
  return <Outlet />
}

export default ProtectedLayout
