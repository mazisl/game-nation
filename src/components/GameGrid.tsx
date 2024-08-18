import useGames from "@/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import { Button } from "./ui/button";
// import { Progress } from "./ui/progress";
// import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  
  const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];
  
  if (error) return <p>{error.message}</p>;

  // const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {/* <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Progress value={45} />}> */}
        <div className="flex justify-center lg:justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {isLoading && skeletons.map((skeleton => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            )))}
            {/* {data?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))} */}
            {/* infinite queries */}
            {data?.pages.map((page, index) => 
              <React.Fragment key={index}>
                {page.results.map(game => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>)}
          </div>
        </div>
      {/* </InfiniteScroll> */}
      {hasNextPage && <Button onClick={() => fetchNextPage()} className="my-5 ml-4">{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </>
    
  )
}

export default GameGrid;