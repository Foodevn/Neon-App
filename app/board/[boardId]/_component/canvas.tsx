"use client";
import {Info} from "@/app/board/[boardId]/_component/info";
import {Toolbar} from "@/app/board/[boardId]/_component/toolbar";
import {Participants} from "@/app/board/[boardId]/_component/participants";

import {useHistory,useCanUndo,useCanRedo } from "@/liveblocks.config";
import {CanvasMode, CanvasState} from "@/types/canvas";
import {useState} from "react";

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {
    // const info=useSelf(me=>me.info);

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    });

    const history=useHistory();
    const canUndo=useCanUndo();
    const canRedo=useCanRedo();

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">

            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canUndo}
                canUndo={canRedo}
                undo={history.undo}
                redo={history.redo}/>
        </main>
    )
}


