"use client";
import {memo} from "react";

import {useOthersConnectionIds} from "@/liveblocks.config";
import {Cursor} from "@/app/board/[boardId]/_component/cursor";

const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
            {ids.map((connectionId) => (
                <Cursor
                    key={connectionId}
                    connectionId={connectionId}
                />
            ))}
        </>
    );
};

export const CursorsPresence = memo(() => {
    return (
        <>
            {/*TODO: draft pencil*/}
            <Cursors/>
        </>
    );
});

CursorsPresence.displayName = "CursorsPresence";