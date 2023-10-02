import React from 'react'
import './header.css'
import hero from '../../assets/logo.jpg'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-container_left'>
        <h1>Welcome To My Personal <span>Portfolio</span></h1>
        <h3>Software Developer</h3>
        <hr />
        <p>Hi, I'm Kevin Susanto. A passionate student based in Sydney, Australia</p>
        <p>I aim to join a dynamic team where I can apply my coding proficiency and collaborative.</p>
        <div className='header-container_btn'>
          <a href='#Me'>Resume</a>
          <a href='#Me'>Hire Me</a>
        </div>
      </div>
      <div className='header-container_right'>
        <img src={hero} alt='logo'/>
      </div>
    </div>
  )
}

export default Header