import {Room} from "@components/room";
import {Canvas} from "@/app/board/[boardId]/_component/canvas";
import {Loading} from "@/app/board/[boardId]/_component/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
}

const BoardIdPage = ({params}: BoardIdPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading/>}>

            <Canvas boardId={params.boardId}/>
        </Room>
    )
}

export default BoardIdPage;