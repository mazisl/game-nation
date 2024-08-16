import useGame from "@/hooks/useGame";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom"
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";

//by appending a const with ! we tell ts that this will never be null
const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <FaSpinner className="w-10 h-10 animate-spin" />
  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-4xl font-bold">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  )
}

export default GameDetailPage