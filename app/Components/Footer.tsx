import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark-100 padding-container mt-20 bottom-0 w-full">
      <div className="h-1 w-20 bg-orange-100" />
      <div className="py-10 text-center md:text-left">
        <div className="flex flex-col lg:flex-row justify-between">
          <Image src="/logo.svg" alt="logo" className="m-auto md:m-0 mb-10 md:mb-5 w-40 lg:w-auto" height={96} width={96} />
          <ul className=" text-white tracking-[2px] text-[13px] gap-7  flex flex-col md:flex-row items-center">
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
        </div>
        <div className="flex items-center md:items-end mt-10 w-full flex-col md:flex-row  justify-between">
          <div className="text-white/50 flex flex-col gap-10">
            <p className="text-sm md:text-md lg:min-w-100">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="text-sm md:text-md" >Copyright 2021. All Rights Reserved</p>
          </div>
          <ul className="flex gap-5 mt-5">
            <li>
              <FaFacebookSquare className="text-white h-7 w-7 hover:text-orange-100" />
            </li>
            <li>
              <FaTwitter className="text-white h-7 w-7 hover:text-orange-100" />
            </li>
            <li>
              <FaInstagram className="text-white h-7 w-7 hover:text-orange-100" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
