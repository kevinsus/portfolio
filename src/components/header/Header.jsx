import React from 'react'
import './header.css'
import {Link} from 'react-scroll'

import hero from '../../assets/logo1.jpg'
import resume from './Resume2023.pdf'

const Header = () => {
  return (
    <div className="header-outer" id='hero'>
      <div className='header-container'>
        <div className='header-container_left'>
          <h4>--- Coding my dreams ---</h4>
          <h1>Hi! I'm <span>Kevin</span> Susanto</h1>
          <h3>Software Developer</h3>
          <hr />
          <p>Welcome to my personal portfolio.</p>
          <p>I am a passionate developer based in Sydney, Australia.</p>
          <div className='header-container_btn'>
            <a href={resume} target="_blank" rel="noopener noreferrer" className='header-container_btn__left'>Resume</a>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={10} className='header-container_btn__right'>Hire Me</Link>
          </div>
        </div>
        <div className='header-container_right'>
          <img src={hero} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Header