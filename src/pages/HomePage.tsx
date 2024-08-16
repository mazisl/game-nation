import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
// import NavBar from "@/components/NavBar"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"


const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]">
        {/* we remove the navbar bcoz it's already imported in layout component */}
        {/* <div className="row-span-1 col-span-1 lg:col-span-2">
          <NavBar  />
        </div> */}
        <div className="hidden lg:block lg:row-span-1 lg:col-span-1 lg:pt-4 px-4 w-[200px]">
          <GenreList />
        </div>
        <div className="row-span-1 col-span-1">
          <GameHeading />
          <div className="flex max-lg:justify-center lg:pl-4">
            <div className="mr-6">
              <PlatformSelector />
            </div>
            <SortSelector />
          </div>
          <GameGrid />
        </div>
      </div>
    </>
  )
}

export default HomePage