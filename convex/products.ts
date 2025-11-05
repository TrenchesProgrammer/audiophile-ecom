
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addProduct = mutation({
  args: { 
    name: v.string(), 
    price: v.number(), 
    image: v.string() 
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("products", {
      name: args.name,
      price: args.price,
      image: args.image,
    });
  },
});
