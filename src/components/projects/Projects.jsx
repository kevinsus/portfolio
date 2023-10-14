import React from 'react'
import './projects.css'

import project1 from '../../assets/Dungeon-mania.png'
import project2 from '../../assets/UNSW-Memes.png'

import project1Specs from './Dungeon-mania_specs.pdf'
import project2Specs from './UNSWMemes_specs.pdf'

const Projects = () => {
  return (
    <div className='project-container' id='projects'>
      <div className="project-container_header">
        <h3>Checkout My Projects</h3>
        <p>--- Discover a collection of my recent projects, demonstrating my skills in ---<br />coding, design, and problem-solving</p>
      </div>
      <div className="project-container_card">
        <div className="card">
          <div className="project-container_card__left1">
            <h3>Dungeon-mania | Project Backend </h3>
            <h4>(July 2023)</h4>
            <hr />
            <p>Dungeon-mania is a web application game in which a user can control a player.</p>
            <p>The aim of this game is to complete various goals within a series of dungeons to complete the game.</p>
            <div className="project-container_btn">
              <a href={project1Specs} target="_blank" rel="noopener noreferrer" className='project-container_btn__left'>More Info</a>
              <a href='https://github.com/kevinsus/Dungeon-mania/tree/main' target="_blank" rel="noopener noreferrer" className='project-container_btn__right'>Code</a>
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
            <h4>(April 2023)</h4>
            <hr />
            <p>Building the backend JavaScript server for a communication platform called UNSW Memes</p>
            <p>This tool allows the user to share, communicate, and collaborate virtually.</p>
            <div className="project-container_btn">
              <a href={project2Specs} target="_blank" rel="noopener noreferrer" className='project-container_btn__left'>More Info</a>
              <a href='https://github.com/kevinsus/UNSW-memes' target="_blank" rel="noopener noreferrer" className='project-container_btn__right'>Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects