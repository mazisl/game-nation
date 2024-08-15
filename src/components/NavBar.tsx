import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ToggleThemeBtn from './ToggleThemeBtn';

const NavBar = () => {
  return (
    <div className='flex items-center p-2.5'>
      <img className='h-14' src={logo} />
      <SearchInput />
      <ToggleThemeBtn />
    </div>
  )
}

export default NavBar;