import React from 'react'
import './about.css'


const About = () => {
  return (
    <div className='aboutMe-section' id='about'>
      <h2 className='aboutMe-header'>About ME</h2>
      <div className='aboutMe-section_skills'>
        <div className="card1">
          <h4>Career Objective</h4>
          <hr />
          <p className='p1'>Committed to continuous learning and innovation, I aim to join a dynamic team where I can apply my coding proficiency and collaborative mindset to develop cutting-edge solutions and foster technological advancement in the industry.</p>
        </div>
        <div className="card1">
          <h4>Technical Skills</h4>
          <hr />
          <div className="aboutMe-section_technical">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>Javascript</li>
              <li>Typescript</li>
            </ul> 
            <ul>
              <li>REACT JS</li>
              <li>SQL</li>
              <li>Python</li>
              <li>MIPS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About