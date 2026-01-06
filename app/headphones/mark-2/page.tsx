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
    const product = products?.find((p) => p.name === "XX99 Mark II Headphones");
    if (product) {
      console.log("Adding to cart:", { productId: product._id, quantity });
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

      {/* Main Product Section */}
      <div className="padding-container mt-6 md:mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center w-full justify-between">
        <Image
          src="/xx99-mark-two.svg"
          width={500}
          height={500}
          className="w-full lg:w-[50%] object-contain"
          alt="xx99 mark ii"
        />
        
        {/* Left-aligned text container (matches YX1/Mark I style) */}
        <div className="h-full flex flex-col gap-5 justify-center lg:items-start max-w-[500px] text-black">
          <p className="text-orange-100 tracking-[10px] text-sm md:text-base">
            NEW PRODUCT
          </p>

          {/* Responsive Header: 2xl mobile -> 5xl desktop */}
          <h1 className="text-2xl md:text-5xl font-bold text-black leading-none md:leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>

          <p className="text-black/50 w-full lg:w-[400px] text-[15px] leading-relaxed">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <p className="text-2xl font-bold text-black">$ 2,999</p>

          <div className="flex gap-5">
            {/* Interactive Quantity Selector */}
            <div className="text-black/25 bg-white-200 font-bold w-32 px-4 py-3 md:py-4 flex justify-between items-center">
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
              className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-4 w-fit font-bold tracking-wide text-sm md:text-base"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="padding-container flex flex-col lg:flex-row gap-20 lg:gap-30 mt-16 md:mt-20">
        <div className="w-full lg:w-[60%]">
          <h2 className="lg:text-[32px] text-2xl font-bold mb-6 md:mb-8">
            FEATURES
          </h2>
          <p className="text-black/50 leading-relaxed text-[15px]">
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
        <div className="w-full lg:w-[40%]">
          <h2 className="lg:text-[32px] text-2xl font-bold mb-6 md:mb-8">
            IN THE BOX
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>Headphone Unit</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">2x</span>{" "}
              <p>Replacement Earcups</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>User Manual</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>3.5mm 5m Audio Cable</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>Travel Bag</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Mark I Style Layout */}
      <div className="padding-container mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="flex flex-1 flex-col justify-between gap-5 lg:gap-8">
            <Image
              src="/xx99-model.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={500}
              alt="xx99-model"
            />
            <Image
              src="/xx99-sample.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={500}
              alt="xx99-sample"
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <Image
              src="/xx99-dark.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={800}
              alt="xx99-dark"
            />
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="padding-container pt-16 md:pt-20">
        <h2 className="font-bold text-center lg:text-[32px] text-2xl mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-8">
          
          {/* Suggestion 1 */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt="xx99 mark i"
              src="/xx99-mark-1.svg"
              height={300}
              width={300}
              className="w-full rounded-xl"
            />
            <h3 className="font-bold text-xl">XX99 MARK I</h3>
            <Link href="/xx99-mark-one-headphones">
              <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
              </button>
            </Link>
          </div>

          {/* Suggestion 2 */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt="xx59"
              src="/xx59-1.svg"
              height={300}
              width={300}
              className="w-full rounded-xl"
            />
            <h3 className="font-bold text-xl">XX59</h3>
            <Link href="/xx59-headphones">
              <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
              </button>
            </Link>
          </div>

          {/* Suggestion 3 */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt="zx9 speaker"
              src="/zx9-1.svg"
              height={300}
              width={300}
              className="w-full rounded-xl"
            />
            <h3 className="font-bold text-xl">ZX9 SPEAKER</h3>
            <Link href="/zx9-speaker">
              <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="padding-container py-16 md:py-20 mt-10 gap-16 md:gap-8 flex flex-col lg:flex-row w-full lg:justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>

      {/* Best Gear Section */}
      <section className="flex flex-col-reverse lg:flex-row padding-container gap-10 lg:gap-20 items-center mt-12 mb-20">
        <div className="flex flex-col text-center lg:text-left gap-6 md:gap-10 lg:w-1/2">
          {/* Responsive Header: 2xl mobile -> 40px desktop */}
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