import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar(props) {

  const activeStyle = {
    textShadow: "0px 0px 1px var(--primary-dark)",
    transition: 'all 200ms ease-in-out',
    backgroundSize: '100% 100%',
	  cursor: 'pointer',
  }
  return (
    <div className='Navbar'>
      <NavLink className='NavLink' style={({ isActive }) => isActive ? activeStyle : undefined } to='/'>Home</NavLink>
      <NavLink className='NavLink' style={({ isActive }) => isActive ? activeStyle : undefined } to='/Projects'>Projects</NavLink>
      <NavLink className='NavLink' style={({ isActive }) => isActive ? activeStyle : undefined } to='/Education'>Education</NavLink>
      <NavLink className='NavLink' style={({ isActive }) => isActive ? activeStyle : undefined } to='/Experience'>Experience</NavLink>
    </div>
  );
}

export default Navbar;