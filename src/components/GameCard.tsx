import { Game } from "@/entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <>
      <div
        className="h-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${getCroppedImageUrl(game.background_image)})`}}
      ></div>
      <div className="h-2/5 p-4 bg-gray-800 text-white">
        {/* {game.parent_platforms.map(({platform}) => <p key={platform.id}>{platform.name}</p>)} */}
        <div className="flex justify-between mb-4">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </div>
        <span className="text-lg font-semibold">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </span>
      </div>
    </>
  )
}

export default GameCard;