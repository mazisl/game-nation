import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import ToggleThemeBtn from './ToggleThemeBtn';

const NavBar = () => {
  return (
    <>
      <div className='hidden xs:flex items-center p-2.5 lg:mb-8'>
        <Link to='/'>
          <img className='h-14 w-14 object-cover' src={logo} />
        </Link>
        <SearchInput />
        <ToggleThemeBtn />
      </div>

      <div className='p-2.5 xs:hidden lg:mb-8'>
        <div className='flex items-center justify-between pr-2 mb-2'>
          <Link to='/'>
            <img className='h-14 w-14 object-cover' src={logo} />
          </Link>
          <ToggleThemeBtn />
        </div>

        <div className='mr-8'>
          <SearchInput />
        </div>
      </div>
    </>
    
  )
}

export default NavBar;