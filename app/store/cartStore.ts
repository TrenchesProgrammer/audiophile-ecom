import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

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

type DeviceStore = {
  deviceId: string;
  setDeviceId: () => void;
};

export const useDeviceStore = create<DeviceStore>()(
  persist(
    (set, get) => ({
      deviceId: '', // Default initial state
      setDeviceId: () => {
        const currentId = get().deviceId;
        if (!currentId) {
          set({ deviceId: uuidv4() });
        }
      },
    }),
    {
      name: 'device-storage', // key in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
);