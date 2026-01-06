import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Helper for the repeated image structure
const imageType = v.object({
  mobile: v.string(),
  tablet: v.string(),
  desktop: v.string(),
});

export default defineSchema({
  products: defineTable({
    id: v.number(), 
    slug: v.string(),
    name: v.string(),
    image: imageType,
    category: v.string(),
    categoryImage: imageType,
    new: v.boolean(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
    gallery: v.object({
      first: imageType,
      second: imageType,
      third: imageType,
    }),
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: imageType,
      })
    ),
  }),

  // --- ADD THIS SECTION BELOW ---
  cart: defineTable({
    productId: v.id("products"), // References the products table
    quantity: v.number(),
    deviceId: v.string(),
  }),
});