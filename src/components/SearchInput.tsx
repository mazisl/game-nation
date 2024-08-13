import { useRef } from "react";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <div className="relative flex items-center">
        <Search 
          className="absolute left-3 text-gray-400" 
          size={20} 
        />
        <Input 
          ref={ref}
          type="search" 
          placeholder="Search games..." 
          className="pl-10 border-2 rounded-3xl bg-gray-800"
        />
      </div>
    </form>
  )
}

export default SearchInput;