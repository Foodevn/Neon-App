import { v } from "convex/values";

import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("User not authenticated");
    }
    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgID", args.orgId))
      .order("desc")
      .collect();
    return boards;
  },
});
