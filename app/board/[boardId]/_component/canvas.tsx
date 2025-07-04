"use client";
import {Info} from "@/app/board/[boardId]/_component/info";
import {Toolbar} from "@/app/board/[boardId]/_component/toolbar";
import {Participants} from "@/app/board/[boardId]/_component/participants";

import {useSelf} from "@/liveblocks.config";


interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {
    const info=useSelf(me=>me.info);
    console.log(info);
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">

            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}


