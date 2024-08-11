import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg w-80 h-80">
      <div
        className="h-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div className="h-2/5 p-4 bg-gray-800 text-white">
        <span className="text-lg font-semibold">{game.name}</span>
        {/* {game.parent_platforms.map(({platform}) => <p key={platform.id}>{platform.name}</p>)} */}
        <div className="flex justify-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  )
}

export default GameCard;