'use client'
import Image from "next/image";
import { useCartStore, CartItem as CartItemType } from '../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCartStore();

  const handleDecrement = () => {
    updateQuantity(item.product._id, item.quantity - 1);
  };

  const handleIncrement = () => {
    updateQuantity(item.product._id, item.quantity + 1);
  };
  
  const handleRemove = () => {
    removeFromCart(item.product._id)
  }

  return (
    <div className="flex justify-between items-center">
      <Image width={50} height={50} src={`${item.product.image}`} alt={item.product.name} />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{item.product.name}</p>
        <p className="text-black/50">$ {item.product.price}</p>
      </div>
      <div className="flex items-center bg-gray-200 rounded">
        <button className="px-3 py-1 text-lg font-bold hover:bg-gray-300" onClick={handleDecrement}>-</button>
        <p className="px-3 py-1">{item.quantity}</p>
        <button className="px-3 py-1 text-lg font-bold hover:bg-gray-300" onClick={handleIncrement}>+</button>
      </div>
       <button className="text-red-500 hover:underline" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;