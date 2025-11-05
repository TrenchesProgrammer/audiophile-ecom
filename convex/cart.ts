
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getCartItems = query({ 
    handler: async (ctx) => {
        const cartItems = await ctx.db.query("cart").collect();
        let items = [];
        for(const item of cartItems){
            const product = await ctx.db.get(item.productId);
            items.push({ ...item, product });
        }
        return items;
    }
});

export const addToCart = mutation({
  args: { productId: v.id("products"), quantity: v.number() },
  handler: async (ctx, args) => {
    const existingCartItem = await ctx.db
      .query("cart")
      .filter((q) => q.eq(q.field("productId"), args.productId))
      .first();

    if (existingCartItem) {
      await ctx.db.patch(existingCartItem._id, {
        quantity: existingCartItem.quantity + args.quantity,
      });
    } else {
      await ctx.db.insert("cart", {
        productId: args.productId,
        quantity: args.quantity,
      });
    }
  },
});

export const removeFromCart = mutation({
  args: { cartId: v.id("cart") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.cartId);
  },
});

export const updateQuantity = mutation({
  args: { cartId: v.id("cart"), quantity: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.cartId, { quantity: args.quantity });
  },
});

export const removeAll = mutation({
    handler: async (ctx) => {
        const cartItems = await ctx.db.query("cart").collect();
        for(const item of cartItems){
            await ctx.db.delete(item._id);
        }
    }
})
