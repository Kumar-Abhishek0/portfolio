/*import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Particles from 'react-tsparticles'
//import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'
//import { loadSlim } from '@tsparticles/slim'
import About from './containers/about'
import Home from './containers/home'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Navbar from './components/navBar'
import particles from './utils.js/particles'

function App() {
  const handleInit = async (main) => {
    await loadFull(main)
  }
  return (
    <div className="App">
     
      <Particles id="particles" options={particles} init={handleInit} />

     
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
*/
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Navbar from './components/navBar'
import particles from './utils.js/particles'

function App() {
  const location = useLocation()
  console.log(location)

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === '/'

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
