import { v4 as uuidv4 } from "uuid";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://ecom-backend-seven-ochre.vercel.app";

export interface BackendProduct {
  id: string;
  name: string;
  price: string | number;
  stockQuantity: number;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BackendCartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  product?: BackendProduct;
}

export interface CheckoutResponse {
  success: boolean;
  orderid: string;
  order: {
    id: string;
    sessionId: string;
    guestEmail: string;
    status: string;
    totalAmount: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Fetch all products from Express backend
 */
export async function getProducts(): Promise<BackendProduct[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }
  return res.json();
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(id: string): Promise<BackendProduct> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.statusText}`);
  }
  return res.json();
}

/**
 * Fetch user's cart from Express backend using user-token header
 */
export async function getCart(userToken: string): Promise<BackendCartItem[]> {
  if (!userToken) return [];
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "GET",
    headers: {
      "user-token": userToken,
      "x-user-token": userToken,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to fetch cart: ${res.statusText}`);
  }
  return res.json();
}

/**
 * Add product to user's cart
 */
export async function addToCartApi(
  productId: string,
  quantity: number,
  userToken: string
): Promise<{ success: boolean; data: unknown }> {
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-token": userToken,
      "x-user-token": userToken,
      "Idempotency-Key": uuidv4(),
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to add to cart: ${res.statusText}`);
  }
  return res.json();
}

/**
 * Update quantity in cart (quantity: 0 removes item)
 */
export async function updateCartApi(
  productId: string,
  quantity: number,
  userToken: string
): Promise<{ success: boolean; data?: unknown; message?: string }> {
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "user-token": userToken,
      "x-user-token": userToken,
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to update cart: ${res.statusText}`);
  }
  return res.json();
}

/**
 * Checkout user's cart
 */
export async function checkoutApi(
  email: string,
  userToken: string
): Promise<CheckoutResponse> {
  const res = await fetch(`${API_BASE_URL}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-token": userToken,
      "x-user-token": userToken,
      "Idempotency-Key": uuidv4(),
    },
    body: JSON.stringify({
      email,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Checkout failed: ${res.statusText}`);
  }
  return res.json();
}

