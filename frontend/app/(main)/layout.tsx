'use client'

import Header from "@/components/Header";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthCleanup from "@/lib";
import useSWR from "swr";
import useOrderStore from "@/store/order";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies] = useCookies(['access_token'])
  const router = useRouter()
  const { data } = useSWR('users/order')
  const { addOrderDetail } = useOrderStore()
  const hasToken = cookies.access_token !== undefined;

  useAuthCleanup()

  // useEffect(() => {                   
  //   const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
                       
  //   if (!isHomePage && !hasToken) {
  //     router.push('/auth/login'); 
  //   }
    
  //   if(data?.data?.payload.length !== 0 && hasToken) {
  //     addOrderDetail(data?.data?.payload)
  //     router.push('/tracking')
  //   }
  // }, [data, hasToken]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
