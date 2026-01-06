import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroCard from "../Components/HeroCard";

const page = () => {
  return (
    <>
      {/* Category Header */}
      {/* Reduced height and font size (text-2xl) for mobile */}
      <div className="bg-black text-white h-[250px] flex justify-center items-center font-bold text-2xl md:text-[40px]">
        <h1>SPEAKERS</h1>
      </div>

      {/* ZX9 Product Block */}
      <div className="padding-container py-12 md:py-20 mt-6 md:mt-10 flex flex-col lg:flex-row items-center w-full justify-between gap-10 lg:gap-0">
        <Image
          src="/zx9.svg"
          width={500}
          height={500}
          className="w-full lg:w-[45%] object-contain h-auto"
          alt="zx9 speaker"
        />
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[500px] text-white">
          {/* Responsive Tracking */}
          <p className="text-orange-100 tracking-[4px] md:tracking-[10px] text-sm md:text-base">
            NEW PRODUCT
          </p>
          
          {/* Header: text-2xl on mobile -> 5xl on desktop */}
          <h1 className="text-2xl md:text-5xl font-bold text-black text-center lg:text-left leading-none md:leading-tight">
            ZX9 <br /> SPEAKER
          </h1>
          
          <p className="text-black/50 text-center lg:text-left w-full text-[15px] leading-relaxed">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link href="/zx9-speaker">
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-4 w-fit font-bold tracking-wide text-sm md:text-base">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* ZX7 Product Block */}
      <div className="padding-container py-12 md:py-20 mt-6 md:mt-10 flex flex-col-reverse lg:flex-row items-center w-full justify-between gap-10 lg:gap-0">
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[500px] text-white">
          {/* Responsive Tracking */}
          <p className="text-orange-100 tracking-[4px] md:tracking-[10px] text-sm md:text-base">
            NEW PRODUCT
          </p>
          
          {/* Header: text-2xl on mobile -> 5xl on desktop */}
          <h1 className="text-2xl md:text-5xl font-bold text-black text-center lg:text-left leading-none md:leading-tight">
            ZX7 <br /> SPEAKER
          </h1>
          
          <p className="text-black/50 text-center lg:text-left w-full text-[15px] leading-relaxed">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link href="/zx7-speaker">
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-4 w-fit font-bold tracking-wide text-sm md:text-base">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <Image
          src="/zx7.svg"
          width={500}
          height={500}
          className="w-full lg:w-[45%] object-contain h-auto"
          alt="zx7 speaker"
        />
      </div>

      {/* Category Links */}
      <div className="padding-container py-12 md:py-20 mt-10 gap-16 md:gap-8 flex flex-col lg:flex-row w-full lg:justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>

      {/* Best Gear Section */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-10 lg:gap-20 items-center mt-12 mb-12 md:mt-30 md:mb-30">
        <div className="flex flex-col text-center lg:text-left gap-6 md:gap-10 lg:w-1/2">
           {/* Header: text-2xl on mobile -> 40px on desktop */}
          <h3 className="text-2xl md:text-[40px] font-bold uppercase leading-tight">
            BRINGING YOU THE <br className="hidden md:block" />
            <span className="text-orange-100">BEST</span> AUDIO GEAR
          </h3>
          <p className="text-[15px] text-black/50 leading-relaxed">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image
          src="/shared/desktop/image-best-gear.jpg"
          alt="Best gear"
          className="rounded-lg w-full lg:w-1/2 object-cover"
          height={500}
          width={500}
        />
      </section>
    </>
  );
};

export default page;