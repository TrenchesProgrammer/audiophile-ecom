"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCartStore } from "../store/cartStore";

const Navbar = () => {
  const { toggleCart } = useCartStore();
  return (
    <nav className=" padding-container top-0 absolute w-full">
      <div className="border-b border-b-white/20  py-7 flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" height={96} width={96} />
          <ul className=" text-white tracking-[2px] text-[13px] gap-7  flex ">
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
    </nav>
  );
};

export default Navbar;
