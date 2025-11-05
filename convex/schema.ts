
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.number(),
    image: v.string(),
  }),
  cart: defineTable({
    productId: v.id("products"),
    quantity: v.number(),
  }),
});
