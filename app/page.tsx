'use client'

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import HeroCard from "./Components/HeroCard";
import { useCartStore } from "./store/cartStore";

export default function Home() {
  const products = useQuery(api.getProducts.getProducts);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    const product = products?.find(p => p.name === 'XX99 Mark II Headphones');
    
    if (product) {
      const productToAdd = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image.desktop, // or any other appropriate image
      };
      addToCart(productToAdd, 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* HERO SECTION */}
      <section className="bg-hero-mobile md:bg-hero-tablet lg:bg-hero h-[70vh] lg:h-[729px] flex justify-center lg:justify-start w-full padding-container">
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-white/49 tracking-[4px] md:tracking-[10px] text-sm md:text-base">NEW PRODUCT</p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center lg:text-left leading-none md:leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          
          <p className="text-white/75 text-center lg:text-left w-full md:w-[400px] text-[15px] leading-relaxed px-4 md:px-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          
          <button 
            onClick={handleAddToCart} 
            className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-4 w-fit font-bold tracking-wider text-sm md:text-base"
          >
            ADD TO CART
          </button>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <div className="padding-container py-12 md:py-20 mt-10 gap-16 md:gap-8 flex flex-col lg:flex-row w-full lg:justify-between">
        {[
          { imageUrl: "/shared/desktop/image-category-thumbnail-headphones.png", title: "HEADPHONES", linkUrl: "/headphones" },
          { imageUrl: "/shared/desktop/image-category-thumbnail-speakers.png", title: "SPEAKERS", linkUrl: "/speakers" },
          { imageUrl: "/shared/desktop/image-category-thumbnail-earphones.png", title: "EARPHONES", linkUrl: "/earphones" },
        ].map((category, index) => (
          <HeroCard key={index} imageUrl={category.imageUrl} title={category.title} linkUrl={category.linkUrl} />
        ))}
      </div>

      {/* ZX9 SPEAKER SECTION */}
      <div className="padding-container m-6 md:m-10 w-full">
        <div className="bg-orange-100 rounded-lg relative text-white w-full overflow-hidden">
          <div className="bg-pattern w-full md:w-[70%] h-full absolute left-0 opacity-50 md:opacity-100" />
          <div className="py-12 px-6 md:py-16 md:px-12 flex flex-col gap-8 lg:flex-row items-center justify-around relative z-10">
            <Image
              src="/home/desktop/image-speaker-zx9.svg"
              alt="speaker zx9"
              height={350}
              width={350}
              className="w-36 md:w-64 lg:w-[350px]"
            />
            <div className="flex flex-col gap-6 md:gap-8 items-center text-center lg:text-left lg:items-start justify-center">
              <h2 className="text-4xl md:text-6xl font-bold leading-none">
                ZX9 <br /> SPEAKER
              </h2>
              <p className="text-[15px] w-full md:w-80 opacity-90 md:opacity-75 px-4 md:px-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/speakers/zx9">
                <button className="bg-black text-white px-6 py-3 md:px-8 md:py-3 w-fit cursor-pointer hover:bg-gray-800 font-bold tracking-wider text-sm md:text-base">
                    SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 SPEAKER SECTION */}
        <div className="mt-6 md:mt-10 bg-zx7 w-full p-6 md:p-20 h-64 md:h-80 flex flex-col justify-center rounded-lg bg-cover bg-center">
          <h3 className="text-2xl md:text-[28px] font-bold mb-4">ZX7 SPEAKER</h3>
          <Link href="/speakers/zx7">
            <button className="border border-black cursor-pointer hover:bg-black hover:text-white px-6 py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
            </button>
          </Link>
        </div>

        {/* YX1 EARPHONES SECTION */}
        <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-5">
          <div className="bg-yx1 rounded-lg w-full md:w-[50%] h-52 md:h-80 bg-cover bg-center"></div>
          <div className="bg-gray-100 w-full md:w-[50%] h-52 md:h-80 rounded-lg flex flex-col justify-center p-6 md:p-20">
            <h3 className="text-2xl md:text-[28px] font-bold mb-4">YX1 EARPHONES</h3>
            <Link href="/earphones/yx1">
                <button className="border border-black cursor-pointer hover:bg-black hover:text-white px-6 py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
                </button>
            </Link>
          </div>
        </div>
      </div>

      {/* BEST AUDIO GEAR SECTION */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-10 lg:gap-30 items-center mt-12 mb-12 md:mt-20 md:mb-20 text-center lg:text-left">
        <div className="flex flex-col gap-6 md:gap-8 lg:w-1/2">
          <h3 className="text-2xl md:text-[40px] font-bold uppercase leading-tight px-2 md:px-0">
            Bringing you the <br className="hidden md:block" />
            <span className="text-orange-100">best</span> audio gear
          </h3>
          <p className="text-[15px] text-black/50 leading-relaxed px-2 md:px-0">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
             <Image 
                src="/shared/desktop/image-best-gear.jpg" 
                alt="Best gear" 
                className="rounded-lg w-full object-cover" 
                height={500} 
                width={500} 
            />
        </div>
      </section>
    </main>
  );
}
