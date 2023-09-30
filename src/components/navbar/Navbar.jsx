import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='navbar-links'>
      <div className='navbar-links_logo'>
        <h3>Kevin.dev</h3>
      </div>
      <div className='navbar-links_containers'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#possibility'>About</a></li>
          <li><a href='#features'>Projects</a></li>
          <li><a href='#blog'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar