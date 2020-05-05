import React from 'react';
import './Navbar.css'
import logo from './user-interface.jpg';
import menu from './menu.png';
import { NavbarItems } from './NavbarItems';

const Navbar = ({ onNavbarItemChange }) => {
  return (
    <div>
      <nav className="navbar">
        <img alt="logo" src={logo}/>
        <label>C Gui</label>
        <img id="menu" src={menu} alt="menu" />
        <ul>
          {
            NavbarItems.map((data, i) => {
              return <li key={i} ><a id={data.id} onClick={onNavbarItemChange} >{data.Name}</a></li>
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;