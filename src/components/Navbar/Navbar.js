import React from 'react';
import './Navbar.css'
import logo from './user-interface.jpg';
import menu from './menu.png';
import { NavbarItems } from './NavbarItems';
import close from './close.png';

const Navbar = ({ onNavbarItemChange }) => {
  return (
    <div>
      <nav className="navbar">
        <img alt="logo" src={logo}/>
        <label>C Gui</label>
        <ul>
          {
            NavbarItems.map((data, i) => {
              return <li key={i} ><a id={data.id} onClick={onNavbarItemChange} >{data.Name}</a></li>
            })
          }
        </ul>
        <div className="responsive-navbar">
          <img onClick={() => {
            document.getElementsByClassName("popup")[0].style.visibility = "visible";
            const menubutton = document.getElementById("menu");
            const closebutton = document.getElementById("close");
            menubutton.style.opacity = "0"
            menubutton.style.zIndex = "-1"

            closebutton.style.opacity = "1"
            closebutton.style.zIndex = "1"
            closebutton.style.transform = "rotate(0deg)"
          }} id="menu" src={menu} alt="menu" />

          <img onClick={() => {
            document.getElementsByClassName("popup")[0].style.visibility = "hidden";
            const menubutton = document.getElementById("menu");
            const closebutton = document.getElementById("close");
            menubutton.style.opacity = "1"
            menubutton.style.zIndex = "1"
            
            closebutton.style.opacity = "0"
            closebutton.style.zIndex = "-1"
            closebutton.style.transform = "rotate(45deg)"
          }} id="close" src={close} alt="close" />
        </div>
        <div className="popup">
          <div className="popup-content">
            {
              NavbarItems.map((data, i) => {
                return <label onClick={(event) => {
                  onNavbarItemChange(event)
                  document.getElementsByClassName("popup")[0].style.visibility = "hidden";
                  const menubutton = document.getElementById("menu");
                  const closebutton = document.getElementById("close");
                  menubutton.style.opacity = "1"
                  menubutton.style.zIndex = "1"
                  
                  closebutton.style.opacity = "0"
                  closebutton.style.zIndex = "-1"
                  closebutton.style.transform = "rotate(45deg)"
                }} key={i}>{data.Name}</label>
              })
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;