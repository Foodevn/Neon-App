import { v } from "convex/values";

import { mutation } from "./_generated/server";
const images = [
  "/placeholders/1.png",
  "/placeholders/2.png",
  "/placeholders/3.png",
  "/placeholders/4.png",
  "/placeholders/5.png",
  "/placeholders/6.png",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();
    if (!indentity) {
      throw new Error("Not logged in");
    }
    const ramdomImage = images[Math.floor(Math.random() * images.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgID: args.orgId,
      authorID: indentity.subject,
      authorName: indentity.name!,
      imageUrl: ramdomImage,
    });
    return board;
  },
});
