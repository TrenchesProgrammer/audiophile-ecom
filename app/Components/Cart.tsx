'use client'
import { useRef, useEffect } from 'react';
import CartItem from './CartItem';
import { useCartStore } from '../store/cartStore';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const { isCartOpen, closeCart, cartItems, total, clearCart } = useCartStore();
  const cartRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, closeCart]);

  const handleCheckout = () => {
    closeCart();
    router.push('/checkout');
  }

  if (!isCartOpen) return null;

  return (
    <div className="w-screen absolute h-screen bg-black/50 z-50">
      <div ref={cartRef} className="rounded-lg absolute flex flex-col gap-5 bg-white top-25 p-5 w-80 right-10">
        <div className="flex justify-between">
          <p>Cart({cartItems?.length || 0})</p>
          <p className="text-black/50 underline cursor-pointer" onClick={clearCart}>Remove all</p>
        </div>

        {cartItems?.map((item) => (
             <CartItem 
                key={item.product._id} 
                item={item} 
             />
        ))}

        <div className="flex justify-between">
          <p className="text-black/50">TOTAL</p>
          <p className="text-black font-bold">${total.toLocaleString()}</p>
        </div>
        <button 
          onClick={handleCheckout}
          className="bg-orange-100 text-white hover:bg-orange-200 w-full text-center py-3">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;