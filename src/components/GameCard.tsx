import { Game } from "@/hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg w-64 h-80">
      <div
        className="h-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div className="h-2/5 p-4 bg-gray-800 text-white flex items-center justify-center">
        <span className="text-lg font-semibold">{game.name}</span>
      </div>
    </div>
  )
}

export default GameCard;