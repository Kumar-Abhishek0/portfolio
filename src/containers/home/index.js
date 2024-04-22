import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './style.scss'
import About from '../about' // Import the 'About' component
import Skills from '../skills'
import Resume from '../resume'
import kresume from '../home/resume.pdf'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateToAboutMePage = () => {
    navigate('/about')
  }
  const handleNavigateToResumePage = () => {
    navigate('/resume')
  }
  const handleNavigateToSkillsPage = () => {
    navigate('/skills')
  }

  return (
    <div>
      <section id="home" className="home">
        <div className="home__text-wrapper">
          <h1 style={{ paddingTop: '200px' }}>
            I'm Kumar Abhishek
            <br />
            SDET/QA Engineer
          </h1>
        </div>
        <Animate
          play
          duration={1}
          delay={1}
          start={{ transform: 'translateY(550px)' }}
          end={{ transform: 'translatex(0px)' }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateToAboutMePage}>About Me</button>
            <button onClick={handleNavigateToSkillsPage}> My Skills </button>
            <button onClick={handleNavigateToResumePage}>My Resume</button>
            <a href={kresume} download="kumar-resume.pdf">
              <button>Download Resume</button>
            </a>
          </div>
        </Animate>
      </section>

      <div style={{ paddingTop: '200px' }}>
        <About />
      </div>

      <div style={{ paddingTop: '100px' }}>
        <Skills />
      </div>

      <div style={{ paddingTop: '150px' }}>
        <Resume />
      </div>
    </div>
  )
}

export default Home
