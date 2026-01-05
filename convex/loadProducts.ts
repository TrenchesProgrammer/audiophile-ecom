import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const loadProducts = internalMutation({
  args: { products: v.array(v.any()) },
  handler: async (ctx, { products }) => {
    for (const product of products) {
      // Remove fields that are not in the schema
      const { id, gallery, others, ...productData } = product;
      try {
        await ctx.db.insert("products", productData);
        console.log(`Successfully inserted product: ${productData.name}`);
      } catch (error) {
        console.error(`Failed to insert product: ${productData.name}`, error);
      }
    }
  },
});
