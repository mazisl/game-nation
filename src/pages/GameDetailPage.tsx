import useGame from "@/hooks/useGame";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom"
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import GameScreenshots from "@/components/GameScreenshots";

//by appending a const with ! we tell ts that this will never be null
const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <FaSpinner className="w-10 h-10 animate-spin" />
  if (error || !game) throw error;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <h1 className="text-4xl font-bold mb-3">{game.name}</h1>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </div>
        <div>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </div>
      </div>
    </>
  )
}

export default GameDetailPage