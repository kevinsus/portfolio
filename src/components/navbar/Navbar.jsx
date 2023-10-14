import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import hamburger from '../../assets/hamLogo.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar-outer">
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <h1><span>K</span> evin.S</h1>
        </div>
        <img src={hamburger} className='navbar-links_ham' alt='Menu' onClick={toggleVisibility} />
        <div className='navbar-links_containers'>
          <ul className={`navbar-links_primary ${isVisible ? 'visible' : ''}`}>
            <li><Link to="hero" spy={true} smooth={true} offset={-130} duration={10}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-190} duration={10}>About</Link></li>
            <li><Link to="projects" spy={true} smooth={true} offset={-150} duration={10}>Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={10}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar