import usePlatforms from "@/hooks/usePlatforms";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
// import { Platform } from "@/hooks/useGames";

const PlatformSelector = () => {

  const {data, error} = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (    
    <Select 
        value={selectedPlatform?.name} 
        onValueChange={(value) => {
        const newPlatformSelected = data?.results.find(platform => platform.name === value);
        if (newPlatformSelected) {
          setSelectedPlatformId(newPlatformSelected.id);
        }
      }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent className="w-64 border-2">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {data?.results.map(platform => (
            <SelectItem key={platform.id} value={platform.name}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default PlatformSelector;