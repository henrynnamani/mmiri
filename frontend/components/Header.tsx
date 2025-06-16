"use client";

import { AlignJustify, GlassWater, X } from "lucide-react";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [cookie] = useCookies(["access_token"]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center sticky top-0 bg-white p-4 border rounded-full px-10 md:m-10 m-4 z-40">
      <Link href={"/"} className="flex gap-2 items-center">
        <GlassWater size={20} />
        <span className="font-semibold text-lg">Mmiri</span>
      </Link>
      <div className="md:flex gap-10 hidden">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>

      <div className="hidden md:flex">
        {cookie?.access_token ? (
          <CustomButton label="My Order" />
        ) : (
          <CustomButton
            label="Get Started"
            onClick={() => router.push("/auth/login")}
          />
        )}
      </div>

      <div
        className="flex md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <AlignJustify />}
      </div>
      <div
        className={`
    fixed top-0 right-0 h-full w-[80vw] bg-white shadow-lg z-40 transform
    transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    md:hidden
  `}
      >
        <div className="flex flex-col p-6 space-y-6 pt-20 ">
          <button
            className="flex justify-start"
            onClick={() => {
              setMenuOpen(false)
              router.push('/')
            }}
          >
            Home
          </button>
          <button
            className="flex justify-start"
           onClick={() => {
              setMenuOpen(false)
              router.push('/about')
            }}
          >
            About us
          </button>
          <button
            className="flex justify-start"
           onClick={() => {
              setMenuOpen(false)
              router.push('/contact')
            }}
          >
            Contact
          </button>
          {cookie?.access_token ? (
            <CustomButton label="My Order" />
          ) : (
            <CustomButton
              label="Get Started"
              onClick={() => {
                router.push("/auth/login");
                setMenuOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
