import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ToggleThemeBtn from './ToggleThemeBtn';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: SearchInputProps) => {
  return (
    <div className='flex items-center p-2.5'>
      <img className='h-14' src={logo} />
      <SearchInput onSearch={onSearch} />
      <ToggleThemeBtn />
    </div>
  )
}

export default NavBar;