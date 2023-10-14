import React from 'react'
import './footer.css'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'

const Footer = () => {
  return (
    <div className="footer-container_outer" id='contact'>
      <div className="footer-container_left">
        <div className="footer-container_contact">
          <h3>Contact ME!</h3>
          <a href='mailto: 99kevin.wong99@gmail.com' target="_blank" rel="noopener noreferrer">Email ME</a> 
        </div>
        <hr />
        <div className="header-container_maintext">
          <h2>--- Don't be shy! Hit me up ---</h2>
          <p>Whether you're interested in my skills for potential collaborations or recruitment opportunities, please don't hesitate to get in touch. I look forward to connecting with you!</p>
        </div>
      </div>
      <div className="footer-container_right">
        <h4>Copyright &copy; 2023. All Rights Reserved.</h4>
        <div className='footer-container_right__logo'>
          <a href='https://www.linkedin.com/in/kevin-susanto-8b6a8323a/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin'/></a>
          <a href='https://github.com/kevinsus' target="_blank" rel="noopener noreferrer"><img src={github} alt='github'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer