'use client';
import { useRef, useEffect } from 'react';
import CartItem from './CartItem';
import { useCartStore } from '../store/cartStore';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const { isCartOpen, closeCart, cartItems, total, clearCart, fetchCart } = useCartStore();
  const cartRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fetch cart on initial mount or when opening
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

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
  };

  if (!isCartOpen) return null;

  return (
    <div className="w-screen fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div
        ref={cartRef}
        className="rounded-lg absolute flex flex-col gap-5 bg-white top-24 p-6 w-80 md:w-96 right-4 md:right-10 shadow-2xl"
      >
        <div className="flex justify-between items-center">
          <p className="font-bold tracking-wider">
            CART ({cartItems?.length || 0})
          </p>
          {cartItems.length > 0 && (
            <p
              className="text-black/50 underline cursor-pointer text-sm hover:text-orange-100"
              onClick={clearCart}
            >
              Remove all
            </p>
          )}
        </div>

        {cartItems?.length === 0 ? (
          <p className="text-center text-black/50 py-6">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4 max-h-72 overflow-y-auto">
            {cartItems?.map((item) => (
              <CartItem key={item.product._id} item={item} />
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <p className="text-black/50 uppercase text-sm">TOTAL</p>
          <p className="text-black font-bold text-lg">₦{total.toLocaleString()}</p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={cartItems?.length === 0}
          className="bg-orange-100 text-white hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed w-full text-center py-3 font-bold tracking-wider text-sm transition"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
