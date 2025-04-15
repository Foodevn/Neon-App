import { v } from "convex/values";

import { mutation } from "./_generated/server";
const images = [
  "/placeholders/1.png",
  "/placeholders/2.png",
  "/placeholders/3.png",
  "/placeholders/4.png",
  "/placeholders/5.png",
  "/placeholders/7.png",
  "/placeholders/8.png",
  "/placeholders/9.png",
  "/placeholders/10.png",
  "/placeholders/11.png",
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

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, arags) => {
    const indentity = await ctx.auth.getUserIdentity();
    if (!indentity) {
      throw new Error("Unautorized");
    }
    // todo: later check to delete favorite relation as well
    await ctx.db.delete(arags.id);
  },
});
export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();
    if (!indentity) {
      throw new Error("Unauthorized");
    }
    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is repuired");
    }

    if (title.length > 60) {
      throw new Error("Title cannot br longer than 60 characters");
    }
    const board = await ctx.db.patch(args.id, {
      title: args.title,
    });
    return board;
  },
});
