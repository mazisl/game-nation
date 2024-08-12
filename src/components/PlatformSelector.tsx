import usePlatforms from "@/hooks/usePlatforms";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const PlatformSelector = () => {

  const {data, error} = usePlatforms();

  if (error) return null;

  return (    
    <Select>
      <SelectTrigger className="w-[180px] bg-gray-600">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent className="w-64 border-2">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {data.map(platform => <SelectItem key={platform.id} value={platform.name}>{platform.name}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default PlatformSelector;