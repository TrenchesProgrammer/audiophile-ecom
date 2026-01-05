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
    // 1. Add 'id' (since your JSON data has it)
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

    // 2. Add 'gallery' (Missing in your error)
    gallery: v.object({
      first: imageType,
      second: imageType,
      third: imageType,
    }),

    // 3. Add 'others' (Missing in your error)
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: imageType,
      })
    ),
  }),
  cart: defineTable({
    productId: v.id("products"), // References the products table
    quantity: v.number(),
  }),
});