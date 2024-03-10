import './Layout.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar1 from '../../Components/Navbar1'

function Layout() {
  const location = useLocation();
  console.log(location);
  const routeToBackground = {
    '/': 'home',
    '/Destination': 'destination',
    '/Crew': 'crew',
    '/Technology': 'technology',
  };

  const pageBackground = routeToBackground[location.pathname] || '';

  return (
    <div className={pageBackground}>
      <header>
        <Navbar1 />
      </header>
      <Outlet />
    </div>
  )
}
export default Layout
