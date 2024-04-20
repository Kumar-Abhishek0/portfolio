import React from 'react'
import { useNavigate } from 'react-router-dom'
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
      <div className="home__contact-me">
        <button onClick={handleNavigateToAboutMePage}>About Me</button>
        <button onClick={handleNavigateToContactMePage}>Contact Me</button>
        <button onClick={handleNavigateToPortfolioPage}>Portfolio</button>
        <button onClick={handleNavigateToResumePage}>Resume</button>
        <button onClick={handleNavigateToSkillsPage}> Skills </button>
      </div>
    </section>
  )
}

export default Home
