"use client";
import {Info} from "@/app/board/[boardId]/_component/info";
import {Toolbar} from "@/app/board/[boardId]/_component/toolbar";
import {Participants} from "@/app/board/[boardId]/_component/participants";

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">

            <Info/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}


