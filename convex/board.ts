import {v} from "convex/values";

import {mutation,query} from "./_generated/server";

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
    args: {id: v.id("boards")},
    handler: async (ctx, args) => {
        const indentity = await ctx.auth.getUserIdentity();
        if (!indentity) {
            throw new Error("Unautorized");
        }
        const userID = indentity.subject;

        // khi xoa 1 board kiem tra xem trong ban favorite con board do khong va xoa luon favorite
        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userID)
                    .eq("boardId", args.id)
            )
            .unique();
        if (existingFavorite) {
            await ctx.db.delete(existingFavorite._id);
        }

        await ctx.db.delete(args.id);
    },
});
export const update = mutation({
    args: {id: v.id("boards"), title: v.string()},
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

export const favorite = mutation({
    args: {id: v.id("boards"), orgId: v.string()},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await ctx.db.get(args.id);

        if (!board) {
            throw new Error("Board not found");
        }
        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userId)
                    .eq("boardId", board._id)
            )
            .unique();
        if (existingFavorite) {
            throw new Error("Board already favorited");
        }
        await ctx.db.insert("userFavorites", {
            userId,
            boardId: board._id,
            orgId: args.orgId,
        });
        return board;
    },
});
export const unfavorite = mutation({
    args: {id: v.id("boards")},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await ctx.db.get(args.id);

        if (!board) {
            throw new Error("Board not found");
        }

        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex(
                "by_user_board",
                (q) =>
                    q.eq("userId", userId)
                        .eq("boardId", board._id)
            )
            .unique();

        if (!existingFavorite) {
            throw new Error("Favorited board not found");
        }

        await ctx.db.delete(existingFavorite._id);
        return board;
    },
});
export const get = query({
    args: {id: v.id("boards")},
    handler: async (ctx, args) => {
        const board = ctx.db.get(args.id);

        return board;
    },
});