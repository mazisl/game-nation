import usePlatforms, {Platform} from "@/hooks/usePlatforms";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import usePlatform from "@/hooks/usePlatform";
// import { Platform } from "@/hooks/useGames";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: PlatformSelectorProps) => {

  const {data, error} = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (    
    <Select 
        value={selectedPlatform?.name} 
        onValueChange={(value) => {
        const newPlatformSelected = data?.results.find(platform => platform.name === value);
        if (newPlatformSelected) {
          onSelectPlatform(newPlatformSelected);
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