'use client'

import Header from "@/components/Header";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import useAuthCleanup from "@/lib";
import useSWR from "swr";
import useOrderStore from "@/store/order";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies] = useCookies(['access_token'])
  useAuthCleanup()

  return (
    <>
      <Header />
      <div className='-z-40'>
        {children}
      </div>
    </>
  );
}
