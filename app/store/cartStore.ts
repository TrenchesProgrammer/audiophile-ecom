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
      deviceId: '',
      setDeviceId: () => {
        // Only generate a new ID if one doesn't exist
        const currentId = get().deviceId;
        if (!currentId) {
          set({ deviceId: uuidv4() });
        }
      },
    }),
    {
      name: 'device-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);