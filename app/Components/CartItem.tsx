'use client'
import Image from "next/image";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

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
  const updateQuantity = useMutation(api.cart.updateQuantity);
  const removeFromCart = useMutation(api.cart.removeFromCart);

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity({ cartId: item._id, quantity: item.quantity - 1 });
    } else {
      removeFromCart({ cartId: item._id });
    }
  };

  const handleIncrement = () => {
    updateQuantity({ cartId: item._id, quantity: item.quantity + 1 });
  };

  return (
    <div className="flex justify-between items-center">
      <Image width={50} height={50} src={`/${item.product.image}`} alt={item.product.name} />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{item.product.name}</p>
        <p className="text-black/50">$ {item.product.price}</p>
      </div>
      <div className="flex items-center bg-gray-200 rounded">
        <button className="px-3 py-1 text-lg font-bold hover:bg-gray-300" onClick={handleDecrement}>-</button>
        <p className="px-3 py-1">{item.quantity}</p>
        <button className="px-3 py-1 text-lg font-bold hover:bg-gray-300" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
