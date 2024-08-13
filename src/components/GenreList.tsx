import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

import { Button } from "./ui/button";

// import useData from "@/hooks/useData";
// import {Genre} from "@/hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreText: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenreText}: GenreListProps) => {

  // const {genres} = useGenres();
  // return (
  //   <ul>
  //     {genres.map((genre) => {
  //       return (
  //         <li key={genre.id}>{genre.name}</li>
  //       )
  //     })}
  //   </ul>
  // )

  // const {data} = useData<Genre>('/genres');
  const {data, isLoading, error} = useGenres();

  if (error) return null;
  
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Genres</h1>
      <ul>
        {isLoading && (
          skeletons.map(skeleton => (
            <li key={skeleton} className="py-[5px]"><GenreListSkeleton /></li>
          ))
        )}
        {data.map(genre => {
          const fontWeight = genre.id === selectedGenreText?.id ? 'font-bold' : 'font-normal';
          return (
            <li key={genre.id} className="flex py-[5px] items-center">
              <img src={getCroppedImageUrl(genre.image_background)} className="h-8 w-8 rounded-lg object-cover" />
              <Button className={`text-base ${fontWeight} whitespace-normal text-left`} variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GenreList;