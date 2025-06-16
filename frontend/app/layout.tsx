'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookiesProvider, useCookies } from "react-cookie";
import { SWRConfig } from 'swr'
import api from "@/constants";
import { useEffect } from "react";

const fetcher = (url: string) => api.get(url).then(res => res.data);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SWRConfig 
      value={{
        refreshInterval: 5000,
        // dedupingInterval: 60000,
        fetcher
      }}
    >
    <CookiesProvider>
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
        </html>
    </CookiesProvider>
    </SWRConfig>
  );
}
