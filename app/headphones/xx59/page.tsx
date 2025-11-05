"use client";
import HeroCard from "@/app/Components/HeroCard";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

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
            XX59 <br /> HEADPHONES
          </h1>
          <p className="text-black/50 text-center lg:text-left w-[400px]">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <p className="font-bold text-black">$ 899</p>
          <div className="flex gap-5">
            <div className=" text-black/25 bg-white-200 font-bold w-35 px-4 py-5 flex justify-between ">
              <p className="cursor-pointer hover:text-orange-100">-</p>
              <p className="text-black">1</p>
              <p className="cursor-pointer hover:text-orange-100">+</p>
            </div>
            <button className="bg-orange-100 hover:bg-orange-200 cursor-pointer text-white px-8 py-4 w-fit">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="padding-container flex gap-30 mt-20">
        <div className="w-[60%]">
          <h2 className="text-[32px] font-bold">FEATURES</h2>
          <p className="text-black/50">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. <br /> <br />
            More than a simple
            pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C.
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
              src="/xx59-sample-2.svg"
              className="w-full "
              width={100}
              height={100}
              alt="xx99-model"
            />
            <Image
              src="/xx59-sample-3.svg"
              className="w-full"
              width={100}
              height={100}
              alt="xx99-dark"
            />
          </div>
          <div className="w-[60%]">
            <Image
              src="/xx59-sample.svg"
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
