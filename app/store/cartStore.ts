import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import {
  getCart,
  addToCartApi,
  updateCartApi,
  checkoutApi,
  CheckoutResponse,
} from "../../lib/api";
import { getProductAssets } from "../../lib/productUtils";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

type CartState = {
  userToken: string;
  isCartOpen: boolean;
  cartItems: CartItem[];
  total: number;
  isLoading: boolean;
  getUserToken: () => string;
  toggleCart: () => void;
  closeCart: () => void;
  fetchCart: () => Promise<void>;
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  checkout: (email: string) => Promise<CheckoutResponse>;
  calculateTotal: (cartItems: CartItem[]) => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      userToken: "",
      isCartOpen: false,
      cartItems: [],
      total: 0,
      isLoading: false,

      getUserToken: () => {
        let token = get().userToken;
        if (!token) {
          token = uuidv4();
          set({ userToken: token });
        }
        return token;
      },

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      closeCart: () => set({ isCartOpen: false }),

      fetchCart: async () => {
        const token = get().getUserToken();
        try {
          set({ isLoading: true });
          const backendItems = await getCart(token);
          if (Array.isArray(backendItems)) {
            const mappedItems: CartItem[] = backendItems.map((item) => {
              const productName = item.product?.name || "Product";
              const assets = getProductAssets(productName);
              return {
                product: {
                  _id: item.productId || item.product?.id || item.id,
                  name: assets.name,
                  price: Number(item.product?.price ?? 0),
                  image: assets.cartImage,
                },
                quantity: item.quantity,
              };
            });
            set({
              cartItems: mappedItems,
              total: get().calculateTotal(mappedItems),
              isLoading: false,
            });
          }
        } catch (error) {
          console.error("Failed to sync cart from backend:", error);
          set({ isLoading: false });
        }
      },

      addToCart: async (product, quantity = 1) => {
        const token = get().getUserToken();
        const { cartItems } = get();

        // Ensure product image is set
        const resolvedImage = product.image || getProductAssets(product.name).cartImage;
        const normalizedProduct: Product = {
          ...product,
          price: Number(product.price),
          image: resolvedImage,
        };

        const existingItem = cartItems.find(
          (item) => item.product._id === product._id
        );

        let updatedCart: CartItem[];
        if (existingItem) {
          updatedCart = cartItems.map((item) =>
            item.product._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedCart = [...cartItems, { product: normalizedProduct, quantity }];
        }

        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });

        // Sync with Express backend
        try {
          await addToCartApi(product._id, quantity, token);
        } catch (error) {
          console.error("Failed to add to cart on backend:", error);
        }
      },

      removeFromCart: async (productId) => {
        const token = get().getUserToken();
        const updatedCart = get().cartItems.filter(
          (item) => item.product._id !== productId
        );

        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });

        // Express backend removes item when quantity is 0 via PUT
        try {
          await updateCartApi(productId, 0, token);
        } catch (error) {
          console.error("Failed to remove item on backend:", error);
        }
      },

      updateQuantity: async (productId, quantity) => {
        const token = get().getUserToken();
        if (quantity < 1) {
          await get().removeFromCart(productId);
          return;
        }

        const updatedCart = get().cartItems.map((item) =>
          item.product._id === productId ? { ...item, quantity } : item
        );

        set({
          cartItems: updatedCart,
          total: get().calculateTotal(updatedCart),
        });

        // Sync with Express backend
        try {
          await updateCartApi(productId, quantity, token);
        } catch (error) {
          console.error("Failed to update quantity on backend:", error);
        }
      },

      clearCart: async () => {
        const token = get().getUserToken();
        const currentItems = [...get().cartItems];
        set({ cartItems: [], total: 0 });

        // Remove all items in backend
        try {
          for (const item of currentItems) {
            await updateCartApi(item.product._id, 0, token).catch(() => {});
          }
        } catch (error) {
          console.error("Failed to clear cart on backend:", error);
        }
      },

      checkout: async (email: string) => {
        const token = get().getUserToken();
        const result = await checkoutApi(email, token);
        if (result.success) {
          set({ cartItems: [], total: 0 });
        }
        return result;
      },

      calculateTotal: (cartItems: CartItem[]) => {
        return cartItems.reduce(
          (acc, item) => acc + (Number(item.product.price) || 0) * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userToken: state.userToken,
        cartItems: state.cartItems,
        total: state.total,
      }),
    }
  )
);
