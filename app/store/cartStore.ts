import { create } from 'zustand';
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
};

export const useDeviceStore = create<DeviceStore>((set) => {
    // Initialize with empty string to prevent server crash
    let deviceId = '';

    // FIX: Only access localStorage if we are in the browser (window is defined)
    if (typeof window !== 'undefined') {
        deviceId = localStorage.getItem('deviceId') || '';
        
        if (!deviceId) {
            deviceId = uuidv4();
            localStorage.setItem('deviceId', deviceId);
        }
    }

    return {
        deviceId,
    }
});