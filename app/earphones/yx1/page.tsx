"use client";
import HeroCard from "@/app/Components/HeroCard";
import Image from "next/image";
import Link from "next/link";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const products = useQuery(api.getProducts.getProducts);
  const addToCart = useMutation(api.cart.addToCart);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic updated to find YX1
    const product = products?.find((p) => p.name === "YX1 Wireless Earphones");
    if (product) {
      addToCart({ productId: product._id, quantity });
    }
  };

  return (
    <>
      <div className="bg-black h-19 w-full"></div>
      <p
        className="cursor-pointer text-black/50 mt-10 padding-container"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </p>

      {/* Main Product Section - Responsive Flex */}
      <div className="padding-container mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center w-full justify-between">
        <Image
          src="/yx1.svg"
          width={100}
          height={100}
          className="w-full lg:w-[50%]"
          alt="yx1 earphones"
        />
        <div className="h-full flex flex-col gap-5 justify-center  lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-2xl font-bold text-black">
            YX1 WIRELESS <br /> EARPHONES
          </h1>
          <p className="text-black/50 lg:text-left lg:w-[400px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="text-2xl font-bold text-black">$ 599</p>
          <div className="flex gap-5">
            {/* Interactive Quantity Selector */}
            <div className=" text-black/25 bg-white-200 font-bold w-35 px-4 py-5 flex justify-between ">
              <p
                className="cursor-pointer hover:text-orange-100"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </p>
              <p className="text-black">{quantity}</p>
              <p
                className="cursor-pointer hover:text-orange-100"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </p>
            </div>
            {/* Functional Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Features Section - Responsive Flex */}
      <div className="padding-container flex flex-col lg:flex-row gap-30 mt-20">
        <div className="w-full lg:w-[60%]">
          <h2 className= "lg:text-[32px] text-2xl  font-bold">FEATURES</h2>
          <p className="text-black/50">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound. <br /> <br /> The YX1 Wireless Earphones features
            customizable controls for volume, music, calls, and voice assistants
            built into both earbuds. The new 7-hour battery life can be extended
            up to 28 hours with the charging case, giving you uninterrupted play
            time. Exquisite craftsmanship with a splash resistant design now
            available in an all new white and grey color scheme as well as the
            popular classic black.
          </p>
        </div>
        <div>
          <h2 className= "lg:text-[32px] text-2xl  font-bold">IN THE BOX</h2>
          <div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">2x</span> <p>Earphone Unit</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">6x</span>{" "}
              <p>Multi-size Earplugs</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span> <p>User Manual</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span>{" "}
              <p>USB-C Charging Cable</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span> <p>Travel Pouch </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Responsive Flex */}
      <div className="padding-container mt-30">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-1 flex-col justify-between gap-10 lg:gap-0">
            <Image
              src="/yx1-sample-2.svg"
              className="w-full rounded-xl"
              width={100}
              height={100}
              alt="yx1-model"
            />
            <Image
              src="/yx1-sample-3.svg"
              className="w-full rounded-xl"
              width={100}
              height={100}
              alt="yx1-earphones"
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <Image
              src="/yx1-sample.svg"
              className="w-full h-full object-cover rounded-xl"
              width={100}
              height={100}
              alt="yx1-gallery"
            />
          </div>
        </div>
      </div>

      {/* You May Also Like - Responsive Flex */}
      <div className="padding-container pt-20">
        <h2 className="font-bold text-center  lg:text-[32px] text-2xl  mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[33%] flex flex-col gap-4 items-center">
            <Image
              alt=""
              src="/xx99-mark-1.svg"
              height={100}
              width={100}
              className="w-full"
            />
            <h3 className="font-bold">XX99 MARK I</h3>
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              SEE PRODUCT
            </button>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col gap-4 items-center">
            <Image
              alt=""
              src="/xx59-1.svg"
              height={100}
              width={100}
              className="w-full"
            />
            <h3 className="font-bold">XX59</h3>
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              SEE PRODUCT
            </button>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col gap-4 items-center">
            <Image
              alt=""
              src="/zx9-1.svg"
              height={100}
              width={100}
              className="w-full"
            />
            <h3 className="font-bold">ZX9 speaker</h3>
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>

      <div className="padding-container py-20 mt-10 gap-25 lg:gap-0 flex flex-col lg:flex-row w-full lg:justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>

      {/* Best Gear - Responsive Flex */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-20 items-center mt-30">
        <div className="flex flex-col text-center lg:text-left gap-10">
          <h3 className="text-2xl md:text-[40px]  font-bold">
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
        ></Image>
      </section>
    </>
  );
};

export default page;