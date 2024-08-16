import useGame from "@/hooks/useGame";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom"

//by appending a const with ! we tell ts that this will never be null
const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <FaSpinner />
  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-4xl font-bold">{game.name}</h1>
      <p>{game.description_raw}</p>
    </>
  )
}

export default GameDetailPage