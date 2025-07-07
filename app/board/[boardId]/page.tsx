import {Room} from "@components/room";
import {Canvas} from "@/app/board/[boardId]/_component/canvas";
import {Loading} from "@/app/board/[boardId]/_component/loading";

interface BoardIdPageProps {
    params: Promise<{ boardId: string }>; // Type params như Promise
}

export default async function BoardIdPage({params}: BoardIdPageProps) {
    const resolvedParams = await params; // Await params
    const {boardId} = resolvedParams;

    return (
        <Room roomId={boardId} fallback={<Loading/>}>
            <Canvas boardId={boardId}/>
        </Room>
    );
}