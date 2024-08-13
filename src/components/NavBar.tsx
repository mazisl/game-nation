import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import { ToggleDarkLightBtn } from './ui/switch';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: SearchInputProps) => {
  return (
    <div className='flex items-center p-2.5'>
      <img className='h-14' src={logo} />
      <SearchInput onSearch={onSearch} />
      <ToggleDarkLightBtn label="Dark Mode" />
    </div>
  )
}

export default NavBar