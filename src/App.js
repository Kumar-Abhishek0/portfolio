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

  const renderParticleJsInHomePage =
    location.pathname === '/' || location.pathname === '/portfolio'

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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
