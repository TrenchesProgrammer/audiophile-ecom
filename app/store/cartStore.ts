
import {create} from 'zustand';

type CartStore = {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  closeCart: () => set({ isCartOpen: false }),
}));
