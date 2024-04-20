import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './style.scss'

const Home = () => {
  const navigate = useNavigate()
  const handleNavigateToContactMePage = () => {
    navigate('/contact')
  }

  const handleNavigateToAboutMePage = () => {
    navigate('/about')
  }
  const handleNavigateToPortfolioPage = () => {
    navigate('/portfolio')
  }
  const handleNavigateToResumePage = () => {
    navigate('/resume')
  }
  const handleNavigateToSkillsPage = () => {
    navigate('/skills')
  }

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          I'm Kumar Abhishek
          <br />
          SDET/QA Engineer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: 'translateY(550px)' }}
        end={{ transform: 'translatex(0px)' }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToAboutMePage}>About Me</button>
          <button onClick={handleNavigateToSkillsPage}> Skills </button>
          <button onClick={handleNavigateToResumePage}>Resume</button>
        </div>
      </Animate>
    </section>
  )
}

export default Home
