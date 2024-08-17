import { useRef } from "react";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';
import useGameQueryStore from "@/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {

  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form className="mx-4"
      onSubmit={(e) => {
      e.preventDefault();
      if (ref.current) {
        setSearchText(ref.current.value);
        navigate('/');
      } 
    }}>
      <div className="relative flex items-center ">
        <Search 
          className="absolute left-3" 
          size={20} 
        />
        <Input 
          ref={ref}
          type="search" 
          placeholder="Search games..." 
          className="pl-10 border-[3px] rounded-3xl"
        />
      </div>
    </form>
  )
}

export default SearchInput;