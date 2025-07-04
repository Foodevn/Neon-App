"use client";
import {Info} from "@/app/board/[boardId]/_component/info";
import {Toolbar} from "@/app/board/[boardId]/_component/toolbar";
import {Participants} from "@/app/board/[boardId]/_component/participants";

import {useCanRedo, useCanUndo, useHistory, useMutation} from "@/liveblocks.config";
import {Camera, CanvasMode, CanvasState} from "@/types/canvas";
import {useCallback, useState} from "react";
import {CursorsPresence} from "@/app/board/[boardId]/_component/cursors-presence";
import {pointerEventToCanvasPoint} from "@/lib/utils";

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {
    // const info=useSelf(me=>me.info);

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    });
    const [camera, setCamera] = useState<Camera>({x: 0, y: 0});

    const history=useHistory();
    const canUndo=useCanUndo();
    const canRedo=useCanRedo();

    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    }, []);

    const onPointerMove = useMutation(
        ({setMyPresence}, e: React.PointerEvent) => {
            e.preventDefault();

            const current = pointerEventToCanvasPoint(e, camera);
            setMyPresence({cursor: current});
        }, []
    );
    const onPointerLeave = useMutation(
        ({setMyPresence}) => {
            setMyPresence({cursor: null});
        },
        [],
    );
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

            <svg
                className={"h-[100vh] w-[100vw]"}
                onWheel={onWheel}
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
            >
                <g>
                    <CursorsPresence/>
                </g>
            </svg>
        </main>
    )
}


