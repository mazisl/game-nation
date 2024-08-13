import { GameQuery } from "@/App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {

  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <>
      <h1 className="text-2xl font-bold my-2 mb-6">{heading}</h1>
    </>
  )
}

export default GameHeading