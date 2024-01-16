import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './projectsTab.css'
import { project1, project2, project3 } from '../../assets/projects/index'
import { Error } from '../../components/index'
import messengerReport from '../../assets/projects_report/messangerReport.pdf'

const ProjectsTab = () => {
  // Error Handle
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleOpenErrorPopup = () => {
    setShowErrorPopup(true);
  };

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  // Function to reset the error state
  const resetErrorState = () => {
    setShowErrorPopup(false);
  };

  // Scrolling
  const location = useLocation();
  
  // Access the state from location.state
  const state = location.state.position; 
  const position = state;

  useEffect(() => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }, [position]);

  return (
    <div className='project-container' id='projectsTab'>
      <div className="project-container_header">
        <h3>Checkout All My Projects</h3>
        <p>--- Discover a collection of my recent projects, demonstrating my skills in ---<br />coding, design, and problem-solving</p>
      </div>
      <div className="project-container_card">
        
        <Error handleErrorPopup={showErrorPopup} handleCloseErrorPopup={handleCloseErrorPopup} resetErrorState={resetErrorState} />

        <div className="card">
          <div className="project-container_card__left1">
            <h3>Dungeon-mania | Project Backend </h3>
            <h4>July 2023 ~ Java</h4>
            <hr />
            <p>Dungeon-mania is a web application game in which a user can control a player.</p>
            <p>The aim of this game is to complete various goals within a series of dungeons to complete the game.</p>
            <div className="project-container_btn-container">
              <a href='https://github.com/kevinsus/Dungeon-mania' target="_blank" rel="noopener noreferrer" className='project-container_btn'>Code</a>
              <button onClick={handleOpenErrorPopup} className='project-container_btn'>Live Demo</button>
              <Link to='/' className='project-container_btn'>Back</Link>
            </div>
          </div>
          <div className="project-container_card__right1">
            <img src= {project1} alt='project1' />
          </div>
        </div>

        <div className="card">
          <div className="project-container_card__right1">
            <img src= {project2} alt='project2' />
          </div>
          <div className="project-container_card__left1">
            <h3>UNSW Memes | Project Backend </h3>
            <h4>April 2023 ~ TypeScript</h4>
            <hr />
            <p>Building the backend JavaScript server for a communication platform called UNSW Memes</p>
            <p>This tool allows the user to share, communicate, and collaborate virtually.</p>
            <div className="project-container_btn-container">
              <a href='https://github.com/kevinsus/UNSW-memes' target="_blank" rel="noopener noreferrer" className='project-container_btn'>Code</a>
              <button onClick={handleOpenErrorPopup} className='project-container_btn'>Live Demo</button>
              <Link to='/' className='project-container_btn'>Back</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="project-container_card__left1">
            <h3>Messanger | Project Backend </h3>
            <h4>July 2023 ~ Python</h4>
            <hr />
            <p>This project is an implementation of messanging and video talk application. The application is based on a client-server and P2P model and uses custom application protocols based on TCP and UDP.</p>
            <p>My application support a range of functions including authentication, private chat, build the group chat, and uploading video streams.</p>
            <div className="project-container_btn-container">
              <a href='https://github.com/kevinsus/messenger' target="_blank" rel="noopener noreferrer" className='project-container_btn'>Code</a>
              <a href={messengerReport} target="_blank" rel="noopener noreferrer" className='project-container_btn'>Report</a>
              <Link to='/' className='project-container_btn'>Back</Link>            
            </div>
          </div>
          <div className="project-container_card__right1">
            <img src= {project3} alt='project1' />
          </div>
        </div>

        {/* <Link to='/' className="project-cont_card_button">
          <h1>Back</h1>
          <button className='project-cont_btn__more'><FontAwesomeIcon icon={faChevronRight} size="lg" /></button>
        </Link> */}

      </div>
    </div>
  )
}

export default ProjectsTab