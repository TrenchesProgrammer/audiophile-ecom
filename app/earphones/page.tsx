import Image from "next/image";
import React from "react";
import HeroCard from "../Components/HeroCard";

const page = () => {
  return (
    <>
      <div className="bg-black text-white h-[250px] flex justify-center pt-35 font-bold text-[40px]">
        <h1>SPEAKERS</h1>
      </div>
      <div className="padding-container py-20 mt-10 flex items-center w-full justify-between">
        <Image
          src="/yx1.svg"
          width={100}
          height={100}
          className="w-[50%]"
          alt="yx1 wireless"
        />
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-black">
            YX1 WIRELESS <br /> EARPHONES
          </h1>
          <p className="text-black/50 text-center lg:text-left w-[400px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <div className="padding-container py-20 mt-10 flex w-full justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <section className="flex padding-container gap-20 items-center mt-30">
        <div className="flex flex-col gap-10">
          <h3 className="text-[40px]  font-bold">
            BRINGING YOU THE <br />
            <span className="text-orange-100">BEST</span> AUDIO GEAR{" "}
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
          className="rounded-lg"
          height={500}
          width={500}
        ></Image>
      </section>
    </>
  );
};

export default page;
