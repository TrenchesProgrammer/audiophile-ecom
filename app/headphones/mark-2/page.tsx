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
    // Logic updated to find Mark II
    const product = products?.find((p) => p.name === "XX99 Mark II Headphones");
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

      {/* Main Product Section - Added Responsive Flex */}
      <div className="padding-container mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center w-full justify-between">
        <Image
          src="/xx99-mark-two.svg"
          width={100}
          height={100}
          className="w-full lg:w-[50%]" // Added responsive width
          alt="xx99 mark ii"
        />
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-black">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-black/50 text-center lg:text-left w-[400px]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className="font-bold text-black">$ 2,999</p>
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

      {/* Features Section - Added Responsive Flex/Widths */}
      <div className="padding-container flex flex-col lg:flex-row gap-30 mt-20">
        <div className="w-full lg:w-[60%]">
          <h2 className="text-[32px] font-bold">FEATURES</h2>
          <p className="text-black/50">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br /> <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div>
          <h2 className="text-[32px] font-bold">IN THE BOX</h2>
          <div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span> <p>Headphone Unit</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">2x</span>{" "}
              <p>Replacement Earcups</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span> <p>User Manual</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span>{" "}
              <p>3.5mm 5m Audio Cable</p>
            </div>
            <div className="flex gap-4 text-black/50">
              <span className="text-orange-100">1x</span> <p>Travel Bag</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Added Responsive Flex */}
      <div className="padding-container mt-30">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-1 flex-col justify-between gap-10 lg:gap-0">
            <Image
              src="/xx99-model.svg"
              className="w-full rounded-xl"
              width={100}
              height={100}
              alt="xx99-model"
            />
            <Image
              src="/xx99-sample.svg"
              className="w-full rounded-xl"
              width={100}
              height={100}
              alt="xx99-dark"
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <Image
              src="/xx99-dark.svg"
              className="w-full h-full object-cover rounded-xl"
              width={100}
              height={100}
              alt="xx99-dark"
            />
          </div>
        </div>
      </div>

      {/* You May Also Like - Added Responsive Flex */}
      <div className="padding-container pt-20">
        <h2 className="font-bold text-center text-[32px] mb-10">
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

      {/* Best Gear Section - Added Responsive Reverse Flex */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-20 items-center mt-30">
        <div className="flex flex-col text-center lg:text-left gap-10">
          <h3 className="text-[40px]  font-bold">
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