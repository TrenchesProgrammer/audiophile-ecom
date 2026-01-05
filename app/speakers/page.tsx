import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroCard from "../Components/HeroCard";

const page = () => {
  return (
    <>
      {/* Category Header */}
      <div className="bg-black text-white h-[250px] flex justify-center items-center font-bold text-[40px]">
        <h1>SPEAKERS</h1>
      </div>

      {/* ZX9 Product Block */}
      {/* Mobile: Image Top / Desktop: Image Left */}
      <div className="padding-container py-20 mt-10 flex flex-col lg:flex-row items-center w-full justify-between gap-10 lg:gap-0">
        <Image
          src="/zx9.svg"
          width={100}
          height={100}
          className="w-full lg:w-[45%]"
          alt="zx9 speaker"
        />
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-black text-center lg:text-left">
            ZX9 <br /> SPEAKER
          </h1>
          <p className="text-black/50 text-center lg:text-left w-full lg:w-[400px]">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link href="/zx9-speaker">
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* ZX7 Product Block */}
      {/* Mobile: Image Top (via col-reverse) / Desktop: Text Left (via flex-row) */}
      <div className="padding-container py-20 mt-10 flex flex-col-reverse lg:flex-row items-center w-full justify-between gap-10 lg:gap-0">
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-black text-center lg:text-left">
            ZX7
            <br /> SPEAKER
          </h1>
          <p className="text-black/50 text-center lg:text-left w-full lg:w-[400px]">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link href="/zx7-speaker">
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <Image
          src="/zx7.svg"
          width={100}
          height={100}
          className="w-full lg:w-[45%]"
          alt="zx7 speaker"
        />
      </div>

      {/* Category Links */}
      <div className="padding-container py-20 mt-10 gap-25 lg:gap-0 flex flex-col lg:flex-row w-full lg:justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>

      {/* Best Gear Section */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-20 items-center mt-30">
        <div className="flex flex-col text-center lg:text-left gap-10">
          <h3 className="text-[40px] font-bold">
            BRINGING YOU THE <br />
            <span className="text-orange-100">BEST</span> AUDIO GEAR
          </h3>
          <p className="text-[15px] text-black/50">
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
          className="rounded-lg w-full lg:w-500"
          height={500}
          width={500}
        />
      </section>
    </>
  );
};

export default page;