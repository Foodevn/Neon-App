import {v} from "convex/values";

import {query} from "./_generated/server";

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

        const boardsWithFavoriteRelation = boards.map((board) => {
            return ctx.db
                .query("userFavorites")
                .withIndex("by_user_board", (q) =>
                    q
                        .eq("userId", indentity.subject)
                        .eq("boardId", board._id)
                )
                .unique()
                .then((favorite) => {
                    return {...board, isFavorite: !!favorite};
                });
        });

        const boardsWithFavoriteBoolean = Promise.all(boardsWithFavoriteRelation);
        return boardsWithFavoriteBoolean;
    },
});
