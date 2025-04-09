"use client";

import { query } from "@/convex/_generated/server";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";

interface BoardListProps {
  orgId?: string;
  query?: {
    search?: string;
    favorites?: string;
  };
}

export const BoradList = ({ orgId, query }: BoardListProps) => {
  const data = []; // todo: Change to API call

  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favorites) {
    return <EmptyFavorites />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {JSON.stringify(query)}
      <p>Board List!</p>
    </div>
  );
};
