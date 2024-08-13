import { GameQuery } from "@/App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {

  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <>
      <h1 className="text-4xl font-bold my-2 mb-6 max-lg:text-center lg:pl-4">{heading}</h1>
    </>
  )
}

export default GameHeading