import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import { useState } from 'react';
import './Navigation.css'
import NavLink from 'react-bootstrap/esm/NavLink';

export default function Navigation() {

    const [openOffcanvas, setOpenOffcanvas] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setOpenOffcanvas(!openOffcanvas);
    }

  return (
    <nav>
      <div className='d-flex'>
        <img src={logo} alt='Space Tourism logo' />
        <span className='line'></span>
      </div>
      <div className={openOffcanvas? 'navStyles openOffcanvas' : 'navStyles'}>
        <NavLink className={( { isActive }) => isActive ? 'selected' : null} to='/'><span>00</span>Home</NavLink>
        <NavLink className={( { isActive }) => isActive ? 'selected' : null} to='/Destination'><span>01</span>Destination</NavLink>
        <NavLink className={( { isActive }) => isActive ? 'selected' : null} to='/Crew'><span>02</span>Crew</NavLink>
        <NavLink className={( { isActive }) => isActive ? 'selected' : null} to='/Technology'><span>03</span>Technology</NavLink>
      </div>
      <div>
        <button onClick={(e) => handleClick(e)} className='offcanvasButton'>
            {openOffcanvas? <img src={hamburger} alt='open menu'/>: <img src={closeIcon} alt='close menu'/>}
        </button>
      </div>
    </nav>
  )
}
