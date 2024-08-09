import logo from '../assets/logo.webp';
import { ToggleDarkLightBtn } from './ui/switch';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-2.5'>
      <img className='h-14' src={logo} />
      <ToggleDarkLightBtn label="Dark Mode" />
    </div>
  )
}

export default NavBar