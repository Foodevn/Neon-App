import {v} from "convex/values";
import{getAllOrThrow} from "convex-helpers/server/relationships";

import {query} from "./_generated/server";

export const get = query({
    args: {
        orgId: v.string(),
        search: v.optional(v.string()),
        favorites: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const indentity = await ctx.auth.getUserIdentity();

        if (!indentity) {
            throw new Error("User not authenticated");
        }
        if (args.favorites) {
            const favoritesBoards = await ctx.db
                .query("userFavorites")
                .withIndex("by_user_org", q =>
                    q
                        .eq("userId", indentity.subject)
                        .eq("orgId", args.orgId)
                )
                .order("desc")
                .collect()
            const ids= favoritesBoards.map(b => b.boardId);
            const   boards =await getAllOrThrow(ctx.db,ids);
            return boards.map(board=>({
                ...board,
                isFavorite:true,
            }));

        }
        const title = args.search as string;
        let boards = [];

        if (title) {
            boards = await ctx.db
                .query("boards")
                .withSearchIndex("search_title", q =>
                    q
                        .search("title", title)
                        .eq("orgID", args.orgId)
                )
                .collect();
        } else {
            boards = await ctx.db
                .query("boards")
                .withIndex("by_org", (q) => q.eq("orgID", args.orgId))
                .order("desc")
                .collect();
        }

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
