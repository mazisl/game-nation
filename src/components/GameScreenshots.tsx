import useScreenshots from "@/hooks/useScreenshots";

interface GameScrProps {
  gameId: number;
}

const GameScreenshots = ({gameId}: GameScrProps) => {

  const {data, isLoading, error} = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="grid md:grid-cols-2 gap-2">
      {data?.results.map(file => (
        <img key={file.id} src={file.image} />
      ))}
    </div>
  )
}

export default GameScreenshots;