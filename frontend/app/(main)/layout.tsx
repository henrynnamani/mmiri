'use client'

import Header from "@/components/Header";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies] = useCookies(['access_token'])
  const router = useRouter()

  useEffect(() => {                                          
    const isHomePage = window.location.pathname === '/';
    const hasToken = cookies.access_token !== undefined;

    if (!isHomePage && !hasToken) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
