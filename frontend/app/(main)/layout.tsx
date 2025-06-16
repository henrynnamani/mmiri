"use client";

import Header from "@/components/Header";
import useAuthCleanup from "@/lib";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthCleanup();

  return (
    <>
      <Header />
      <div className="-z-40">{children}</div>
    </>
  );
}
