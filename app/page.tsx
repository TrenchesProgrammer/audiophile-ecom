'use client'

import Image from "next/image";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import HeroCard from "./Components/HeroCard";
import { Id } from "../convex/_generated/dataModel";

export default function Home() {
  const products = useQuery(api.getProducts.getProducts);
  const addToCart = useMutation(api.cart.addToCart);

  const handleAddToCart = () => {
    const product = products?.find(p => p.name === 'XX99 Mark II Headphones');
    if (product) {
      console.log('Adding to cart:', { productId: product._id, quantity: 1 });
      addToCart({ productId: product._id, quantity: 1 });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="bg-hero-mobile md:bg-hero-tablet lg:bg-hero h-[70vh] lg:h-[729px]  flex justify-center lg:justify-start w-full padding-container">
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-white/49 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-white">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-white/75 text-center lg:text-left w-[400px]">
            Experience natural, lifelike audio and exceptional  build quality
            made for the passionate music enthusiast.
          </p>
          <button onClick={handleAddToCart} className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
            ADD TO CART
          </button>
        </div>
      </section>
      <div className="padding-container py-20 mt-10 flex w-full justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <div className="padding-container m-10 w-full">
        <div className="bg-orange-100 rounded-lg relative  text-white w-full">
          <div className="bg-pattern w-full md:w-[70%] h-full absolute left-0 "/>
          <div className=" py-15 md:pt-15 flex flex-col gap-10 md:flex-row items-center justify-around  ">
            <Image
              src="/home/desktop/image-speaker-zx9.svg"
              alt="speaker zx9"
              height={350}
              width={350}
              className="z-2 w-50 md:w-auto"
              
            />
            <div className="flex flex-col gap-10  md:gap-3 h-full items-center text-center md:text-left md:items-start justify-center">
              <h2 className="text-3xl font-bold">
                ZX9 <br /> SPEAKER
              </h2>
              <p className="text-[15px] w-80">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="bg-black text-white px-8 py-3 w-fit cursor-pointer hover:bg-gray-100">SEE PRODUCT</button>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-zx7 w-full p-20 h-80 flex flex-col justify-center rounded-lg ">
          <h3 className="text-[28px] font-bold">ZX7 SPEAKER</h3>
          <button className="border border-black cursor-pointer hover:bg-black hover:text-white px-5 py-3 mt-3 w-fit">SEE PRODUCT</button>
        </div>
        <div className="flex flex-col md:flex-row mt-10 gap-5">
          <div className="bg-yx1 rounded-lg w-full md:w-[50%] h-80 ">

          </div>
          <div className="bg-white-200 w-full md:w-[50%] h-auto rounded-lg flex flex-col justify-center p-20">
            <h3 className="text-[28px] font-bold">YX1 EARPHONES</h3>
            <button className="border border-black cursor-pointer hover:bg-black hover:text-white px-5 py-3 mt-3 w-fit">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-20 items-center mt-30">
        <div className="flex flex-col gap-10">
            <h3 className="text-[40px]  font-bold">BRINGING YOU THE <br /><span className="text-orange-100">BEST</span> AUDIO GEAR </h3>
            <p className="text-[15px] text-black/50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <Image src="/shared/desktop/image-best-gear.jpg" alt="Best gear" className="rounded-lg w-full" height={500} width={500}></Image>
      </section>
    </main>
  );
}
