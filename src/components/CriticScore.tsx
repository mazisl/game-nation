import { Badge } from "@/components/ui/badge"

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({score}: CriticScoreProps) => {

  const color = score > 75 ? 'bg-green-300' : score > 60 ? 'bg-yellow-300' : '';

  return (
    <Badge className={color}>{score}</Badge>
  )
}

export default CriticScore