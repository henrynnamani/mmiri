"use client";

import { AlignJustify, GlassWater, X } from "lucide-react";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const Header = () => {
  const router = useRouter();
  const [cookie] = useCookies(["access_token"]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center sticky top-0 bg-white p-4 border rounded-full px-10 md:m-10 m-4">
      <div className="flex gap-2 items-center">
        <GlassWater size={20} />
        <span className="font-semibold text-lg">Mmiri</span>
      </div>
      <div className="md:flex gap-10 hidden">
        <span>Home</span>
        <span>About us</span>
        <span>Contact</span>
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
          <span onClick={() => setMenuOpen(false)}>Home</span>
          <span onClick={() => setMenuOpen(false)}>About us</span>
          <span onClick={() => setMenuOpen(false)}>Contact</span>
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
