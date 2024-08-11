import useGenres from "@/hooks/useGenres";

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
  const {data} = useGenres();

  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList;