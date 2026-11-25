'use client';
import Image from 'next/image';
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
    removeFromCart(item.product._id);
  };

  const imageSrc = item.product.image.startsWith('/')
    ? item.product.image
    : `/${item.product.image}`;

  return (
    <div className="flex justify-between items-center gap-3">
      <div className="relative w-14 h-14 bg-gray-100 rounded-md overflow-hidden shrink-0 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={item.product.name}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{item.product.name}</p>
        <p className="text-black/50 text-xs font-semibold">
          ₦{Number(item.product.price).toLocaleString()}
        </p>
      </div>
      <div className="flex items-center bg-gray-200 rounded">
        <button
          className="px-2.5 py-1 text-sm font-bold text-black/50 hover:text-orange-100"
          onClick={handleDecrement}
        >
          -
        </button>
        <p className="px-2 py-1 text-xs font-bold">{item.quantity}</p>
        <button
          className="px-2.5 py-1 text-sm font-bold text-black/50 hover:text-orange-100"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 text-sm font-bold hover:opacity-75 px-1"
        onClick={handleRemove}
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
