import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

// import useData from "@/hooks/useData";
// import {Genre} from "@/hooks/useGenres";

const GenreList = () => {

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
    <ul>
      {isLoading && (
        skeletons.map(skeleton => (
          <li key={skeleton} className="py-[5px]"><GenreListSkeleton /></li>
        ))
      )}
      {data.map(genre => (
        <li key={genre.id} className="flex py-[5px]">
          <img src={getCroppedImageUrl(genre.image_background)} className="h-8 w-8 rounded-lg mr-2" />
          <p className="text-lg">{genre.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default GenreList;