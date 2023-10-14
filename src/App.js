import React from 'react'
import { About, Navbar, Projects, Footer, Header } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App