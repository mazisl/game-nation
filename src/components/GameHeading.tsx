import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {

  const {data: genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <>
      <h1 className="text-4xl font-bold my-2 mb-6 max-lg:text-center lg:pl-4">{heading}</h1>
    </>
  )
}

export default GameHeading