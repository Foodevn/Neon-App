import {Canvas} from "@/app/board/[boadId]/_component/canvas";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
};
const BoardIdPage = ({params,}: BoardIdPageProps) => {
    return (
        <Canvas boardId={params.boardId}/>
    )
}

export default BoardIdPage;