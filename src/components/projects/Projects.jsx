import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import './projects.css'
import { project1, project2, project3, working } from '../../assets/projects/index'

const Projects = () => {
  const projectContainerRef = useRef(null);

  const scrollProjects = (direction) => {
    const container = projectContainerRef.current;
    let scrollAmount = 460;

    if (window.matchMedia('(max-width: 600px)').matches) {
      scrollAmount = 250;
    } else {
      scrollAmount = 460;
    }

    if (direction === 'prev') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className='project-container' id='projects'>
      <div className="project-container_header">
        <h3>Checkout My Projects</h3>
        <p>--- Discover a collection of my recent projects, demonstrating my skills in ---<br />coding, design, and problem-solving</p>
      </div>

      <div className="wrapper">
        <button className='project-nextprev__btn' id='project-prev__btn' onClick={() => scrollProjects('prev')}>{'<'}</button>
        <div className="project-cont_card" ref={projectContainerRef}>
            <Link to={'/projects'} state={{ position: 200 }}>
              <div className="card2">
                <div className="project-cont_card__left">
                  <img src= {project1} alt='project1' />
                </div>
                <div className="project-cont_card__right">
                  <h3>Dungeon-mania </h3>
                  <h4>Project Backend | July 2023</h4>
                  <hr />
                  <div className="project-cont_btn-container">
                    <a href='https://github.com/kevinsus/Dungeon-mania/tree/main' target="_blank" rel="noopener noreferrer" className='project-cont_btn'>Read More</a>
                    {/* <button onClick={handleLiveDemoClick} className='project-cont_btn'>Live Demo</button> */}
                  </div>
                </div>
              </div>
            </Link>

            <Link to={'/projects'} state={{ position: 780 }}>
              <div className="card2">
                <div className="project-cont_card__left">
                  <img src= {project2} alt='project2' />
                </div>
                <div className="project-cont_card__right">
                  <h3>UNSW Memes</h3>
                  <h4>Project Backend | April 2023</h4>
                  <hr />
                  <div className="project-cont_btn-container">
                    <a href='https://github.com/kevinsus/UNSW-memes' target="_blank" rel="noopener noreferrer" className='project-cont_btn'>Read More</a>
                    {/* <button onClick={handleLiveDemoClick} className='project-cont_btn'>Live Demo</button> */}
                  </div>
                </div>
              </div>
            </Link>

            <Link to={'/projects'} state={{ position: 1350 }}>
              <div className="card2">
                <div className="project-cont_card__left">
                  <img src= {project3} alt='project3' />
                </div>
                <div className="project-cont_card__right">
                  <h3>Messanger</h3>
                  <h4>Project Backend | Nov 2023</h4>
                  <hr />
                  <div className="project-cont_btn-container">
                    <a href='https://github.com/kevinsus/UNSW-memes' target="_blank" rel="noopener noreferrer" className='project-cont_btn'>Read More</a>
                    {/* <button onClick={handleLiveDemoClick} className='project-cont_btn'>Live Demo</button> */}
                  </div>
                </div>
              </div>
            </Link>

            <div className="card2">
              <div className="project-cont_card__left">
                <img src= {working} alt='project3' />
              </div>
              <div className="project-cont_card__right">
                <h3>New Projects Coming Up!</h3>
                <h4>{'>'}</h4>
                <hr />
                <div className="project-cont_btn-container">
                  <Link to='/projects' state={{ position: 0 }} className='project-cont_btn'>Find out more</Link>
                </div>
              </div>
            </div>
        </div>
        <button className='project-nextprev__btn' id='project-next__btn' onClick={() => scrollProjects('next')}>{'>'}</button>
      </div>

      {/* <Link to='/projects' className="project-cont_card_button">
        <h1>More</h1>
        <button className='project-cont_btn__more'><FontAwesomeIcon icon={faChevronRight} size="lg" /></button>
      </Link> */}


    </div>
  )
}

export default Projects