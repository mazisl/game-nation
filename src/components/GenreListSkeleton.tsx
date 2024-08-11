import { Skeleton } from "./ui/skeleton"

const GenreListSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-lg" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
  )
}

export default GenreListSkeleton;