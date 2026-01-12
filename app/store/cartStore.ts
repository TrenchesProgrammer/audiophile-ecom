import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the types for CartItem and Product
export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string; // Assuming the product has an image URL
}

export interface CartItem {
  product: Product;
  quantity: number;
}

type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  toggleCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  calculateTotal: (cartItems: CartItem[]) => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      isCartOpen: false,
      cartItems: [],
      total: 0,

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      closeCart: () => set({ isCartOpen: false }),

      addToCart: (product, quantity = 1) => {
        const { cartItems } = get();
        const existingItem = cartItems.find(
          (item) => item.product._id === product._id
        );

        let updatedCart;
        if (existingItem) {
          updatedCart = cartItems.map((item) =>
            item.product._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedCart = [...cartItems, { product, quantity }];
        }

        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });
      },

      removeFromCart: (productId) => {
        const updatedCart = get().cartItems.filter(
          (item) => item.product._id !== productId
        );
        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeFromCart(productId);
          return;
        }

        const updatedCart = get().cartItems.map((item) =>
          item.product._id === productId ? { ...item, quantity } : item
        );

        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });
      },

      clearCart: () => {
        set({ cartItems: [], total: 0 });
      },

      calculateTotal: (cartItems: CartItem[]) => {
        return cartItems.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
