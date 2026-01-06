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
    // Logic updated to find ZX9
    const product = products?.find((p) => p.name === "ZX9 Speaker");
    if (product) {
      console.log('Adding to cart:', { productId: product._id, quantity });
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
      <div className="padding-container mt-6 md:mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center w-full justify-between">
        <Image
          src="/zx9.svg"
          width={500}
          height={500}
          className="w-full lg:w-[50%] object-contain"
          alt="zx9 speaker"
        />
        <div className="h-full flex flex-col gap-5 justify-center lg:items-start max-w-[500px] text-black">
          <p className="text-orange-100 tracking-[10px] text-sm md:text-base">
            NEW PRODUCT
          </p>
          
          {/* Responsive Header: 2xl mobile -> 5xl desktop */}
          <h1 className="text-2xl md:text-5xl font-bold text-black leading-none md:leading-tight">
            ZX9 <br /> SPEAKER
          </h1>
          
          <p className="text-black/50 w-full lg:w-[400px] text-[15px] leading-relaxed">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          
          <p className="text-2xl font-bold text-black">$ 4,500</p>
          
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

      {/* Features Section - Responsive Flex */}
      <div className="padding-container flex flex-col lg:flex-row gap-20 lg:gap-30 mt-16 md:mt-20">
        <div className="w-full lg:w-[60%]">
          <h2 className="lg:text-[32px] text-2xl font-bold mb-6 md:mb-8">
            FEATURES
          </h2>
          <p className="text-black/50 leading-relaxed text-[15px]">
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m). <br />
            <br /> Discover clear, more natural sounding highs than the
            competition with ZX9’s signature planar diaphragm tweeter. Equally
            important is its powerful room-shaking bass courtesy of a 6.5”
            aluminum alloy bass unit. You’ll be able to enjoy equal sound
            quality whether in a large room or small den. Furthermore, you will
            experience new sensations from old songs since it can respond to
            even the subtle waveforms.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <h2 className="lg:text-[32px] text-2xl font-bold mb-6 md:mb-8">
            IN THE BOX
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">2x</span> <p>Speaker Unit</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">2x</span>{" "}
              <p>Speaker Cloth Panel</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span> <p>User Manual</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>3.5mm 10m Audio Cable</p>
            </div>
            <div className="flex gap-6 text-black/50">
              <span className="text-orange-100 font-bold">1x</span>{" "}
              <p>10m Optical Cable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Responsive Grid */}
      <div className="padding-container mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="flex flex-1 flex-col justify-between gap-5 lg:gap-8">
            <Image
              src="/zx9-sample-2.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={500}
              alt="zx9-sample-2"
            />
            <Image
              src="/zx9-sample-3.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={500}
              alt="zx9-sample-3"
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <Image
              src="/zx9-sample.svg"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={800}
              alt="zx9-main-sample"
            />
          </div>
        </div>
      </div>

      {/* You May Also Like - Responsive Flex */}
      <div className="padding-container pt-16 md:pt-20">
        <h2 className="font-bold text-center lg:text-[32px] text-2xl mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-8">
          
          {/* Suggestion 1 - ZX7 (Swapped since we are on ZX9 page) */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt=""
              src="/zx7-1.svg" 
              height={300}
              width={300}
              className="w-full rounded-xl"
            />
            <h3 className="font-bold text-xl">ZX7 SPEAKER</h3>
            <Link href="/zx7-speaker">
              <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-6 py-3 md:px-8 md:py-3 w-fit font-bold tracking-wide text-sm md:text-base">
                SEE PRODUCT
              </button>
            </Link>
          </div>

          {/* Suggestion 2 */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt=""
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

          {/* Suggestion 3 */}
          <div className="w-full md:w-[33%] flex flex-col gap-6 items-center">
            <Image
              alt=""
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