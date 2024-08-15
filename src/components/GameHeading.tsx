import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

const GameHeading = () => {

  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <>
      <h1 className="text-4xl font-bold my-2 mb-6 max-lg:text-center lg:pl-4">{heading}</h1>
    </>
  )
}

export default GameHeading