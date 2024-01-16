import React from 'react'
import './home.css'

import { About, Projects, Header } from '../../components'


const HomeTab = () => {
  return (
    <div className='Home'>
      <div className='gradient__bg'>
        <Header />
      </div>
      <About />
      <Projects />
    </div>
  )
}

export default HomeTab