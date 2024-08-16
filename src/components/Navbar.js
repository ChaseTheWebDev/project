import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";

import '../styles/Navbar.css';

export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);

const handleMenuClick =() => {
  setMenuVisibility(true);
  console.log(menuVisibility);
}

  return (
    <div className="navbar">
      <div className="container-1400">
        <div className="navbar-container">
          <div className='title-container'>
            <h1><NavLink to='/'>Utica</NavLink></h1>
          </div>
          <ul className="navbar-list">
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to='/our-team' className={({ isActive }) => isActive ? 'active' : ''}>Our Team</NavLink></li>
            <li><NavLink to='/press' className={({ isActive }) => isActive ? 'active' : ''}>Press</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
          <div className='menu-icon' onClick={handleMenuClick}><TbMenuDeep /></div>
        </div>
      </div>
      {menuVisibility}
    </div>
  );
}
