import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({onSelectSortOrder}: SortSelectorProps) => {

  const sortOrders = [
    {value: 'relevance', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release Date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'}
  ]

  return ( 
    <Select onValueChange={(value) => {
      const newSortSelected = sortOrders.find(order => order.value === value);
      if (newSortSelected) {
        onSelectSortOrder(newSortSelected.value);
      }
      }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort selector" />
      </SelectTrigger>
      <SelectContent className="w-64 border-2">
        <SelectGroup>          
          {sortOrders.map(order => <SelectItem key={order.value} value={order.value}>{order.label}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>

  )
}

export default SortSelector;