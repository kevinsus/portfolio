import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

import './navbar.css'
import hamburger from '../../assets/hamLogo.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar-outer">
      <div className='navbar-links'>
        <RouterLink to='/' className='navbar-links_logo'>
          <h1><span>K</span> evin.S</h1>
        </RouterLink>
        <img src={hamburger} className='navbar-links_ham' alt='Menu' onClick={toggleVisibility} />
        <div className='navbar-links_containers'>
          <ul className={`navbar-links_primary ${isVisible ? 'visible' : ''}`}>
            <li><RouterLink to='/'>Home</RouterLink></li>
            <li><RouterLink to='/about'>About</RouterLink></li>
            <li><RouterLink to='/projects' state={{ position: 0 }}>Projects</RouterLink></li>
            <li><ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={10}>Contact</ScrollLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar