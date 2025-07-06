"use client";

import {memo} from "react";

import {LayerType} from "@/types/canvas";
import {useStorage} from "@/liveblocks.config";
import {Rectangle} from "@/app/board/[boardId]/_component/rectangle";
import {Ellipse} from "@/app/board/[boardId]/_component/ellipse";
import {Text} from "@/app/board/[boardId]/_component/text";
import {Note} from "@/app/board/[boardId]/_component/note";


interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
}

export const LayerPreview = memo(({
                                      id,
                                      onLayerPointerDown,
                                      selectionColor,
                                  }: LayerPreviewProps) => {
    const layer = useStorage(
        (root) => root.layers.get(id));


    if (!layer) {
        return null;
    }

    switch (layer.type) {
        case LayerType.Note:
            return (
                <Note
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Text:
            return (
                <Text
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Ellipse:
            return (
                <Ellipse
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}

                />
            );
        case LayerType.Rectangle:
            return (
                <Rectangle
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            );
        default:
            // console.warn("unkown layer type")
            return null;
    }
})

LayerPreview.displayName = "LayerPreview";