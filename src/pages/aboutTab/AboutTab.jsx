import React from 'react'
import './aboutTab.css'
import { desk } from '../../assets/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faServer, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faHtml5, faCss3Alt, faJava, faPython, faNode } from '@fortawesome/free-brands-svg-icons'

const AboutTab = () => {
  return (
    <div className='aboutMe-section' id='aboutTab'>
      {/* <h2 className='aboutMe-header'>About ME</h2> */}

      {/* <div className="aboutMe-section2">
        <div className="card1 card1_me">
          <h4>More About ME 👦</h4>
          <br />
          <p className='p1'>Growing up in Jakarta, Indonesia, life was a blend of vibrant chaos and laid-back joy. Basketball is my hobby and like a normal 18 year old boy, I love to play PC game. At a normal day, I prefer to stay on bed 😴</p>
        </div>
      </div> */}

      <div className='aboutMe-section_skills'>
        <div className="card1">
          <div className="desk-pic">
            <img src={desk} alt="desk"/>
          </div>
        </div>
        <div className="card1">
          <h4>A dedicated Front-end Developer based in Sydney, Australia 📍</h4>
          <hr />
          <p className='p1'>As a passionate and result-oriented student, I'm eager to contribute skills and passion in a part-time or internship role within the software industry. I'm seeking the role to develop cutting-edge solutions and foster technological advancement in the software industry. </p>
          <p className='p1'>I am excited to bring a fresh perspective to the world, I'm ready to make a meaningful impact with my abilities. </p>
        </div>
      </div>
      <div className="aboutMe-section2">
        <div className="card1">
          <h4>My Education 📖</h4>
          <br />
          <p className='p1'>Embarking on my sophomore year as a computer science major at the University of New South Wales, I am enthusiastic about translating my academic prowess into tangible and professional accomplishments.</p>
          {/* <p className='p1'>Demonstrating a commitment to excellence, I have consistently achieved a high Weighted Average Mark, distinguishing myself in key programming courses such as Data Structures and Algorithms, Object-Oriented Programming, Database Systems, and Computer Networks and Applications.</p> */}
          {/* <p className='p1'>My university journey has not only fortified my proficiency in multiple programming languages but has also finely tuned my problem-solving acumen. Eager to embrace new challenges and apply my skills in real-world scenarios, I am poised to contribute meaningfully to the dynamic field of computer science.</p> */}
        </div>

        <div className="card1 card_logo-container">
          <h4>Technical Skills 🤹</h4>
          <p className='p1'>Listed below is some of my technical skills I have acquired for the past few years. Please refer my resume to see the complete skill set.</p>
          <br />
          <div className="card_logo-wrapper">
            <div className="card_logo">
              <FontAwesomeIcon icon={faReact} className='card_logo-icon'/>
              <FontAwesomeIcon icon={faJava} className='card_logo-icon'/>
            </div>
            <div className="card_logo">
              <FontAwesomeIcon icon={faHtml5} className='card_logo-icon'/>
              <FontAwesomeIcon icon={faCss3Alt} className='card_logo-icon'/>
            </div>
            <div className="card_logo">
              <FontAwesomeIcon icon={faJs} className='card_logo-icon'/>
              <FontAwesomeIcon icon={faDatabase} className='card_logo-icon'/>
            </div>
            <div className="card_logo">
              <FontAwesomeIcon icon={faPython} className='card_logo-icon'/>
              <FontAwesomeIcon icon={faServer} className='card_logo-icon'/>
            </div>
            <div className="card_logo">
              <FontAwesomeIcon icon={faNode} className='card_logo-icon'/>
              <FontAwesomeIcon icon={faCloudArrowUp} className='card_logo-icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTab