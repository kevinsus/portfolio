import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { AboutTab, HomeTab, ProjectsTab } from './pages/index'
import { Navbar, Footer } from './components/index'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeTab />} />
        <Route path='/portfolio' element={<HomeTab />} />
        <Route path='/about' element={<AboutTab />} />
        <Route path='/projects' element={<ProjectsTab />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App