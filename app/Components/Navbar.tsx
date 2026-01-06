"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCartStore } from "../store/cartStore";

const Navbar = () => {
  const { toggleCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" padding-container top-0 absolute w-full">
      <div className="border-b border-b-white/20  py-7 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <Image className="mr-4" src="/hamburger.svg" alt="menu" height={16} width={16} />
            </button>
          </div>
          <Image src="/logo.svg" alt="logo" height={96} width={96} />
        </div>
        <ul className=" text-white tracking-[2px] hidden text-[13px] gap-7  lg:flex ">
          <li>
            <Link className="hover:text-orange-100" href="/">HOME</Link>
          </li>
          <li>
            <Link className="hover:text-orange-100" href="/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link className="hover:text-orange-100" href="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link className="hover:text-orange-100" href="/earphones">EARPHONES</Link>
          </li>
        </ul>

        <Image src="/carts.svg" width={24} height={24} alt="Cart" onClick={toggleCart} className="cursor-pointer" />
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/50 z-50">
          <div className="bg-white w-4/5 h-full p-6">
            <button onClick={toggleMenu} className="mb-8">
              <Image src="/icon-close.svg" alt="close" height={20} width={20} />
            </button>
            <ul className="text-black font-bold text-lg flex flex-col gap-4">
              <li>
                <Link href="/" onClick={toggleMenu}>HOME</Link>
              </li>
              <li>
                <Link href="/headphones" onClick={toggleMenu}>HEADPHONES</Link>
              </li>
              <li>
                <Link href="/speakers" onClick={toggleMenu}>SPEAKERS</Link>
              </li>
              <li>
                <Link href="/earphones" onClick={toggleMenu}>EARPHONES</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
