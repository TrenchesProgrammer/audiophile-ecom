'use client'
import { useRef, useEffect, useMemo } from 'react';
import CartItem from './CartItem';
import { useCartStore, useDeviceStore } from '../store/cartStore';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const { isCartOpen, closeCart } = useCartStore();
  const { deviceId, setDeviceId } = useDeviceStore(); // Get the setter
  const cartRef = useRef<HTMLDivElement>(null);
  
  // FIX: Skip the query if deviceId is empty so we don't connect to a global shared cart
  const cartItems = useQuery(api.cart.getCartItems, 
    deviceId ? { deviceId } : "skip"
  );
  
  const removeAll = useMutation(api.cart.removeAll);
  const router = useRouter();

  // FIX: Generate the ID once on client mount if missing
  useEffect(() => {
    setDeviceId();
  }, [setDeviceId]);

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

  const total = useMemo(() => {
    if (!cartItems) return 0;
    return cartItems.reduce((acc, item) => acc + ((item.product?.price ?? 0) * item.quantity), 0);
  }, [cartItems]);

  const handleCheckout = () => {
    closeCart();
    router.push('/checkout');
  }

  if (!isCartOpen) return null;

  return (
    <div className="w-screen absolute h-screen bg-black/50 z-50"> {/* Added z-50 to ensure it's on top */}
      <div ref={cartRef} className="rounded-lg absolute flex flex-col gap-5 bg-white top-25 p-5 w-80 right-10">
        <div className="flex justify-between">
          <p>Cart({cartItems?.length || 0})</p>
          <p className="text-black/50 underline cursor-pointer" onClick={() => deviceId && removeAll({ deviceId })}>Remove all</p>
        </div>

        {cartItems?.filter((item) => item.product !== null).map((item) => (
             // Added explicit type assertion to fix your TS error
             <CartItem 
                key={item._id} 
                item={item as any} 
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