import { Skeleton } from "@/components/ui/skeleton"

export function GameCardSkeleton() {
  return (    
    <>
      <div className="bg-gray-400 h-3/5"></div>
      <div className="pt-5 space-y-2 flex-shrink-0">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </>
  )
}

export default GameCardSkeleton;