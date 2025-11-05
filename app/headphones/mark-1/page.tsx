'use client'
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
    const product = products?.find(p => p.name === 'XX99 Mark I Headphones');
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
      <div className="padding-container mt-10 flex items-center w-full justify-between">
        <Image
          src="/xx99-mark-1.svg"
          width={100}
          height={100}
          className="w-[50%]"
          alt="xx99 mark ii"
        />
        <div className="h-full flex flex-col gap-5 justify-center items-center lg:items-start max-w-[400px] text-white">
          <p className="text-orange-100 tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold text-black">
            XX99 MARK I <br /> HEADPHONES
          </h1>
          <p className="text-black/50 text-center lg:text-left w-[400px]">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go. .
          </p>
          <p className="font-bold text-black">$ 1,750</p>
          <div className="flex gap-5">
            <div className=" text-black/25 bg-white-200 font-bold w-35 px-4 py-5 flex justify-between ">
              <p className="cursor-pointer hover:text-orange-100" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</p>
              <p className="text-black">{quantity}</p>
              <p className="cursor-pointer hover:text-orange-100" onClick={() => setQuantity(prev => prev + 1)}>+</p>
            </div>
            <button onClick={handleAddToCart} className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="padding-container flex gap-30 mt-20">
        <div className="w-[60%]">
          <h2 className="text-[32px] font-bold">FEATURES</h2>
          <p className="text-black/50">
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz. <br /><br /> From the
            handcrafted microfiber ear cushions to the robust metal headband
            with inner damping element, the components work together to deliver
            comfort and uncompromising sound. Its closed-back design delivers up
            to 27 dB of passive noise cancellation, reducing resonance by
            reflecting sound to a dedicated absorber. For connectivity, a
            specially tuned cable is included with a balanced gold connector.
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
         
          </div>
        </div>
      </div>
      <div className="padding-container mt-30">
        <div className="flex gap-10">
          <div className="flex flex-col justify-between">
            <Image
              src="/mark-1-sample-2.svg"
              className="w-full "
              width={100}
              height={100}
              alt="xx99-model"
            />
            <Image
              src="/mark-1-sample-3.svg"
              className="w-full"
              width={100}
              height={100}
              alt="xx99-dark"
            />
          </div>
          <div className="w-[60%]">
            <Image
              src="/mark-1-sample.svg"
              className="w-full"
              width={100}
              height={100}
              alt="xx99-dark"
            />
          </div>
        </div>
      </div>
      <div className="padding-container pt-20">
        <h2 className="font-bold text-center text-[32px] mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="w-full flex gap-5">
          <div className="w-[33%] flex flex-col gap-4 items-center">
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
          <div className="w-[33%] flex flex-col gap-4 items-center">
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
          <div className="w-[33%] flex flex-col gap-4 items-center">
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
      <div className="padding-container py-20 mt-10 flex w-full justify-between">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <section className="flex padding-container gap-20 items-center mt-30">
        <div className="flex flex-col gap-10">
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
          className="rounded-lg"
          height={500}
          width={500}
        ></Image>
      </section>
    </>
  );
};

export default page;
