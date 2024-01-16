import React from 'react'
import './about.css'
import desk from '../../assets/desk.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutMe-section' id='about'>
      <h2 className='aboutMe-header'>About ME</h2>
      <div className='aboutMe-section_skills'>
        <div className="card1">
          <div className="desk-pic">
            <img src={desk} alt="desk"/>
          </div>
        </div>
        <Link to='/About' className="card1">
          <h4>A dedicated Front-end Developer based in Sydney, Australia 📍</h4>
          <hr />
          <p className='p1'>As a passionate and result-oriented student, I'm eager to contribute skills and passion in a part-time or internship role within the software industry. I'm seeking the role to develop cutting-edge solutions and foster technological advancement in the software industry. </p>
          <p className='p1'>I am excited to bring a fresh perspective to the world, I'm ready to make a meaningful impact with my abilities. </p>
        </Link>
      </div>
    </div>
  )
}

export default About