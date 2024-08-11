import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

//purpose of this component is to remove the duplicated classnames between the game card and skeleton
const GameCardContainer = ({children}: {children: ReactNode}) => {
  return (
    <Card className="border rounded-lg overflow-hidden shadow-lg w-80 h-80 flex flex-col">
      {children}
    </Card>
  )
}

export default GameCardContainer;