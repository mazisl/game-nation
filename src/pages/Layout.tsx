import NavBar from '@/components/NavBar'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar/>
      <div className='p-5 pt-0'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout