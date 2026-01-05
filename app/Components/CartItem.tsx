'use client'
import Image from "next/image";
import { Id } from "../../convex/_generated/dataModel";

type CartItemProps = {
  item: {
    _id: Id<"cart">;
    quantity: number;
    product: {
      name: string;
      price: number;
      image: string;
    };
  };
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <Image width={50} height={50} src={item.product.image} alt={item.product.name} />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{item.product.name}</p>
        <p className="text-black/50">$ {item.product.price}</p>
      </div>
      <div className=" text-black/25 bg-white-200 font-bold w-20 px-3 h-fit py-2 flex justify-between ">
        <p className="cursor-pointer hover:text-orange-100">-</p>
        <p className="text-black">{item.quantity}</p>
        <p className="cursor-pointer hover:text-orange-100">+</p>
      </div>
    </div>
  );
};

export default CartItem;
