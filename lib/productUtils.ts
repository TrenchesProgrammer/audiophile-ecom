import { BackendProduct } from "./api";

export interface ProductAssetMap {
  slug: string;
  name: string;
  cartImage: string;
  mainImage: string;
  category: "headphones" | "speakers" | "earphones";
  categoryLink: string;
  detailLink: string;
}

const PRODUCT_ASSETS: Record<string, ProductAssetMap> = {
  "xx99-mark-two": {
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    cartImage: "cart/image-xx99-mark-two-headphones.jpg",
    mainImage: "/xx99-mark-two.svg",
    category: "headphones",
    categoryLink: "/headphones",
    detailLink: "/headphones/mark-2",
  },
  "xx99-mark-one": {
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    cartImage: "cart/image-xx99-mark-one-headphones.jpg",
    mainImage: "/xx99-mark-1.svg",
    category: "headphones",
    categoryLink: "/headphones",
    detailLink: "/headphones/mark-1",
  },
  "xx59": {
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    cartImage: "cart/image-xx59-headphones.jpg",
    mainImage: "/xx59.svg",
    category: "headphones",
    categoryLink: "/headphones",
    detailLink: "/headphones/xx59",
  },
  "yx1": {
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    cartImage: "cart/image-yx1-earphones.jpg",
    mainImage: "/yx1.svg",
    category: "earphones",
    categoryLink: "/earphones",
    detailLink: "/earphones/yx1",
  },
  "zx7": {
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    cartImage: "cart/image-zx7-speaker.jpg",
    mainImage: "/zx7.svg",
    category: "speakers",
    categoryLink: "/speakers",
    detailLink: "/speakers/zx7",
  },
  "zx9": {
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    cartImage: "cart/image-zx9-speaker.jpg",
    mainImage: "/zx9.svg",
    category: "speakers",
    categoryLink: "/speakers",
    detailLink: "/speakers/zx9",
  },
};

/**
 * Normalizes any product name string (e.g. "XX99 MARK TWO", "xx99 mark 2", "YX1")
 * to one of our canonical keys.
 */
export function normalizeProductKey(input: string): string {
  const lower = input.toLowerCase().trim();
  if (lower.includes("mark") && (lower.includes("two") || lower.includes("ii") || lower.includes("2"))) {
    return "xx99-mark-two";
  }
  if (lower.includes("mark") && (lower.includes("one") || lower.includes("i") || lower.includes("1"))) {
    return "xx99-mark-one";
  }
  if (lower.includes("xx59")) {
    return "xx59";
  }
  if (lower.includes("yx1")) {
    return "yx1";
  }
  if (lower.includes("zx9")) {
    return "zx9";
  }
  if (lower.includes("zx7")) {
    return "zx7";
  }
  return lower.replace(/\s+/g, "-");
}

/**
 * Returns canonical asset paths (cart thumbnail, main image, slug, etc.) for a product.
 */
export function getProductAssets(productNameOrKey: string): ProductAssetMap {
  const key = normalizeProductKey(productNameOrKey);
  if (PRODUCT_ASSETS[key]) {
    return PRODUCT_ASSETS[key];
  }

  // Fallback for unknown products
  return {
    slug: key,
    name: productNameOrKey,
    cartImage: "cart/image-xx59-headphones.jpg",
    mainImage: "/xx59.svg",
    category: "headphones",
    categoryLink: "/headphones",
    detailLink: "/",
  };
}

/**
 * Finds a product in the backend products array by canonical key
 */
export function findProductByKey(
  products: BackendProduct[] | undefined,
  targetKey: string
): BackendProduct | undefined {
  if (!products || products.length === 0) return undefined;
  const canonicalTarget = normalizeProductKey(targetKey);
  return products.find((p) => normalizeProductKey(p.name) === canonicalTarget);
}

